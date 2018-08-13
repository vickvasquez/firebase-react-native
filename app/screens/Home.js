import React, { Component } from 'react'

import { View, Text } from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome'

import { OffCanvasReveal } from 'react-native-off-canvas-menu'

import Dashboard from './Dashboard'
import Header from '../components/Header'

class Home extends Component {
	constructor(props) {
		super(props)
	
		this.state = {
			toggleMenu: false
		}
	}

	toggleSideBar = () => {
		this.setState({
			toggleMenu: !this.state.toggleMenu,
		})
	}

	render() {
		return (
			<View style={{flex: 1, zIndex: 99}}>
				<OffCanvasReveal
					active={this.state.toggleMenu}
					onMenuPress={this.toggleSideBar}
					backgroundColor='#333956'
					menuTextStyles={{color: 'white'}}
					handleBackPress={true}
					menuItems={[
					{
					  title: 'Pendientes',
					  icon: <Icon name="folder" size={15} color='#fff' />,
					  renderScene: <Dashboard
							title="Pendientes"
							{ ...this.props }
							type="pendientes"
							toggle={this.toggleSideBar}
						/>
					},
					{
					  title: 'Respondidos',
					  icon: <Icon name="reply" size={15} color='#fff' />,
					  renderScene: <Dashboard
							title="Respondidos"
							{ ...this.props }
							type="respondidos"
							toggle={this.toggleSideBar}
						/>
					},
					{
					  title: 'Perfil',
					  icon: <Icon name="user" size={15} color='#fff' />,
					  renderScene: <View />
					},
				]}/>
		    </View>
		)
	}
}

export default Home
