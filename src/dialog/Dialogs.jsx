import AddIcon from "@mui/icons-material/Add";
import PersonIcon from "@mui/icons-material/Person";
import { DialogActions, DialogContent, DialogContentText, Slide, useTheme } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import * as React from "react";

// Reusable SimpleDialog Component
const SimpleDialog = ({ open, onClose, selectedValue, options = [], dialogTitle = "Set backup account", listItemHoverColor = "rgba(115, 103, 240, 0.16)", avatarBgColor = "rgba(115, 103, 240, 0.16)", avatarIconColor = "#7367F0", addAccountText = "Add account" }) => {
  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle sx={{bgcolor: "#1F2336"}}>{dialogTitle}</DialogTitle>
      <List sx={{ pt: 0, color: "#b2b2b4", bgcolor: "#1F2336" }}>
        {options.map((option) => (
          <ListItem disableGutters key={option}>
            <ListItemButton
              onClick={() => handleListItemClick(option)}
              sx={{
                "&:hover": {
                  bgcolor: listItemHoverColor,
                  color: avatarIconColor,
                  transition: "all 0.3s ease",
                },
              }}
            >
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: avatarBgColor }}>
                  <PersonIcon sx={{ color: avatarIconColor }} />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={option} />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem disableGutters>
          <ListItemButton autoFocus onClick={() => handleListItemClick("addAccount")}>
            <ListItemAvatar>
              <Avatar>
                <AddIcon sx={{ color: "#b2b2b4" }} />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={addAccountText} />
          </ListItemButton>
        </ListItem>
      </List>
    </Dialog>
  );
};

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  dialogTitle: PropTypes.string,
  dialogDescription: PropTypes.string,
  listItemHoverColor: PropTypes.string,
  avatarBgColor: PropTypes.string,
  avatarIconColor: PropTypes.string,
  addAccountText: PropTypes.string,
};




// Reusable Dialogs Component
const Dialogs = ({ options = ["username@gmail.com", "user02@gmail.com"], dialogTitle = "Set backup account", buttonText = "Open simple dialog", addAccountText = "Add account", alert, transitionsDialog,transitionsOpen }) => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(options[1]);

  console.log("this is alert condition check", alert);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };

  // that is for Transition component
  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });




  return (
    <div className=" ">
      {alert ? (
        <div className="">
          <Button
            variant="outlined"
            onClick={handleClickOpen}
            sx={{
              color: theme.palette.primary.active,
              borderColor: theme.palette.primary.active,
              
              "&:hover": {
                borderColor: theme.palette.primary.active,
              },
            }}
          >
            {buttonText}
          </Button>
          <Dialog open={open} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
            <DialogTitle sx={{ color: theme.palette.primary.semiWhite, bgcolor: theme.palette.primary.main, fontSize: "20px", fontWeight: 600,  }} id="alert-dialog-title">
              {dialogTitle ? dialogTitle : "Use Google's location service?"}
            </DialogTitle>
            <DialogContent sx={{bgcolor: theme.palette.primary.main}}>
              <DialogContentText id="alert-dialog-description">Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.</DialogContentText>
            </DialogContent>
            <DialogActions sx={{bgcolor: theme.palette.primary.main}}>
              <Button onClick={handleClose} sx={{ color: theme.palette.primary.active }}>
                Disagree
              </Button>
              <Button onClick={handleClose} sx={{ color: theme.palette.primary.active }} autoFocus>
                Agree
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      ) : (
        <div>
          <Typography variant="subtitle1" component="div" sx={{ color: theme.palette.primary.semiWhite,"& .css-bdhsul-MuiTypography-root-MuiDialogTitle-root":{bgcolor: "red"} }}>
            Selected: {selectedValue}
          </Typography>
          <br />
          <Button
            variant="outlined"
            onClick={handleClickOpen}
            sx={{
              color: theme.palette.primary.active,
              borderColor: theme.palette.primary.active,
              "&:hover": {
                borderColor: theme.palette.primary.active,
              },
            }}
          >
            {buttonText}
          </Button>

          <SimpleDialog   selectedValue={selectedValue} open={open} onClose={handleClose} options={options} dialogTitle={dialogTitle} addAccountText={addAccountText} />
        </div>
      )}
    </div>
  );
};

Dialogs.propTypes = {
  options: PropTypes.array,
  dialogTitle: PropTypes.string,
  buttonText: PropTypes.string,
  addAccountText: PropTypes.string,
};

export default Dialogs;
