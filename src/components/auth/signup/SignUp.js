// @flow
import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import oc from 'open-color';
import { Link } from 'react-router-dom';

import * as AuthApi from 'api/auth';

const SignUpCard = styled.div`
    background-color: white;
    margin: auto;
    width: 650px;
    z-index: 2;
    @media (max-width: 650px){
        width: 100%;
        height: 100%;
        margin: auto;
    }
`

const FormWrapper = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    padding: 3rem;
    padding-top: 3rem;
`

const SignUpForm = styled.form`
    display: flex;
    flex-direction: column;
`

const StyledInput = styled.input`
    margin-top: 0.5rem;
    border: none;
    height: 2.5rem;
    width: 100%;
    background-color: ${oc.gray[2]}
    border-radius: 3px;
    font-size: 1rem;
    &::placeholder {
        padding-left: 0.5rem;
        font-size: 1rem;
    }
`

const LabelWrapper = styled.div`
    display: flex;
    text-align: left;
`

const Label = styled.h3`
    margin-right: 1rem;
    width: 30%;
`

const H1 = styled.h1`
    margin: 0;
    margin-bottom: 1rem;
    font-size: 2.5rem;
`

const StyledButton = styled.button`
    margin-top: 1rem;
    border: none;
    height: 2.5rem;
    background-color: ${oc.gray[7]}
    color: white;
    border-radius: 3px;
    font-size: 1.5rem;
`

const Spacer = styled.div`
    flex: 1;
`

const ToSignIn = styled(Link)`
    margin-top: 0.7rem;
    font-size: 1rem;
    color: ${oc.gray[6]}

    &:visited{
        color: ${oc.gray[6]}
    }

    &:hover{
        color: ${oc.gray[7]}
    }
`

const Separator = styled.div`
    height: 1px;
    width: 100%;
    background: #ced4da;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
    position: relative;
`

const Or = styled.div`
    position: absolute;
    left: 50%;
    -webkit-transform: translate(-50%,-50%);
    -ms-transform: translate(-50%,-50%);
    transform: translate(-50%,-50%);
    background: #fff;
    padding-left: .5rem;
    padding-right: .5rem;
    font-size: .85em;
    font-weight: 600;
    color: #212529;
`

const SocialButtons = styled.div`
    margin: auto 0;
`

const FaceBookButton = styled.div`
    display: flex;
    background-color: ${oc.blue[7]};
    color: white;
    height: 2.5rem;
    line-height: 2.4rem;
    border-radius: 3px;
    &:hover{
        background-color: ${oc.blue[8]};
    }
`

const TwitterButton = styled.div`
    display: flex;
    background-color: ${oc.indigo[5]};
    color: white;
    margin-top: 0.5rem;
    height: 2.5rem;
    line-height: 2.4rem;
    border-radius: 3px;
    &:hover{
        background-color: ${oc.indigo[7]};
    }
`

const GoogleButton = styled.div`
    display: flex;
    background-color: ${oc.red[7]};
    color: white;
    margin-top: 0.5rem;
    height: 2.5rem;
    line-height: 2.4rem;
    border-radius: 3px;
    &:hover{
        background-color: ${oc.red[8]};
    }
`

const H3 = styled.h3`
    margin: 0;
    margin-left: 1rem;
    font-size: 1.5rem;
`

class SignUp extends React.Component {

    state = {
        id: '',
        password: '',
        username: '',
        description: ''
    }

    onChange = (e) => {
        const { name, value } = e.target; 
        this.setState({
            [name]: value
        });
    }

    onSubmit = (e) => {
        e.preventDefault();

        AuthApi.localRegister(
            {
                id: this.state.id,
                password: this.state.password,
                username: this.state.username,
                description: this.state.description
            }
        )
        .then((result) => {
            console.log(result);
            console.log('성공');
        })
        .catch((result) => {
            console.log(result);
            console.log('실패');
        });
    }

    render(){
        const { id, username, password, description } = this.state;

        return(
            <SignUpCard>
                <FormWrapper>
                    <H1>회원가입</H1>
                    <SignUpForm onSubmit={this.onSubmit}>
                        <LabelWrapper>
                            <Label>Id</Label>
                            <StyledInput type="text" name="id" placeholder="Id" value={id} onChange={this.onChange}/>
                        </LabelWrapper>
                        <LabelWrapper>
                            <Label>비밀번호</Label>
                            <StyledInput type="password" name="password" placeholder="Password" value={password} onChange={this.onChange}/>
                        </LabelWrapper>
                        <LabelWrapper>
                            <Label>닉네임</Label>
                            <StyledInput type="text" name="username" placeholder="Username" value={username} onChange={this.onChange}/>
                        </LabelWrapper>
                        <LabelWrapper>
                            <Label>한줄 소개</Label>
                            <StyledInput type="text" name="description" placeholder="Description" value={description} onChange={this.onChange}/>
                        </LabelWrapper>
                        <StyledButton>가입하기</StyledButton>
                    </SignUpForm>
                    <ToSignIn to='/auth/signin'>계정이 이미 있으신가요?로그인</ToSignIn>
                </FormWrapper>
            </SignUpCard>
        )
    }
}

export default SignUp;