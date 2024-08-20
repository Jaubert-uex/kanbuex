"use client";

import styled from "styled-components";

export const Container = styled.div`


    #kanban {
        white-space: nowrap;
    }

    .sortable-lists {
        max-width: 75vw;
        overflow-x: scroll;
    }

    .list {
        border-radius: 8px;
        margin: 5px;
        background-color: rgba(192, 192, 192, 0.4);
        display: inline-block;
        vertical-align: top;
        white-space: normal;
    }

    .list-title {
        color: var(--dx-color-text);
        font-size: 16px;
        padding: 10px;
        padding-left: 30px;
        margin-bottom: -10px;
        font-weight: bold;
        cursor: pointer;
    }
    
    .add-item{
        background-color: #FFF;
        width: 100%;
        border-radius: 5px;
        display: flex;
        justify-content: space-evenly;
        margin-left: 10px;
    }

    .scrollable-list {
        height: 400px;
        width: 260px;
    }

    .sortable-cards {
        min-height: 380px;
    }

    .card {
        color: var(--dx-color-text);
        position: relative;
        background-color: var(--dx-component-color-bg);
        box-sizing: border-box;
        width: 95%;
        padding: 10px 20px;
        cursor: pointer;
        margin: auto;
    }

    .card-subject {
        padding-bottom: 10px;
    }

    .card-assignee {
        opacity: 0.6;
    }

    .card-priority {
        position: absolute;
        top: 10px;
        bottom: 10px;
        left: 5px;
        width: 5px;
        border-radius: 2px;
        background: #86c285;
    }

    .priority-1 {
        background: #adadad;
    }

    .priority-2 {
        background: #86c285;
    }

    .priority-3 {
        background: #edc578;
    }

    .priority-4 {
        background: #ef7d59;
    }
`;
