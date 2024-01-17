import { StyleSheet, Text, TextInput, Button, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";

export default function AddTodo({ submitHandler }) {
  const [text, setText] = useState("");
  const changeHandler = (val) => {
    setText(val);
  };
  return (
    <View>
      <TextInput
        styles={styles.input}
        placeholder="Add new item"
        onChange={changeHandler}
      />
      <Button
        title="Add item"
        color="coral"
        onPress={() => submitHandler(text)}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 2,
    borderBottomColor: "#ddd",
  },
});
