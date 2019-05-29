import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';

const numberFormat = (n) => {
    const str = "" + n;
    const  pad = "0000";
    return pad.substring(0, pad.length - str.length) + str;
}


const WhiteBox = styled.div`
    margin: 0 auto;
    width: 1000px;
    background-color: white;
    border-radius: 3px;
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

const Wrapper = styled.div`
    width: 100%;
    padding: 30px;
    display: flex;
    flex-direction: column;
`

const Number = styled.h3`
    margin: 0;
    color: ${oc.indigo[5]};
`

const Title = styled.h1`
    margin: 0;
    font-size: 2.5rem;
`

const DescWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 70px;
`

const MiniTitle = styled.h2`
    margin: 0;
    font-size: 1.7rem;
`

const Border = styled.div`
    width: 60px;
    height: 3px;
    background-color: ${oc.indigo[7]};
    margin: 10px 0px;
`

const LongBorder = styled.div`
    width: 120px;
    height: 3px;
    background-color: ${oc.indigo[7]};
    margin: 10px 0px;
`

const MiniDesc = styled.h3`
    margin: 0;
    margin-top: 20px;
`


const ProblemCard = ({index, title}) => {
    return (
        <WhiteBox>
            <Wrapper>
                <Number>{numberFormat(1)}번 문제</Number>
                <Title>Dub Test 01</Title>
                <DescWrapper>
                    <MiniTitle>문제</MiniTitle>
                    <Border />
                    <MiniDesc>정수(integer) 한개를 입력받아 3번 출력해보자.</MiniDesc>
                </DescWrapper>
                <DescWrapper>
                    <MiniTitle>입력</MiniTitle>
                    <Border />
                    <MiniDesc>정수 한 개가 입력된다.</MiniDesc>
                </DescWrapper>
                <DescWrapper>
                    <MiniTitle>출력</MiniTitle>
                    <Border />
                    <MiniDesc>입력받은 정수를 공백으로 구분해 세 번 출력한다.</MiniDesc>
                </DescWrapper>
                <DescWrapper>
                    <MiniTitle>입력 예시</MiniTitle>
                    <LongBorder />
                    <MiniDesc>120</MiniDesc>
                </DescWrapper>
                <DescWrapper>
                    <MiniTitle>출력 예시</MiniTitle>
                    <LongBorder />
                    <MiniDesc>120 120 120</MiniDesc>
                </DescWrapper>
            </Wrapper>
        </WhiteBox>
    );
};

export default ProblemCard;