import { observable, action } from "mobx";
import { createContext } from "react";
import IElement from "../interfaces/element.interface";

class Store {
    @observable data:IElement = {
        onClick: () => {},
        topics:[
            {
                title:"topic1",
                campaigns:[
                    {
                        title:"campaign1",
                        startDate:"",
                        endDate:"",
                        content:[
                            {
                                title:"content",
                                description:"description lorem ipsum",
                                date:"01/10/2020"
                            }
                        ]
                    }
                ]
            }
        ]
    };
 }

export const TopicStoreContext = createContext(new Store());