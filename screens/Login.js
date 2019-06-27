import React, { Component } from 'react'
import { ActivityIndicator, Keyboard, KeyboardAvoidingView, StyleSheet } from 'react-native'
import { connect } from 'react-redux'

import { signIn } from '../store/actions/authActions'

import { Button, Block, Input, Text } from '../components';
import { theme } from '../constants';


class Login extends Component {
  state = {
    email: 'test@net.com',
    password: '123456',
    errors: [],
    loading: false
  }

  handleLogin = () => {
    const { navigation } = this.props;
    const { email, password } = this.state
    const errors = []

    Keyboard.dismiss();
    // this.setState({ loading: true })

    if (!errors.length) {
      this.props.signIn(this.state)

      navigation.navigate("Browse")
    }
  }


  render() {
    const { navigation, auth } = this.props;
    const { loading, errors } = this.state;
    const hasErrors = key => errors.includes(key) ? styles.hasErrors : null;

    console.log('auth', auth.uid)

    return (
      <KeyboardAvoidingView style={styles.login} behaviour="padding">
        <Block padding={[ 0, 50 ]}>
          <Text h1 bold>Login</Text>

          <Block middle>
            <Input
              label="Email"
              error={hasErrors('email')}
              style={[styles.input, hasErrors('email')]}
              defaultValue={this.state.email}
              onChangeText={text => this.setState({ email: text })}
            />
            <Input
              secure
              label="Password"
              error={hasErrors('password')}
              style={[styles.input, hasErrors('password')]}
              defaultValue={this.state.password}
              onChangeText={text => this.setState({ password: text })}
            />
            <Button gradient onPress={() => this.handleLogin()}>
              {loading ?
                <ActivityIndicator size="small" color="white" /> : 
                <Text bold white center>Login</Text>
              }
            </Button>

            <Button onPress={() => navigation.navigate('Forgot')}>
              <Text gray caption center style={{ textDecorationLine: 'underline' }}>
                Forgot your password?
              </Text>
            </Button>
          </Block>
          
        </Block>
      </KeyboardAvoidingView>
    )
  }
}


const styles = StyleSheet.create({
  login: {
    flex: 1,
    justifyContent: 'center',
  },
  input: {
    borderRadius: 0,
    borderWidth: 0,
    borderBottomColor: theme.colors.gray2,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  hasErrors: {
    borderBottomColor: theme.colors.accent,
  }
})



const mapStateToProps = (state) => {
  return{
    authError: state.auth.authError,
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (creds) => dispatch(signIn(creds))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)