import React from 'react';
import {Container, Content, Text} from 'native-base';
import {connect} from 'react-redux';
import HeaderComponent from '../components/HeaderComponent';

function HomeScreen({navigation}) {
  return (
    <Container>
      <HeaderComponent title="Home" back={false} navigation={navigation} />
      <Content padder>
        <Text>Home Screen</Text>
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
)(HomeScreen);
