import React,{useState,useEffect} from "react";
import PropTypes from 'prop-types';
import {Text,View,TouchableOpacity,TextInput,
    TouchableHighlight,Image} from 'react-native';
import Container from "../components/Container/Container";
import { widthPercentageToDP as wp,heightPercentageToDP as hp } from "react-native-responsive-screen";
import LabelInput from "../components/LabelInput/LabelInput";

import Toast from 'react-native-simple-toast';
import { Picker } from "@react-native-picker/picker";

import ButtonWithText from "../components/ButtonWithText/ButtonWithText";
import RadioForm from 'react-native-simple-radio-button';

const QualiPicker = ({ qualification, onValueChange }) => {
    return (
        <Picker
            selectedValue={qualification}
            style={{ 
                height:hp('3%'), 
                width:wp('84%'),
                fontWeight:"bold",color:"black",color:"#28a6e0" }}
            onValueChange={onValueChange}
        >
            <Picker.Item label="Doctor With Degree" value="DDeg" />
            <Picker.Item label="Surgeon" value="Sur" />
        </Picker>
    )
}
    


QualiPicker.propTypes = {
    qualification: PropTypes.string,
    onValueChange: PropTypes.func,
};

const MyLabel = ({label,placeText,
    keyboard,secure,onChangeText,value
}) => {
    return (
        <View style={{marginTop:hp('2%')}}>
            <Text style={{fontSize:hp('2.12%'),
                fontFamily:'Lato-Black'}}>
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





const DoctorRegister = ({navigation}) => {
    const [qualification, setQualification] = useState("DDeg");

    const [radioValue, setRadioValue] = useState('Female');
    const handleChangeQualification = (itemValue) => {
        setQualification(itemValue)
    }
    const [chosenOption, setChosenOption] = useState('Female');
    const options = [
        {label:'Female',value:'Female'},{label:'Male',value:'Male'}
    ]
    return (
        <Container>
            <View style={{
                alignItems:"center",alignContent:"center",
                    justifyContent:"center"}}>
                <Text style={{fontWeight:"bold",
                    fontSize:hp('2.3%'),
                    textAlign:"center",fontFamily:'Lato-Black',
                    marginTop:hp('4%')}}>
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
                    placeText="e.g Kololo"
                />
                <Text style={{marginRight:wp('52%'),
                    textAlign:"left",fontFamily:'Lato-Black',marginTop:hp('2%')}}>
                    Select qualification
                </Text>
                <QualiPicker
                    qualification={qualification}
                    onValueChange={handleChangeQualification}
                />
                <Text style={{marginRight:wp('52%'),
                    fontFamily:'Lato-Black',fontSize:hp('2%')}}>
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
                    command="Register"
                    textColor="white"
                    onPress={() => navigation.navigate('Dashboard') }
                />
                <TouchableOpacity
                    style={{
                        marginTop:hp('3%'),
                        height:hp('10%')
                    }}
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

export default DoctorRegister;