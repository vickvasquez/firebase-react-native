import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
	container: {
		width:250,
	},
	containerInput: {
		borderBottomColor: '#fff',
		borderBottomWidth: 0.5,
		borderColor: '#b2bec3',
		marginBottom: 20,
		flexDirection: 'column',
	},
	inputText: {
		borderWidth: 0,
		color: '#fff',
		paddingHorizontal: 19,
		fontSize:16,
		marginLeft: 20,
	},
	buttonLogin: {
		backgroundColor: '#009D9C',
		paddingVertical: 16,
	},
	buttonText: {
		textAlign: 'center',
		color: '#fff',
		fontSize: 16,
	},
	icon: {
		position: 'absolute',
		left: 0,
		top: 15,
		width: 19,
		height: 19,
	},
	loading: {
		marginTop: 20,
	}
})

export default styles
