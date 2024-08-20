"use client";

import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 60px;
    background-color: black;
    border-radius: 10px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: .5rem;
    gap: 1rem;
    cursor: pointer;

    .notification {
        background: #F00;
        color: #FFF;
        width: 12px;
        height: 12px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        font-size: .6rem;
        top: .5rem;
        right: -.3rem;
        cursor: pointer;
    }

    .bell {
        height: 100%;
        display: flex;
        align-items: center;
        position: relative;
    }

    .menu-item {
        list-style: none;
        display: flex;
    }

    .menu-item {
        display: flex;
        align-items: center;
        gap: .5rem;
    }
`;
