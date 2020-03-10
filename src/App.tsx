import React from 'react';
import './App.css';
import GanttComponent from "./components/ganttComponent";
import GanttContainer from "./components/ganttContainer";


function App() {
  const EnhancedWrapped = GanttContainer(GanttComponent);
  return (  
    <div className="App">
      <EnhancedWrapped/>
    </div>
  );
}

export default App;
