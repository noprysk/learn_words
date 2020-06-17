import React from 'react';
import {Container, Content} from 'native-base';
import {connect} from 'react-redux';
import HeaderComponent from '../../components/HeaderComponent';
import GroupsComponent from '../../components/group/GroupsComponent';

function GroupsScreen({navigation}) {
  const groups = [
    {
      name: 'Common Words',
      count: '23',
    },
    {
      name: 'Movie Words',
      count: '12',
    },
    {
      name: 'Empiric Words',
      count: '101',
    },
    {
      name: 'Empiric Words',
      count: '101',
    },
    {
      name: 'Empiric Words',
      count: '101',
    },
  ];
  return (
    <Container>
      <HeaderComponent title="Groups" back={false} navigation={navigation} />
      <Content padder>
        <GroupsComponent groups={groups} navigation={navigation} />
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
)(GroupsScreen);
