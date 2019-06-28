import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Button, Text } from '../components'
import { signOut } from '../store/actions/authActions'

import firebase from '../config/fbConfig';

class Browse extends Component {
  static navigationOptions = {
    title: "Browse",
    header: null
  }

  constructor(props){
    super(props);
    this.state = {
      name: "",
      email: ""
    }
  }


  componentDidMount() {
    firebase.auth().onAuthStateChanged(authenticate => {
     console.log('authenticate', authenticate)
    })
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(authenticate => {
      if (authenticate) {
        this.setState({
          email: authenticate.email,
          name: authenticate.displayName
        })
      } else {
        this.props.navigation.replace("Login")
      }
    })
  }


  logOut = () => {
    const { navigation, signOut } = this.props;
    signOut().then(() => {
      navigation.navigate('Login')
    })
  }

  render() {
    console.log('state', this.state)
    return (
      <Button gradient onPress={() => this.logOut()}>
          <Text bold white center>Login</Text>
      </Button>

    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Browse)