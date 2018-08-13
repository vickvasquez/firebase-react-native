import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome'

import styles from './styles'

const Header = ({ toggle, title }) => (
	<View style={styles.container}>
		<TouchableOpacity
			onPress={toggle}
		>
			<Icon
				name="bars"
				size={20}
				color="#000"
			/>
		</TouchableOpacity>
		<Text style={{ color: '#000', fontSize: 18, fontWeight: '600'}}> {title} </Text>
		<TouchableOpacity>
			<Icon
				name="search"
				size={20}
				color="#000"
			/>
		</TouchableOpacity>
	</View>
)

export default Header