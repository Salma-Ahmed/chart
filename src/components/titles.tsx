import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  item: {
    height: "30px",
    lineHeight: "30px",
    backgroundColor: "darkgrey",
    color: "#fff",
    borderRight: "1px solid lightgray",
    borderTop: "1px solid lightgray",
    borderBottom: "1px solid lightgray",
    paddingLeft: "10px"
  }
});
const Titles: React.FC = (): JSX.Element => {
  const classes = useStyles();
  return (
    <Grid container spacing={0}>
      <Grid item xs={4} className={classes.item}>
        Campaign
      </Grid>
      <Grid item xs={4} className={classes.item}>
        Start date
      </Grid>
      <Grid item xs={4} className={classes.item}>
        End date
      </Grid>
    </Grid>
  );
};

export default Titles;
