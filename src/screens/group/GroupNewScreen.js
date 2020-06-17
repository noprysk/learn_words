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
  Text,
  Title,
} from 'native-base';
import {login} from '../../actions/index.js';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

function GroupNewScreen({login, navigation}) {
  return (
    <Container>
      <Header>
        <Body>
          <Title>Create Group</Title>
        </Body>
      </Header>
      <Content padder>
        <Form>
          <Item>
            <Input placeholder="Group name" />
          </Item>
        </Form>
        <Button
          block
          iconLeft
          onPress={() => navigation.navigate('Groups')}>
          <Text>Create</Text>
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
)(GroupNewScreen);
