import React, {Component} from 'react';
import { StyleSheet, View, Text,TextInput} from 'react-native';

 
export default class SignupScreen extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: '이메일',
            password: '비밀번호',
        }
    }

  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.switchText}>SWITCH{"\n"}계정 만들기</Text>
        <TextInput style={styles.textInputButton}
        onChangeText={(email) => this.setState({email})}
        placeholder={this.state.email}
        autoCorrect={false}
        />
        <TextInput style={styles.textInputButton}
        onChangeText={(password) => this.setState({password})}
        placeholder={this.state.password}
        autoCorrect={false}
        secureTextEntry={true}
        />
        <Text style={styles.descriptionText}>회원가입 시 이용약관에 동의한 것으로 간주합니다.</Text>
      
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#d8d8d8'
    },
    switchText: {
        fontSize: 16,
        color: '#5b5a5a',
        marginTop: 41,
        textAlign: 'center',
        marginBottom: 115,

    },
    textInputButton: {
        width: 288,
        borderColor: 'gray',
        paddingVertical: 10,
        borderWidth: 0.3,
        paddingHorizontal: 5,
        borderRadius: 2,
        backgroundColor: 'white',
        height: 50,
    },
    descriptionText : {
        marginTop: 20,
        fontSize: 12,
        color: '#5b5a5a',
        fontWeight: '200',
    },
    signupButton: {
        marginTop: 97.5,
    }
});