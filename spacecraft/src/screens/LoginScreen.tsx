import React from 'react';
import { Text, SafeAreaView,StyleSheet,TextInput,TouchableHighlight,View, Dimensions } from 'react-native';
import { Checkbox } from 'react-native-paper'; 
import Header from '../compontents/Header'

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

export default function LoginScreen() {
  const [email, setEmail] = React.useState('Email');
  const [password, setpassword] = React.useState('Password');
  const [ischecked, setcheck] = React.useState(true);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.Title}>
          <Header title={'SpaceCraft'}/>
        </Text>
      </View>
      <View style={styles.Bottom}>
        <TextInput
          style={styles.textinput1}
          value={email}
          onChangeText={setEmail}
          clearTextOnFocus={true}
        />
        <TextInput
          style={styles.textinput2}
          value={password}
          onChangeText={setpassword}
          clearTextOnFocus={true}
          secureTextEntry= {ischecked}
        />
         <Checkbox.Item 
        status={ ischecked ? 'unchecked' : 'checked'}
        label="Show Password" 
        color='#00ff00'
        onPress={()=> {setcheck(!ischecked)}}
        />
        <TouchableHighlight
          style={styles.Bcontainer}
          onPress={() => {
            alert('User ' + email + ' logged in successfully!');
          }}>
          <View style={styles.button}>
            <Text style={styles.buttontext}>Login</Text>
          </View>
        </TouchableHighlight>
        <Text style={styles.invisible}>Read Terms and Conditions</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: deviceHeight,
    width: deviceWidth,
  },
  top: {
    borderColor: 'black',
    borderWidth: 4,
    fontSize: 18,
    backgroundColor: '#6a5ae8',
    height: deviceHeight*2/7,
    width: deviceWidth,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Title: {
    fontSize: 45,
    color: 'white',
    fontWeight: 'bold',
  },
  Bcontainer: {
    marginBottom: 25,
  },
  invisible: {
    color: '#d8d8d8',
  },
  button: {
    width: deviceWidth*1/5,
    height: deviceHeight*1/10,
    backgroundColor: '#6a5ae8',
    borderWidth: 2,
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttontext: {
    color: 'white',
    fontSize: 20,
  },
  Bottom: {
    height: deviceHeight*5/7,
    width: deviceWidth,
    alignItems: 'center',
    borderLeftWidth: 4,
    borderRightWidth: 4,
    borderBottomWidth: 4,
  },
  textinput1: {
    borderWidth: 1,
    width: deviceWidth*1/3,
    height: deviceHeight*1/10,
    marginTop: 65,
    marginBottom: 25,
  },
  textinput2: {
    borderWidth: 1,
    width: deviceWidth*1/3,
    height: deviceHeight*1/10,
    marginBottom: 30,
  },
});
