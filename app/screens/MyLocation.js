import React,{useState,useRef,useEffect} from 'react';
// Import required components
import {SafeAreaView, StatusBar,TextInput,StyleSheet,TouchableOpacity, Text, View} from 'react-native';
// Import Map and Marker
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';

import { 
    heightPercentageToDP as hp,
    widthPercentageToDP as wp
} from 'react-native-responsive-screen';
import LinearGradient from "react-native-linear-gradient";

import AntDesign from 'react-native-vector-icons/AntDesign';
import ButtonWithText from '../components/ButtonWithText/ButtonWithText';
import MyButton from '../components/MyButton/MyButton';
import Feather from 'react-native-vector-icons/Feather';


const MyLocation = ({navigation}) => {
    const mapRef = useRef();
    return(
        <SafeAreaView style={{flex:1}}>
            <View style={styles.container}>
                <MapView
                    ref={mapRef}
                    zoomControlEnabled={true}
                    showsMyLocationButton={true}
                    provider={PROVIDER_GOOGLE}
                    initialRegion={{
                      latitude: 0.347596,
                      longitude:32.582520,
                      latitudeDelta: 0.05,
                      longitudeDelta: 0.05,
                    }}
                    style={styles.map}
                >
                  
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
                  <View style={{height:hp('22%'),
                    borderRadius:hp('2%'),marginTop:hp('4%'),
                    alignItems:"center",padding:hp('3%'),
                    width:wp('84%'),backgroundColor:"#d3e7f0"}}
                  >
                    <Text style={{fontFamily:'Lato-Black',fontSize:hp('2.2%')}}>
                      ENTER PATIENT LOCATION
                    </Text>
                    <TextInput
                      placeholder="Enter Location"
                      style={{display:"flex",
                        paddingHorizontal:wp('3%'),
                        height:42,width:wp('74%'),
                        borderRadius:wp('3%'),
                        marginTop:hp('3%'),fontSize:hp('2.2%'),
                        backgroundColor:"white"
                      }}
                      
                    />
                    
                  </View>
                  <MyButton 
                    top={hp('2%')}
                    command="CONTINUE"
                    onPress={() => navigation.navigate('Matching')}
                    //color="#0077b6"
                    color="#28a6e0"
                  />
                </LinearGradient>
            </View>
        </SafeAreaView>
    )
}

export default MyLocation;


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
