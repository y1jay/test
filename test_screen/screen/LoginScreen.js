import React from 'react';
import { StyleSheet, Text, View, Image, TextInput,TouchableOpacity } from 'react-native';


export default class LoginScreen extends React.Component {

  render() {
    return (
      <View>
  <TouchableOpacity onPress={()=>this.props.navigation.navigate('SignUp')}>
                <Text style={styles.makeAccountText}>계정 만들기</Text>
</TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
makeAccountText :{marginTop:100}
});