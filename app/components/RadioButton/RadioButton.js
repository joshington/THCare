import React, {useState} from 'react';
import { View, Text,Pressable } from 'react-native';
import styles from './styles'

const RadioButton = ({ data, onSelect }) => {
    //==adding states===
    const [userOption, setUserOption] = useState(null);
    //function handling the changing of the state
    const selectHandler = (value) => {
        onSelect(value);
        setUserOption(value);
    }
    return (
        <View>
            {data.map((item) => {
                return (
                    <Pressable 
                        style={item.value === userOption ? styles.selected : styles.unselected}
                        onPress={() => selectHandler(item.value)}
                    >
                        <Text style={styles.option}>{item.value}</Text>
                    </Pressable>
                )
            })}
        </View>
    );
}
  
export default RadioButton;