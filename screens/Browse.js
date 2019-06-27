import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Button, Text } from '../components'
import { signOut } from '../store/actions/authActions'

class Browse extends Component {

  logOut = () => {
    const { navigation, signOut } = this.props;
    signOut()
    navigation.navigate('Login')
  }

  render() {
    return (
      <Button gradient onPress={() => this.logOut()}>
          <Text bold white center>Login</Text>
      </Button>

    )
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(null, mapDispatchToProps)(Browse)