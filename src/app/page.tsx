"use client";
import React from "react";

import * as S from "./styles";
import LineChart from "@/components/LineChart";
import DoughnutChart from "@/components/DoughnutChart";

export default function Home() {
  return (
    <S.Page>
      <S.ChartContainer>
        <LineChart />
      </S.ChartContainer>
      <S.ChartContainer>
        <DoughnutChart />
      </S.ChartContainer>
    </S.Page>
  );
}
