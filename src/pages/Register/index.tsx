import React from 'react';

import logo from '../../assets/logo.png';

import {
  Container,
  Header,
  Image,
  Title,
  Input,
  ContainerButton,
  Button,
  IconIncome,
  TextButton,
  ButtonEnvio,
  TextButtonEnvio,
} from './styles';

const Register: React.FC = () => {
  return (
    <Container>
      <Header>
        <Image source={logo} />
      </Header>

      <Title>Cadastro</Title>
      <Input
        placeholder="Nome"
        autoCapitalize="none"
        underlineColorAndroid="transparent"
      />

      <Input
        placeholder="Preço"
        autoCapitalize="none"
        underlineColorAndroid="transparent"
      />

      <ContainerButton>
        <Button>
          <IconIncome name="arrow-up-circle" size={25} color="#12A454" />
          <TextButton>Income</TextButton>
        </Button>

        <Button>
          <IconIncome name="arrow-down-circle" size={25} color="#E83F5B" />
          <TextButton>Outcome</TextButton>
        </Button>
      </ContainerButton>

      <Input
        placeholder="Categoria"
        autoCapitalize="none"
        underlineColorAndroid="transparent"
      />

      <ButtonEnvio>
        <TextButtonEnvio>Enviar</TextButtonEnvio>
      </ButtonEnvio>
    </Container>
  );
};

export default Register;
