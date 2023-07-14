import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useState } from "react";

type Props = {};

const CreateButton = (props: Props) => {
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState("");
  const [time, setTime] = useState(null);
  const [error, setError] = useState<boolean>(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCreateUser = () => {
    // if not pick a time, then use current time!!

    // Perform user creation logic using the username value
    console.log("Creating user:", content);
    setContent("");
    setOpen(false);
  };

  return (
    <>
      <div className="mb-2 mr-2 flex justify-end items-center">
        <Button variant="outlined" onClick={handleOpen}>
          Create Daily Log
        </Button>
      </div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add a New Log</DialogTitle>
        <DialogContent>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateTimePicker
              label="Controlled picker"
              value={time}
              onChange={(newValue) => setTime(newValue)}
              sx={{ margin: "8px 0" }}
            />
          </LocalizationProvider>
          <TextField
            required
            label="Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            fullWidth
            multiline
            rows={4}
            sx={{ margin: "8px 0" }}
            error={error}
          />
          <TextField
            label="Extra Info"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            fullWidth
            multiline
            rows={2}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleCreateUser} variant="outlined" color="primary">
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default CreateButton;
