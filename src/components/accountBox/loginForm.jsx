import React, { useContext, useState } from "react";
import { AccountContext } from "./accountContext";
import { Marginer } from "../marginer";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from "./common";

export function LoginForm({ Login }) {
  const { switchToSignup } = useContext(AccountContext);
  const [details, setDetails] = useState({ email: "", password: "" });

  const submitHandler = (e) => {
    if (e.key === "Enter") {
      console.log("enter press here! ");
      loginHandler(e);
    }
  };

  const loginHandler = (e) => {
    e.preventDefault();

    Login(details);
  };

  return (
    <BoxContainer>
      <FormContainer onKeyPress={submitHandler}>
        <Input
          type="email"
          placeholder="Email"
          onChange={(e) => setDetails({ ...details, email: e.target.value })}
          value={details.email}
        />
        <Input
          type="password"
          placeholder="Password"
          onChange={(e) => setDetails({ ...details, password: e.target.value })}
          value={details.password}
        />
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <MutedLink href="#">Forget your password?</MutedLink>
      <Marginer direction="vertical" margin="1.6em" />
      <SubmitButton type="submit" onClick={loginHandler}>
        Signin
      </SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        Don't have an accoun?{" "}
        <BoldLink href="#" onClick={switchToSignup}>
          Signup
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}
