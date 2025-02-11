import { Button, Pressable, StyleSheet, Text, View, } from 'react-native'
import React, { useState } from 'react';
import CreateItemScreen from '../components/CreateItemScreen';
import { FlatList } from 'react-native-gesture-handler';



const HomeScreen = ({ navigation }) => {

    const [allItem, setAllItem] = useState(0);
    const [data, setnewData] = useState([
        { id: 1, name: 'Apple', stock: 10,  },
        { id: 2, name: 'Banana', stock: 20,  },
        { id: 3, name: 'Pyneapple', stock: 30, },
        { id: 4, name: 'papaya', stock: 40, },
        { id: 5, name: 'Grapes', stock: 50, },
        { id: 6, name: 'Atta', stock: 60, },
        { id: 7, name: 'Rice', stock: 70, },
        { id: 8, name: 'Mango', stock: 80, },
        { id: 9, name: 'Kiwi', stock: 90, },
        { id: 10, name: 'Mashroom', stock: 100, },]);
    return (
        <View style={styles.container}>
            {/* <Text style={styles.title} >signUp_screen</Text> */}
            <View style={styles.buttonContainer}>
                <Pressable style={[styles.button, allItem === 0 ? { backgroundColor: "#d7f6bfff" } : null]} onPress={() => setAllItem(0)}>
                    <Text style={styles.btnText}>All Items</Text>
                </Pressable>
                <Pressable style={[styles.button, allItem === 1 ? { backgroundColor: "#d7f6bfff" } : null]} onPress={() => setAllItem(1)}>
                    <Text style={styles.btnText}>Low Stock</Text>
                </Pressable>
                <Pressable style={[styles.button, allItem === 2 ? { backgroundColor: "#d7f6bfff" } : null]} onPress={() => setAllItem(2)}>
                    <Text style={styles.btnText}>Create</Text>
                </Pressable>
            </View>
            {/* <Button title="Go to Login" onPress={() => navigation.goBack()} /> */}
            {allItem === 0 && <AllItems data={data} />}
            {allItem === 1 && <AllItems data={data.filter(item => item.stock < 50)} />}
            {allItem === 2 && <CreateItemScreen data={data} setnewData={setnewData} />}
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        padding: "2.5%",
        backgroundColor: 'lightyellow',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: "#333",

    },
    buttonContainer: {
        flexDirection: 'row',
        gap: 10,
        marginVertical: 10,
    },
    button: {
        paddingVertical: 3.5,
        paddingHorizontal: 10,
        borderRadius: 50,
        borderWidth: 0.8,
        borderColor: 'green',
    },
    btnText: {
        color: 'green',
        fontSize: 12,
    },
    headigContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
    },
    headingText: {
        fontWeight: '500',
        fontSize: 16,
    },
    iteamContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: "2%",
        marginVertical: 5,
        borderRadius: 5,
    },

})


function AllItems({ data }) {
    return (
        <View style={{ flex: 1 }}>
            <View style={styles.headigContainer}>
                <Text style={styles.headingText}>Iteam</Text>
                <Text style={styles.headingText}>Quantity (kg)</Text>

            </View>
            <FlatList data={data} keyExtractor={(item) => item.id.toString()} renderItem={({ item }) =>

                <View style={[styles.iteamContainer, { backgroundColor: item.stock < 50 ? '#ffcccc' : '#d7f6bfff' }]}>
                    <Text>{item.name}</Text>
                    <Text>{item.stock} {item.unit}</Text>
                </View>


            } />


        </View>
    )
}

