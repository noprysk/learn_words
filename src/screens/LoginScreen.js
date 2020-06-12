import React, {Component, useState} from 'react';
import {
  Body,
  Button,
  Container,
  Content,
  Form,
  Header,
  Input,
  Item,
  Label,
  Text,
  Title,
  Icon,
} from 'native-base';
import {login} from '../actions/index.js';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

function LoginScreen({login, navigation}) {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Container>
      <Header>
        <Body>
          <Title>Sign In</Title>
        </Body>
      </Header>
      <Content padder>
        <Form>
          <Item floatingLabel>
            <Label>Username</Label>
            <Icon name="person" />
            <Input
              onChangeText={text => setUserName(text)}
              defaultValue={userName}
            />
          </Item>
          <Item floatingLabel>
            <Label>Password</Label>
            <Input
              secureTextEntry
              onChangeText={text => setPassword(text)}
              defaultValue={password}
            />
            <Icon name="lock" />
          </Item>
        </Form>
        <Button
          block
          onPress={() =>
            login(
              userName ? userName : 'nazariy.oprysk@gmail.com',
              password ? password : 'Nazar_1985',
            )
          }
          iconLeft
          style={{marginTop: 30}}>
          <Icon name="log-in" />
          <Text>Sign In</Text>
        </Button>
        <Button
          transparent
          block
          iconLeft
          onPress={() => navigation.navigate('SignUp')}>
          <Text>New User Sign Up?</Text>
        </Button>
      </Content>
    </Container>
  );
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({login: login}, dispatch);
}

export default connect(
  null,
  matchDispatchToProps,
)(LoginScreen);
