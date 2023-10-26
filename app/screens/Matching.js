import React,{useState,useRef,useEffect} from 'react';
// Import required components
import {SafeAreaView, StatusBar,TextInput,Linking,
  StyleSheet,TouchableOpacity,Image, Text, View} from 'react-native';
// Import Map and Marker
import MapView, {Marker, PROVIDER_GOOGLE, Polyline} from 'react-native-maps';

import { 
    heightPercentageToDP as hp,
    widthPercentageToDP as wp
} from 'react-native-responsive-screen';
import LinearGradient from "react-native-linear-gradient";

import AntDesign from 'react-native-vector-icons/AntDesign';
import ButtonWithText from '../components/ButtonWithText/ButtonWithText';
import MyButton from '../components/MyButton/MyButton';
import Feather from 'react-native-vector-icons/Feather';
import MapViewDirections from 'react-native-maps-directions';



const makeCall = (number) => {
  const args = {
      number: number, // String value with the number to call
      prompt: true // Optional boolean property. Determines if the user should be prompt prior to the call 
  }
 call(args).catch(console.error)
}



const NewBut = ({command,onPress,col,top,wid}) => {
  return(
      <TouchableOpacity
          style={{height:hp('8%'),width:wid,marginTop:top,
          backgroundColor:col,
          borderRadius:hp('1.5%'),
          justifyContent:"center"}}
          onPress={onPress}
      >
          <Text style={{textAlign:"center",fontSize:hp('2.5%'),
              color:"white",fontWeight:"bold"}}
          >
              {command}
          </Text>
      </TouchableOpacity>
  )
}



const Matching = ({navigation}) => {
    const mapRef = useRef();

    const phone = '0706626855'
    const makeCall = () => {
      const args = {
          number: phone, // String value with the number to call
          prompt: true // Optional boolean property. Determines if the user should be prompt prior to the call 
      }
     call(args).catch(console.error)
    }

    //adding the coords for the places=====
    const [coordinates] = useState([
      {
        latitude:0.315690,
        longitude:32.578110
      },
      {
        latitude:0.337810,
        longitude:32.586360
      },
    ]);
    return(
        <SafeAreaView style={{flex:1}}>
            <View style={styles.container}>
                <MapView
                    ref={mapRef}
                    zoomControlEnabled={true}
                    showsMyLocationButton={true}
                    provider={PROVIDER_GOOGLE}
                    initialRegion={{
                      latitude: coordinates[0].latitude,
                      longitude:coordinates[0].longitude,
                      latitudeDelta: 0.0622,
                      longitudeDelta: 0.0121,
                    }}
                    style={styles.map}
                >
                  {/* <MapViewDirections
                    origin={coordinates[0]}
                    destination={coordinates[1]}
                    apikey="AIzaSyBd1KX4L4FJbgA9MTv-wOvnXJBKphnfQ5c" 
                    strokeWidth={4}
                    strokeColor='#111111'
                  /> */}
                  {/* <Marker 
                    coordinate={coordinates[0]}
                    
                  /> */}
                  <Marker
                    coordinate={coordinates[0]}
                  />
                 

                  <Marker 
                    coordinate={coordinates[1]}
                  />
                   

                  <Polyline  
                    coordinates={coordinates}
                    strokeColor='#008000'
                    strokeColors={['#7F0000']}
                    strokeWidth={8}
                  />
                </MapView>
                <TouchableOpacity
                  style={{marginRight:wp('74%'),marginBottom:hp('22%')}}
                  onPress={() => navigation.goBack()}
                >
                  <AntDesign name="leftcircle" size={40} color="#28a6e0" />
                </TouchableOpacity>
                <LinearGradient
                    colors={['#fff','#fff']}
                    start={{ x: 0.5, y: 0.5 }}
                    end={{ x: 0.0, y:0.0 }} location={[0,1]}
                    style={{width: '100%',height:'70%',
                        borderTopLeftRadius:hp('2%'),
                        borderTopRightRadius:hp('2%'),
                        padding:hp('3%')
                    }}
                >
                  <View style={{height:hp('36%'),
                    borderRadius:hp('2%'),marginTop:hp('2%'),
                    alignItems:"center",padding:hp('3%'),
                    width:wp('86%'),backgroundColor:"#f6fbf4"}}>
                    <Text style={{color:'black',
                      fontSize:hp('2.3%'),fontFamily:'Lato-Black'}}>
                      MATCHING
                    </Text>
                    <Text style={{fontSize:hp('2.2%'),fontFamily:'Lato-Black',
                      marginTop:hp('1.2%'),textAlign:'center'}}>
                      Your Nurse is 10 mins away</Text>
                    <View style={{display:"flex",flexDirection:"row",marginTop:hp('3%')}}>
                      <Image 
                        resizeMode="contain"
                        style={{width:80,height:80,borderRadius:hp('6%')}}
                          source={require("../../assets/n2.png")}
                        />
                      <View style={{marginTop:hp('1%'),fontFamily:'Lato-Black', marginLeft:wp('7%')}}> 
                        <Text style={{fontSize:hp('3%')}}>
                          Julius joseph</Text>
                        <View style={{flexDirection:"row",display:"flex"}}>
                                
                          <Text style={{fontSize:hp('3.2%'),fontFamily:'Lato-Bold',color:'black'}}>
                                  0777717210
                                </Text>
                            </View>
                        </View>
                    </View>
                    <MyButton 
                      command="Call"
                      top={hp('2%')}
                      color="#28a6e0"
                      onPress={() => {Linking.openURL('0706626855')}}
                    />
                    <View style={{display:"flex",
                      flexDirection:"row",marginTop:hp('6%'),justifyContent:"space-evenly"}}>
                      <TouchableOpacity
                        style={{height:hp('8%'),width:wp('48%'),
                        backgroundColor:"#f6fbf4",
                        borderRadius:hp('1.5%'),
                        marginRight:wp('5%'),
                        justifyContent:"center"}}
                        onPress={() => navigation.navigate('CancelOrder')}
                      >
                        <Text style={{textAlign:"center",fontSize:hp('2.5%'),
                          fontFamily:'Lato-Black',
                          color:"black",fontWeight:"bold"}}
                        >
                          CANCEL ORDER
                        </Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={{height:hp('8%'),width:wp('30%'),
                        backgroundColor:"#28a6e0",
                        borderRadius:hp('1.5%'),
                        justifyContent:"center"}}
                        onPress={() => navigation.navigate('Pricing')}
                        
                      >
                        <Text style={{textAlign:"center",fontSize:hp('2.5%'),
                          color:"white",fontWeight:"bold"}}
                        >
                          BOOK
                        </Text>
                      </TouchableOpacity>
                    </View>
                    
                  </View>
                  
                </LinearGradient>
            </View>
        </SafeAreaView>
    )
}

export default Matching;


const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height:hp('100%'),
    width:wp('100%'),justifyContent:'flex-end',alignItems:'center'

  },
  map:{
    ...StyleSheet.absoluteFillObject,
  }
});
