import React, {Component} from 'react';
import {TouchableOpacity} from 'react-native';
import {Card, CardItem, Left, Thumbnail, Text, Body, Right} from 'native-base';
import images from '../../../images';

export default class GroupComponent extends Component {
  render() {
    const {group, count, thumbnail} = this.props;
    return (
      <TouchableOpacity>
        <Card>
          <CardItem>
            <Left>
              <Thumbnail
                source={thumbnail ? thumbnail : images.default_word_group}
              />
              <Body>
                <Text>{group}</Text>
                <Text note>{count} words</Text>
              </Body>
            </Left>
            <Right>
              <Text note>2 days ago</Text>
            </Right>
          </CardItem>
        </Card>
      </TouchableOpacity>
    );
  }
}
