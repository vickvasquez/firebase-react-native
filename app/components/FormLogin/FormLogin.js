import React from 'react'
import PropTypes from 'prop-types'

import {
	View,
	Text,
	TouchableOpacity,
	TextInput,
	Image,
	ActivityIndicator,
} from 'react-native'

import styles from './styles'

const FormLogin = ({ handleChange, email, password, login, loading }) => (
	<View style={styles.container}>
		<View style={styles.containerInput} >
			<Image
				source={require('./icons/user.png')}
				style={styles.icon}
			/>
			<TextInput
				keyboardType="email-address"
				style={styles.inputText}
				placeholder="Correo electronico"
				placeholderTextColor="#dfe6e9"
				underlineColorAndroid="transparent"
				value={email}
				onChangeText={(text) => { handleChange('email', text ) }}
				editable={!loading}
				autoFocus
			/>
		</View>

		<View style={styles.containerInput} >
			<Image
				source={require('./icons/password.png')}
				style={styles.icon}
			/>
			<TextInput
				style={styles.inputText}
				placeholderTextColor="#dfe6e9"
				secureTextEntry
				placeholder="********"
				underlineColorAndroid="transparent"
				value={password}
				editable={!loading}
				onChangeText={(text) => { handleChange('password', text ) }}
			/>
		</View>

		<TouchableOpacity
			style={styles.buttonLogin}
			onPress={login}
			disabled={loading}
		>
		  	<Text style={styles.buttonText}>
		  		Entrar
		  	</Text>
		</TouchableOpacity>
		{
			loading &&
				<View
					style={styles.loading}
				>
					<ActivityIndicator size="large" color="#fff" />
				</View>
		}
	</View>
)

FormLogin.propTypes = {
	handleChange: PropTypes.func.isRequired,
	login: PropTypes.func.isRequired,
	email: PropTypes.string,
	password: PropTypes.string,
	loading: PropTypes.bool,
}

FormLogin.defaultProps = {
	loading: false,
	email: '',
	password: '',
}

export default FormLogin
