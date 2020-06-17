import React from 'react';
import {Body, Header, Title, Left, Button, Icon, Right} from 'native-base';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {logout} from '../actions/index';

function HeaderComponent({
  title = '',
  back = true,
  right = true,
  navigation,
  signOut,
}) {
  return (
    <Header>
      <Left>
        {back ? (
          <Button transparent onPress={() => navigation.goBack()}>
            <Icon name="arrow-back" />
          </Button>
        ) : (
          <></>
        )}
      </Left>
      <Body>
        <Title>{title}</Title>
      </Body>
      <Right>
        {right ? (
          <Button transparent onPress={() => navigation.navigate('Profile')}>
            <Icon name="person" />
          </Button>
        ) : (
          <></>
        )}
        <Button transparent onPress={() => signOut()}>
          <Icon name="log-out" />
        </Button>
      </Right>
    </Header>
  );
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({signOut: logout}, dispatch);
}

export default connect(
  null,
  matchDispatchToProps,
)(HeaderComponent);
