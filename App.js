import React,{ useState, useEffect } from 'react';
 import * as Font from 'expo-font';
import { StyleSheet, Text, View,FlatList, Alert,TouchableWithoutFeedback,Keyboard ,Button} from 'react-native';
import ToDoDetails from './screens/ToDo Details';
 import { AppLoading } from 'expo';
   import Navigator from './routes/homeStack';
     const getFonts = () => Font.loadAsync({
 'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
  'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf')
  });
 export default function App({navigation}) { 
  // const pressHandler23= () => {
  //            navigation.navigate('ToDoDetails');
  //        }
   const [fontsLoaded, setFontsLoaded] = useState(false);
   if(fontsLoaded){
      return(
        <Navigator/>
      )
    }
      else {
     return ( 
      <AppLoading
       startAsync={getFonts}
       onFinish={() => setFontsLoaded(true)}
       />)}
       
 }
    const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  
  },
  content:{
    padding:40,
  flex: 1,
  },
  list:{
    flex: 1,
   marginTop:20,
  }
});
    
     
//   // const URL = 'https://jsonplaceholder.typicode.com/todos?userId=1';
//   //   const [todos,setTodos] = useState([]);
//   //   useEffect(()=>{
//   //       fetch(URL)
//   //       .then((response) => response.json())
//   //       .then((responseJson)=> {
//   //           return responseJson.todos;
//   //       })
//   //       .then(todos => {
//   //           setTodos(todos);
//   //           setLoading(false);
//   //       })
//     //     .catch(error => {
//     //         Console.error(error);
//     //     });
//     // }, []);
//     //      }

  
// //           <Button 
// //title='refresh' 
// //color='darkviolet'
// //onPress={pressHandler2}   
// ///>
 //}