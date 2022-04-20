import React, {useRef,useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Animated,
  PanResponder,
  TouchableOpacity,
  Image,
  nativeEvent
} from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

const App = () => {
  const [count, setCount] = useState(0);
  const img = require('./src/img/board.png');
  const handlePress = (evt) =>{
    console.log(`coordernada x = ${evt.nativeEvent.locationX}`);
    // console.log(`coordernada y = ${evt.nativeEvent.locationY}`);
  }
  return (
    <View style={styles.container}>
      
      <TouchableOpacity onPress={(nativeEvent)=>handlePress(nativeEvent)}
       style={styles.button}
       onLayout={
         ({nativeEvent})=> {console.log(nativeEvent.layout)}}>
        <Image source = {img}
        resizeMode = "contain"
        onLayout={({nativeEvent}) => {
        console.log(nativeEvent.layout)}}
        style = {{maxWidth: '100%'}} />
      </TouchableOpacity>
      <Text>{count}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  titleText: {
    fontSize: 14,
    lineHeight: 24,
    fontWeight: "bold"
  },
  button: {
    alignItems: "center",
    backgroundColor: "#d9001d",
    padding: 10,
    marginTop: 10,
  },
  box: {
    height: 150,
    width: 150,
    backgroundColor: "blue",
    borderRadius: 5
  }
  
});


export default App;
