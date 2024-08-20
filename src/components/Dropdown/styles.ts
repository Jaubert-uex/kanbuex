"use client";

import styled from "styled-components";

export const Container = styled.div`
    position: relative;

    .box {
        position: absolute;
        z-index: 10;
        margin: 0.25rem auto 0 auto;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
        padding: .5rem;
        border-radius: 0.5rem;
        background-color: white;
        right: 0;
        width: 150px;
    }

    .polygon {
        position: absolute;
        top: -0.5rem;
        right: 2.5rem;
        margin: auto;
        width: 1rem;
        height: 1rem;
        background-color: white;
        clip-path: polygon(50% 0, 100% 50%, 0 50%);
    }

    .exit{
        background: #FFF;
    }
`;
