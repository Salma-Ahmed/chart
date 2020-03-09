import React from "react";
import IChart from "../interfaces/chart.interface";
import { observer } from "mobx-react";

const HighOrder: React.FC<{ WrappedComponent: React.FC }> = ({WrappedComponent}): JSX.Element => {
    return (<WrappedComponent></WrappedComponent>);
}

export default HighOrder;
