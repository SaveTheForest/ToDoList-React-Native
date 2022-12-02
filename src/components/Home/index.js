import React, { useEffect, useState } from "react";
import {
  StatusBar,
  Image,
  KeyboardAvoidingView,
  FlatList,
  Keyboard,
} from "react-native";
import getRealm from "../../database/realm";
import {
  Container,
  Header,
  Search,
  AddTaskButton,
  Line,
  Status,
} from "./style";
import Task from "../Task";
import uuid from "react-native-uuid";

export default function Home() {
  const [task, setTask] = useState("");
  const [response, setResponse] = useState([]);




  const updateStatusTask = async (set) => {
  let modify = null
   if(set.status === 0 ){
  modify = 1
   }else{
   modify = 0
   }


try{
  const realm = await getRealm()
  realm.write(() => {
  realm.create(
  "Task",
  { _id: set._id, taskName: set.taskName, date: set.date, status: modify },
  "modified"
)})
setResponse(realm.objects("Task"));
console.log('sucess modify task status')
}catch{
  console.log('error modify task status')
}


  }



  const deleteTask = async (deleting) => {


    try {
      

      const id = deleting._id;
      const realm = await getRealm();
   
      realm.write(() => {
        realm.delete(realm.objectForPrimaryKey("Task", id));
      });
      setResponse(realm.objects("Task"));
      console.log("sucessfully deleted");
    } catch {
      alert("failed to delete");
    }
  };

  async function handleNewTask() {
    const realm = await getRealm();

    if (task != "") {
      try {
        realm.write(() => {
          realm.create("Task", {
            _id: uuid.v4(),
            taskName: task,
            date: new Date(),
            status: 0
            
          });
        });
        setResponse(realm.objects("Task"));
      } catch {
        alert("Error adding task");
      } finally {
        setTask("");
      }
    } else {
      alert("Fill in the field");
    }
  }

  useEffect(() => {
    async function entryLoadApp() {
      const realm = await getRealm();
      setResponse(realm.objects("Task"));
    }
    entryLoadApp();
  }, []);

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        hidden={false}
        backgroundColor="#272430"
        translucent={false}
      />
      <Header>Tasks</Header>

      <Search
        maxLength={35}
        value={task}
        onChangeText={(text) => setTask(text)}
        placeholder="Add Task"
        placeholderTextColor="#FFF"
      />
      <KeyboardAvoidingView>
        <AddTaskButton
          onPressOut={Keyboard.dismiss}
          onPress={() => {
            handleNewTask();
          }}
        >
          <Image source={require("./../../assets/icons/plus.png")} />
        </AddTaskButton>
      </KeyboardAvoidingView>

      <Line />
      <Status>To Do</Status>
      <FlatList
      keyExtractor={response._id}
        data={response}
        renderItem={({ item: response }) => (
          <Task data={response} deleting={deleteTask} status={updateStatusTask} />
        )}
      />
    </Container>
  );
}
