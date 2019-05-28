// @flow
import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';

import ProblemTableRow from './ProblemTableRow';

const Title = styled.h1`
    margin: 0;
`

const Table = styled.table`
    margin: 30px auto;
    border-collapse: collapse;
    text-align: left;
    line-height: 1.5;
`

const Head = styled.thead`
    border-right: 1px solid #ccc;
    border-left: 1px solid #ccc;
    background: ${oc.indigo[5]};
`

const Number = styled.td`
    padding: 10px;
    font-weight: bold;
    vertical-align: top;
    color: white;
`

const PTitle = styled.td`
    width: 300px;
    padding: 10px;
    font-weight: bold;
    vertical-align: top;
    border-bottom: 1px solid #ccc;
    color: white;
`


class ProblemList extends React.Component {
    render(){
        return (
            <>
                <Title>문제 리스트</Title>
                <Table>
                    <Head>
                        <Number>문제번호</Number>
                        <PTitle>문제명</PTitle>
                    </Head>
                    <ProblemTableRow />
                </Table>
            </>
        )
    }
}

export default ProblemList;