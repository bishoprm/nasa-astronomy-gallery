import React from "react";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";

export default function Selector(props) {
  //   const todaysDate = new Date();
  //   const oneWeekAgoDate = todaysDate.setDate(todaysDate.getDate() - 7);

  //   var oneWeekAgo = new Date();
  //   oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);

  //   console.log(todaysDate, oneWeekAgo);

  return (
    <div className="selector">
      <FormControl>
        <InputLabel>Explore photos:</InputLabel>
        <Select onChange={props.handleChangeDate}>
          <MenuItem value={10}>last week</MenuItem>
          <MenuItem value={20}>last two weeks</MenuItem>
          <MenuItem value={30}>last month</MenuItem>
        </Select>
        <FormHelperText>
          Select photos from a specific time period
        </FormHelperText>
      </FormControl>
    </div>
  );
}
