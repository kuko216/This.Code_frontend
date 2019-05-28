// @flow
import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';

import { NavLink, Route } from 'react-router-dom';

import ProblemList from 'components/ProblemList';

const Wrapper = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
`

const SideNav = styled.div`
    background-color: white;
    height: 100%;
    width: 300px;
`

const Content = styled.div`
    width: 100%;
    height: 100%;
`

const NavContent = styled.div`
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

class PageTemplate extends React.Component {
    render(){
        return (
            <Wrapper>
                <SideNav>
                    <NavContent>
                        <Username>Haya0206</Username>
                        <UserIntro>I love codeup.</UserIntro>
                        <NavLink to="/problem" className="item">문제</NavLink>
                    </NavContent>
                </SideNav>
                <Content>
                    <Route path="/problem" component={ProblemList}/>
                </Content>
            </Wrapper>     
        )
    }
}

export default PageTemplate;