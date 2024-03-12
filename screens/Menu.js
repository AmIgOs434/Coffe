import React from 'react';
import { SafeAreaView, Text, View, ImageBackground, TouchableOpacity, TextInput, ScrollView, Button } from 'react-native';
import { Appbar } from 'react-native-paper';
import { Platform } from 'react-native';
import style from '../App.module.css';
import { StatusBar } from 'expo-status-bar';
import logo from '../img/logo.png'
import { Image } from 'expo-image';
const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';



export default function Menu({navigation, route}) {
  return (
    <>
<StatusBar style="light" />
      <SafeAreaView style={style.container} >
      <ScrollView style={style.scroll}>
  <Text style={style.text_title}>
    Find the best coffee for you
  </Text>
        </ScrollView>
      </SafeAreaView>
  
    </>
  );
}