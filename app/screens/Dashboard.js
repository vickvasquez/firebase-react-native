import React, { Component } from 'react'
import { View, Text } from 'react-native'

import { fireStore, auth } from '../config/firebase'

import Menu from '../components/Menu'
import { ContainerList } from '../components/ListData'
import Header from '../components/Header'

import Loading from '../components/Loading'

class Dashboard extends Component {
	constructor(props) {
	 	super(props)
		this.state = {
			loading: true,
			data: [],
		}

	}

	componentWillReceiveProps(nexProps) {
		if( nexProps && nexProps.type) {
			this.setState({
				loading: true,
			})

			this.getData(nexProps.type)
		}
	}
	
	componentWillMount() {
		this.checkStatusLogin()		
	}

	getData = (type) => {
		let leido =  false

		if (type && type === 'respondidos')
			leido = true
		
		fireStore
			.collection('prospectos')
			.where('leido', '==', leido)
            .orderBy('created_at', 'desc')
			.get()
			.then(this.renderUI)
	}

	showDetails = (data) => {
		const { navigate } = this.props.navigation

		navigate('Details', data)
	}

	renderUI = (querySnapshot) => {
		let prospectos = []

		querySnapshot.forEach(doc => {
			const data = doc.data()

			prospectos.push({
				id: doc.id,
				...data,
			})
		})

		this.setState({
			data: prospectos, 
			loading: false
		})
	}

	checkStatusLogin() {
		auth.onAuthStateChanged(user => {
			if(user) {
				this.getData()
			} else {
				//Redirigir a login				
				const { navigate } = this.props.navigation

				navigate('Login')
			}
		})
	}

	render() {
		if (this.state.loading)
			return <Loading />
		else 
			return (
				<View style={{backgroundColor: '#eee'}} >
					<Header
						toggle={this.props.toggle}
						title={this.props.title}
					/>
					<ContainerList
						data={this.state.data}
						openDetails={this.showDetails}
					/>
				</View>
			)
		
	}
}

export default Dashboard
