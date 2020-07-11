import React from 'react';
import {View,StyleSheet} from 'react-native';
const Card = props=>{
    return(
    <View style={{...styles.cards,...props.style}}>{props.children}</View>
    );
};
const styles= StyleSheet.create({
    cards:{
        elevation:5,
        backgroundColor:'white',
        borderRadius:10,
        padding:10
    }
});
export default Card;
