import { useState } from 'react'
import { Pressable, StyleSheet, Text, TextInput, View, FlatList, ScrollView } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

const CreateItemScreen = ({ data, setnewData }) => {
  const [itemName, setItemName] = useState('')
  const [itemStock, setItemStock] = useState('')

  const [isEdit, setIsEdit] = useState(false)
  const [editIndex, setEditIndex] = useState(null)


  const addItemHandler = () => {
     const newIteam = {
      id: Date.now(),
      name: itemName,
      stock: itemStock
     }
     setnewData([...data, newIteam])
     setItemName('')
     setItemStock('')
     setIsEdit(false)
  }
  const deleteItemHandler = (id) => {
    setnewData(data.filter(item => item.id !== id))
  }
  const editIteamHandler = (item) => {
    setIsEdit(true)
    setItemName(item.name)
    setItemStock(item.stock)
    setEditIndex(item.id)
    console.log( item.stock)
  }

  const updateItem = () => {
    setnewData(data.map((item) => item.id === editIndex ? { ...item, name: itemName, stock: itemStock } : item))
    setItemName('')
    setItemStock('')
    setIsEdit(false)
  }
   
  return (
    <View style={styles.container}>
      <TextInput placeholder="Enter item name"
        style={styles.input}
        value={itemName}
        onChangeText={(text) => setItemName(text)}
      />
      <TextInput placeholder="Enter stock quantity"
        style={styles.input}
        value={itemStock}
        // inputMode='numeric'
        onChangeText={(text) => setItemStock(text)}
      />

      <Pressable style={styles.button} onPress={() => isEdit? updateItem(): addItemHandler()}>
        <Text style={styles.btnText}>{isEdit? "Edit Item":"Add Item"}</Text>
      </Pressable>

      <View style={{ marginTop: 20, flex: 1 }}>
        <View style={styles.headigContainer}>
          <Text style={styles.headingText}>All Iteams in Stock</Text>
        </View>
        <FlatList data={data} keyExtractor={(item) => item.id.toString()} renderItem={({ item }) =>

          <View style={[styles.iteamContainer, { backgroundColor: item.stock < 50 ? '#ffcccc' : '#d7f6bfff' }]}>
            <Text>{item.name}</Text>
            <Text>{item.stock} {item.unit}</Text>
            <TouchableOpacity onPress={()=> editIteamHandler(item)}>
              <Text>Edit</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => deleteItemHandler(item.id)}>
              <Text>Delete</Text>
            </TouchableOpacity>
          </View>
        } contentContainerStyle={{ marginBottom: 50 }} />
      </View>
    </View>

  )
}

export default CreateItemScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: "2%",
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    borderRadius: 8,
    marginVertical: 10,
  },
  button: {
    backgroundColor: '#cabfeeff',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  btnText: {
    fontWeight: '500',
    fontSize: 16,
    color: 'black'
  },
  // style for AllItems component
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
    padding: "3%",
    marginVertical: 5,
    borderRadius: 5,
  },
})