import React, {Component} from 'react';
import {Content, Button, Text, Icon} from 'native-base';
import GroupComponent from './GroupComponent';

export default class GroupsComponent extends Component {
  render() {
    const {groups, navigation} = this.props;

    const list = groups.map(group => (
      <GroupComponent group={group.name} count={group.count} />
    ));

    return (
      <Content>
        {list}
        <Button
          block
          iconLeft
          style={{marginTop: 15}}
          onPress={() => navigation.navigate('GroupNew')}>
          <Icon name="add" />
          <Text>Add a New Group</Text>
        </Button>
      </Content>
    );
  }
}
