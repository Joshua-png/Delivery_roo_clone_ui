import { Image } from "react-native";
import { TouchableOpacity } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import { StarIcon } from "react-native-heroicons/solid";
import { LocationMarkerIcon, MapPinIcon } from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";
export default function RestaurantCard({
  id,
  image,
  title,
  rating,
  genre,
  address,
  short_description,
  dishes,
  longitude,
  latitude,
}) {
  // console.log(dishes);
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      className="bg-white mr-3 shadow"
      onPress={() =>
        navigation.navigate("Restaurant", {
          id,
          image,
          title,
          rating,
          genre,
          address,
          short_description,
          dishes,
          longitude,
          latitude,
        })
      }
    >
      <Image source={{ uri: image }} className="h-36 w-64 rounded-sm" />
      <View className="px-3 pb-4">
        <Text className="font-bold text-lg pt-2">{title}</Text>
        <View className="flex-row items-center space-x-1">
          <StarIcon color="green" opacity={0.5} size={22} />
          <Text className="text-xs text-gray-500">
            {" "}
            <Text className="text-green-700">{rating}</Text> . {genre}
          </Text>
        </View>

        <View className="flex-row items-center space-x-1 mt-2">
          <MapPinIcon color="gray" size={22} opacity={0.4} />
          <Text className="text-xs text-gray-500"> Nearby . {address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({});
