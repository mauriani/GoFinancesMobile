import styled from 'styled-components/native';

import Icon from 'react-native-vector-icons/Feather';

interface CardProps {
  total?: boolean;
}

interface CardTextProps {
  total?: boolean;
}

interface TextBalanceProps {
  total?: boolean;
}

interface TypeTransactionProps {
  type?: string;
}

export const Container = styled.View`
  flex: 1;
  background: #e5e5e5;
`;

export const Header = styled.View`
  position: relative;
  height: 230px;
  background: #5636d3;
  justify-content: center;
`;

export const Image = styled.Image`
  margin-left: 10px;
  margin-bottom: 150px;
`;

export const TitleList = styled.Text`
  font-size: 20px;
  color: #000000;
  font-family: 'Poppins-Medium';
  margin-left: 24px;
  margin-top: 24px;
`;

export const Scroll = styled.ScrollView.attrs(() => ({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: {},
}))`
  margin-top: -180px;
`;

export const CardHeader = styled.View`
  background: ${({ total }: CardProps): string => (total ? '#FF872C' : '#fff')};
  height: 200px;
  width: 300px;
  position: relative;
  border-radius: 5px;
  padding: 8px;
  margin-top: 30px;
  margin-left: 10px;
  elevation: 30;
`;

export const CardTop = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.Text`
  font-size: 14px;
  color: ${({ total }: CardTextProps): string => (total ? '#fff' : '#363f5f')};
  padding: 5px;
  align-items: center;
  font-family: 'Poppins-Regular';
`;

export const IconIncome = styled(Icon)`
  margin-right: 8px;
  margin-top: 10px;
`;

export const CardBody = styled.View`
  justify-content: center;
`;

export const TextBalance = styled.Text`
  font-size: 30px;
  margin-top: 47px;
  color: ${({ total }: TextBalanceProps): string =>
    total ? '#fff' : '#363f5f'};
  font-family: 'Poppins-Regular';
`;

export const ContainerTransaction = styled.ScrollView.attrs(() => ({
  showsHorizontalScrollIndicator: false,
}))`
  margin-bottom: 8px;
`;

export const Card = styled.View`
  background-color: #fff;
  border-radius: 5px;
  height: 128px;
  margin-top: 15px;
  margin-left: 15px;
  margin-right: 15px;
  padding: 10px;
`;

export const Value = styled.Text`
  font-family: 'Poppins-Regular';
  color: ${({ type }: TypeTransactionProps): string =>
    type === 'income' ? '#12a454' : '#e83f5b'};
  font-size: 20px;
  padding: 5px;
`;

export const Category = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const TextCategory = styled.Text`
  font-size: 14px;
  font-family: 'Poppins-Regular';
  color: #969cb3;
`;

export const ContainerLoading = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Loading = styled.ActivityIndicator``;
