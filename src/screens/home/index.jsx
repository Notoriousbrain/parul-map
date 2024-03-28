import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import parul from "../../../assets/parul.jpg"

const HomePage = () => {
  const navigation = useNavigation();

  const handleMap = () =>{
    navigation.navigate("Maps")
  }
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="py-4 bg-my-primary">
        <Text className="text-[20px] text-white font-semibold text-center">
          Parul University
        </Text>
      </View>

      <View className="flex px-4 gap-4  items-center py-8 h-full">
        <Image source={parul} className="rounded-[10px]"  />
        <View className="flex flex-row gap-4">
          <TouchableOpacity className="border py-2 flex justify-center items-center w-[40%] rounded-[10px]">
            <Text className="text-[20px] font-semibold ">Directions</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleMap}
            className="border py-2 flex justify-center items-center w-[40%] rounded-[10px]"
          >
            <Text className="text-[20px] font-semibold ">Search</Text>
          </TouchableOpacity>
        </View>
        <View className="flex flex-row gap-4">
          <TouchableOpacity className="border py-2 flex justify-center items-center w-[40%] rounded-[10px]">
            <Text className="text-[20px] font-semibold ">Notifications</Text>
          </TouchableOpacity>
          <TouchableOpacity className="border py-2 flex justify-center items-center w-[40%] rounded-[10px]">
            <Text className="text-[20px] font-semibold ">Study Space</Text>
          </TouchableOpacity>
        </View>
        <View className="flex flex-row gap-4">
          <TouchableOpacity className="border py-2 flex justify-center items-center w-[40%] rounded-[10px]">
            <Text className="text-[20px] font-semibold ">Feedback</Text>
          </TouchableOpacity>
          <TouchableOpacity className="border py-2 flex justify-center items-center w-[40%] rounded-[10px]">
            <Text className="text-[20px] font-semibold ">
              Campus Informations
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomePage;
