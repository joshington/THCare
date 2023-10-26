import React from "react";
import {Text,View,TouchableHighlight,TouchableOpacity} from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp} from "react-native-responsive-screen";
import styles from  './styles'

const NewsCard = ({customIcon,title,descr}) => {
    return (
        <TouchableOpacity style={{
            marginHorizontal:wp('7%'),marginTop:hp('1.5%'),
            backgroundColor:"#ffffff",
            opacity:1,
            shadowColor:"#000",
            shadowOffset:{
                width:0,height:1
            },
            shadowOpacity:0.1,
            shadowRadius:3.84,elevation:4,
            borderRadius:hp('1.4%'),
            width:wp('82%'),
            height:hp('16%'),
            alignContent:"center",alignItems:"center",
            

        }}>
            <View style={{display:"flex",
                flexDirection:"row",alignContent:"center",alignItems:"center",
                justifyContent:"space-between"}}
            >
                <View style={{marginTop:hp('1%')}}>
                    {customIcon}
                </View>
                <View style={{marginTop:hp('2%')}}>
                    <Text style={{fontSize:hp('2.66%'),
                        fontFamily:'sans-serif',fontWeight:"bold",
                        color:"black"}}
                    >
                        {title}
                    </Text>
                    <Text style={{width:wp('60%'),fontSize:hp('2%'),
                        fontFamily:'sans-serif'}}>
                            {descr}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}


export default NewsCard;