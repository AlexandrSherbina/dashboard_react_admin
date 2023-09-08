import React from "react";
import "./barChartBox.scss";
import { BarChart, Bar, ResponsiveContainer, Tooltip } from 'recharts';

type Props = {
    title: string;
    chartData: object[];
    dataKey: string;
    color: string;

}

const BarChartBox: React.FC<Props> = (props) => {
  return (
    <div className="barChartBox">
      <h1>{props.title}</h1>
      <div className="chart">
        <ResponsiveContainer width="99%" height={150}>
          <BarChart width={150} height={40} data={props.chartData}>
            <Tooltip 
                contentStyle={{background: '#2a3447', borderRadius: '5px'}}
                labelStyle={{display: 'none'}}
                cursor={{fill: 'none'}}
            />
            <Bar dataKey={props.dataKey} fill={props.color} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BarChartBox;
