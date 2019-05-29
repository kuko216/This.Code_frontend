// @flow
import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';

import img1 from 'image/1.jpg';
import img2 from 'image/2.jpg';

const WhiteBox = styled.div`
    width: 100%;
    height: 100%;
    background-color: white;
    display: flex;
    flex-direction: column;
`

const Div1 = styled.div`
    position: relative;
    height: 100%;
    background-image: url(${img1});
    background-position: center;
`

const Div2 = styled.div`
    position: relative;
    height: 100%;
    background-image: url(${img2});
    background-position: center;
`

const Mask = styled.div`
    width: 100%;
    height: 100%;
    background-color: black;
    opacity: 0.4;
`

const Desc = styled.div`
    position: absolute;
    z-index: 10;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`

const DescText = styled.h2`
    margin: 0;
    color: white;
    font-size: 2rem;
`

class Intro extends React.Component {
    render(){
        return (
            <WhiteBox>
                <Div1>
                    <Desc>
                        <DescText>코딩 문제를 풀며 실력을 향상시키세요.</DescText>
                    </Desc>
                    <Mask />
                </Div1>
                <Div2>
                    <Desc>
                        <DescText>Discord와 연동하여 어디서나 간편하게 문제를 풀어보세요.</DescText>
                    </Desc>
                    <Mask />
                </Div2>
            </WhiteBox>
        )
    }
}

export default Intro;