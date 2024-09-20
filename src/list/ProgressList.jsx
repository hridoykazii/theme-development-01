import { Box } from "@mui/material";
import { progressList } from "common/code/List/list";
import CodeBlock from "components/Test/CodeBlock";
import { memo } from "react";
import Lists from "./Lists";
import JavascriptIcon from "@mui/icons-material/Javascript";

const ProgressList = memo(({ isOpen }) => {
  const progressData = [
    {
      icon: JavascriptIcon,
      iconColor: "orange",
      text: "JavaScript is the programming language of the Web",
      progressValue: 80,
      progressBg: "rgba(245, 194, 39, 0.19)",
    },
    {
      icon: JavascriptIcon,
      iconColor: "blue",
      text: "JavaScript is evolving rapidly with frameworks like React and Node.js",
      progressValue: 60,
      progressBg: "rgba(0, 187, 255, 0.19)",
    },
    {
      icon: JavascriptIcon,
      iconColor: "green",
      text: "Mastering JavaScript improves front-end development skills",
      progressValue: 90,
      progressBg: "rgba(0, 212, 148, 0.19)",
    },
  ];

  return (
    <Box>
      <Box className="flex flex-wrap gap-x-4">
        {/* Map over the progressData array and render Lists dynamically */}
        {progressData.map((data, index) => (
          <Lists
            key={index}
            progressList={true}
            icon={data.icon}
            iconColor={data.iconColor}
            text={data.text}
            progressValue={data.progressValue}
            progressBg={data.progressBg}
          />
        ))}
      </Box>
      {isOpen && <CodeBlock code={progressList} />}
    </Box>
  );
});

export default ProgressList;
