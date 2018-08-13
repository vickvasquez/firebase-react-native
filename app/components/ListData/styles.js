import { StyleSheet } from 'react-native'

const HEIGHT_CARD = 90

const styleContainerList = {
	container: {
		paddingTop: 10,
		marginBottom: 55,
		paddingBottom: 10,
	},
	separator: {
		position: 'absolute',
		right: 20,
		left: 20,
		top: 40,
		borderColor: '#ccc',
		width:218,
		borderWidth: StyleSheet.hairlineWidth,
	}
}

const detailsData = {
	container: {
		flex: 1,
	},
	containerImage: {
		backgroundColor: '#333956',
		height: 200,
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'column',
	},
	textCover: {
		color: '#fff',
		marginTop: 46,
		fontSize: 16,
		letterSpacing: .4,
	},
	image: {
		borderWidth:1,
		height: 50,
		width: 50,
	},
	containerScroll: {
		backgroundColor: '#fff',
		paddingBottom: 20,
	},
	containerFooter: {
		paddingHorizontal: 16,		
	},
	items: {
		paddingVertical: 16,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		borderColor: '#ccc',
		borderBottomWidth: 0,
	},
	itemIcon: {
		marginRight: 8,
	}, 
	itemText: {
		fontSize: 17,
		color:'#222',
		fontWeight: 'normal',
	},
	containerLeft: {
		flexDirection: 'column',
	},
	title: {
		fontSize: 14,
	}
}

const dataItem = {
	container: {
		flex: 1,
		flexDirection: 'row',
		backgroundColor: '#fff',
		borderColor: '#ccc',
		borderRadius: 5,
		borderWidth: 1,
		marginBottom: 7,
		height: HEIGHT_CARD,
		marginHorizontal: 10,
	},
	leftContainer: {
		backgroundColor: '#B1B1B1',
		alignItems: 'center',
		flexDirection: 'column',
		justifyContent: 'center',
		height: HEIGHT_CARD,
		width: 80,
	},
	titleLeft: {
		fontWeight: "bold",
		fontSize: 30,
		color: '#fff',
	},
	subtitleLeft: {
		fontSize: 16,
		color: '#fff',
	},

	containerRight: {
		paddingHorizontal: 20,
		flexDirection: 'column',
	},

	topContent: {
		flexDirection: 'row',
		paddingVertical: 10,
		alignItems: 'center'
	},

	textName: {
		color: '#000',
		fontWeight: 'bold',
		fontSize: 16,
	},
	icon: {
		marginRight: 8
	}
}

const header = {
	container: {
		justifyContent: 'space-between',
		alignItems: 'center',
		backgroundColor: '#333956',
		flexDirection: 'row',
		height: 50,
		paddingHorizontal: 16,
	},
	containerTabs: {
		alignItems: 'center',
		flexDirection: 'row',
		justifyContent: 'center'
	},
	iconPhone: {
		marginRight: 24,
	},
	containerText: {
		marginLeft: 16,
		fontSize: 17,
	},
	buttonBack: {
		backgroundColor: 'transparent',
	}
}

export {
	styleContainerList,
	detailsData,
	dataItem,
	header,
}