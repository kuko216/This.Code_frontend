// @flow
import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';

const Number = styled.td`
    padding: 10px;
    font-weight: bold;
    vertical-align: top;
    color: black;
    border-bottom: 1px solid #ccc;
`

const PTitle = styled.td`
    width: 500px;
    padding: 10px;
    vertical-align: top;
    border-bottom: 1px solid #ccc;
`

const Row = styled.tr`
    background-color: white;
    &:hover{
        background-color: ${oc.gray[1]};
    }
`

const ProblemTableRow = ({id, title}) => {
    return (
        <tbody>
            <Row>
                <Number>0001</Number>
                <PTitle>dub test</PTitle>
            </Row>
            <Row>
                <Number>0002</Number>
                <PTitle>dub test2</PTitle>
            </Row>
        </tbody>
    );
};

export default ProblemTableRow;