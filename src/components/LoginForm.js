import React,{Component} from 'react';
import {Card,CardSection,Input,Button} from './common';
import { connect } from 'react-redux';
import {emailChanged,passwordChanged} from '../actions';

class LoginForm extends Component{
    onEmailChange(text){
        this.props.emailChanged(text);


    }
    onPasswordChange(text){
        this.props.passwordChanged(text);
    }

    render(){
        return(
            <Card>
                <CardSection>
                    <Input 
                        label="Email"
                        placeholder="email"
                        onChangeText={this.onEmailChange.bind(this)}
                        value={this.props.email}
                        autoCapitalize='none'

                    />

                </CardSection>
                <CardSection>
                    <Input 
                        label="Password"
                        placeholder="password"
                        secureTextEntry={true}
                        onChangeText={this.onPasswordChange.bind(this)}
                        value = {this.props.password}
                    />

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
const mapStateToProps = state =>{
    return {
        email:  state.auth.email,
        password: state.auth.password

    };
};
export default connect(mapStateToProps,{emailChanged,passwordChanged})(LoginForm);