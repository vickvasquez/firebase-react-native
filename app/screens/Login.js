import React, { Component } from 'react'
import { Alert, Keyboard } from 'react-native'

import Container from '../components/Container'
import FormLogin from '../components/FormLogin'

import { auth } from '../config/firebase'

class Login extends Component {
	constructor(props) {
		super(props)
	
		this.state = {
			email: '',
			password: '',
			loading: false,
		}

		this.checkStatusLogin()
	}

	handleChange = (name, value) => {
		this.setState({
			[name]: value,
		})
	}

	showAlertError({ title = 'Error', message }) {
		Alert
			.alert(
				title,
				message,
				[
					{
						text: 'OK', onPress: () => console.log('OK Pressed')
					},
				],
				{ cancelable: false }
		)
	}

	toggleLoading() {
		this.setState({
			loading: !this.state.loading,
		})
	}

	checkStatusLogin() {
		const { navigate } = this.props.navigation

		auth.onAuthStateChanged((user) => {
			if(user) {
				Keyboard.dismiss()
				navigate('Home')

			}
		})
	}

	login = async () => {
		try {
			const { email, password } = this.state

			if(email === '' || password === '')
				return this.showAlertError({ message: 'Captura tus datos de acceso completo' })

			const { navigate } = this.props.navigation

			this.toggleLoading()
			
			await auth.signInWithEmailAndPassword(email, password)

			//this.showAlertError({ title: 'Success', message: 'Te has logeado correctamente :)' })
			this.toggleLoading()

			Keyboard.dismiss()

			navigate('Dashboard')

		} catch(error) {			
			this.toggleLoading()
			
			const { code } = error

			if (code === 'auth/wrong-password' || code === 'auth/user-not-found') {
				this.showAlertError('','Error en email/contraseña')
			} else if(code === 'auth/invalid-email') {
				this.showAlertError({ message: 'Ingresa un email con formato válido email@domain.com' })
			}
			else {
				console.log(error)
				this.showAlertError({ message: 'Sucedió un error, vuelve a intentarlo' })
			}
		}

	}

	render() {
		return (
			<Container>
				<FormLogin
					email={this.state.email}
					password={this.state.password}
					handleChange={this.handleChange}
					login={this.login}
					loading={this.state.loading}
				/>
			</Container>
		)
	}
}

export default Login
