import React from 'react'

import { StackNavigator } from 'react-navigation'

import Home from '../screens/Home'
import Login from '../screens/Login'
import Details from '../screens/Details'

import { Header } from '../components/ListData'

const Routers = StackNavigator({
	Login: {
		screen: Login,
		navigationOptions: {
			header: () => null,
		}
	},
	Home: {
		screen: Home,
		navigationOptions: {
			header: () => null,
		}
	},
	Details: {
		screen: Details,
		navigationOptions: ({ navigation }) => ({
			header: <Header 
				nombre={navigation.state.params.nombre}
				goBack={() => { navigation.goBack() }}
				telefono={navigation.state.params.telefono}
				email={navigation.state.params.email}
			/>
		}),
		/*
		navigationOptions: ({ navigation }) => ({
			headerTitle: navigation.state.params.nombre
		})*/
	}
})

export default Routers
