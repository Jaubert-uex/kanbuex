"use client";

import styled from "styled-components";

export const Container = styled.div`
    display: flex;

    .content-box {
        display: flex;
        gap: .5rem;
        background: #FFFFFF20;
        border-radius: 5px;
        padding: .2rem;
    }

    .profile-picture {
        width: auto;
        height: 100%;
        cursor: pointer;
        border-radius: 5px;
    }

    .info {
        display: flex;
        flex-direction: column;
    }

    p {
        color: #FFF;
    }

    .name {
        font-weight: bold;
        font-size: .7rem;
    }

    .occupation {
        font-size: .5rem;
    }

    .menu {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        font-size: .7rem;
    }
`;
