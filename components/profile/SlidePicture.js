import * as React from "react";
import { styled } from "@mui/material/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import GridOnIcon from "@mui/icons-material/GridOn";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";

const AntTabs = styled(Tabs)({
  borderBottom: "1px solid #e8e8e8",
  "& .MuiTabs-indicator": {
    backgroundColor: "black",
  },
});

const AntTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: "none",
    minWidth: 100,
    [theme.breakpoints.up("sm")]: {
      minWidth: 40,
      // centering the tabs
      marginLeft: "auto",
      marginRight: "auto",
    },
    fontWeight: theme.typography.fontWeightRegular,
    // marginRight: theme.spacing(1),
    color: "#a1a1a1",
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    // "&:hover": {
    //   color: "black",
    //   opacity: 1,
    // },
    "&.Mui-selected": {
      color: "black",
      fontWeight: theme.typography.fontWeightMedium,
    },
  })
);

export default function CustomizedTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ bgcolor: "transparent" }}>
        <AntTabs value={value} onChange={handleChange} aria-label="ant example">
          <AntTab iconPosition="start" icon={<GridOnIcon />} label="POSTS" />
          <AntTab
            iconPosition="start"
            icon={<BookmarkBorderIcon />}
            label="SAVED"
          />
          <AntTab
            iconPosition="start"
            icon={<PermContactCalendarIcon />}
            label="TAGGED"
          />
        </AntTabs>
        {/* <Box sx={{ p: 3 }} /> */}
      </Box>
    </Box>
  );
}
