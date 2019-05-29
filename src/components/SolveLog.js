// @flow
import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';

import LogCard from './LogCard';

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
    render(){
        return (
            <Wrapper>
                <Title>풀이 기록</Title>
                <RankListWrapper>
                    {LogList.map((r, index) =>
                        <LogCard 
                            name={r.name}
                            number={r.number}
                            succeed={r.succeed}
                            key={index}
                        />    
                    )}
                </RankListWrapper>
            </Wrapper>
        )
    }
}

export default Rank;