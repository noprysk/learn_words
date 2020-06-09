import React from 'react';
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Text,
} from 'native-base';
import allReducers from './reducers/index.js';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

const store = createStore(allReducers);

const App = () => {
  return (
    <Provider store={store}>
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Header</Title>
          </Body>
          <Right />
        </Header>
        <Content padder>
          <Text>Start development</Text>
        </Content>
      </Container>
    </Provider>
  );
};

export default App;
