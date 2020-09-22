import React, { Component, PropTypes } from 'react';
import { Text, TextInput, View } from 'react-native';

const Input = ({ value, onChangeText, label }) => {
	const { containerStyle, inputStyle, labelStyle } = styles

    return (
        <View style={containerStyle} >
        	<Text style={labelStyle} > {label} </Text>
        	<TextInput
        		style={inputStyle}
        		value={value}
        		onChangeText={onChangeText}
        	/>
        </View>
    );
};

const styles = {
	inputStyle: {
		color: '#000',
		paddingRight: 5,
		paddingLeft: 5,
		fontSize: 18,
		lineHeight: 23,
		flex: 2
	},	
	labelStyle: {
		paddingLeft: 20,
		fontSize: 18,
		flex: 1
	},
	containerStyle: {
		height: 40,
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center'
	}
};

export { Input };