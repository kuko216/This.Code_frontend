import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';

const WhiteBox = styled.div`
    width: 100%;
    height: 50px;
    background-color: white;
    border-radius: 5px;
    margin-bottom: 5px;
`

const CardWrapper = styled.div`
    width: 100%;
    height: 100%;
    padding: 10px;
    display: flex;
`

const Index = styled.h3`
    margin: 0;
    margin-right: 10px;
`

const Title = styled.h3`
    margin: 0;
`

const numberFormat = (n) => {
    const str = "" + n;
    const  pad = "0000";
    return pad.substring(0, pad.length - str.length) + str;
}

const ProblemCard = ({index, title}) => {
    return (
        <WhiteBox>
            <CardWrapper>
                <Index>{numberFormat(index)}</Index>
                <Title>{title}</Title>
            </CardWrapper>
        </WhiteBox>
    );
};

export default ProblemCard;