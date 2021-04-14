import styled from 'styled-components/native';

import Icon from 'react-native-vector-icons/Feather';

interface ColorButton {
  color?: string;
}

export const Container = styled.View`
  flex: 1;
  background: #e5e5e5;
`;

export const Header = styled.View`
  height: 105px;
  width: 100%;
  background: #5636d3;
`;

export const Image = styled.Image`
  margin-left: 10px;
  margin-bottom: 150px;
  margin-top: 20px;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #000000;
  font-family: 'Poppins-Medium';
  padding: 0 16px;
  margin-top: 24px;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#969cb2',
})`
  background: #ffffff;
  padding: 0 16px;
  border-radius: 5px;
  height: 60px;
  margin-left: 6px;
  margin-right: 6px;
  margin-top: 16px;
  font-size: 14px;
`;

export const ContainerButton = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 90px;
  width: 100%;
`;

export const Button = styled.TouchableOpacity`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  width: 180px;
  height: 50px;
  border-radius: 5px;

  margin-top: 16px;
  margin-left: 6px;
  margin-right: 6px;
  background: #fff;
`;

export const IconIncome = styled(Icon)`
  margin-right: 6px;
`;

export const TextButton = styled.Text`
  color: #363f5f;
  font-size: 14px;
  font-family: 'Poppins-Regular';
`;

export const ButtonEnvio = styled.TouchableOpacity`
  background: #ff872c;
  height: 60px;

  margin-left: 6px;
  margin-right: 6px;
  margin-top: 20px;
  border-radius: 5px;

  align-items: center;
  justify-content: center;
`;

export const TextButtonEnvio = styled.Text`
  text-align: center;
  color: #fff;
  font-size: 14px;
  font-family: 'Poppins-Medium';
`;
