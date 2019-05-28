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
    width: 300px;
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
    height: 30px;
    width: 100%;
    background-color: ${oc.gray[1]};
    box-sizing: border-box;
    border-right: 3px solid ${oc.gray[4]};
    &.active{
        border-right: 3px solid ${oc.gray[7]};
    }
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
                    <NavItem exact to="/" activeClassName="active">홈</NavItem>
                    <NavItem to="/solvelog" activeClassName="active">풀이 현황</NavItem>
                    <NavItem to="/problem" activeClassName="active">문제</NavItem>
                    <NavItem to="/rank" activeClassName="active">랭킹</NavItem>
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