import React, {Component} from 'react';
import {Content, Button, Icon, Input, Item, Text} from 'native-base';

import {Field, reduxForm} from 'redux-form';

const validate = values => {
  const error = {};
  error.username = '';
  error.name = '';
  let ema = values.username;
  let nm = values.name;
  if (values.username === undefined) {
    ema = '';
  }
  if (values.name === undefined) {
    nm = '';
  }
  if (ema.length < 8 && ema !== '') {
    error.username = 'too short';
  }
  if (!ema.includes('@') && ema !== '') {
    error.username = '@ not included';
  }
  if (nm.length > 8) {
    error.username = 'max 8 characters';
  }
  return error;
};

class LoginFormComponent extends Component {
  renderInput({input, label, icon, type, meta: {touched, error, warning}}) {
    let hasError = false;
    if (error !== undefined) {
      hasError = true;
    }
    return (
      <Item error={hasError} floatingLabel>
        <Input {...input} placeholder={label} />
        {hasError ? <Text>{error}</Text> : <Text />}
        <Icon name={icon} />
      </Item>
    );
  }

  render() {
    const {login} = this.props;
    return (
      <Content>
        <Field
          name="username"
          label="Username"
          icon="person"
          component={this.renderInput}
        />
        <Field
          name="password"
          label="Password"
          icon="lock"
          secureTextEntry
          component={this.renderInput}
        />
        <Button block onPress={login} iconLeft style={{marginTop: 30}}>
          <Icon name="log-in" />
          <Text>Sign In</Text>
        </Button>
      </Content>
    );
  }
}

export default reduxForm({
  form: 'login',
  validate,
})(LoginFormComponent);
