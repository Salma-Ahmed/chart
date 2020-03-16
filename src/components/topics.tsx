import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Topic from "../interfaces/topic.interface";
import { v4 as uuid } from "uuid";

const useStyles = makeStyles({
  bar: {
    borderRadius: "3px",
    cursor: "pointer",
    position: "relative",
    marginBottom: "10px",
    textAlign:"center",
  }, 
  topic: {
    borderBottom: "1px solid lightgray",
    position:"relative",
  },
  content: {
    position: "relative",
    borderRadius: "3px",
    cursor: "pointer",
    marginBottom: "5px",
    textAlign: "center",
    "&:hover div": {
      visibility: "visible",
      opacity: 1
    }
  },
  popover: {
    position: "absolute",
    width: "200px",
    left: "50%",
    top: "100%",
    textAlign: "left",
    transform: "translateX(-50%)",
    backgroundColor: "#fff",
    marginTop: "5px",
    padding: "5px",
    zIndex: 1,
    borderRadius: "3px",
    boxShadow: "1px 1px 5px 1px #ccc",
    visibility: "hidden",
    opacity: 0,
    transition: "visibility 0s, opacity 0.2s ease-in-out"
  },
  campaign: {
    borderRight: "1px solid lightgray",
    paddingLeft: "10px",
    padding: "5px 0",
  },
  topicTitle: {
    borderRight: "1px solid lightgray",
    fontWeight: "bold",
    padding: "10px 5px"
  }
});
const Topics: React.FC<{
  topics: Array<Topic>;
  calculateLeft: (a: string, b: string) => number;
  earliestDate: string;
  dayWidth: number;
}> = ({ topics, calculateLeft, earliestDate, dayWidth }): JSX.Element => {
  const classes = useStyles();
  return (
    <>
      {topics.map(topic => (
        <Grid className={classes.topic} container spacing={0} key={uuid()}>
          <Grid item xs={10} sm={8} md={4} className={classes.topicTitle}>
            {topic.title}
          </Grid>
          {topic.campaigns.map(campaign => (
            <Grid container spacing={0} key={uuid()}>
              <Grid item xs={10} sm={8} md={4} className={classes.campaign}>
                <Grid container spacing={0}>
                  <Grid item xs={4}>
                    {campaign.title}
                  </Grid>
                  <Grid item xs={4}>
                    {campaign.startDate}
                  </Grid>
                  <Grid item xs={4}>
                    {campaign.endDate}
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={2} sm={4} md={8}>
                <div
                  className={classes.bar}
                  style={{
                    backgroundColor: campaign.color,
                    width: `${(campaign.duration + 1) * dayWidth}px`,
                    left: `${calculateLeft(earliestDate, campaign.startDate) *
                      dayWidth}px`
                  }}
                >{campaign.title}</div>
                {campaign.content?.map(item => (
                  <div
                    key={uuid()}
                    className={classes.content}
                    style={{
                      backgroundColor: campaign.color,
                      marginLeft: `${calculateLeft(earliestDate, item.date) *
                        dayWidth}px`,
                      width: dayWidth
                    }}
                  >
                    {item.title}
                    <div className={classes.popover}>
                      <h4>{item.title}</h4>
                      <p>{item.description}</p>
                    </div>
                  </div>
                ))}
              </Grid>
            </Grid>
          ))}
        </Grid>
      ))}
    </>
  );
};

export default Topics;

