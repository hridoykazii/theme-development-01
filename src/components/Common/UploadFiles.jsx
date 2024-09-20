import { useTheme } from "@emotion/react";
import AddPhotoIcon from "@mui/icons-material/AddPhotoAlternate";
import CloseIcon from "@mui/icons-material/Close";
import UploadDoneIcon from "@mui/icons-material/FileDownloadDone";
import InsertFile from "@mui/icons-material/InsertDriveFile";
import { Box, Typography } from "@mui/material";
import LinearProgress from "@mui/material/LinearProgress";
import { useState } from "react";
import Dropzone from "react-dropzone";

const UploadFiles = () => {
  const theme = useTheme();
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [progressInfos, setProgressInfos] = useState([]);
  const [message, setMessage] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [fileInfos, setFileInfos] = useState([]);

  const uploadFiles = () => {
    const files = selectedFiles;
    let _progressInfos = files.map((file) => ({
      percentage: 0,
      fileName: file.name,
    }));

    setProgressInfos(_progressInfos);
    setMessage([]);
    incrementProgress(_progressInfos);
  };

  const onDrop = (files) => {
    if (files.length > 0) {
      setSelectedFiles(files);
    }
  };

  const incrementProgress = (progressInfos) => {
    progressInfos.forEach((progressInfo, index) => {
      for (let i = 1; i <= 10; i++) {
        setTimeout(() => {
          setProgressInfos((prevProgressInfos) => {
            const newProgressInfos = [...prevProgressInfos];
            newProgressInfos[index] = {
              ...newProgressInfos[index],
              percentage: i * 10,
            };
            return newProgressInfos;
          });
        }, i * 500);
      }
    });
  };

  return (
    <Box>
      <Box>
        <Dropzone onDrop={onDrop}>
          {({ getRootProps, getInputProps }) => (
            <section>
              <Box
                {...getRootProps({ className: "dropzone" })}
                sx={{
                  width: 500,
                  height: 200,
                  margin: "50px auto",
                  marginBottom: "20px",
                  cursor: "pointer",
                  border: `2px dashed ${theme.palette.primary.border2}`,
                  borderRadius: "10px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "relative",
                  overflow: "hidden",
                  backgroundColor: `${theme.palette.background.inputBg}`,
                }}
              >
                <input {...getInputProps()} />
                {selectedFiles && selectedFiles.length ? (
                  <Box className="selected-file">
                    {selectedFiles.length > 3
                      ? `${selectedFiles.length} files`
                      : selectedFiles.map((file) => file.name).join(", ")}
                  </Box>
                ) : (
                  <Box className="flex flex-col justify-center items-center gap-3">
                    <AddPhotoIcon
                      sx={{ color: "var(--icon-color)", fontSize: "42px" }}
                    />
                    <Typography sx={{ color: "var(--placeholder-color)" }}>
                      Drag and drop files here, or click to select files
                    </Typography>
                  </Box>
                )}
              </Box>
              <aside className="selected-file-wrapper text-center">
                <button
                  className="btn btn-success px-10 py-3"
                  disabled={!selectedFiles.length}
                  onClick={uploadFiles}
                >
                  Upload
                </button>
              </aside>
            </section>
          )}
        </Dropzone>
        {progressInfos.length > 0 && (
          <Box className="w-[500px] m-auto">
            <Typography
              sx={{
                fontSize: "18px",
                color: "var(--text-color)",
                fontWeight: "bold",
                marginBottom: "10px",
              }}
            >
              Uploads Files
            </Typography>
            {progressInfos.map((progressInfo, index) => (
              <Box
                className="mb-2 rounded-md px-3 py-2"
                key={index}
                sx={{
                  backgroundColor: "var(--input-bg)",
                  boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.3)",
                }}
              >
                <Box className="flex justify-start items-center gap-3">
                  <InsertFile
                    sx={{ color: "var(--icon-color)", fontSize: "48px" }}
                  />
                  <Box className="w-full">
                    <Box className="flex justify-between items-center mb-2">
                      <Box>
                        <Typography className="mb-5">
                          {progressInfo.fileName}
                        </Typography>
                      </Box>
                      <Box>
                        <Typography>{progressInfo.percentage}%</Typography>
                      </Box>
                    </Box>
                    <Box sx={{ width: "100%" }}>
                      <LinearProgress
                        variant="determinate"
                        value={progressInfo.percentage}
                        sx={{
                          background: "#f0eef9",
                          height: "8px",
                          borderRadius: "5px",
                          '& .MuiLinearProgress-bar': {
                            background: 'linear-gradient(to right, #A4E4FF, #D29FF9)',
                            borderRadius: '5px',
                          },
                        }}
                      />
                    </Box>
                  </Box>
                  {progressInfo.percentage === 100 ? (
                    <UploadDoneIcon sx={{ color: "var(--active-color)" }} />
                  ) : (
                    <Box className="w-[40px] h-[30px] bg-[var(--input-bg-color)] rounded-[30px] flex flex-col justify-center items-center">
                      <CloseIcon
                        sx={{ color: "var(--icon-color)", cursor: "pointer" }}
                      />
                    </Box>
                  )}
                </Box>
              </Box>
            ))}
          </Box>
        )}
      </Box>

      {message.length > 0 && (
        <Box className="alert alert-secondary" role="alert">
          <ul>
            {message.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </Box>
      )}

      {fileInfos.length > 0 && (
        <Box className="card">
          <Box className="card-header">List of Files</Box>
          <ul className="list-group list-group-flush">
            {fileInfos &&
              fileInfos.map((file, index) => (
                <li className="list-group-item" key={index}>
                  <a href={file.url}>{file.name}</a>
                </li>
              ))}
          </ul>
        </Box>
      )}
    </Box>
  );
};

export default UploadFiles;
