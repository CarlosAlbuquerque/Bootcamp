import React from 'react';
import { FiLogIn } from 'react-icons/fi';

import { Container, Content, Background } from './styles';
import logo from '../../assets/logo.svg';

const SignIn: React.FC = () => (
  <Container>

    <Content>
      <img src={logo} alt="GoBarber" />

      <form>
        <h1>Faça seu logon</h1>

        <input placeholder="E-mail" />

        <input type="password" placeholder="Password" />

        <button type="submit">Enviar</button>

        <a href="forgot">Esqueci minha senha</a>
      </form>

      <a href="create-account">
        <FiLogIn />
        Criar conta
      </a>
    </Content>

    <Background />

  </Container>
);

export default SignIn;
