import { Alert, AlertTitle, Box, Button, Collapse, IconButton, Stack, Typography, useTheme } from "@mui/material";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";

const Alerts = (props) => {
  const theme = useTheme();
  const { sx, className, style, severity, alertTitleText, alertText, variant, actionText, onActionClick, showClose, onClick, onClose, Dismissible, DismissibleText } = props;
  const [open, setOpen] = useState(true);
  return (
    <Stack sx={{ width: "100%" }} spacing={2}>
      {Dismissible ? (
        <Stack sx={{ width: "100%" }} spacing={2}>
          {Dismissible && (
            <Box className={``}>
              {open !== false && (
                <Box sx={{ width: "100%" }}>
                  <Collapse in={open}>
                    <Alert
                      severity={severity}
                      variant={variant}
                      style={style}
                      action={
                        <IconButton
                          aria-label="close"
                          color="inherit"
                          size="small"
                          onClick={() => {
                            setOpen(false);
                          }}
                        >
                          <CloseIcon fontSize="inherit" style={style} />
                        </IconButton>
                      }
                      sx={
                        sx
                          ? sx
                          : {
                              mb: 2,
                              "& .MuiSvgIcon-root": {
                                "& .css-1sxsamv-MuiPaper-root-MuiAlert-root .MuiAlert-icon": {
                                // Target the alert icon
                                color: "white", // Change the icon color to white
                              }
                              }
                              
                            }
                      }
                    >
                      {alertText}
                    </Alert>
                  </Collapse>
                  {/* <Button
                    disabled={open}
                    variant="outlined"
                    onClick={() => {
                      setOpen(true);
                    }}
                  >
                    Re-open
                  </Button> */}
                </Box>
              )}
            </Box>
          )}

          {Dismissible && (
            <Button
              variant="outlined"
              onClick={() => setOpen(true)}
              disabled={open} // Disable button when alert is visible
              sx={{
                color: theme.palette.primary.active,
                borderColor: theme.palette.primary.active,
                "&:hover": {
                  borderColor: theme.palette.primary.active,
                },
              }}
            >
              {DismissibleText}
            </Button>
          )}
        </Stack>
      ) : (
        <Alert variant={variant} severity={severity} onClose={showClose ? onClose : null} sx={sx ? sx : { bgcolor: "success" }}>
          {alertTitleText !== "" && <AlertTitle>{alertTitleText}</AlertTitle>}

          {alertText}

          {actionText ? (
            <Button color="inherit" size="small" onClick={onActionClick}>
              {actionText}
            </Button>
          ) : null}
        </Alert>
      )}
    </Stack>
  );
};

export default Alerts;
