import * as S from "./styles";
import {
  ArgumentAxis,
  Chart,
  CommonSeriesSettings,
  Grid,
  Legend,
  Margin,
  Series,
  Subtitle,
  Title,
  Tooltip,
} from "devextreme-react/chart";
import React from "react";

import service from "./data";

const countriesInfo = service.getCountriesInfo();
const energySources = service.getEnergySources();

export default function LineChart() {
  return (
    <Chart palette="Violet" dataSource={countriesInfo}>
      <CommonSeriesSettings argumentField="country" />
      {energySources.map((item) => (
        <Series key={item.value} valueField={item.value} name={item.name} />
      ))}
      <Margin bottom={20} />
      <ArgumentAxis
        valueMarginsEnabled={false}
        discreteAxisDivisionMode="crossLabels"
      >
        <Grid visible={true} />
      </ArgumentAxis>
      <Legend
        verticalAlignment="bottom"
        horizontalAlignment="center"
        itemTextPosition="bottom"
      />
      <Title
        text="Energy Consumption in 2004"
        font={{
          color: "white",
        }}
      >
        <Subtitle
          text="(Millions of Tons, Oil Equivalent)"
          font={{
            color: "white",
          }}
        />
      </Title>
      <Tooltip enabled={true} />
    </Chart>
  );
}
