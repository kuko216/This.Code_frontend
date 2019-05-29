import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';

import { Link } from 'react-router-dom';

const numberFormat = (n) => {
    const str = "" + n;
    const  pad = "0000";
    return pad.substring(0, pad.length - str.length) + str;
}

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

const Name = styled.h3`
    margin: 0;
    margin-left: 20px;
    color: ${oc.gray[9]};
`

const NumberLink = styled(Link)`
    &:link{
        text-decoration: none;
    }
    &:visited{
        text-decoration: none;
    }
    &:hover{
        text-decoration: none;
    }
    &:active{
        text-decoration: none;
    }
    cursor: pointer;
`

const Number = styled.h3`
    margin: 0;
    margin-left: 10px;
    color: ${oc.blue[9]};
`

const Spacer = styled.div`
    flex: 1;
`

const Succeed = styled.h3`
    margin: 0;
    margin-right: 20px;

    color: ${props => props.succeed?oc.green[5]:oc.red[5]};
`

const SucceedComponent = ({succeed}) => {
    if(succeed){
        return (
            <Succeed succeed={succeed?1:0}>성공</Succeed>
        );
    }else{
        return(
            <Succeed succeed={succeed?1:0}>실패</Succeed>
        );
    }
}

const LogCard = ({name, number, succeed}) => {
    return (
        <WhiteBox>
            <CardWrapper>
                <NumberLink to={"/problem/"+number}><Number>{numberFormat(number)}</Number></NumberLink>
                <Name>{name}</Name>
                <Spacer/>
                {SucceedComponent({succeed})}
            </CardWrapper>
        </WhiteBox>
    );
};

export default LogCard;