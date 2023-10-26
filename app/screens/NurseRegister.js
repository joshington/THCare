import React,{useState,useEffect} from "react";
import PropTypes from 'prop-types';
import {Text,View,TouchableOpacity,TextInput,
    TouchableHighlight,Image,StyleSheet} from 'react-native';
import Container from "../components/Container/Container";
import { widthPercentageToDP as wp,heightPercentageToDP as hp } from "react-native-responsive-screen";
import LabelInput from "../components/LabelInput/LabelInput";

import Toast from 'react-native-simple-toast';
import { Picker } from "@react-native-picker/picker";
import RadioButton from "../components/RadioButton/RadioButton";
import ButtonWithText from "../components/ButtonWithText/ButtonWithText";
import GenderInputSelct from "../components/GenderInputSelect/GenderInputSelect";
import RadioForm from 'react-native-simple-radio-button';


const MyLabel = ({label,placeText,
    keyboard,secure,onChangeText,value
}) => {
    return (
        <View style={{marginTop:hp('2%')}}>
            <Text style={{fontSize:hp('2.12%'),
                fontWeight:"bold"}}>
                {label}
            </Text>
            <TextInput
                placeholder={placeText}
                style={{display:"flex",
                    paddingHorizontal:wp('3%'),
                    height:hp('4.5%'),width:wp('86%'),
                    borderRadius:wp('2%'),borderWidth:wp('0.3%'),
                    fontSize:hp('1.8%')
                }}
                keyboardType={keyboard}
                secureTextEntry={secure ? true : false}
                onChangeText={onChangeText}
                value={value}
            />
        </View>
    )
}


const ButonWithText = ({command,onPress,isCo,color,textColor}) => {
    return(
        <TouchableOpacity
            style={{height:hp('6%'),width:wp('86%'),marginTop:hp('2%'),
            backgroundColor: isCo ? color : "blue",
            borderRadius:hp('1.5%'),
            marginHorizontal:wp('12%'),justifyContent:"center"}}
            onPress={onPress}
        >
            <Text style={{textAlign:"center",
                fontSize:hp('2.8%'),
                color:textColor,fontWeight:"bold"}}
            >
                {command}
            </Text>
        </TouchableOpacity>
    )
}

//data for the gender
const data = [
    {value: 'Male'},
    {value: 'Female'}
]
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
        justifyContent: 'center',
        alignItems: 'center',
    },
    radioGroup: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginTop: 20,
        borderRadius: 8,
        backgroundColor: 'white',
        padding: 16,
        elevation: 4,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    radioButton: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    radioLabel: {
        marginLeft: 8,
        fontSize: 16,
        color: '#333',
    },
});




const QualiPicker = ({ qualification, onValueChange }) => (
    <Picker
        selectedValue={qualification}
        style={{ 
            height:hp('3%'), 
            width:wp('84%'),
            fontWeight:"bold",color:"black",color:"#28a6e0" }}
        onValueChange={onValueChange}
    >
        <Picker.Item label="Reg Nurse With Degree" value="BNurs" />
        <Picker.Item label="Reg Midwife with Degree" value="BMid" />
        <Picker.Item label="Enrolled Nurse" value="ONurs" />
        <Picker.Item label="Cert. Level Nurse" value="CNurse" /> 
    </Picker>
);

QualiPicker.propTypes = {
    qualification: PropTypes.string,
    onValueChange: PropTypes.func,
};


const NurseRegister = ({navigation}) => {
    const [qualification, setQualification] = useState("BNurs");
    //==adding state for the radio buttons
    const [radioValue, setRadioValue] = useState('Female');

    const [chosenOption, setChosenOption] = useState('Female');

    const handleChangeQualification = (itemValue) => {
        setQualification(itemValue)
    }

    const options = [
        {label:'Female',value:'Female'},{label:'Male',value:'Male'}
    ]
    return (
        <Container>
            <View style={{marginTop:hp('4%'),
                alignItems:"center",alignContent:"center",justifyContent:"center"}}>
                <Text style={{fontWeight:"bold",fontSize:hp('2.5%'),textAlign:"center",color:"black"}}>
                    Register Your Account
                </Text>
                <MyLabel
                    label="Email" 
                    placeText="e.g thc@gmail.com" 
                />
                <MyLabel 
                    label="Contact" 
                    placeText="0752xxxxxx" 
                    keyboard="numeric"
                />
                <MyLabel
                    label="Place of residence" 
                />
                <Text style={{marginRight:wp('52%'),
                    textAlign:"left",fontWeight:"bold",color:"black",marginTop:hp('2%')}}>
                    Select qualification
                </Text>
                <QualiPicker
                    qualification={qualification}
                    onValueChange={handleChangeQualification}
                />
             
                <Text style={{marginRight:wp('52%'),
                    color:"black",fontSize:hp('2%'),fontWeight:"bold"}}>
                    Choose Gender:
                </Text>
                <RadioForm
                    radio_props={options}
                    initial={0}
                    onPress={(value) => {setChosenOption(value);}}
                    formHorizontal={true}
                />
             
                <MyLabel
                    label="Password"
                    secure={true}
                />
                <ButonWithText 
                    isCo={true}
                    color="#28a6e0"
                    textColor="white"
                    command="Register"
                    onPress={() => navigation.navigate('Dashboard')}
                />
                <TouchableOpacity
                    style={{marginTop:hp('2%')}}
                    onPress={() => navigation.navigate('Worker Login')}
                >
                    <Text style={{fontSize:hp('2.2%'),
                       fontWeight:"bold"}}>
                        Already have an account? <Text style={{ color:"#219ebc"}}>Login</Text>
                    </Text>
                </TouchableOpacity>
                
            </View>
        </Container>
    )
}

export default NurseRegister