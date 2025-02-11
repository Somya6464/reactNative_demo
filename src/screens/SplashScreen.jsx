import { StyleSheet, View, Image, Text } from 'react-native';
import React, { useEffect } from 'react';

export default function SplashScreen({ navigation }) {
    const handleRedirection = () => {
        setTimeout(() => {
            navigation.replace('Login'); // Use `replace` to prevent going back to SplashScreen
        }, 3000); // Reduced the timeout to 3 seconds for better UX
    };

    useEffect(() => {
        handleRedirection();
    }, []); // Empty dependency array ensures it runs once

    return (
        <View>
            <Image
                source={
                    { uri: "https://images.unsplash.com/photo-1737509551345-21577f99bf63?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNnx8fGVufDB8fHx8fA%3D%3D" }
                }
                style={styles.image}
            />
        </View>
    );
}

const styles = StyleSheet.create({

    image: {
        resizeMode : "cover", // Adjusts the image scaling
        width: '100%',
        height: '100%',
    },
});
