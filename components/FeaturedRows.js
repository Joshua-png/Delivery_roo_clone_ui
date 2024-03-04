import { ScrollView } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import {
  ArrowDownRightIcon,
  ArrowRightIcon,
} from "react-native-heroicons/outline";
import RestaurantCard from "./RestaurantCard";

import Images from "../constants/images";
import { urlFor } from "../sanity";
// import restaurant from "../sanity/schemas/restaurant";
const { image1, image2, image3, image4 } = Images;

export default function FeaturedRows({ id, title, description, restaurants }) {
  // console.log(restaurants[0].image.asset._ref);
  return (
    <View className="mx-4">
      <View className="flex-row items-center mt-4 justify-between">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon size={20} color="#00CCBB" />
      </View>

      <Text className="text-xs text-gray-500">{description}</Text>

      <ScrollView
        horizontal
        // contentContainerStyle={{ paddingHorizontal: 15 }}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >
        {/* Restaurant Cards */}
        {restaurants.map((item) => {
          const {
            _id,
            image,
            name,
            rating,
            address,
            short_description,
            dishes,
            longitude,
            latitude,
          } = item;
          return (
            <RestaurantCard
              key={_id}
              id={_id}
              image={urlFor(image).url()}
              title={name}
              rating={rating}
              genre="American"
              address={address}
              short_description={short_description}
              dishes={dishes}
              longitude={longitude}
              latitude={latitude}
            />
          );
        })}
        {/* <RestaurantCard
          id="1"
          image={image1}
          title="KFC"
          rating={4.8}
          genre="American"
          address="Nyaniba Estates"
          short_description="Orland prophecy summit. We had a very prophetic session. Talk about the 200 books you have written. The book covers the whole summit of our Lives"
          dishes={[]}
          longitude={20.46363}
          latitude={45.33333}
        />

        <RestaurantCard
          id="1"
          image={image1}
          title="KFC"
          rating={4.8}
          genre="American"
          address="Nyaniba Estates"
          short_description="Orland prophecy summit. We had a very prophetic session. Talk about the 200 books you have written. The book covers the whole summit of our Lives"
          dishes={[]}
          longitude={20.46363}
          latitude={45.33333}
        />

        <RestaurantCard
          id="1"
          image={image1}
          title="KFC"
          rating={4.8}
          genre="American"
          address="Nyaniba Estates"
          short_description="Orland prophecy summit. We had a very prophetic session. Talk about the 200 books you have written. The book covers the whole summit of our Lives"
          dishes={[]}
          longitude={20.46363}
          latitude={45.33333}
        /> */}
        {/* Restaurant Cards */}
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({});
