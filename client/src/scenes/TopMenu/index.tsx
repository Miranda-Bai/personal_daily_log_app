import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SubmitButton from "src/shared/SubmitButton";
import LogoutIcon from "@mui/icons-material/Logout";
import MenuIcon from "@mui/icons-material/Menu";
import YingLogo from "src/assets/logo-no-background.png";

type Props = {};

const TopMenu = (props: Props) => {
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const [content, setContent] = useState<string | null>(null);
  // does time need to be formatted?
  const [time, setTime] = useState<string | null>(null);
  const [error, setError] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleDialogOpen = () => {
    setIsDialogOpen(true);
  };
  const handleDialogClose = () => {
    setIsDialogOpen(false);
  };
  const handleCreateNewLog = () => {};
  return (
    <header className="fixed top-0 left-0 w-full px-6 py-4">
      <div className="flex justify-between items-center">
        {/* left side */}
        <div className="hidden md:block md:basis-2/3">
          <div className="flex justify-around items-end hover:cursor-pointer gap-4 text-primary-gray font-bold text-lg ">
            <a href="https://github.com/Miranda-Bai" target="_blank" rel="noreferrer">
              <img src={YingLogo} alt="ying's logo" className="h-7 w-25 pb-3 -pt-4" />
            </a>
            <span
              className="hover:text-btn-hovercolor hover:bg-gray-200 px-4 py-2 rounded"
              onClick={() => navigate("/tableview")}
            >
              TableView
            </span>
            <span
              className="hover:text-btn-hovercolor hover:bg-gray-200 px-4 py-2 rounded"
              onClick={() => navigate("/cardview")}
            >
              CardView
            </span>
            <span
              className="hover:text-btn-hovercolor hover:bg-gray-200 px-4 py-2 rounded"
              onClick={() => navigate("/summary")}
            >
              Summary
            </span>
          </div>
        </div>
        {/* when under medium screen show menu icon */}
        <div className="basis-1/3 display md:hidden">
          <MenuIcon />
        </div>
        {/* right side */}
        <div className="basis-2/3 md:basis-1/3 flex justify-end items-end gap-3">
          <SubmitButton onClick={handleDialogOpen}>
            Create Daily Log
          </SubmitButton>
          {/* logout button */}
          <div className="ml-2 py-2 hover:cursor-pointer">
            <LogoutIcon aria-label="Log out" />
          </div>
        </div>
      </div>
      {isDialogOpen && (
        <Dialog open={isDialogOpen} onClose={handleDialogClose}>
          <DialogTitle color="#5E0000">Add a New Log</DialogTitle>
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
            <Button
              onClick={handleDialogClose}
              sx={{
                color: "#5E0000",
                fontWeight: "700",
                marginBottom: "13px",
                marginRight: "10px",
              }}
            >
              Cancel
            </Button>
            <SubmitButton
              onClick={handleCreateNewLog}
              sx={{ marginRight: "13px", marginBottom: "13px" }}
            >
              Create
            </SubmitButton>
          </DialogActions>
        </Dialog>
      )}
    </header>
  );
};

export default TopMenu;
