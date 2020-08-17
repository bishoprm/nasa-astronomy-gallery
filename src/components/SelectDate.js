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
    <div className="selector">
      <ThemeProvider theme={theme}>
        <FormControl>
          <InputLabel color="primary">Explore photos:</InputLabel>
          <Select onChange={props.handleChangeDate} color="primary">
            <MenuItem value={6}>last week</MenuItem>
            <MenuItem value={13}>last two weeks</MenuItem>
            <MenuItem value={29}>last month</MenuItem>
          </Select>
          <FormHelperText>
            <em>Select photos from a specific time period</em>
          </FormHelperText>
        </FormControl>
      </ThemeProvider>
    </div>
  );
}
