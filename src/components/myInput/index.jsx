import { TextInput } from "react-native";
import React from "react";

const MyInput = ({ place, val, setVal, keyType, edit, secure }) => {
  return (
    <TextInput
      placeholder={place}
      placeholderTextColor={"#8A8A8A"}
      value={val}
      keyboardType={keyType}
      editable={edit}
      secureTextEntry={secure}
      onChangeText={(text) => setVal(text)}
      className="text-black py-2 px-4 bg-[#CFCFCF] rounded-[10px]"
    />
  );
};

export default MyInput;
