import React from 'react';
import { Text } from 'react-native';

export class Profile extends React.Component {
  render() {
    return (
      <Image />
      <Text
        {...this.props}
        style={[this.props.style, { fontFamily: 'space-mono' }]}
      />
    );
  }
}
