import React from "react";
import Grid from "@material-ui/core/Grid";

const Titles: React.FC = (): JSX.Element => {
    return (
        <Grid container spacing={0}>
            <Grid item xs={4} >Campaign</Grid>
            <Grid item xs={4} >Start date</Grid>
            <Grid item xs={4} >End date</Grid>
        </Grid>
    );
}

export default Titles;

