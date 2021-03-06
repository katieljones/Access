import React from 'react'
import { View, TextInput, StyleSheet, TouchableOpacity, Text, Button } from 'react-native'

// Imports for redux state storage
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { updateEmail, updatePassword, login, getUser } from '../redux/user/user.actions'
import Firebase from '../../config/Firebase'

import Header from '../components/Header'

class Login extends React.Component {

    componentDidMount = () => {
		Firebase.auth().onAuthStateChanged(user => {
			if (user) {
                this.props.getUser(user.uid)
                // This is handled by the MainStack Navigator now
				// if (this.props.user != null) {
				// 	this.props.navigation.navigate('Profile')
				// }
			}
		})
	}


    render() {
        return (
            <>
            <Header titleText='Access' />
                <View style={styles.container}>
                    <Text style={styles.title}>Welcome to Access</Text>
                    <TextInput
                        style={styles.inputBox}
                        value={this.props.user.email}
                        onChangeText={email => this.props.updateEmail(email)}
                        placeholder='Email'
                        autoCapitalize='none'
                    />
                    <TextInput
                        style={styles.inputBox}
                        value={this.props.user.password}
                        onChangeText={password => this.props.updatePassword(password)}
                        placeholder='Password'
                        secureTextEntry={true}
                    />
                    <TouchableOpacity style={styles.button} onPress={() => this.props.login()}>
                        <Text style={styles.buttonText}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Signup')}>
                        <Text style={styles.buttonTextLong}>Don't have an account yet? {"\n"} Sign up</Text>
                    </TouchableOpacity>
                </View>
            </>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    inputBox: {
        width: '85%',
        margin: 10,
        padding: 15,
        fontSize: 16,
        borderColor: '#d3d3d3',
        borderBottomWidth: 1,
        textAlign: 'center'
    },
    button: {
        marginTop: 30,
        marginBottom: 20,
        paddingVertical: 5,
        alignItems: 'center',
        backgroundColor: '#60DBC5',
        borderColor: '#60DBC5',
        borderWidth: 1,
        borderRadius: 5,
        width: 300
    },
    buttonText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff'
    },
    buttonTextLong: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center'
    },
    buttonSignup: {
        fontSize: 12
    },
    title: {
        fontSize: 45,
        marginBottom: 40,
        textAlign: 'center'
    }

})

const mapDispatchToProps = dispatch => {
    return bindActionCreators({ updateEmail, updatePassword, login, getUser }, dispatch)
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login)