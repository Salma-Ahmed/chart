import React from "react";
import Grid from "@material-ui/core/Grid";
import Titles from "./titles";
import { makeStyles } from "@material-ui/core/styles";
import Timeline from "./timeline";

const useStyles = makeStyles({
   rightSide: {
       borderLeft: "1px solid #dedede",
       overflowX: "scroll",
   }
})

const GanttComponent: React.FC = (props: any) => {
   console.log(props)
   const classes = useStyles();
   const {earliestDate, days} = props;
   return (
      <Grid container spacing={0}>
         <Grid item xs={4} >
            <Titles />
            <Grid container spacing={0}>
               <Grid item xs={12}>Topic name</Grid>
               <Grid item xs={4} >campaign1</Grid>
               <Grid item xs={4} >1/1/2020</Grid>
               <Grid item xs={4} >15/10/2020</Grid>
            </Grid>
            <Grid container spacing={0}>
               <Grid item xs={12}>Topic name</Grid>
               <Grid item xs={4} >campaign1</Grid>
               <Grid item xs={4} >1/1/2020</Grid>
               <Grid item xs={4} >15/10/2020</Grid>
            </Grid>
            <Grid container spacing={0}>
               <Grid item xs={12}>Topic name</Grid>
               <Grid item xs={4} >campaign1</Grid>
               <Grid item xs={4} >1/1/2020</Grid>
               <Grid item xs={4} >15/10/2020</Grid>
            </Grid>
         </Grid>
         <Grid item xs={8} className={classes.rightSide}>
            <Timeline earliestDate={earliestDate}  days={days}/>
         </Grid>
      </Grid>
   );
};

export default GanttComponent;