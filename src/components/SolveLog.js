// @flow
import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';

import LogCard from './LogCard';

import * as ProblemApi from 'api/problem';

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

const LogList = [
    {
        name: 'haya',
        number: 12,
        succeed: false
    },
    {
        name: 'dosung',
        number: 17,
        succeed: true
    }
]

class Rank extends React.Component {

    state = {
        LogList: []
    }

    componentDidMount(){
        ProblemApi.ShowLog()
        .then((result) => {
            this.setState({
                LogList: result.data
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
                <Title>풀이 기록</Title>
                <RankListWrapper>
                    {this.state.LogList.slice(0).reverse().map((r, index) =>
                        <LogCard 
                            name={r.username}
                            number={r.problemnum}
                            succeed={r.isCorrect}
                            key={index}
                        />
                    )}
                </RankListWrapper>
            </Wrapper>
        )
    }
}

export default Rank;