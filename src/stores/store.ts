import { observable, action } from "mobx";
import { createContext } from "react";

class Store {
    @observable data = {};
 }

export const TopicStoreContext = createContext(new Store());