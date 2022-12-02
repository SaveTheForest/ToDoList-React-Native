import React, { useState } from "react";
import { Image, View, Text, TouchableOpacity } from "react-native";
import { Modal } from "react-native";
import {
  ButtonComplete,
  Container,
  TaskText,
  TaskDate,

  AlertAreaDelete,
} from "./style";

export default function Task({ data, deleting, status }) {
  
  const [visible, setVisible] = useState(false);


  return (
    <Container onLongPress={() => setVisible(true)}
    style={{backgroundColor: data.status === 0 ? '#8871fd' : '#4F438A'}}>
      <Modal visible={visible} transparent={true} animationType={"slide"}>
        <AlertAreaDelete>
          <Image
            style={{
              height: 85,
              width: 72,

              marginTop: 25,
            }}
            source={require("../../assets/icons/alert.png")}
          />
          <Text
            style={{
              marginTop: 15,
              fontWeight: "bold",
              color: "#FFF",
              fontSize: 18,
            }}
          >
            Do you want to delete this task?
          </Text>
          <View style={{ flexDirection: "row", marginTop: "10%" }}>
            <TouchableOpacity
              onPressOut={() => setVisible(false)}
              onPress={() => deleting(data)}
              style={{
                height: 35,
                width: 130,
                backgroundColor: "#fff",
                borderRadius: 10,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text
                style={{ color: "#7C61FF", fontSize: 18, fontWeight: "bold" }}
              >
                Accept
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => setVisible(false)}
              style={{
                height: 30,
                width: 130,
                borderRadius: 10,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text style={{ color: "#FFF", fontSize: 18, fontWeight: "bold" }}>
                Decline
              </Text>
            </TouchableOpacity>
          </View>
        </AlertAreaDelete>
      </Modal>
      <ButtonComplete
        onPress={() => {
          status(data)
        }}
      >
        {data.status === 0 ? (
          <Image source={require(`../../assets/icons/check_2.png`)} />
        ) : (
          <Image source={require(`../../assets/icons/check.png`)} />
        )}
      </ButtonComplete>

      <TaskText
        style={{ textDecorationLine: data.status === 0 ? " " : "line-through" }}
      >
        {data.taskName}
      </TaskText>

      <TaskDate>{data.date.toLocaleDateString()}</TaskDate>
    </Container>
  );
}
