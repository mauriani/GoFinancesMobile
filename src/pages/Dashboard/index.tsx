import React, { useState, useEffect } from 'react';

import formatValue from '../../utils/formatValue';
import api from '../../services/api';

import logo from '../../assets/logo.png';

import {
  Container,
  TitleList,
  Scroll,
  Header,
  Image,
  CardHeader,
  CardTop,
  Title,
  IconIncome,
  CardBody,
  TextBalance,
  ContainerTransaction,
  Card,
  Category,
  TextCategory,
  Value,
  Loading,
} from './styles';

import { View } from 'react-native';

interface Transaction {
  id: string;
  title: string;
  value: number;
  formattedValue: string;
  formattedDate: string;
  type: 'income' | 'outcome';
  category: { title: string };
  created_at: Date;
}

interface Balance {
  income: string;
  outcome: string;
  total: string;
}

const Dashboard: React.FC = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [balance, setBalance] = useState<Balance>({} as Balance);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadTransactions(): Promise<void> {
      setLoading(true);
      const response = await api.get('/transactions');

      const transactionsFormatted = response.data.transactions.map(
        (transaction: Transaction) => ({
          ...transaction,
          formattedValue: formatValue(transaction.value),
          formattedDate: new Date(transaction.created_at).toLocaleDateString(
            'pt-br',
          ),
        }),
      );

      const balanceFormatted = {
        income: formatValue(response.data.balance.income),
        outcome: formatValue(response.data.balance.outcome),
        total: formatValue(response.data.balance.total),
      };

      setTransactions(transactionsFormatted);
      setBalance(balanceFormatted);
      setLoading(false);
    }

    loadTransactions();
  }, []);

  return (
    <>
      {loading ? (
        <Loading color="#363f5f" size={40} />
      ) : (
        <Container>
          <Header>
            <Image source={logo} />
          </Header>

          <View>
            <Scroll>
              <CardHeader>
                <CardTop>
                  <Title>Entradas</Title>
                  <IconIncome
                    name="arrow-up-circle"
                    size={30}
                    color="#12A454"
                  />
                </CardTop>
                <CardBody>
                  <TextBalance>{balance.income}</TextBalance>
                </CardBody>
              </CardHeader>

              <CardHeader>
                <CardTop>
                  <Title>Saídas</Title>
                  <IconIncome
                    name="arrow-down-circle"
                    size={30}
                    color="#E83F5B"
                  />
                </CardTop>
                <CardBody>
                  <TextBalance>{balance.outcome}</TextBalance>
                </CardBody>
              </CardHeader>

              <CardHeader total>
                <CardTop>
                  <Title total>Total</Title>
                  <IconIncome name="dollar-sign" size={30} color="#ffffff" />
                </CardTop>
                <CardBody>
                  <TextBalance total>{balance.total}</TextBalance>
                </CardBody>
              </CardHeader>
            </Scroll>
          </View>

          <TitleList>Listagem</TitleList>

          <ContainerTransaction>
            {transactions.map(transaction => (
              <Card key={transaction.id}>
                <Title>{transaction.title}</Title>
                <Value type={`${transaction.type}`}>
                  {`${transaction.type === 'outcome' ? '-' : ''} ${
                    transaction.formattedValue
                  }`}
                </Value>
                <Category>
                  <TextCategory>{transaction.category?.title}</TextCategory>
                  <TextCategory>{transaction.formattedDate}</TextCategory>
                </Category>
              </Card>
            ))}
          </ContainerTransaction>
        </Container>
      )}
    </>
  );
};

export default Dashboard;
