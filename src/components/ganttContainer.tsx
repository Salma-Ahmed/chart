import React, { useContext, useState } from "react";
import { GanttStoreContext } from "../stores/store";

const moment = require("moment");
const GanttContainer = (Wrapped: any) => {
  const ganttStore = useContext(GanttStoreContext);
  const [topics] = useState(ganttStore.data.topics);
  const [dayWidth] = useState(ganttStore.dayWidth);

  //calculate duration given start and end dates
  const calculateDuration = (endDate: string, startDate: string) => {
    return moment(endDate).diff(moment(startDate), "days");
  };

  //set earliest and latest date
  let startDates: Array<string> = [];
  let endDates: Array<string> = [];
  topics.forEach(topic => {
    topic.campaigns.forEach(campaign => {
      campaign.duration = calculateDuration(
        campaign.endDate,
        campaign.startDate
      );
      startDates.push(campaign.startDate);
      endDates.push(campaign.endDate);
    });
  });
  let earliestDate = startDates[0];
  let latestDate = endDates[0];
  startDates.forEach(date => {
    if (moment(date).isBefore(earliestDate)) {
      earliestDate = date;
    }
  });
  endDates.forEach(date => {
    if (moment(date).isAfter(latestDate)) {
      latestDate = date;
    }
  });

  //set topic duration
  topics.forEach(topic => {
    topic.duration = calculateDuration(latestDate, earliestDate);
  });

  //test on click
  const calculateLeft = (earliestDate: string, campaignStartDate: string) => {
    return moment(campaignStartDate).diff(moment(earliestDate), "days");
  };

  const elements = {
   topics,
   dayWidth,
   earliestDate,
   latestDate,
   totalNoOfDays: calculateDuration(latestDate, earliestDate),
   calculateLeft: calculateLeft,
 };

  const EnhancedComponent = () => {
    return <Wrapped {...elements} />;
  };

  return EnhancedComponent;
};
export default GanttContainer;
