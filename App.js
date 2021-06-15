import React, {useState} from 'react';
import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Task from './components/Task'

export default function App() {

  const [ task, setTask ] = useState()

  const [ taskItems, setTaskItems ] = useState([])

  const handleAddTask = () => {
    if(task === null)
      return
    setTaskItems([...taskItems, task])
    setTask(null)
    Keyboard.dismiss()
  }

  const completeTask = (index) => {
    let itemsCopy = [...taskItems]
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  }

  return (
    <View style={styles.container}>
      {/* Today's Task */}
      <View style={styles.tasksWrapper}>

        <Text style={styles.sectionTitle}>Today's Task</Text>

        <View style={styles.items}>

          {/* This is to start  */}
          {
            taskItems.map((item, index) => {
              return (
                <TouchableOpacity  key={index} onPress={() => completeTask()}>
                  <Task text={item}/>
                </TouchableOpacity>
              )
              
            })
          }
          {/* <Task text={'Task1'}/> */}

        </View>
      </View>

      {/* wRITE A TASK */}
        <KeyboardAvoidingView behavior={Platform.OS === 'ios'? "padding": "height"} style={styles.writeTaskWrapper}>
          <TextInput style={styles.input} placeholder={'Write a task'} value={task} onChangeText={text => setTask(text)}></TextInput>
          <TouchableOpacity onPress={() =>  handleAddTask()}>
            <View style={styles.addWrapper}>
              <Text style={styles.addText}>+</Text>
            </View>
          </TouchableOpacity>
        </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle:{
    fontWeight: 'bold',
    fontSize: 24,
  },
  items:{
    marginTop: 30,
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 30,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    paddingLeft: 10,
    backgroundColor: '#fff',
    borderRadius: 68,
    borderColor: '#CBCBCB',
    borderWidth: 1,
    width: 300,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#fff',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addText: {

  }
});
