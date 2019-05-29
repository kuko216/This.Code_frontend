// @flow
import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';

import { observable, action } from 'mobx'
import { observer, inject } from 'mobx-react'

import { Link, NavLink, Route } from 'react-router-dom';
import { Redirect } from 'react-router'

import Intro from 'components/Intro';
import ProblemList from 'components/ProblemList';
import Problem from 'components/Problem';
import SolveLog from 'components/SolveLog';
import Rank from 'components/Rank';


const Wrapper = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    overflow: hidden;

    @media(max-width:900px){
        flex-direction: column;
    }
`

const SideNav = styled.div`
    background-color: white;
    display: flex;
    flex-direction: column;
    height: 100%;
    min-width: 300px;

    @media(max-width:900px){
        flex-direction: row;
        width: 100%;
        max-height: 55px;
        min-height: 55px;
    }
`

const Content = styled.div`
    width: 100%;
    height: 100%;
    //padding: 30px;
    overflow: auto;
    box-sizing: border-box;
`

const UserProfile = styled.div`
    padding: 30px;
    display: flex;
    flex-direction: column;

    @media(max-width:900px){
        display: none;
    }
`

const Username = styled.h1`
    margin: 0;
    font-size: 2rem;
    overflow-wrap: break-word;
`

const UserIntro = styled.span`
    font-size: 1rem;
    overflow-wrap: break-word;
`
const NavText = styled.h3`
    margin: 0;
    line-height: 50px;
    font-size: 1.5rem;
    font-weight: normal;
`

const NavItem = styled(NavLink)`
    height: 50px;
    width: 100%;
    box-sizing: border-box;
    padding-left: 30px;
    color: ${oc.gray[8]};
    &:link{
        text-decoration: none;
    }
    &:visited{
        text-decoration: none;
    }
    &:hover{
        background-color: ${oc.gray[0]};
        text-decoration: none;
    }
    &:active{
        text-decoration: none;
    }

    &.active{
        ${NavText}{
            font-weight: bold;
        }
        color: ${oc.gray[9]};
        border-right: 5px solid ${oc.gray[7]};
    }

    @media(max-width:900px){
        padding-left: 0px;
        height: 100%;
        width: 25%;
        text-align: center;

        &.active{
            ${NavText}{
                font-weight: bold;
            }
            color: ${oc.gray[9]};
            border-right: none;
            border-bottom: 5px solid ${oc.gray[7]};
        }
    }
`

const ToLogin = styled(Link)`
    color: ${oc.indigo[6]}
    font-size: 1.5rem;

    &:link{
        text-decoration: none;
    }
    &:visited{
        text-decoration: none;
    }
    &:hover{
        color: ${oc.indigo[9]}
        text-decoration: none;
    }
    &:active{
        text-decoration: none;
    }
`


@inject('userStore')
@observer
class PageTemplate extends React.Component {
    ReturnUserProfile = () => {
        const { username, description } = this.props.userStore;
        if(username && description){
            return (
                <UserProfile>
                    <Username>{username}</Username>
                    <UserIntro>{description}</UserIntro>
                </UserProfile>
            )
        } else {
            return (
                <UserProfile>
                    <ToLogin to="/auth/signin">로그인 해주세요</ToLogin>
                </UserProfile>
            )
        }
    }
    render(){

        return (
            <Wrapper>
                <SideNav>
                    {this.ReturnUserProfile()}
                    <NavItem exact to="/" activeClassName="active"><NavText>홈</NavText></NavItem>
                    <NavItem to="/solvelog" activeClassName="active"><NavText>풀이 현황</NavText></NavItem>
                    <NavItem to="/problems" activeClassName="active"><NavText>문제</NavText></NavItem>
                    <NavItem to="/rank" activeClassName="active"><NavText>랭킹</NavText></NavItem>
                </SideNav>
                <Content>
                    <Route exact path="/" component={Intro}/>
                    <Route path="/solvelog" component={SolveLog}/>
                    <Route path="/problems" component={ProblemList}/>
                    <Route path="/problem/:index" component={Problem}/>
                    <Route path="/rank" component={Rank}/>
                </Content>
            </Wrapper>     
        )
    }
}

export default PageTemplate;