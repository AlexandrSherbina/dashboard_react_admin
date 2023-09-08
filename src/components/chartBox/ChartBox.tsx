import React from 'react';
import './chartBox.scss';
import { Link } from 'react-router-dom';
import { LineChart, Line, Tooltip, ResponsiveContainer } from 'recharts';


type Props  = {
    color: string,
    icon: string,
    title: string,
    dataKey: string,
    number: number | string,
    percentage: number,
    chartData: object[]

}
  

const ChartBox: React.FC<Props> = (props) => {
    return (
      <div className="chartBox">
        <div className="boxInfo">
          <div className="title">
            <img src={props.icon} alt="" />
            <span>{props.title}</span>
          </div>
          <h1>{props.number}</h1>
          <Link to={"/"} style={{ color: props.color }}>
            View all
          </Link>
        </div>
        <div className="chartInfo">
          <div className="chart">
            <ResponsiveContainer width="99%" height="100%">
              <LineChart data={props.chartData}>
                <Line
                  type="monotone"
                  dataKey={props.dataKey}
                  stroke={props.color}
                  strokeWidth={2}
                  dot={false}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "transparent",
                    border: "none",
                  }}
                  labelStyle={{ display: "none" }}
                  position={{ x: 70, y: 80 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="texts">
            <div
              className="percentage"
              style={{ color: props.percentage < 0 ? "tomato" : "limegreen" }}
            >
              {props.percentage}%
            </div>
            <div className="duration">this month</div>
          </div>
        </div>
      </div>
    );
};

export default ChartBox;