//functional HOC with useState hook
import React from 'react';
import { observer } from "mobx-react";


const moment = require("moment");
const GanttContainer = (Wrapped: any) => {
   const EnhancedComponent = observer(() => {

      const earliestDate = "01/25/2020";
      const latestDate = "04/03/2020";

      /**count number of days based on earliest and latest dates */
      const days = moment(latestDate).diff(moment(earliestDate), "days");
      const elements = {
         earliestDate,
         latestDate,
         days,
      }
      return <Wrapped {...elements} />;
   })

   return EnhancedComponent;
};
export default GanttContainer;