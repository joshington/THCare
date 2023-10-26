import React,{useState,useEffect} from "react";
import {View,Text, TextInput,StatusBar,Image,StyleSheet,TouchableOpacity} from 'react-native';
import Container from "../components/Container/Container";
import { widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from "react-native-responsive-screen";
import RadioForm from 'react-native-simple-radio-button';
import MyButton from "../components/MyButton/MyButton";

//data for the gender

const ButonWithText = ({command,onPress,isCo,color,textColor}) => {
    return(
        <TouchableOpacity
            style={{height:hp('6%'),width:wp('80%'),marginTop:hp('4%'),
            backgroundColor: isCo ? color : "blue",
            borderRadius:hp('1.5%'),
            marginHorizontal:wp('12%'),justifyContent:"center"}}
            onPress={onPress}
        >
            <Text style={{textAlign:"center",
                fontSize:hp('2.8%'),fontFamily:'Lato-Bold',
                color:textColor,fontWeight:"bold"}}
            >
                {command}
            </Text>
        </TouchableOpacity>
    )
}









const MyLabel = ({label,placeText,
    keyboard,secure,onChangeText,value
}) => {
    return (
        <View style={{marginTop:hp('3%')}}>
            <Text style={{fontSize:hp('2.4%'),fontFamily:'Lato-Black'}}>
                {label}
            </Text>
            <TextInput
                placeholder={placeText}
                style={{display:"flex",
                    paddingHorizontal:wp('3%'),
                    height:hp('6%'),width:wp('78%'),
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



const data = [
    {value: 'Surgeon'},
    {value: 'Cardiologist'}
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
        marginLeft: 6,
        fontSize: 16,
        color: '#333',
    },
});


const Hospitals = ({navigation}) => {
    const [radioValue, setRadioValue] = useState('Surgeon');

    const [chosenOption, setChosenOption] = useState('Cardiologist');

    const handleChangeQualification = (itemValue) => {
        setQualification(itemValue)
    }
    const options = [
        {label:'Surgeon',value:'Surgeon'},
        {label:'Cardiologist',value:'Cardiologist'}
    ]
    return (
        <Container>
            <View style={{marginTop:hp('4%'),
                alignItems:"center"}}>
                <StatusBar barStyle='light-content' 
                    translucent={false}  
                />
                <Text style={{fontSize:hp('3%'),fontFamily:'Lato-Bold',
                    textAlign:"center",
                    color:"black"}}
                >
                    Book A Specialist Instantly
                </Text>
                
                <MyLabel 
                    label="Name of Hospital/Center" 
                    placeText="e.g Team Home Care" 
                    
                />
                <MyLabel 
                    label="Contact"
                    placeText="e.g 0395555xxxxxx" 
                    keyboard="numeric"
                    
                />
                <View style={{marginTop:hp('4%')}}>
                    <Text style={{marginBottom:hp('3%'),color:'black',
                        fontSize:hp('3%'),fontFamily:'Lato-Bold'}}>
                        Choose Specialists
                    </Text>
                    <RadioForm
                        radio_props={options}
                        initial={0}
                        onPress={(value) => {setChosenOption(value);}}
                        formHorizontal={true}
                    />
                </View>
                <View style={{display:"flex",
                    marginRight:wp('2%'),
                    justifyContent:"space-between",
                    flexDirection:"row",marginTop:hp('2%')}}>
                    <Text style={{fontSize:hp('2.8%'),fontFamily:'Lato-Black'}}>
                        No. of Specialists:</Text>
                    <TextInput 
                        style={{height:hp('5%'),width:wp('20%'),
                        marginLeft:wp('7%'),
                        backgroundColor:"white",
                        borderWidth:hp('.2%'),borderRadius:hp('1%'),
                        textAlign:"center",
                     
                    }}
                        keyboardType="numeric"
                    />
                </View>
                <View style={{display:"flex",
            
                    justifyContent:"space-around",
                    flexDirection:"row",marginTop:hp('2%')}}
                >
                    <Text style={{fontSize:hp('2.8%'),fontFamily:'Lato-Black'}}>
                        No. of Days:</Text>
                    <TextInput 
                        style={{height:hp('5%'),width:wp('20%'),
                        marginLeft:wp('20%'),
                        backgroundColor:"white",
                        borderWidth:hp('.2%'),borderRadius:hp('1%'),
                        textAlign:"center"
                    }}
                        keyboardType="numeric"
                    />
                </View>

                <ButonWithText 
                    isCo={true}
                    color="#28a6e0"
                    textColor="white"
                    command="Book"
                    
                />
            </View>
        </Container>
    )
}

export default Hospitals;