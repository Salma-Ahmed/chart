import React from "react";
import Moment from "react-moment";
import { makeStyles } from "@material-ui/core/styles";
import { v4 as uuid } from "uuid";

const moment = require("moment");
const useStyles = makeStyles({
  timeline: {
    display: "inline-flex"
  },
  day: {
    borderRight: "1px solid lightgray",
    borderBottom: "1px solid lightgray",
    borderTop: "1px solid lightgray",
    fontSize: "14px",
    textAlign: "center",
    color: "#fff",
    backgroundColor: "darkgrey",
    height: "30px",
    lineHeight: "30px"
  }
});

const Timeline: React.FC<{ earliestDate: string; totalNoOfDays: number, dayWidth: number }> = ({
  earliestDate,
  totalNoOfDays,
  dayWidth
}): JSX.Element => {
  const classes = useStyles();

  const dayItems = [];
  for (let i = 0; i <= totalNoOfDays; i++) {
    const date = moment(earliestDate)
      .add(i, "day")
      .toDate();
    dayItems.push(
      <div key={uuid()} className={classes.day} style={{width: dayWidth}}>
        <Moment format="MMM DD">{date}</Moment>
      </div>
    );
  }
  return <div className={classes.timeline}>{dayItems}</div>;
};

export default Timeline;
