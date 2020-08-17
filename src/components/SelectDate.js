import React from "react";
import {
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  FormHelperText,
  createMuiTheme,
  ThemeProvider,
} from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#eff3f8",
    },
  },
});

export default function SelectDate(props) {
  return (
    <div className="selectComponent">
      <ThemeProvider theme={theme}>
        <FormControl>
          <InputLabel color="primary">Explore photos:</InputLabel>
          <Select onChange={props.dateFilterHandler} color="primary">
            <MenuItem value={"lastWeek"}>last week</MenuItem>
            <MenuItem value={"lastTwoWeeks"}>last two weeks</MenuItem>
            <MenuItem value={"lastMonth"}>last month</MenuItem>
          </Select>
          <FormHelperText>
            <em>Select photos from a specific time period</em>
          </FormHelperText>
        </FormControl>
      </ThemeProvider>
    </div>
  );
}
