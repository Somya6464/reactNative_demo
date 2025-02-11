import {
    StyleSheet, Text, View, Image, SafeAreaView,
    useColorScheme,
    TextInput,
    Pressable,
    TouchableOpacity,
    ScrollView
} from 'react-native'
import React, { useState } from 'react';

const LoginScreen = ({ navigation }) => {
    const isDarkMode = useColorScheme() === 'dark';
    // const loginLogo = require('./assets/login_Image.png');
    const [emailg, getEmail] = useState('');
    const [passwordg, getPassword] = useState('');

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onTapLogin = () => {
        console.log(emailg, passwordg);
        setEmail(emailg);
        setPassword(passwordg);

        getEmail('');
        getPassword('');

    }

    return (
        <SafeAreaView style={[styles.container, { backgroundColor: isDarkMode ? 'gray' : 'lightyellow' }]}>
            {/* <navigation.Container>
          <MyStack />
        </navigation.Container> */}
            <ScrollView style={{ flex: 1 }}>
                {/* <View style={{ alignItems: 'center' }}>
                    <Image
                        style={{ width: 50, height: 50, marginTop: 150 }}
                        source={loginLogo} />
                </View> */}

                <Text style={styles.text}>Email</Text>
                <TextInput
                    style={styles.input}
                    value={emailg}
                    onChangeText={(email) => getEmail(email)}
                    placeholder="Enter your email"
                    keyboardType="email-address"
                />

                <Text style={styles.text}>Password</Text>
                <TextInput
                    style={styles.input}
                    value={passwordg}
                    onChangeText={(password) => getPassword(password)}
                    placeholder="Enter your password"
                    secureTextEntry
                />

                <Pressable style={styles.button} onPress={onTapLogin /*alert('Login button pressed')*/}>
                    <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 20 }}>Login</Text>
                </Pressable>

                <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 50 }}>
                    <Text>If you don't have account,</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Home') /*alert('Sign Up button pressed')*/}>
                        <Text style={{ color: 'blue' }}> Sign Up</Text>
                    </TouchableOpacity>
                </View>
                {email && password && <Text style={{ marginTop: 20 }}>Email: {email} Password: {password}</Text>}
            </ScrollView>
        </SafeAreaView>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 15,
        gap: 10,
        flexDirection: 'column',
    },
    text: {
        marginTop: 15,
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'left'
    },
    input: {
        height: 40,
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: 'white',
        padding: 10,
    },
    button: {
        backgroundColor: 'lightblue',
        padding: 10,
        borderRadius: 5,
        marginTop: 20,
        alignItems: 'center'
    },
});