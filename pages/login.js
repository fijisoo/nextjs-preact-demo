import React, { useEffect, useState } from "react";
import styled from "styled-components";
import InputField from "../src/components/Input/InputField";
import useUser from "../src/services/users/useUser";
import { fetcher } from "../src/utils/fetchJson";
import Cookies from "js-cookie";
import { Button } from "../src/components/Button/Button";
import { OK, IconWrapper, EmptyCircle } from "../src/components/Icon/Icon";

const Login = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [repeatedPassword, setRepeatedPassword] = useState("");
  const [name, setName] = useState("");
  const [loggedUser, setLoggedUser] = useState("");
  const [isLoginTabActive, setLoginTabActive] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");

  const { mutateUser } = useUser({
    id: loggedUser,
    redirectTo: "/",
    redirectIfFound: true,
  });

  useEffect(() => {
    const userFromCookie = Cookies.get("user-id");
    if (userFromCookie) setLoggedUser(userFromCookie);
  }, []);

  const handleSubmit = async (eventName) => {
    if (
      (isLoginTabActive && eventName === "register") ||
      (!isLoginTabActive && eventName === "login")
    ) {
      setLoginTabActive((prevState) => !prevState);
    } else {
      try {
        await mutateUser(
          await fetcher(isLoginTabActive ? "/auth/login" : "/auth/register", {
            method: "POST",
            data: { email: login, password, ...(!isLoginTabActive && {name}) },
          })
        );
      } catch (error) {
        setErrorMsg(error?.data?.message);
      }
    }
  };

  return (
    <PageWrapper>
      <Title>WORKHUB</Title>
      <FormBox onSubmit={(e) => {
        e.preventDefault();
      }}>
        <InputFieldStyled
          type="email"
          handleValue={setLogin}
          label={"EMAIL:"}
          name="email"
        />
        {!isLoginTabActive && (
          <InputFieldStyled
            handleValue={setName}
            label={"NAME:"}
            name="name"
          />
        )}
        <InputFieldStyled
          type="password"
          handleValue={setPassword}
          label={"PASSWORD:"}
          name="password"
        />
        {!isLoginTabActive && (
          <InputFieldStyled
            type="password"
            handleValue={setRepeatedPassword}
            label={"REPEAT PASSWORD:"}
            name="repeatPassword"
          />
        )}
        <ButtonStyled
          onClick={() => handleSubmit("login")}
          type={!isLoginTabActive ? 'button' : 'submit'}
          iconComponent={
            <IconWrapper color={!isLoginTabActive ? 'yellow' : 'green'}>
              {isLoginTabActive ? <OK /> : <EmptyCircle />}
            </IconWrapper>
          }
          center={true}
        >
          LOGIN
        </ButtonStyled>

        <ButtonStyled
          onClick={() => handleSubmit("register")}
          type={!isLoginTabActive ? 'submit' : 'button'}
          iconComponent={
            <IconWrapper color={!isLoginTabActive ? 'green' : 'yellow'}>
              {!isLoginTabActive ? <OK /> : <EmptyCircle />}
            </IconWrapper>
          }
          center={true}
        >
          REGISTER
        </ButtonStyled>
        {errorMsg}
      </FormBox>
    </PageWrapper>
  );
};

export default Login;

const InputFieldStyled = styled(InputField)`
  margin-top: 13px;
`;

const ButtonStyled = styled(Button)`
  &:first-of-type {
    margin-top: 30px;
  }
  margin-top: 10px;
`;

const PageWrapper = styled.main`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

const FormBox = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  justify-content: center;
`;

const Title = styled.h1`
  display: flex;
  font-family: "Montserrat Subrayada", sans-serif;
  margin-top: -100px;
  font-style: normal;
  font-weight: 500;
  font-size: 3em;
  line-height: 124px;
  text-align: center;
`;
