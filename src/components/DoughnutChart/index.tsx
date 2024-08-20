import PieChart, {
  Legend,
  Series,
  Tooltip,
  Format,
  Label,
  Connector,
    Export,
    Title
} from "devextreme-react/pie-chart";

import { populationByRegions } from "./data";

function customizeTooltip(arg: { valueText: string; percent: number }) {
  return {
    text: `${arg.valueText} - ${(arg.percent * 100).toFixed(2)}%`,
  };
}

export default function DoughnutChart() {
  return (
    <PieChart
        style={{
          color: "white",
        }}
      id="pie"
      type="doughnut"
      // title="The Population of Continents and Regions"
      palette="Soft Pastel"
      dataSource={populationByRegions}
    >
      <Series argumentField="region">
        <Label visible={true} format="millions">
          <Connector visible={true} />
        </Label>
      </Series>
      <Legend margin={0} horizontalAlignment="right" verticalAlignment="top" />
      <Export enabled={true} />
      <Tooltip enabled={true} customizeTooltip={customizeTooltip}>
        <Format type="millions" />
      </Tooltip>
      <Title text='The Population of Continents and Regions' font={{
        color: "white",
      }}/>
    </PieChart>
  );
}
