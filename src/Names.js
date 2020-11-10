import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from './src/component/Header';
 
export default class App extends React.Component{
  renderList(){
    const names = [
      'Maria Conceição',
      'Victor Hugo',
      'Carlos Costa',
      'João Nascimento'
    ]
 
    const textElements = names.map((name, index) => {
      return <Text key={index}>{name}</Text> 
      }
    )    
    return  textElements
  }
  render(){
    return (
      <View>
        <Header title='Pessoas'/>
        {this.renderList()}
      </View>
    );
  }
}