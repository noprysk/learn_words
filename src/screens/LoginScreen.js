import React from 'react';
import {
  Body,
  Button,
  Container,
  Content,
  Header,
  Text,
  Title,
} from 'native-base';
import {login} from '../actions/index.js';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import LoginFormComponent from '../components/LoginFormComponent';

function LoginScreen({login, navigation}) {
  return (
    <Container>
      <Header>
        <Body>
          <Title>Sign In</Title>
        </Body>
      </Header>
      <Content padder>
        <LoginFormComponent login={login} />
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
