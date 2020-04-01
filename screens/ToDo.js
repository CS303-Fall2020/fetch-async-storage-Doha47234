 import React ,{useState,useEffect}from 'react';
 import {StyleSheet, Text, View,FlatList, Alert,TouchableWithoutFeedback,TouchableOpacity,Keyboard ,Button,AsyncStorage, ActivityIndicator} from 'react-native';
 import Header  from '../components/header';
  import TodoItem from '../components/todoitem';
  import AddTodo from'../components/addTodo';
 export default function ToDo ({navigation},props){
     const [todos,setTodos] =useState([]);
     const [loading, setLoading] =useState(true);
useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos?userId=1")
    .then((response)=> response.json())
    .then(response=>{
        setTodos(response),
        setLoading(false)
    })
         .then((json) => console.log(json))
         .catch(e => {
             console.error(e)
         })
     },[])
     const onRefresh = async () => {
         setLoading(!loading);
        return fetch("https://jsonplaceholder.typicode.com/todos?userId=1")
        .then((response)=> response.json())
        .then((responseJson)=>{
            setTodos(responseJson),
            setLoading(false)
        })
        .catch((error)=>{
            console.error(error);
        })
        }
     const edit =(id,title) => {
         setTodos(prevTodos=>{
             return prevTodos.filter(todo=>{
                 if((todo.id !=id)==false){
                     todo.title=title;
                 }
                 return true;
             })
         })
         navigation.navigate('ToDo');
     }
    // AsyncStorage.setItem("Todos",Json.stringify())
    
       const PressHandler = id => {
         setTodos((prevTodos)=>{return prevTodos.filter(todo =>todo.id!= id);
         });
     };
     const PressHandler1= (item) => {
            navigation.navigate('ToDoDetails',{item,edit});
            }
     const PressHandler2 = id => {
        setTodos(prevTodos=>{
          return prevTodos.filter(todo => {
        if((todo.id != id)== false){
          todo.completed = !todo.completed;
        }
        return true;
      })
      }) 
      }
      
     const submitHandler= title => {
       if(title.length > 3){
         setTodos((prevTodos)=>{
           return [
             { title: title, id: Math.random().toString() ,completed:false },
             ...prevTodos
           ];
             });
       }else{
         Alert.alert("OOPS!','Todos must be over 3 chars long",[
           {title:"Understood",onPress:() => console.log("alert closed")}
]);
       }
      };
      return (
         //<Sandbox />
         <TouchableWithoutFeedback onPress={() =>{
            Keyboard.dismiss();
            console.log('dismissed keyboard');
          }}> 
         <View style={styles.container}>
            <Header/>
                       <View style={styles.content}>
              <AddTodo submitHandler={submitHandler}/>
     <View style={styles.list}>
         {(loading)?(<ActivityIndicator size='large' color='black'/>)
        :( 
        <FlatList
                data={todos}
                renderItem={({ item })=>(
                    <TouchableOpacity onPress={()=> navigation.navigate('ToDoDetails',item)}>
                        <TodoItem item={item}
                        navigation={navigation}
                        PressHandler={PressHandler}
                        PressHandler1={PressHandler1}
                    PressHandler2={PressHandler2}
                    edit={edit}
                    />
                     </TouchableOpacity> 
                )}
                />
                )}
          </View>
                 </View>
                 <Button title='Refresh'  color='darkviolet' onPress={onRefresh}/>
        </View>
       </TouchableWithoutFeedback>
);
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
   },
 });