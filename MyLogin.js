import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TextInput,
  ImageBackground,
} from 'react-native';
import Authentication_Button from './AuthenticationButton';
import dynamic_styles from './LoginStyles';

const MyLogin = () => {
  const styled = dynamic_styles();

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  return (
    <View>
      <View
        style={{
          resizeMode: 'contain',
          position: 'absolute',
          //   backgroundColor: 'green',
          justifyContent: 'flex-end',
          alignItems: 'center',
          alignContent: 'center',
          bottom: 0,
          width: '100%',
        }}>
        <ImageBackground
          source={require('./assets/footLogin.png')}
          style={{
            height: 250,
            width: '100%',
          }}
        />
      </View>
      <ScrollView
        style={{
          //   backgroundColor: 'yellow',
          minHeight: '100%',
          maxHeight: '100%',
        }}>
        <View style={styles.container}>
          <Image
            source={require('./assets/Logo.png')}
            resizeMode="center"
            style={styles.image}
          />
          <View>
            <TextInput
              label="Email"
              value={email}
              onChangeText={email => setEmail(email)}
              style={styled.txtInput}
              placeholder="Email"
            />

            {/* Password field */}
            <TextInput
              label="Password"
              value={password}
              onChangeText={password => setPassword(password)}
              style={styled.txtInput}
              placeholder="Password"
              secureTextEntry={true}
            />

            {/* Authentication buttons */}
            <View style={styled.authenticationButton}>
              <Authentication_Button
                title={'Login'}
                backGroundColor={'#2c88d1'}
                textColor={'#FFFFFF'}
                borderColor={'#2c88d1'}
              />

              <Authentication_Button
                title={'Signup'}
                backGroundColor={'#FFFFFF'}
                textColor={'#2c88d1'}
                borderColor={'#2c88d1'}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 450,
    height: 250,
    marginVertical: 10,
  },
  textTitle: {
    fontSize: 40,
    marginVertical: 10,
  },
  textBody: {},
});
export default MyLogin;
