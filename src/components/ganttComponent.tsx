import React from "react";
import Grid from "@material-ui/core/Grid";
import Titles from "./titles";
import { makeStyles } from "@material-ui/core/styles";
import Timeline from "./timeline";
import Topics from "./topics";

const useStyles = makeStyles({
  mainContainer: {
    // overflowX: "scroll",
  }
});

const GanttComponent: React.FC = (props: any) => {
  console.log(props);
  const classes = useStyles();
  const { topics, earliestDate, totalNoOfDays, calculateLeft, dayWidth } = props;
  return (
    <Grid container spacing={0} className={classes.mainContainer}>
      <Grid item xs={10} sm={8} md={4}>
        <Titles />
      </Grid>
      <Grid item xs={2} sm={4} md={8}>
        <Timeline earliestDate={earliestDate} totalNoOfDays={totalNoOfDays} dayWidth={dayWidth} />
      </Grid>
      <Grid container spacing={0}>
        <Topics
          topics={topics}
          calculateLeft={calculateLeft}
          earliestDate={earliestDate}
          dayWidth={dayWidth}  
        />
      </Grid>
    </Grid>
  );
};

export default GanttComponent;
