import React, {useState} from 'react'
import styled from 'styled-components';
import InputField from '../src/components/Input/InputField';
import SubmitButton from "../src/components/Button/SubmitButton";
import useUser from "../src/services/users/useUser";
import {fetcher} from "../src/utils/fetchJson";

const Login = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const { mutateUser } = useUser({
        id: '60035f2280bf0b22cbd4c018',
        redirectTo: '/',
        redirectIfFound: true,
    })

    const [errorMsg, setErrorMsg] = useState('')

    const handleSubmit = async () => {
        try {
            await mutateUser(fetcher('/api/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                data: {email: login, password},
            }))
        } catch (error) {
            console.error('An unexpected error happened:', error)
            setErrorMsg(error.data.message)
        }
    }

    return (
        <PageWrapper>
            <LoginBox>
                <Title>Log in</Title>
                <InputField type="email" handleValue={setLogin} label={'Login'}/>
                <InputField handleValue={setPassword} label={'Password'}/>
                <SubmitButton onClick={() => handleSubmit()}>Login</SubmitButton>
                {errorMsg}
            </LoginBox>
        </PageWrapper>
    );
}

export default Login;

const PageWrapper = styled.main`
  display: flex;
  width: 100%;
  justify-content: center;
`;

const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  justify-content: center;
`;

const Title = styled.h3`

`
