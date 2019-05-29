// @flow
import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';

import RankCard from './RankCard';

const Title = styled.h1`
    margin: 0;
`

const RankListWrapper = styled.div`
    margin-top: 30px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`

const RankList = [
    {
        name: 'haya',
        solvedProblem: 42,
        desc: 'gsm탈출은지능순'
    },
    {
        name: 'dosung',
        solvedProblem: 34,
        desc: '영하야라이드넣어줘'
    }
]

class Rank extends React.Component {
    render(){
        return (
            <>
                <Title>유저 랭킹</Title>
                <RankListWrapper>
                    {RankList.map((r, index) =>
                        <RankCard 
                            name={r.name}
                            solvedProblem={r.solvedProblem}
                            desc={r.desc}
                            index={index+1}
                            key={index}
                        />    
                    )}
                </RankListWrapper>
            </>
        )
    }
}

export default Rank;