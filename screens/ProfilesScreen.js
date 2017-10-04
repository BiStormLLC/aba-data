import React from 'react';
import {
	Image,
	Platform,
	ScrollView,
	StyleSheet,
	TouchableOpacity,
	View,
} from 'react-native';

import {
	Container,
	Header,
	Title,
	Content,
	Footer,
	FooterTab,
	Button,
	Left,
	Right,
	Body,
	Icon,
	Text,
	List,
	ListItem,
	H1, H2
} from 'native-base';
import { MonoText } from '../components/StyledText';

export default class ProfilesScreen extends React.Component {
	constructor(props) {
		super(props);

		this.state = {};
	}
	static navigationOptions = {
		title: 'Profiles',
	};

	render() {
		return (
			<Container>			
				<Content style={styles.contentContainer}>
					
				</Content>
			</Container>
		);
	}

}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 0,
		backgroundColor: '#cfcfcf',
	},
	contentContainer: {
		padding: 0,
	},
	header: {
		backgroundColor: '#fbfbfb',
	},
	topContainer: {
		alignItems: 'center',
	},
	welcomeContainer: {
		marginBottom: 0,
		padding: 0,
	},
	welcomeMessage: {
		backgroundColor: 'rgba(155,155,155,80)',
		borderBottomWidth: 1,
		borderBottomColor: '#fbfbfb',
		padding: 1,
		paddingBottom: 5,
	},
	welcomeMessageText: {
		fontWeight: 'bold',
		fontSize: 20,
		textAlign: 'center',
		color: '#fff',
	},
	icon: {
		width: 40,
		height: 40,
		marginTop: 5,
	},
	homeScreenFilename: {
		marginVertical: 7,
	},

	tabBarInfoContainer: {
		position: 'absolute',
		flex: 1,
		bottom: 10,
		minHeight: 50,
		left: 0,
		right: 0,
		...Platform.select({
			ios: {
				shadowColor: 'black',
				shadowOffset: { height: -3 },
				shadowOpacity: 0.1,
				shadowRadius: 3,
			},
			android: {
				elevation: 20,
			},
		}),
		alignItems: 'center',
		backgroundColor: '#fbfbfb',
		paddingVertical: 30,
	},
	tabBarInfoText: {
		fontSize: 17,
		color: 'rgba(96,100,109, 1)',
		textAlign: 'center',
	},
	navigationFilename: {
		marginTop: 5,
	},
	backgroundImage: {
		flex: 1,
		width: null,
		resizeMode: 'stretch',
		opacity: 20,
	},
	homeLinks: {
		flex: 1,
		alignItems: 'center',
	},
	homeLinkIcon: {
		fontSize: 50,
	},
	homeButton: {
		height: 80,
		maxWidth: 350,
		padding: 20,
		marginTop: 20,
	}
});
