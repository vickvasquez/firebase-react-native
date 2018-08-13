import React,{ Component } from 'react'
import { View, Text, Image, ScrollView, PermissionsAndroid } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

import { Header } from './Header'

import { detailsData } from './styles'

class Details extends Component {
/*
	requestPermissionCall = async () => {
		try {
			const granted = await PermissionsAndroid.request(
				PermissionsAndroid.PERMISSIONS.CAMERA,
				{
					'title': 'Cool Photo App Camera Permission',
					'message': 'Cool Photo App needs access to your camera ' +
							'so you can take awesome pictures.'
				}
			)

			console.log(granted)

			if (granted === PermissionsAndroid.RESULTS.GRANTED) {
				console.log('Se ha concedido correctamente')
			} else {
				console.log('Se ha denegado el permiso')
			}
			
		} catch (error) {
			console.warn(error)
		}
	}
	componentWillMount() {
		this.props.setParams({
			requestPermissionCall: this.requestPermissionCall,
		})
	}
*/
	
	render() {
		const { telefono, email, empresa, idea, nombre } = this.props.state.params
		return (
			<View style={detailsData.container}>
				<ScrollView style={detailsData.containerScroll}>
					<View style={detailsData.containerImage}>
						<Image
							source={require('../../components/FormLogin/icons/user.png')}
							style={detailsData.image}
							resizeMode="contain"
						/>
						<Text style={detailsData.textCover}> {nombre} </Text>
					</View>
					<View style={detailsData.containerFooter} >
						<View style={detailsData.items}>
							<View style={detailsData.containerLeft}>
								<Text style={detailsData.title}>Email</Text>
								<Text style={detailsData.itemText}>{ email }</Text>
							</View>
							<Icon style={detailsData.itemIcon} color="red" name="envelope" size={20} />
						</View>
						<View style={detailsData.items}>
							<View style={detailsData.containerLeft}>
								<Text style={detailsData.title}>Movil</Text>
								<Text style={detailsData.itemText}>{ telefono }</Text>
							</View>
							<Icon style={detailsData.itemIcon} color="green" name="phone" size={20} />
						</View>
						<View style={detailsData.items}>
							<View style={detailsData.containerLeft}>
								<Text style={detailsData.title}>Empresa</Text>
								<Text style={detailsData.itemText}>{empresa}</Text>
							</View>
							<Icon style={detailsData.itemIcon} name="home" size={20} />
						</View>
						<View style={detailsData.items}>
							{ /*<Icon style={detailsData.itemIcon} name="eye" size={20} /> */}
							<View style={detailsData.containerLeft}>
								<Text style={detailsData.title}>Idea</Text>
								<Text style={detailsData.itemText}>{idea}</Text>
							</View>
						</View>
					</View>
				</ScrollView>
			</View>
		)		
	}
}

export default Details
