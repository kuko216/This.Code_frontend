// @flow
import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';

import { NavLink, Route } from 'react-router-dom';

import ProblemList from 'components/ProblemList';
import SolveLog from 'components/SolveLog';
import Rank from 'components/Rank';

const Wrapper = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
`

const SideNav = styled.div`
    background-color: white;
    height: 100%;
    min-width: 300px;
    display: flex;
    flex-direction: column;
`

const Content = styled.div`
    width: 100%;
    height: 100%;
`

const UserProfile = styled.div`
    padding: 30px;
    display: flex;
    flex-direction: column;
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

const NavItem = styled(NavLink)`
    height: 50px;
    width: 100%;
    box-sizing: border-box;
    border-right: 3px solid ${oc.gray[4]};
    padding-left: 30px;
    color: ${oc.gray[8]};
    &:link{
        text-decoration: none;
    }
    &:visited{
        text-decoration: none;
    }
    &:hover{
        background-color: ${oc.gray[0]}
        text-decoration: none;
    }
    &:active{
        text-decoration: none;
    }

    &.active{
        color: ${oc.indigo[7]};
        border-right: 3px solid ${oc.indigo[5]};
    }
`

const NavText = styled.h3`
    margin: 0;
    line-height: 50px;
    font-size: 1.5rem;
    font-weight: normal;
`

class PageTemplate extends React.Component {
    render(){
        return (
            <Wrapper>
                <SideNav>
                    <UserProfile>
                        <Username>Haya0206</Username>
                        <UserIntro>I love codeup.</UserIntro>
                    </UserProfile>
                    <NavItem exact to="/" activeClassName="active"><NavText>홈</NavText></NavItem>
                    <NavItem to="/solvelog" activeClassName="active"><NavText>풀이 현황</NavText></NavItem>
                    <NavItem to="/problem" activeClassName="active"><NavText>문제</NavText></NavItem>
                    <NavItem to="/rank" activeClassName="active"><NavText>랭킹</NavText></NavItem>
                </SideNav>
                <Content>
                    <Route path="/solvelog" component={SolveLog}/>
                    <Route path="/problem" component={ProblemList}/>
                    <Route path="/rank" component={Rank}/>
                </Content>
            </Wrapper>     
        )
    }
}

export default PageTemplate;