import React from 'react'
import { View, Text, Image, ViewPagerAndroid } from 'react-native'
import {DataDetails} from '../components/ListData'

const DetailsData = ({ navigation }) => {
	return <DataDetails {...navigation } />
}

export default DetailsData
