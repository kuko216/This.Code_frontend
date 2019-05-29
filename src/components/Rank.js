// @flow
import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import * as AuthApi from 'api/auth';

import RankCard from './RankCard';

const Wrapper = styled.div`
    padding: 30px;
    width: 100%;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
`

const Title = styled.h1`
    margin: 0;
`

const RankListWrapper = styled.div`
    margin-top: 30px;
    width: 100%;
    height: 100%;
    display: flex;
    box-sizing: border-box;
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

    state = {
        rankList: []
    }

    componentDidMount(){
        AuthApi.ranking()
        .then((result)=>{
            this.setState({
                rankList: result.data
            });
            console.log(result);
        })
        .catch((result) => {
            console.log(result);
        })
    }

    render(){
        return (
            <Wrapper>
                <Title>유저 랭킹</Title>
                <RankListWrapper>
                    {this.state.rankList.map((r, index) =>
                        <RankCard 
                            name={r.username}
                            solvedProblem={r.point}
                            desc={r.desc}
                            index={index+1}
                            key={index}
                        />    
                    )}
                </RankListWrapper>
            </Wrapper>
        )
    }
}

export default Rank;