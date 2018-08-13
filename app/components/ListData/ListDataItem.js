import React from 'react'
import PropTypes from 'prop-types'

import {
	View,
	Text,
	Images,
	TouchableOpacity,
} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome'

import Separator from './Separator'

import { dataItem } from './styles'

const ListDataItem = ({ item, openDetails }) => (
	<TouchableOpacity style={dataItem.container} onPress={() => openDetails(item)}>
		<View style={dataItem.leftContainer}>
			<Text style={dataItem.titleLeft}> 21 </Text>
			<Text style={dataItem.subtitleLeft}> Abril </Text>
		</View>
		<View style={dataItem.containerRight}>
			<View style={dataItem.topContent}>
				<Icon style={dataItem.icon} name="user" size={15} color='#ccc' />
				<Text style={dataItem.textName} > { item.nombre } </Text>
			</View>
			<Separator />
			<View style={dataItem.topContent}>
				<Icon style={dataItem.icon} name="phone" size={15} color='#ccc' />
				<Text> { item.telefono } </Text>
			</View>
		</View>
	</TouchableOpacity>
)

ListDataItem.propTypes = {
	item: PropTypes.object,
	openDetails: PropTypes.func.isRequired,
}

ListDataItem.defaultProps = {

}

export default ListDataItem
