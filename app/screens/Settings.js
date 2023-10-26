import React,{useState} from "react";
import {View,Text,Image,TouchableHighlight,
    TouchableOpacity,StatusBar,Switch} from 'react-native';
import Container from "../components/Container/Container";
import { heightPercentageToDP as hp,
    widthPercentageToDP as wp
} from "react-native-responsive-screen";
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Entypo from 'react-native-vector-icons/Entypo'; 


const Settings = ({navigation}) => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return (
        <Container>
            <View>
                <StatusBar barStyle='light-content' 
                    translucent={false}  
                />
                
                <View style={{display:"flex",flexDirection:"row",
                    marginTop:hp('3%'),marginHorizontal:wp('4%')}}>
                    <Image 
                        resizeMode="contain"
                        style={{width:80,height:80,borderRadius:hp('6%')}}
                        source={require("../../assets/set.jpeg")}
                    />
                    <View style={{marginLeft:wp('6%'),marginTop:hp('1.5%')}}>
                        <Text style={{fontSize:hp('3%'),fontFamily:'Lato-Black'}}>
                            Aggrey Agaba
                        </Text>
                        <Text style={{fontSize:hp('2%'),color:"#28a6e0"}}>
                            agaba7@gmail.com
                        </Text>
                    </View>
                </View>
                <TouchableOpacity style={{
                    height:hp('12%'),width:wp('94%'),borderRadius:wp('2%'),
                    marginHorizontal:wp('3%'),
                    marginTop:hp('2%'),
                    backgroundColor:"#ffffff",
                    opacity:2,
                    shadowColor:"#000",
                    shadowOffset:{
                        width:0,height:2
                    },
                    shadowOpacity:0.1,
                    shadowRadius:3.84,elevation:9,padding:hp('2.2%')}}
                >
                    <View style={{display:"flex",
                        flexDirection:"row",justifyContent:"space-between"}}>
                        <View style={{display:"flex",flexDirection:"row"}}>
                            <MaterialIcons name="event-available" size={50} />
                            <View>
                                <Text style={{fontSize:hp('2.8%'),fontFamily:'Lato-Black',color:'black'}}>
                                    Availability
                                </Text>
                                <Text style={{fontFamily:'Lato-Black'}}>
                                    Adjust your availability</Text>
                            </View>
                        </View>
                        <Switch
                            trackColor={{false: '#767577', true: '#81b0ff'}}
                            thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitch}
                            value={isEnabled}
                            style={{fontSize:hp('8%')}}
                        />
                    </View>
                    
                </TouchableOpacity>
                <TouchableOpacity style={{
                    height:hp('12%'),width:wp('94%'),borderRadius:wp('2%'),
                    marginHorizontal:wp('3%'),
                    marginTop:hp('2%'),
                    backgroundColor:"#ffffff",
                    opacity:2,
                    shadowColor:"#000",
                    shadowOffset:{
                        width:0,height:2
                    },
                    shadowOpacity:0.1,
                    shadowRadius:3.84,elevation:9,padding:hp('2.4%')}}
                >
                    <View style={{display:"flex",
                        flexDirection:"row",justifyContent:"space-between"}}>
                        <View style={{display:"flex",flexDirection:"row"}}>
                            <Ionicons name="settings" size={40}  />
                            <Text style={{fontSize:hp('2.8%'),fontFamily:'Lato-Black',color:'black'}}>
                                App Settings
                            </Text>
                            {/* <Text style={{fontSize:hp('2.7%'),
                                fontWeight:"bold",color:"black"}}>
                                App Settings
                            </Text> */}
                        </View>
                        <Entypo 
                            name="chevron-small-right"
                            size={30}
                            color="black"
                        />   
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={{
                    height:hp('12%'),width:wp('94%'),borderRadius:wp('2%'),
                    marginHorizontal:wp('3%'),
                    marginTop:hp('2%'),
                    backgroundColor:"#ffffff",
                    opacity:2,
                    shadowColor:"#000",
                    shadowOffset:{
                       width:0,height:2
                    },
                    shadowOpacity:0.1,
                    shadowRadius:3.84,elevation:9,padding:hp('2.4%')}}
                >
                    <View style={{display:"flex",
                        flexDirection:"row",justifyContent:"space-between"}}>
                        <View style={{display:"flex",flexDirection:"row"}}>
                            <AntDesign name="profile" size={38}  />
                            <Text style={{fontSize:hp('2.8%'),fontFamily:'Lato-Black',color:'black'}}>
                                Update Profile
                            {/* <Text style={{fontSize:hp('2.7%'),
                                fontWeight:"bold",color:"black"}}>
                                Update Profile */}
                            </Text>
                        </View>
                        
                        <Entypo 
                            name="chevron-small-right"
                            size={30}
                            color="black"
                        />   
                    </View>
                </TouchableOpacity>
            </View>
        </Container>
    )
}


export default Settings;