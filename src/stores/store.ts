import { observable, action } from "mobx";
import { createContext } from "react";

const moment = require("moment");
class Store {
    @observable dayWidth = 120;
    @observable.ref data = {
        topics:[
            {
                title:"topic1",
                duration:0,
                campaigns:[
                    {
                        title:"campaign1",
                        startDate:"01/25/2020",
                        endDate:"02/01/2020",
                        duration:0,
                        color:"rgb(240, 98, 146)",
                        content:[
                            {
                                title:"content",
                                type:"facebook",
                                description:"description lorem ipsum",
                                date:"01/27/2020"
                            }
                        ]
                    },
                    {
                        title:"campaign2",
                        startDate:"02/01/2020",
                        endDate:"02/10/2020",
                        duration:5,
                        color:"darkblue",
                        content:[
                            {
                                title:"content",
                                type:"twitter",
                                description:"description lorem ipsum",
                                date:"02/05/2020"
                            },
                            {
                                title:"content",
                                type:"twitter",
                                description:"description lorem ipsum",
                                date:"02/07/2020"
                            }
                        ]
                    }
                ]
            },
            {
                title:"topic2",
                campaigns:[
                    {
                        title:"campaign1",
                        startDate:"01/22/2020",
                        endDate:"01/28/2020",
                        duration:0,
                        color:"rgb(0, 77, 64)",
                        content:[
                            {
                                title:"content",
                                type:"youtube",
                                description:"description lorem ipsum",
                                date:"01/23/2020"
                            },
                            {
                                title:"content",
                                type:"youtube",
                                description:"description lorem ipsum",
                                date:"01/27/2020"
                            },
                            {
                                title:"content",
                                type:"youtube",
                                description:"description lorem ipsum",
                                date:"01/23/2020"
                            },
                        ]
                    },
                    {
                        title:"campaign2",
                        startDate:"02/03/2020",
                        endDate:"02/07/2020",
                        duration:0,
                        color:"darkorange",
                        content:[
                            {
                                title:"content",
                                type:"facebook",
                                description:"description lorem ipsum",
                                date:"02/06/2020"
                            }
                        ]
                    }
                ]
            }
        ]
    };
    @action calculateDuration = (startDate:string, endDate: string) => {
        return moment(endDate).diff(moment(startDate), "days");
    }
 }

export const GanttStoreContext = createContext(new Store());