import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import ThemePallete from 'ba-utils/themePalette';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from 'recharts';
import green from '@material-ui/core/colors/green';
import { data1 } from './sampleData';

const theme = createMuiTheme(ThemePallete.blueTheme);
const color = ({
  primary: theme.palette.primary.main,
  primarydark: theme.palette.primary.dark,
  secondary: theme.palette.secondary.main,
  secondarydark: theme.palette.secondary.dark,
  third: green[500],
  thirddark: green[900],
});

function AreaStacked() {
  return (
    <AreaChart
      width={800}
      height={450}
      data={data1}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <XAxis dataKey="name" />
      <YAxis />
      <CartesianGrid strokeDasharray="3 3" />
      <Tooltip />
      <Area type="monotone" dataKey="uv" stackId="1" stroke={color.primarydark} fillOpacity="0.8" fill={color.primary} />
      <Area type="monotone" dataKey="pv" stackId="1" stroke={color.secondary} fillOpacity="0.8" fill={color.secondarydark} />
      <Area type="monotone" dataKey="amt" stackId="1" stroke={color.third} fillOpacity="0.8" fill={color.thirddark} />
    </AreaChart>
  );
}

export default AreaStacked;
