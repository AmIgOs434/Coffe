import React from 'react';
import { SafeAreaView, Text, View, ImageBackground, TouchableOpacity, TextInput, ScrollView, Button } from 'react-native';
import { Appbar } from 'react-native-paper';
import { Platform } from 'react-native';
import style from '../App.module.css';
import { StatusBar } from 'expo-status-bar';
import auth from '../img1/auth.png'
import logo from '../logo/гот/logo.png'
import { Image } from 'expo-image';
const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';



export default function Auth({navigation}) {
  return (
    <>
      <StatusBar backgroundColor="#000"
     barStyle="light-content" />
      {/* <Button
        title={'Start Recording'}
        onPress={startRecording}style={style.bookbtntext}>
      /> */}
    <View style={style.container}>
    <Image style={style.auth} source={auth} />
    <Image style={style.logo} source={logo} />

    <TouchableOpacity  onPress={() =>
            navigation.navigate('Menu')
          } style={style.button}>
      <Text style={style.button_clolor} >
        ВЫБРАТЬ КОФЕ
      </Text>
      </TouchableOpacity>

      <View style={style.butt_area_bottom}>

      <View style={style.butt_area_line}>
      </View>
      <Text style={style.butt_area_text} >
       CULT COFFEE 
      </Text>
      <View style={style.butt_area_line}>
      </View>
      </View>

      </View>
    </>
  );
}