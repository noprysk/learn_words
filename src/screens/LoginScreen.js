import React from 'react';
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

function LoginScreen({navigation}) {
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
            <Input />
          </Item>
          <Item floatingLabel>
            <Label>Password</Label>
            <Input secureTextEntry />
            <Icon name="lock" />
          </Item>
        </Form>
        <Button
          block
          onPress={() => navigation.navigate('Home')}
          iconLeft
          style={{marginTop: 30}}>
          <Icon name="log-in" />
          <Text>Sign In</Text>
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
