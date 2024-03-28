import {
  View,
  Text,
  Pressable,
  Keyboard,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { MyInput } from "../../components";
import { useNavigation } from "@react-navigation/native";

const RegisterPage = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = () => {
    navigation.navigate("Home");
  };

  const handleLogin = () => {
    navigation.navigate("Login");
  };

  return (
    <SafeAreaView className="h-full bg-white flex justify-center items-center">
      <View className="w-full px-4">
        <Pressable className="space-y-12" onPress={() => Keyboard.dismiss()}>
          <View className="space-y-12">
            <Text className="text-my-primary text-center text-[48px] font-semibold">
              Register
            </Text>

            <View className="space-y-4">
              <View>
                <MyInput place="Email" val={email} setVal={setEmail} />
              </View>
              <View>
                <MyInput
                  place="Password"
                  secure={true}
                  val={password}
                  setVal={setPassword}
                />
              </View>
              <View>
                <TouchableOpacity
                  onPress={handleSubmit}
                  className="bg-my-primary flex justify-center items-center py-3 rounded-[10px]"
                >
                  <Text className="text-white text-[16px] font-bold">
                    Register
                  </Text>
                </TouchableOpacity>
                <Pressable
                  onPress={handleLogin}
                  className="flex py-1 items-center"
                >
                  <Text className="text-[#8A8A8A] font-medium">
                    Already have an account? Login
                  </Text>
                </Pressable>
              </View>
            </View>
          </View>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default RegisterPage;
