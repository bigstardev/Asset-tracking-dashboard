import React from "react";
import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { PieChart, Pie, Cell } from "recharts";
import { totalValue } from "../../Utils";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "0px 16px",
    [theme.breakpoints.down("md")]: {
      padding: 0,
    },
  },
  title: {
    fontSize: "1.5rem",
    padding: "16px 0px",
  },
}));
export default function Chart({ data, totalData }) {
  const classes = useStyles();
  const currentTypeSum = totalValue(data);
  const totalSum = totalValue(totalData);
  const dataSet = [
    { name: "Current Type", value: currentTypeSum },
    { name: "The Rest", value: totalSum - currentTypeSum },
  ];
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };
  return (
    <Box className={classes.root}>
      <Typography className={classes.title}>Portfolio</Typography>
      <Box>
        <PieChart width={340} height={340}>
          <Pie
            data={dataSet}
            cx={170}
            cy={170}
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={165}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </Box>
      <Box className={classes.title}>$ {currentTypeSum}</Box>
    </Box>
  );
}
