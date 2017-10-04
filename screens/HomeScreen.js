import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
	View,
	Animated
} from 'react-native';
import {
  Container,
  Header, 
  Content,
  Button, 
  Body,
  Icon,
  Text,
  List,
  ListItem,
  H1, H2
} from 'native-base';

import styled from 'styled-components/native';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
		header: null,
		title: null,
	};

	componentDidUpdate() {
		console.log('updated!');
	}

  render() {
		return (
			<Container>
					<StyledHeader>
						<HomeImage source={require('../assets/images/icon.png')}/>
						<Title>
							<WelcomeMessageText>Applied Behavior Analysis</WelcomeMessageText>
							<WelcomeMessageText>Data Manager</WelcomeMessageText>
						</Title>
					</StyledHeader>
					<BodyContent>
						<HomeLinks>
							<Shortcuts>
								<ShortcutButton full rounded primary>
									<ProfileIcon name={Platform.OS === 'ios' ?
										'ios-contacts' : 'md-contacts'} />
									<Text>Add a new profile</Text>
								</ShortcutButton>
								<ShortcutButton full rounded warning>
									<ShortcutIcon name={Platform.OS === 'ios' ?
										'ios-cog' : 'md-cog'} />
									<Text>Add a new behavior</Text>
								</ShortcutButton>
								<ShortcutButton full rounded success>
									<ClipboardIcon name={Platform.OS === 'ios' ?
										'ios-clipboard' : 'md-clipboard'} />
									<Text>Start a new session</Text>
								</ShortcutButton>
								<ShortcutButton full rounded danger>
									<ShortcutIcon name={Platform.OS === 'ios' ?
										'ios-cloud-upload' : 'md-cloud-upload'} />
									<Text>Export Session Data</Text>
								</ShortcutButton>
							</Shortcuts>
						</HomeLinks>
					</BodyContent>  
        </Container>
    );
  }
}

const HomeImage = styled(Image)`
	width: 60;
  height: 60;
	margin-top: 15px;
`;

const StyledHeader = styled(Header)`
	background-color: #fbfbfb;
	height: ${props => Platform.OS === 'ios' ? '100' : '90'};
	width: 100%;
`;

const Title = styled(Container)`
  margin-bottom: 0;
	margin-top: 10px;
  padding: 0;		
`;

const BodyContent = styled(Body)`
	padding: 0;
`;

const WelcomeMessageText = styled(H1)`
	font-weight: bold;
  font-size: 24;
  text-align: center;
	color: gray;
	font-family: 'CaviarDreams';
	line-height: ${props => Platform.OS === 'ios' ? '25' : '33'};
`;

const Shortcuts = styled(List)``;

const HomeLinks = styled(Container)`
	flex: 1;
	align-items: center;
`;								

const ShortcutButton = styled(Button)`
	height: 80;
  max-width: 350;
  padding-right: 20px;
  margin-top: 20;
`;

const ShortcutIcon = styled(Icon)` 
	padding: 0;
	margin-left: 30px;
  width: 60;
  height: 60;
  margin-top: 5;
	font-size: 50; 
`;

const ProfileIcon = styled(ShortcutIcon)`
	margin-left: ${props => Platform.OS === 'ios' ? '5px' : '30px'};
	margin-right: ${props => Platform.OS === 'ios' ? '20px' : '15px'};
`;

const ClipboardIcon = styled(ShortcutIcon)`
	margin-left: ${props => Platform.OS === 'ios' ? '30px' : '40px'};
`;



