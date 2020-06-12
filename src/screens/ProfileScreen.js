import React from 'react';
import {Container, Content, Text} from 'native-base';
import {logout} from '../actions/index.js';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import HeaderComponent from '../components/HeaderComponent';

function ProfileScreen({navigation, user, signOut}) {
  return (
    <Container>
      <HeaderComponent
        title="User Profile"
        right={false}
        navigation={navigation}
      />
      <Content padder>
        <Text>User id: {user.uid}</Text>
        <Text>User name: {user.name}</Text>
        <Text>User email: {user.email}</Text>
      </Content>
    </Container>
  );
}

function mapStateToProps(state) {
  return {
    user: state.auth.user,
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({signOut: logout}, dispatch);
}

export default connect(
  mapStateToProps,
  matchDispatchToProps,
)(ProfileScreen);
