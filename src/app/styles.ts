"use client";
import styled from "styled-components";

export const Page = styled.div`
  padding: 10px 10px 10px 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Layout = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  gap: 10px;
  background-color: hsl(228, 6%, 15%);
`;

export const RowContainer = styled.div`
  flex: 1;
  overflow: auto;
`;

export const ChartContainer = styled.div`
  background-color: hsl(240, 7%, 23%);
  border-radius: 20px;
  padding: 20px 100px;
`;
