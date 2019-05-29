import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { observable, action } from 'mobx'
import { observer, inject } from 'mobx-react'

import * as ProblemApi from 'api/problem';

const numberFormat = (n) => {
    const str = "" + n;
    const  pad = "0000";
    return pad.substring(0, pad.length - str.length) + str;
}

const Component = styled.div`
    padding: 30px;
    width: 100%;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
`

const WhiteBox = styled.div`
    margin: 0 auto;
    width: 1000px;
    background-color: white;
    box-sizing: border-box;
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
    box-sizing: border-box;
`

const Number = styled.h3`
    margin: 0;
    color: ${oc.red[5]};
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
    background-color: ${oc.red[7]};
    margin: 10px 0px;
`

const LongBorder = styled.div`
    width: 120px;
    height: 3px;
    background-color: ${oc.red[7]};
    margin: 10px 0px;
`

const MiniDesc = styled.h3`
    margin: 0;
    margin-top: 20px;
`

@inject('userStore')
@observer
class ProblemCard extends React.Component{

    state = {
        index: this.props.match.params.index,
        title: '',
        description: '',
        input: '',
        output: '',
        exInput: '',
        exOutput: ''
    }

    componentDidMount(){
        const { index } = this.state;

        ProblemApi.detailProblem({ index })
        .then((result) => {
            console.log(result);
            this.setState({
                title: result.data.title,
                description: result.data.description,
                input: result.data.input,
                output: result.data.output,
                exInput: result.data.exInput,
                exOutput: result.data.exOutput
            });
        })
        .catch((result) => {
            console.log(result);
        });
    }

    render(){

        const { index, title, description, input, output, exInput, exOutput } = this.state;

        return (
            <Component>
                <WhiteBox>
                    <Wrapper>
                        <Number>{numberFormat(index)}번 문제</Number>
                        <Title>{title}</Title>
                        <DescWrapper>
                            <MiniTitle>문제</MiniTitle>
                            <Border />
                            <MiniDesc>{description}</MiniDesc>
                        </DescWrapper>
                        <DescWrapper>
                            <MiniTitle>입력</MiniTitle>
                            <Border />
                            <MiniDesc>{input}</MiniDesc>
                        </DescWrapper>
                        <DescWrapper>
                            <MiniTitle>출력</MiniTitle>
                            <Border />
                            <MiniDesc>{output}</MiniDesc>
                        </DescWrapper>
                        <DescWrapper>
                            <MiniTitle>입력 예시</MiniTitle>
                            <LongBorder />
                            <MiniDesc>{exInput}</MiniDesc>
                        </DescWrapper>
                        <DescWrapper>
                            <MiniTitle>출력 예시</MiniTitle>
                            <LongBorder />
                            <MiniDesc>{exOutput}</MiniDesc>
                        </DescWrapper>
                    </Wrapper>
                </WhiteBox>
            </Component>
        );
    }
};

export default ProblemCard;