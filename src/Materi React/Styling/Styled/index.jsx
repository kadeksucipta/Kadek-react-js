import React from "react";
import styled from "styled-components";

const Button = styled.button`
    border: 2px solid black;
    background-color: #fff;
    color: black;
    padding: 14px 28px;
    font-size: 16px;
    cursor: pointer;
    border-color: rgb(255, 99, 125);
    color:  rgb(255, 64, 96);
    border-top-left-radius: 20px;
    border-top-right-radius: 60px;
    border-bottom-left-radius: 60px;
    border-bottom-right-radius: 40px;

    &:hover {
        background: rgb(255, 141, 160);
        color: white;
    }
`;

export default class Styled extends React.Component {

    render() {
        return(
            <div>
                <Button>Go eduwork</Button>
            </div>
        )
    }
}