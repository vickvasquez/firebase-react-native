import React from 'react'
import PropTypes from 'prop-types'

import { FlatList } from 'react-native'

import ListDataItem from './ListDataItem'
import Separator from './Separator'

import { styleContainerList } from './styles'

const ContainerList = ( { data, openDetails }) => (
	<FlatList
		style={styleContainerList.container}
		data={data}
		renderItem={({ item }) => <ListDataItem openDetails={openDetails} item={item} />}
		keyExtractor={(item) => item.id}
	/>
)

ContainerList.propTypes = {
	data: PropTypes.any,
	openDetails: PropTypes.func.isRequired,
}

ContainerList.defaultProps = {

}

export default ContainerList
