import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { XMarkIcon } from "react-native-heroicons/solid";
import * as Progress from "react-native-progress";
import { useSelector } from "react-redux";
import MapView, { Marker } from "react-native-maps";

export default function DeliveryScreen({ navigation }) {
  const restaurant = useSelector((state) => state.restaurant.restaurant);

  return (
    <View className="flex-1 bg-[#00ccb8]">
      <SafeAreaView className="z-50">
        <View className="flex-row justify-between items-center p-5">
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <XMarkIcon size={30} color="white" />
          </TouchableOpacity>
          <Text className="font-semibold text-white text-lg">Order Help</Text>
        </View>

        <View className="bg-white mx-5 my-2 rounded-md p-6 z-50 shadow-md">
          <View className="flex-row items-center justify-between">
            <View>
              <Text className="text-lg text-gray-400">Estimated Arrival</Text>
              <Text className="text-3xl font-bold">50-60 Minutes</Text>
            </View>
            <Image
              source={require("../assets/deliveryguy.png")}
              className="h-20 w-20"
            />
          </View>

          <Progress.Bar progress={30} color="#00ccb8" indeterminate={true} />

          <Text className="mt-3 text-gray-500">
            Your order at{" "}
            <Text className="font-bold text-[#00ccb8]">{restaurant.title}</Text>{" "}
            is being prepared
          </Text>
        </View>
      </SafeAreaView>

      <MapView
        initialRegion={{
          latitude: restaurant.latitude,
          longitude: restaurant.longitude,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
        className="flex-1 -mt-10 z-0"
        mapType="mutedStandard"
      >
        <Marker
          coordinate={{
            latitude: restaurant.latitude,
            longitude: restaurant.longitude,
          }}
          title={restaurant.title}
          description={restaurant.short_description}
          identifier="origin"
          pinColor="#00ccb8"
        />
      </MapView>

      <SafeAreaView className="bg-white flex-row items-center px-6 pb-6 space-x-5">
        <Image
          source={require("../assets/deliveryguy.png")}
          className="h-12 w-12 bg-gray-300  rounded-full"
        />
        <View className="flex-1">
          <Text className="text-lg">Joshua Aryee</Text>
          <Text className="text-gray-400">Your Rider</Text>
        </View>

        <Text className="text-[#00ccb8] text-lg font-bold">Call</Text>
      </SafeAreaView>
    </View>
  );
}
const styles = StyleSheet.create({});
