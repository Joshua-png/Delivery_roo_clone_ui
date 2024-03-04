import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { urlFor } from "../sanity";
import {
  ArrowLeftIcon,
  MapPinIcon,
  QuestionMarkCircleIcon,
} from "react-native-heroicons/outline";
import { ChevronRightIcon, StarIcon } from "react-native-heroicons/solid";
import DishRow from "../components/DishRow";
import Basket from "../components/Basket";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setRestaurant } from "../features/restaurantSlice";

export default function RestaurantScreen({ route, navigation }) {
  const {
    _id,
    image,
    title,
    rating,
    genre,
    address,
    short_description,
    dishes,
    longitude,
    latitude,
  } = route.params;
  // console.log(dishes.length);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      setRestaurant({
        _id,
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
    );
  }, []);

  return (
    <>
      <ScrollView>
        <View>
          <Image
            source={{ uri: urlFor(image).url() }}
            className="w-full h-56 bg-green-300 p-4"
          />
          <TouchableOpacity
            className="absolute top-14 left-5 p-2 bg-gray-300 rounded-full"
            onPress={() => navigation.goBack()}
          >
            <ArrowLeftIcon height={20} width={20} color="#00ccb8" />
          </TouchableOpacity>
        </View>

        <View className="bg-white ">
          <View className="pt-4 px-4">
            <Text className="text-xl font-bold">{title}</Text>
            <View className="flex-row space-x-2 my-1">
              <View className="flex-row items-center space-x-2">
                <StarIcon color="green" opacity={0.5} size={22} />
                <Text className="text-xs text-gray-500">
                  <Text className="text-green-500">{rating}</Text> . {genre}
                </Text>
              </View>

              <View className="flex-row items-center space-x-2">
                <MapPinIcon color="grey" opacity={0.4} size={22} />
                <Text className="text-xs text-gray-500">
                  Nearby . {address}
                </Text>
              </View>
            </View>

            <Text className="text-gray-500 mt-2 pb-4">{short_description}</Text>
          </View>

          <TouchableOpacity className="flex-row items-center space-x-2 py-4 px-4 border-y border-gray-300">
            <QuestionMarkCircleIcon size={22} color="gray" opacity={0.6} />
            <Text className="flex-1 text-md font-bold">
              Have a food allergy
            </Text>
            <ChevronRightIcon color="#00CCB8" />
          </TouchableOpacity>
        </View>

        <View className="pb-16">
          <Text className="px-4 pt-6 font-bold mb-3 text-xl">Menu</Text>
          {/* Dish Rows */}
          {dishes.map((dish) => {
            return <DishRow key={dish._id} dish={dish} />;
          })}
        </View>
      </ScrollView>
      <Basket />
    </>
  );
}

{
  /* <View>
        <Text>
          {_id},{image},{title},{rating},{genre},{address},{short_description},
          {dishes},{longitude},{latitude}{" "}
        </Text>
      </View> */
}
const styles = StyleSheet.create({});
