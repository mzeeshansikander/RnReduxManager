import React,{Component} from 'react';

import {Card,CardSection, Input, Button } from './common';
import { connect } from 'react-redux';
import {employeeUpdate } from '../actions';
import { Picker, Text,View } from 'react-native';

class EmployeeCreate extends Component{
    render(){
        return(
            <Card>
                <CardSection>
                    <Input 
                        placeholder="Name"
                        label="Name"
                        value = {this.props.name}
                        onChangeText = {text=> this.props.employeeUpdate({prop: 'name',value:text})}

                    />
                </CardSection>
                <CardSection>
                    <Input 
                        placeholder="Phone"
                        label="Phone"
                        value = {this.props.phone}
                        onChangeText = {text=> this.props.employeeUpdate({prop: 'phone',value:text})}
                    />
                </CardSection>
                <CardSection style={{flexDirection: 'column',height:100}}>
                    <Text style={styles.pickerLabelStyle}> Shift</Text>
                    <View style={{flex:1,paddingLeft:10}}>
                    <Picker
                        style={{flex: 1}}
                        selectedValue={this.props.shift}
                        onValueChange={day => this.props.employeeUpdate({prop: 'shift',value: day})}
                        >
                        <Picker.Item label= "Monday" value="Monday"/>
                        <Picker.Item label= "Tuesday" value="Tuesday"/>
                        <Picker.Item label= "Wednesday" value="Wednesday"/>
                        <Picker.Item label= "Thursday" value="Thursday"/>
                        <Picker.Item label= "Friday" value="Friday"/>
                        <Picker.Item label= "Saturday" value="Saturday"/>
                        <Picker.Item label= "Sunday" value="Sunday"/>

                    </Picker>
                    </View>

                </CardSection>
                <CardSection>
                    <Button>
                        Create
                    </Button>

                </CardSection>


            </Card>


        );


    }

}
const styles={
    pickerLabelStyle:{
        fontSize: 18,
        paddingLeft: 15

    }
}
const mapStateToProps = ({employeeForm})=>{
    const {name, phone, shift} = employeeForm;

    return { name, phone, shift}


};
export default connect(mapStateToProps,{employeeUpdate}) (EmployeeCreate);