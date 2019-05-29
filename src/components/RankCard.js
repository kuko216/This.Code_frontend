import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';

import { Link } from 'react-router-dom';

const WhiteBox = styled.div`
    margin: 0 auto;
    width: 1000px;
    height: 50px;
    background-color: white;
    margin-bottom: 5px;

    @media (max-width: 1400px){
        width: 700px;
    }

    @media (max-width: 1070px){
        width: 500px;
    }

    @media (max-width: 900px){
        width: 100%;
    }
`

const CardWrapper = styled.div`
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    padding: 10px;
    display: flex;
`

const Rank = styled.h3`
    margin: 0;
    margin-left: 10px;
    margin-right: 30px;
    color: ${oc.gray[9]};


`

const Name = styled.h3`
    margin: 0;
    color: ${oc.gray[9]};
`

const Spacer = styled.div`
    flex: 1;
`

const Desc = styled.h3`
    margin: 0;
    color: ${oc.gray[9]};

`

const SolvedProblem = styled.h3`
    margin: 0;
    color: ${oc.gray[9]};
    margin-right: 20px;
`

const ProblemCard = ({index, name, solvedProblem, desc }) => {
    return (

        <WhiteBox>
            <CardWrapper>
                <Rank>{(index)}</Rank>
                <Name>{name}</Name>
                <Spacer />
                <SolvedProblem>해결한 문제 수: {solvedProblem}</SolvedProblem>
            </CardWrapper>
        </WhiteBox>
    );
};

export default ProblemCard;