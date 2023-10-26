import React,{useEffect,useState} from "react";
import {Text, View,TouchableHighlight,TouchableOpacity,StyleSheet,
    Image,StatusBar,Modal,Pressable,ActivityIndicator} from 'react-native';
import LinearGradient from "react-native-linear-gradient";
import Container from "../components/Container/Container";

import Feather from 'react-native-vector-icons/Feather'
import AntDesign from 'react-native-vector-icons/AntDesign';

import { heightPercentageToDP as hp,
    widthPercentageToDP as wp
} from "react-native-responsive-screen";
import Octicons from 'react-native-vector-icons/Octicons';
import Separator from "../components/Separator/Separator";
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Ionicons from 'react-native-vector-icons/Ionicons'




const Dashboard = ({navigation}) => {
    return (
        <Container>
            <View>
                <StatusBar barStyle='light-content' 
                    translucent={false}  
                />
                <LinearGradient
                    colors={['#28a6e0','#28a6e0']}
                    start={{ x: 0, y: 0.4 }}
                    end={{ x: 0.5, y:1.0 }} location={[0,1]}
                    style={{width: '100%',height:'70%',
                        borderBottomLeftRadius:hp('2%'),
                        borderBottomRightRadius:hp('2%')
                    }}
                >
                    <View style={{flexDirection:'row',marginTop:hp('3%'),
                        marginHorizontal:wp('2%'),
                        display:"flex",justifyContent:"space-between"}}
                    >
                        <TouchableOpacity
                            onPress={() => navigation.goBack()}
                        >
                            <Feather name="chevron-left" size={30} color="white" />
                        </TouchableOpacity>
                        
                        <Text style={{
                            fontSize:hp('3%'),
                            color:"white",
                            fontFamily:'Lato-Bold'}}
                        >
                            Profile
                        </Text>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Settings')}
                        >
                            <Ionicons name="settings" size={30} color="white" />
                        </TouchableOpacity>
                        
                    </View>
                    <View style={{display:"flex",
                        flexDirection:"row",marginTop:hp('2%'),marginHorizontal:wp('5%')}}>
                        <Image 
                            resizeMode="contain"
                            style={{width:80,height:80,borderRadius:hp('6%')}}
                            source={require("../../assets/n2.png")}
                        />
                        <View style={{marginTop:hp('1%'), marginLeft:wp('7%')}}> 
                            <Text style={{fontSize:hp('3%'),
                                color:"white",fontFamily:'Lato-Bold'}}>
                                Julius joseph
                            </Text>
                            <View style={{flexDirection:"row",display:"flex"}}>
                                <AntDesign name="star" size={30} color="white" />
                                <Text style={{fontSize:hp('3.2%'),color:"white"}}>4.5</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{
                        height:hp('25%'),width:wp('94%'),borderRadius:wp('2%'),
                        marginHorizontal:wp('3%'),
                        marginTop:hp('4%'),
                        backgroundColor:"#ffffff",
                        opacity:2,
                        shadowColor:"#000",
                        shadowOffset:{
                            width:0,height:2
                        },
                        shadowOpacity:0.1,
                        shadowRadius:3.84,elevation:9,padding:hp('2.1%')}}
                    >
                        <View style={{display:"flex",
                            flexDirection:"row",justifyContent:"space-between"}}>
                            <Text style={{fontSize:hp('3%'),
                                fontFamily:'Lato-Bold',
                                marginBottom:hp('2%')}}>
                               Total Earnings
                            </Text>
                            <Feather name="more-vertical" size={30} color="black" />
                        </View>
                        <Text style={{
                            fontSize:hp('3%'),
                            fontFamily:'Lato-Black'
                            ,marginBottom:hp('1%')}}
                        >
                            UGX. 50000
                        </Text>
                        <View style={{width:wp('80%'),backgroundColor:"gray",
                            height:1.3,
                            marginTop:hp('0.4%'),fontWeight:"bold"
                        }} />
                        <View style={{
                            display:"flex",flexDirection:"row",marginTop:hp('2%'),
                            justifyContent:"space-around"}}
                        >
                            <View>
                                <Text style={{fontSize:hp('2.1%'),
                                    fontFamily:'Lato-Black'
                                }}>
                                    Total Clients
                                </Text>
                                <Text style={{fontSize:hp('2.3%'),
                                    fontFamily:'Lato-Black'}}>
                                    100</Text>
                            </View>
                            <View>
                                <Text style={{fontSize:hp('2.1%'),
                                    fontFamily:'Lato-Black'
                                }}>
                                    Client Score
                                </Text>
                                <Text style={{fontSize:hp('2.3%'),
                                    fontFamily:'Lato-Black'
                                }}>
                                    70%
                                </Text>
                            </View>
                            <View>
                                <Text style={{fontSize:hp('2.1%'),
                                    color:"black",fontWeight:"bold"}}>
                                    Total Time</Text>
                                <Text style={{fontSize:hp('2.9%'),color:"black"}}>
                                    100 Hrs</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{
                        height:hp('13%'),width:wp('94%'),borderRadius:wp('2%'),
                        marginHorizontal:wp('3%'),
                        marginTop:hp('2%'),
                        backgroundColor:"#ffffff",
                        opacity:2,
                        shadowColor:"#000",
                        shadowOffset:{
                            width:0,height:2
                        },
                        shadowOpacity:0.1,
                        shadowRadius:3.84,elevation:9,padding:hp('2%')}}
                    >
                        <View style={{display:"flex", 
                            flexDirection:"row",justifyContent:"space-between"}}>
                            <Text style={{fontSize:hp('2.2%'),
                                color:"black",fontWeight:"bold"}}>
                                Ongoing Apt.
                            </Text>
                        </View>
                        <View style={{display:"flex",marginTop:hp('1.1%'),
                            flexDirection:"row",justifyContent:"space-between"}}>
                            <View style={{display:"flex",flexDirection:"row"}}>
                                <EvilIcons name="user" size={40} color="black" />
                                <Text style={{fontSize:hp('2.2%'),color:"black"}}>
                                    Aggrey
                                </Text>
                            </View>
                            <View>
                                <Text style={{fontSize:hp('2.2%'),
                                    color:"black",fontWeight:"bold"}}>
                                    Start Time
                                </Text>
                                <Text style={{color:"black"}}>5:00pm</Text>
                            </View>
                            <View>
                                <Text style={{fontSize:hp('2.2%'),
                                    color:"black",fontWeight:"bold"}}>End Time</Text>
                                <Text style={{color:"black"}}>8:00pm</Text>
                            </View>
                        </View>
                    </View>
                    <Text style={{fontSize:hp('2.4%'),
                        marginTop:hp('1.5%'),
                        marginLeft:wp('2.4%'),fontWeight:"bold",color:"black"}}>
                        Notifications
                    </Text>
                    <View style={{
                        height:hp('13%'),width:wp('94%'),borderRadius:wp('2%'),
                        marginHorizontal:wp('3%'),
                        marginTop:hp('1.2%'),
                        backgroundColor:"#ffffff",
                        opacity:2,
                        shadowColor:"#000",
                        shadowOffset:{
                            width:0,height:2
                        },
                        shadowOpacity:0.1,
                        shadowRadius:3.84,elevation:9,padding:hp('2%')}}
                    >
                        <View style={{display:"flex",marginTop:hp('1.3%'),
                            flexDirection:"row",justifyContent:"space-between"}}>
                            <View style={{display:"flex",flexDirection:"row"}}>
                                <EvilIcons name="user" size={53} color="black" />
                                <View style={{marginTop:hp('0.8%')}}>
                                    <Text style={{fontSize:hp('2%'),color:"black"}}>
                                        Aggrey messaged you
                                    </Text>
                                    <Text style={{color:"#28a6e0",fontWeight:"bold"}}>Iam waiting</Text>
                                </View>
                                
                            </View>
                            
                            <Text style={{color:"black"}}>10 mins ago</Text>
                        </View>
                    </View> 
                </LinearGradient>
            </View>
            
        </Container>
    )
} 

export default Dashboard;