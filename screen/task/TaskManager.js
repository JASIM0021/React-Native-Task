import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, FlatList,  StyleSheet } from 'react-native';

const TaskManager = () => {
  const [task, setTask] = useState({ name: '', time: '', place: '' });
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    retrieveTasks();
  }, []);

  const retrieveTasks = async () => {
    try {
      const storedTasks = await AsyncStorage.getItem('tasks');
      if (storedTasks !== null) {
        setTasks(JSON.parse(storedTasks));
      }
    } catch (error) {
      console.error('Error retrieving tasks:', error);
    }
  };

  const storeTasks = async () => {
    try {
      await AsyncStorage.setItem('tasks', JSON.stringify(tasks));
    } catch (error) {
      console.error('Error storing tasks:', error);
    }
  };

  const handleInputChange = (key, value) => {
    setTask(prevTask => ({ ...prevTask, [key]: value }));
  };

  const handleAddTask = () => {
    setTasks([...tasks, task]);
    storeTasks();
    setTask({ name: '', time: '', place: '' });
  };

  const renderTaskItem = ({ item }) => (
    <View style={styles.taskItem}>
      <Text>Name: {item.name}</Text>
      <Text>Time: {item.time}</Text>
      <Text>Place: {item.place}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Task Name"
          value={task.name}
          onChangeText={text => handleInputChange('name', text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Time"
          value={task.time}
          onChangeText={text => handleInputChange('time', text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Place"
          value={task.place}
          onChangeText={text => handleInputChange('place', text)}
        />
        <Button title="Add Task" onPress={handleAddTask} />
      </View>
      <FlatList

        data={tasks}
        renderItem={renderTaskItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default TaskManager;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  inputContainer: {
    marginBottom: 20,
    height:200
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  taskItem: {
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#eee',
    borderRadius: 5,
  },
});
