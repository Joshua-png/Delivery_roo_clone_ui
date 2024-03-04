import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Animatable from "react-native-animatable";
import * as Progress from "react-native-progress";
import { useEffect } from "react";

export default function PreparingOrderScreen({ navigation }) {
  // Mocking the accepting order part
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Delivery");
    }, 5000);
  });

  return (
    <SafeAreaView className="flex-1 bg-white justify-center items-center">
      <Animatable.Image
        source={require("../assets/deliveroo2.gif")}
        animation="slideInUp"
        iterationCount={1}
        className="h-96 w-96"
      />

      <Animatable.Text
        animation="slideInUp"
        iterationCount={1}
        className="text-lg my-10 text-[#00ccb8] font-bold text-center"
      >
        Waiting for restaurant to accept the order!
      </Animatable.Text>

      <Progress.Circle size={60} indeterminate={true} color="#00ccb8" />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({});
