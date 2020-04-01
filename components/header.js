import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
export default function Header() {
    return(
        <View style={styles.header}>
            <Text style={styles.title}> ToDo </Text>
            </View>
    )}
    const styles =
    StyleSheet.create({
header:{
    height:90,
    paddingTop:38,
    backgroundColor: 'darkviolet'
},
title:{
    textAlign: 'right',
    color:'#fff',
fontWeight:'bold',
fontSize:35

},
    });