import React from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableHighlight,
  View,
} from 'react-native';

export default function App() {
  const [email, setEmail] = React.useState('Email');
  const [password, setpassword] = React.useState('Password');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.Title}>SpaceCraft</Text>
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
    flex: 1,
  },
  top: {
    borderColor: 'black',
    borderWidth: 4,
    fontSize: 18,
    backgroundColor: '#6a5ae8',
    flex: 2,
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
    width: 200,
    height: 50,
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
    flex: 5,
    alignItems: 'center',
    borderLeftWidth: 4,
    borderRightWidth: 4,
    borderBottomWidth: 4,
  },
  textinput1: {
    borderWidth: 1,
    width: 300,
    height: 50,
    marginTop: 65,
    marginBottom: 25,
  },
  textinput2: {
    borderWidth: 1,
    width: 300,
    height: 50,
    marginBottom: 30,
  },
});
