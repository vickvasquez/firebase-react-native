import React from 'react'

import { ActivityIndicator, View, Text } from 'react-native'

import Container from '../Container'

import styles from './styles'

export default () => (
	<View style={styles.container}>
		<ActivityIndicator
			color="#555"
			size="large"
		/>
		<Text> Cargando...</Text>
	</View>
)