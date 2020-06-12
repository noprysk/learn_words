import React from 'react';
import {Container, Content, Text} from 'native-base';
import {connect} from 'react-redux';
import HeaderComponent from '../components/HeaderComponent';

function SignUpScreen({navigation}) {
  return (
    <Container>
      <HeaderComponent title="Sign Up" navigation={navigation} right={false} />
      <Content padder>
        <Text>Sign Up</Text>
      </Content>
    </Container>
  );
}

function mapStateToProps(state) {
  return {
    user: state.auth.user,
  };
}

export default connect(
  mapStateToProps,
  null,
)(SignUpScreen);
