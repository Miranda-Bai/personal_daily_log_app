import React, { SyntheticEvent, useState } from "react";
import { Box, Tab, Tabs, Typography, useMediaQuery } from "@mui/material";
import TableView from "./TableView";
import CardView from "./CardView";
import CreateButton from "./CreateButton";
import TabList from "@mui/lab/TabList";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
      className="w-[92%] h-full"
    >
      {value === index && (
        <Box sx={{ p: 1, width: "100%", height: "100%" }}>
          <div className="w-full h-full">{children}</div>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const Content = () => {
  const [value, setValue] = useState(0);
  const isMediumScreen = useMediaQuery("(min-width:768px)");
  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "background.paper",
        display: "flex",
        height: "100%",
        width: "100%",
      }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{
          borderRight: 1,
          borderColor: "divider",
          width: "8%",
        }}
      >
        <Tab label="Table" {...a11yProps(0)} />
        <Tab label="Card" {...a11yProps(1)} />
        <Tab label="Summary" {...a11yProps(2)} />
      </Tabs>

      <TabPanel value={value} index={0}>
        <CreateButton />
        <TableView />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <CreateButton />
        <CardView />
      </TabPanel>
      <TabPanel value={value} index={2}>
        summary content
      </TabPanel>
    </Box>
  );
};

export default Content;
