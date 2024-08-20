"use client";

import NextLink from "next/link";
import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled.li`
  list-style: none;
  padding: 0 20px 20px 20px;
  display: flex;
  flex-direction: column;
  width: 250px;
  height: 100%;
  gap: 8px;
  border-right: 1px solid hsl(240, 7%, 23%);
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
`;

export const Link = motion(styled(NextLink)`
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 16px 15px;
  border-radius: 15px;
  color: hsl(0, 0%, 60%);
`);

export const LinkText = styled.span`
  margin-left: 10px;
  font-size: 16px;
`;
