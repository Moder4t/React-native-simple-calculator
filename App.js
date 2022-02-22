import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';


export default function App() {

// const to use input and show output in container 
  const[inputText, setResultText] =useState("");
  const[outputText, setCalcText] =useState("");

//conClick console log numbers section
  const onButtonClick = (text) => {
    console.log(text); 
    // call to eval fonction
    if(text == "="){
      return calculation()
    }
    setResultText(inputText + text)
  };

// onclick console log operations section
  const onOperationClick = (text) => {

    //Array of operations
    let operations = ["DEL", "AC", "+", "-", "*", "/"]

    // Clear fonction
    if(text == 'C'){
      setResultText("");
      setCalcText(0)
      return;
    }
    // DEL fonction
    if(text == "DEL"){
      return setResultText(inputText.toString().substring(0,inputText.length-1))
    }
    console.log(text);

    // Remove operation text from string
    if(operations.includes(inputText.toString().split("").pop())) return;
    setResultText(inputText + text);
  };

// Eval fonction (calculations)
const calculation =() => {
  setCalcText(eval(inputText))
};

  return (
    // main container
    <View style={styles.container}>
{/*result contrainer*/}      
      <View style={styles.result}>
        <Text style={styles.resultText}>{outputText}</Text>
      </View>

{/*calculation text container*/}      
      <View style={styles.calculation}>
      <Text style={styles.calculationText}>{inputText}</Text>
      </View>

{/*Buttons container*/}
{/*row 1-2-3*/}      
      <View style={styles.buttons}>
        <View style={styles.numbers}>
          <View style={styles.row}>
            <TouchableOpacity onPress ={() =>{onButtonClick(1)}}>
              <Text style={styles.number}>1</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress ={() =>{onButtonClick(2)}}>
              <Text style={styles.number}>2</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress ={() =>{onButtonClick(3)}}>
              <Text style={styles.number}>3</Text>
            </TouchableOpacity>
          </View>
{/*row 4-5-6*/}
          <View style={styles.row}>
            <TouchableOpacity onPress ={() =>{onButtonClick(4)}}>
              <Text style={styles.number}>4</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress ={() =>{onButtonClick(5)}}>
              <Text style={styles.number}>5</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress ={() =>{onButtonClick(6)}}>
              <Text style={styles.number}>6</Text>
            </TouchableOpacity>
          </View>
{/*row 7-8-9*/}
          <View style={styles.row}>
            <TouchableOpacity onPress ={() =>{onButtonClick(7)}}>
              <Text style={styles.number}>7</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress ={() =>{onButtonClick(8)}}>
              <Text style={styles.number}>8</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress ={() =>{onButtonClick(9)}}>
              <Text style={styles.number}>9</Text>
            </TouchableOpacity>
          </View>
{/*row.-0.=*/}
          <View style={styles.row}>
            <TouchableOpacity onPress ={() =>{onButtonClick(".")}}>
              <Text style={styles.number}>.</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress ={() =>{onButtonClick(0)}}>
              <Text style={styles.number}>0</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress ={() =>{onButtonClick("=")}}>
              <Text style={styles.number}>=</Text>
            </TouchableOpacity>
          </View>
        </View>
{/*Operation container*/}
        <View style={styles.operations}>
          <TouchableOpacity onPress={()=> {onOperationClick("DEL")}}>
            <Text style={styles.operationsButtons}>DEL</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> {onOperationClick("C")}}>
            <Text style={styles.operationsButtons}>C</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> {onOperationClick("+")}}>
            <Text style={styles.operationsButtons}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> {onOperationClick("-")}}>
            <Text style={styles.operationsButtons}>-</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> {onOperationClick("/")}}>
            <Text style={styles.operationsButtons}>/</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> {onOperationClick("*")}}>
            <Text style={styles.operationsButtons}>*</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}


//StyleSheet
const styles = StyleSheet.create({

  container: {
    flex: 1,
  },

  result: {
    backgroundColor: "#205b7a",
    flex: 2,
    alignItems: "flex-end",
    justifyContent: "center",
  },

  calculation: {
    flex: 1,
    backgroundColor: "#a2bbcf",    
    alignItems: "flex-end",
    justifyContent: "center",
  },

  buttons:{
    flex: 7,
    flexDirection: "row",
  },

  numbers: {
    backgroundColor:"#142f44",
    flex: 3
  },

  operations: {
    backgroundColor: "#1d3849",
    flex:1,
    justifyContent: "space-around",
    alignItems: "center"
  },

  resultText: {
    fontSize:40,
    fontWeight: "bold",
    color:"white",
  },

  calculationText: {
    fontSize:20,
    fontWeight: "bold",
    color:"black",
  },

  row:{
    flexDirection:'row',
    flex:1,
    justifyContent: "space-around",
    alignItems: 'center',
  },

  number:{
    color:'white',
    fontSize:30,
  },
  
  operationsButtons:{
    color: 'white',
    fontSize:30,
  }
});
