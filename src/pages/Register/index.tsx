import React, { useCallback, useState } from 'react';
import { Alert, Keyboard } from 'react-native';
// import * as Yup from 'yup';

import { useNavigation } from '@react-navigation/native';

import logo from '../../assets/logo.png';
import api from '../../services/api';

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
import { ScrollView } from 'react-native-gesture-handler';

const Register: React.FC = () => {
  const [title, setTitle] = useState('');
  const [value, setValue] = useState('');
  const [type, setType] = useState('');
  const [category, setcategory] = useState('');
  const [focused, setFocused] = useState<Number>(0);

  const navigation = useNavigation();

  const handleCreateTransaction = useCallback(() => {
    try {
      if (title !== '' && value !== '' && type !== '' && category !== '') {
        api.post('/transactions', {
          title: title,
          value: value,
          type: type,
          category: category,
        });

        Alert.alert('Sucesso', 'Sua transação foi criada com sucesso!');

        setTitle('');
        setValue('');
        setType('');
        setcategory('');
        setFocused(0);

        navigation.navigate('Dashboard');
      } else {
        Alert.alert(
          'Ops!',
          'Verifique se todos os campos estão preenchidos por favor',
        );
      }
    } catch (err) {
      Alert.alert(
        'Erro',
        'Ocorreu um erro ao realizar cadastro, verifique os dados e tente novamente!',
      );
    }
    Keyboard.dismiss();
  }, [category, navigation, title, type, value]);

  return (
    <Container>
      <Header>
        <Image source={logo} />
      </Header>

      <ScrollView>
        <Title>Cadastro</Title>
        <Input
          placeholder="Nome"
          autoCorrect={false}
          autoCapitalize="none"
          underlineColorAndroid="transparent"
          value={title}
          onChangeText={text => setTitle(text)}
        />

        <Input
          placeholder="Preço"
          autoCorrect={false}
          keyboardType="numeric"
          autoCapitalize="none"
          underlineColorAndroid="transparent"
          value={value}
          onChangeText={text => setValue(text)}
        />

        <ContainerButton>
          <Button
            onPress={() => {
              setType('income');
              setFocused(1);
            }}
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              backgroundColor: focused === 1 ? '#cfecdc' : '#fff',
            }}
          >
            <IconIncome name="arrow-up-circle" size={25} color="#12A454" />
            <TextButton>Income</TextButton>
          </Button>

          <Button
            onFocus={() => setFocused(2)}
            onPress={() => {
              setType('outcome');
              setFocused(2);
            }}
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              backgroundColor: focused === 2 ? '#f8c5cd' : '#fff',
            }}
          >
            <IconIncome name="arrow-down-circle" size={25} color="#E83F5B" />
            <TextButton>Outcome</TextButton>
          </Button>
        </ContainerButton>

        <Input
          placeholder="Categoria"
          autoCorrect={false}
          autoCapitalize="none"
          underlineColorAndroid="transparent"
          value={category}
          onChangeText={text => setcategory(text)}
        />

        <ButtonEnvio onPress={handleCreateTransaction}>
          <TextButtonEnvio>Enviar</TextButtonEnvio>
        </ButtonEnvio>
      </ScrollView>
    </Container>
  );
};

export default Register;
