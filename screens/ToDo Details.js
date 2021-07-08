import React, { useState } from 'react';
import {StyleSheet,View,Text,Button} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

export default function ToDoDetails ({navigation,route}){
    const [title,setTitle] = useState(navigation.getParam('item').title);
    const changeHandler = val => {
    setTitle(val);
   };
   
   const f = navigation.getParam("edit");
    return (
        <View style={styles.container}>
        <TextInput
            style={styles.item}
            value={title=='' ?navigation.getParam('item').title:title
        }
        onChangeText={(title)=>changeHandler(title)}
            multiline={true}
            />
            <Button 
            onPress={() => f(navigation.getParam("item").id,title) } 
                 title='Done'  color='darkviolet'/>
            
</View>
    )
}
const styles = StyleSheet.create({
    container: {
        padding: 24
    },
    titleText:{fontFamily: 'nunito-bold',
    fontSize: 35,
}
});