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
import {login, logout} from '../actions/index.js';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

function Login() {
  return (
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
  );
}

function mapStateToProps(state) {
  return {
    user: state.user,
  };
}
function matchDispatchToProps(dispatch) {
  return bindActionCreators({login: login, logout: logout}, dispatch);
}
export default connect(
  mapStateToProps,
  matchDispatchToProps,
)(Login);
