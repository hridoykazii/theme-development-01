import CloseIcon from "@mui/icons-material/Close";
import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControl, FormControlLabel, MenuItem, Select, Slide, styled, Switch, TextField, Typography, useTheme } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import React from "react";
// import Button from '@mui/material/Button';


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const CustomDialog = (props) => {
  const {
    openButtonText = "Open Dialog", // Default button text to open the dialog
    dialogTitle = "Dialog Title", // Default title
    dialogContent = "Dialog content goes here", // Default content
    agreeButtonText = "Agree", // Default agree button text
    disagreeButtonText = "Disagree", // Default disagree button text
    onAgree = () => {}, // Agree button action (default is no-op)
    onDisagree = () => {}, // Disagree button action (default is no-op)
    transitionsDialog = false, // Whether to use transition effect
    sx = {}, // Optional styles
    className = "", // Optional className
    customOpen, // Optional external control to open dialog
    borderColor,
    color,
    formDialog,
    customizedDialog,
    fullScreenDialog,
    optionalSizes,
    labelText,
    TypographyText,
  } = props;

  const theme = useTheme();

  const [open, setOpen] = React.useState(false);
  const [fullWidth, setFullWidth] = React.useState(false);
  const [maxWidth, setMaxWidth] = React.useState("lg");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleMaxWidthChange = (event) => {
    setMaxWidth(
      // @ts-expect-error autofill of arbitrary value is not handled.
      event.target.value
    );
  };

  const handleFullWidthChange = (event) => {
    setFullWidth(event.target.checked);
  };

  return (
    <div className={className} style={sx}>
      {transitionsDialog && (
        <div>
          <Button
            variant="outlined"
            onClick={handleClickOpen}
            sx={{
              color: color,
              borderColor: borderColor, // `borderColor` is passed as a prop or defined elsewhere
              "&:hover": {
                // Correctly nesting hover styles
                borderColor: borderColor, // Changing the border color on hover
              },
            }}
          >
            {openButtonText}
          </Button>

          <Dialog open={customOpen !== undefined ? customOpen : open} TransitionComponent={Transition} keepMounted sx onClose={handleClose} aria-describedby="alert-dialog-slide-description">
            <DialogTitle sx={{ color: theme.palette.primary.semiWhite, fontSize: "18px", bgcolor: theme.palette.primary.main }}>{dialogTitle}</DialogTitle>
            <DialogContent sx={{ bgcolor: theme.palette.primary.main }}>
              <DialogContentText id="alert-dialog-slide-description">{dialogContent}</DialogContentText>
            </DialogContent>
            <DialogActions sx={{ bgcolor: theme.palette.primary.main }}>
              <Button
                sx={{ color: theme.palette.primary.active }}
                onClick={() => {
                  onDisagree();
                  handleClose();
                }}
              >
                {disagreeButtonText}
              </Button>
              <Button
                sx={{ color: theme.palette.primary.active }}
                onClick={() => {
                  onAgree();
                  handleClose();
                }}
              >
                {agreeButtonText}
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      )}

      {formDialog && (
        <div>
          <Button
            variant="outlined"
            onClick={handleClickOpen}
            sx={{
              color: color,
              borderColor: borderColor, // `borderColor` is passed as a prop or defined elsewhere
              "&:hover": {
                // Correctly nesting hover styles
                borderColor: borderColor, // Changing the border color on hover
              },
            }}
          >
            {openButtonText}
          </Button>
          <Dialog
            open={open}
            onClose={handleClose}
            PaperProps={{
              component: "form",
              onSubmit: (event) => {
                event.preventDefault();
                const formData = new FormData(event.currentTarget);
                const formJson = Object.fromEntries(formData.entries());
                const email = formJson.email;
                console.log(email);
                handleClose();
              },
            }}
          >
            <DialogTitle sx={{ color: theme.palette.primary.semiWhite, fontSize: "18px", bgcolor: theme.palette.primary.main }}>{dialogTitle}</DialogTitle>
            <DialogContent sx={{ bgcolor: theme.palette.primary.main }}>
              <DialogContentText sx={{ mb: "14px" }}>{dialogContent}</DialogContentText>
              <label>{labelText}</label>
              <TextField
                sx={{
                  // backgroundColor: "white", // Default background color
                  "& .css-p51h6s-MuiInputBase-input-MuiOutlinedInput-input": {
                    height: "0.4375em",
                    color: "gray",
                    //   border: "0.5px solid red",
                    borderRadius: "7px",
                  },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "none", // Default border color
                    },
                    "&:hover fieldset": {
                      borderColor: "gray", // Border color on hover
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: theme.palette.primary.active, // Border color when focused
                    },
                    backgroundColor: "none", // Background color when not focused
                  },
                  "& .MuiInputBase-input": {
                    backgroundColor: "none", // Background color when focused
                  },

                  "& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input": {
                    height: "0.4375em",
                    color: "gray",
                    //   border: "0.5px solid red",
                    borderRadius: "7px",
                  },
                }}
                required
                name="email"
                type="email"
                fullWidth
              />
            </DialogContent>

            <DialogActions sx={{ bgcolor: theme.palette.primary.main }}>
              <Button sx={{ color: theme.palette.primary.active }} onClick={handleClose}>
                {disagreeButtonText}
              </Button>
              <Button sx={{ color: theme.palette.primary.active }} type="submit">
                {agreeButtonText}
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      )}

      {customizedDialog && (
        <div>
          <Button
            variant="outlined"
            sx={{
              color: color,
              borderColor: borderColor, // `borderColor` is passed as a prop or defined elsewhere
              "&:hover": {
                // Correctly nesting hover styles
                borderColor: borderColor, // Changing the border color on hover
              },
            }}
            onClick={handleClickOpen}
          >
            Open dialog
          </Button>
          <BootstrapDialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
            <DialogTitle sx={{ m: 0, p: 2, color: theme.palette.primary.semiWhite, bgcolor: theme.palette.primary.main, fontSize: "18px" }} id="customized-dialog-title">
              {dialogTitle}
            </DialogTitle>
            <IconButton
              aria-label="close"
              onClick={handleClose}
              sx={(theme) => ({
                position: "absolute",
                right: 8,
                top: 8,
                color: theme.palette.grey[500],
              })}
            >
              <CloseIcon />
            </IconButton>
            <DialogContent dividers sx={{ bgcolor: theme.palette.primary.main }}>
              <Typography sx={{ color: theme.palette.primary.semiWhite, fontSize: "16px" }} gutterBottom>
                {TypographyText}
              </Typography>
            </DialogContent>
            <DialogActions sx={{ bgcolor: theme.palette.primary.main }}>
              <Button sx={{ color: color ? color : theme.palette.primary.active }} autoFocus onClick={handleClose}>
                Save changes
              </Button>
            </DialogActions>
          </BootstrapDialog>
        </div>
      )}

      {/* that is for Full-screen dialogs */}
      {fullScreenDialog && (
        <div>
          <Button
            variant="outlined"
            sx={{
              color: color,
              borderColor: borderColor, // `borderColor` is passed as a prop or defined elsewhere
              "&:hover": {
                // Correctly nesting hover styles
                borderColor: borderColor, // Changing the border color on hover
              },
            }}
            onClick={handleClickOpen}
          >
            Open full-screen dialog
          </Button>
          <Dialog fullScreen open={open} onClose={handleClose} sx={{ "& .css-g9aoq-MuiPaper-root-MuiDialog-paper": {} }}>
            <Box className="flex items-center justify-between  w-full" sx={{ bgcolor: theme.palette.primary.main }}>
              <DialogTitle sx={{ m: 0, p: 2, color: theme.palette.primary.semiWhite, fontSize: "18px" }} id="customized-dialog-title">
                {dialogTitle}
              </DialogTitle>

              <IconButton edge="start" sx={{ color: theme.palette.primary.semiWhite }} onClick={handleClose} aria-label="close">
                <CloseIcon />
              </IconButton>
            </Box>

            <DialogContent dividers sx={{ bgcolor: theme.palette.primary.main }}>
              <Typography sx={{ color: theme.palette.primary.semiWhite, fontSize: "16px" }} gutterBottom>
                {TypographyText}
              </Typography>
            </DialogContent>

            {/* bottom side code  */}

            <Box className=" absolute bottom-3 right-3">
              <Button sx={{ color: theme.palette.primary.active, fontWeight: 600, fontSize: "17px" }} onClick={handleClose}>
                save
              </Button>
            </Box>
          </Dialog>
        </div>
      )}

      {/* that is for Optional sizes dialogs section  */}
      {optionalSizes && (
        <div>
          <Button
            variant="outlined"
            sx={{
              color: color,
              borderColor: borderColor, // `borderColor` is passed as a prop or defined elsewhere
              "&:hover": {
                // Correctly nesting hover styles
                borderColor: borderColor, // Changing the border color on hover
              },
            }}
            onClick={handleClickOpen}
          >
            Open max-width dialog
          </Button>
          <Dialog fullWidth={fullWidth} maxWidth={maxWidth} open={open} onClose={handleClose}>
            <DialogTitle sx={{ color: theme.palette.primary.semiWhite, fontSize: "18px", bgcolor: theme.palette.primary.main }}>Optional sizes</DialogTitle>
            <DialogContent sx={{ bgcolor: theme.palette.primary.main }}>
              <DialogContentText sx={{ color: theme.palette.primary.semiWhite }}>You can set my maximum width and whether to adapt or not.</DialogContentText>
              <Box
                noValidate
                component="form"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  m: "auto",
                  width: "fit-content",
                  bgcolor: theme.palette.primary.main,
                }}
              >
                <FormControl sx={{ mt: 2, minWidth: 120 }}>
                  <Select
                    // autoFocus
                    value={maxWidth}
                    onChange={handleMaxWidthChange}
                    inputProps={{
                      name: "max-width",
                      id: "max-width",
                    }}
                    sx={{
                        transition: 0.3,
                      backgroundColor: "none", // Custom background color for input field
                      // Custom border color
                      "&:hover": {
                        borderColor: "none", // Border color on hover
                      },
                      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        borderColor: theme.palette.primary.active, // Border color when focused
                      },
                    }}
                  >
                    <MenuItem value={false}>false</MenuItem>
                    <MenuItem value="xs">xs</MenuItem>
                    <MenuItem value="sm">sm</MenuItem>
                    <MenuItem value="md">md</MenuItem>
                    <MenuItem value="lg">lg</MenuItem>
                    <MenuItem value="xl">xl</MenuItem>
                  </Select>
                </FormControl>

                <FormControlLabel
                  sx={{ mt: 1 }}
                  control={
                    <Switch
                      checked={fullWidth}
                      onChange={handleFullWidthChange}
                      sx={{
                        "& .MuiSwitch-switchBase": {
                          color: "gray", // Default thumb color
                        
                          "&:hover": {
                            backgroundColor: "rgba(0, 0, 0, 0.08)", // Hover background color
                          },
                          "&.Mui-checked": {
                            color: "green", // Thumb color when checked
                            "&:hover": {
                              backgroundColor: "none", // Hover background when checked
                            //   opacity: 0.3
                            },
                          },
                        },
                        "& .MuiSwitch-thumb": {
                          backgroundColor: theme.palette.primary.active, // Thumb color
                        },
                        "& .MuiSwitch-track": {
                            border: `0.5px solid ${theme.palette.primary.semiWhite}`,
                          backgroundColor: "lightgray", // Track color when not checked
                          "&.Mui-checked": {
                            backgroundColor: "green", // Track color when checked
                          },
                        },
                      }}
                    />
                  }
                  label="Full width"
                />
              </Box>
            </DialogContent>
            <DialogActions sx={{ bgcolor: theme.palette.primary.main }}>
              <Button onClick={handleClose} sx={{ color: theme.palette.primary.active }}>
                Close
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      )}
    </div>
  );
};

export default CustomDialog;
