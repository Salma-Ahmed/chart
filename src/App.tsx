import React from 'react';
import './App.css';
import GanttComponent from "./components/ganttComponent";
import GanttContainer from "./containers/ganttContainer";
import {observer} from "mobx-react";


function App() {
  const EnhancedWrapped = observer(GanttContainer(GanttComponent));
  return (  
    <div className="App">
      <EnhancedWrapped/>
    </div>
  );
}

export default App;
