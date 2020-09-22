import React from 'react';
import { Text, View } from 'react-native';

const ErrorText = (props) => {
	const { textStyle, viewStyle } = styles;

	return (
			<View>
				<Text style={textStyle}>{props.errorText} </Text>
			</View>
		);
};

const styles = {
  viewStyle: {
    justifyContent: 'center',
    alignItems: 'center', 
    backgroundColor: '#F8F8F8',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};

export { ErrorText };