import React from 'react';
import {Body, Container, Content, Header, Text, Title} from 'native-base';
import {login, logout} from '../actions/index.js';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

function HomeScreen() {
  return (
    <Container>
      <Header>
        <Body>
          <Title>Home</Title>
        </Body>
      </Header>
      <Content padder>
        <Text>Home Screen</Text>
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
)(HomeScreen);
