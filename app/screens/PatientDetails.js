import React,{useState,useEffect} from "react";
import {View,Text, TextInput,StatusBar,Image,StyleSheet} from 'react-native';
import Container from "../components/Container/Container";
import { widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from "react-native-responsive-screen";
import RadioForm from 'react-native-simple-radio-button';
import MyButton from "../components/MyButton/MyButton";

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


const PatientDetails = ({navigation}) => {
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
            <View style={{marginTop:hp('4%')}}>
                <StatusBar barStyle='light-content' 
                    translucent={false}  
                />
              
                <Text style={{fontSize:hp('3%'),color:'black',fontFamily:'Lato-Bold',textAlign:'center'}}>
                    Enter patient Details
                </Text>
                
                <View style={{alignItems:"center",marginTop:hp('4%')}}>
                    <Text style={{marginBottom:hp('3%'),fontFamily:'Lato-Black',
                        fontSize:hp('2.3%')}}>
                        Choose Nurse Gender
                    </Text>
                    <RadioForm
                        radio_props={options}
                        initial={0}
                        onPress={(value) => {setChosenOption(value);}}
                        formHorizontal={true}
                    />
                </View>
                <View style={{display:"flex",
                    justifyContent:"space-between",marginHorizontal:wp('16%'),
                    flexDirection:"row",marginTop:hp('2%')}}>
                    <Text style={{fontSize:hp('3%'),fontFamily:'Lato-Black'}}>
                        No. of Hours:
                    </Text>
                    <TextInput 
                        style={{height:hp('5%'),width:wp('20%'),
                        backgroundColor:"white",
                        borderWidth:hp('.2%'),borderRadius:hp('1%')}}
                        keyboardType="numeric"
                    />
                </View>
                <View style={{alignItems:"center",marginTop:hp('3%')}}>
                    <Text style={{
                        fontWeight:"bold",fontSize:hp('3%')}}
                    >
                        Enter Patient Description
                    </Text>
                    <TextInput
                        style={{display:"flex",
                            marginTop:hp('2%'),
                            paddingHorizontal:wp('2%'),
                            height:hp('20%'),width:wp('80%'),
                            borderRadius:wp('2%'),borderWidth:wp('0.15%')
                        }}
                    />
                    <MyButton 
                        top={hp('2%')}
                        command="CONTINUE"
                        //color="#0077b6"
                        color="#28a6e0"
                        onPress={() => navigation.navigate('MyLocation')}
                        
                    />
                </View>
                
            </View>
        </Container>
    )
}

export default PatientDetails;