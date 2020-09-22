import React, { Component, PropTypes } from 'react';
import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component {
	state = {email:'', pasword:''};

	onButtonPress() {
		const { email, password } = this.state
	}

    render() {
        return (
            <Card>
            	<CardSection>
            	<Input
            		placeholder="Hi there"
            		value={this.state.text}
            		onChageText={(text) => this.setState({ text })}
            		label="Email" 
            	/>
            	</CardSection>
            	<CardSection>
            	</CardSection>
            	<CardSection>
            		<Button>
            			Login
            		</Button>
            	</CardSection>
            </Card>
        );
    }
}

export default LoginForm;
