import { StyleSheet } from "react-native";
import { heightPercentageToDP as hp,
    widthPercentageToDP as wp
} from "react-native-responsive-screen";

export default StyleSheet.create({
    separator: {
        backgroundColor:"black",
        
        flex: 1,
        display:"flex",
        flexDirection:"row",
        marginLeft: 20,
    }
})