import { useNavigation } from "@react-navigation/native";
import { useEffect, useLayoutEffect, useState } from "react";
import { Image, ScrollView, TextInput } from "react-native";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  AdjustmentsVerticalIcon,
  ChevronDownIcon,
  UserIcon,
  SearchIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/outline";
import Categories from "../components/Categories";
import FeaturedRows from "../components/FeaturedRows";
import { client, getFeaturedCategories } from "../sanity";

const HomeScreen = () => {
  const navigation = useNavigation();
  const [featuredCategories, setFeaturedCategories] = useState([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      //   headerTitle: "Your Custom Name",
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    async function getFeaturedCategories() {
      try {
        const featuredCategories = await client.fetch(
          `*[_type=="featured"]{
            ...,
            restaurants[]-> {
              ...,
              dishes[]->{
                ...
              }
            }
           }`
        );
        return featuredCategories;
      } catch (error) {
        console.log(`error: ${error}`);
      }
    }

    getFeaturedCategories().then((data) => setFeaturedCategories(data));
  }, []);

  // console.log(featuredCategoriecs);
  return (
    <SafeAreaView className="bg-white pt-5 flex-1">
      <View className="flex-row pb-3 items-center mx-4 space-x-2">
        <Image
          source={require("../assets/avatar.jpg")}
          className="h-7 w-7 bg-gray-300 p-4 rounded-full"
        />

        <View className="flex-1">
          <Text className="font-bold text-gray-300 text-xs">Deliver Now!</Text>
          <View className="flex-row items-center space-x-2">
            <Text className="font-bold text-xl flex-row items-center">
              Current Location
            </Text>
            <ChevronDownIcon size={20} color="#00CCBB" />
          </View>
        </View>

        <UserIcon size={35} color="#00CCBB" />
      </View>

      {/* Search */}
      <View className="flex-row items-center justify-center mx-4 space-x-2 pb-4 ">
        <View className="flex-row flex-1 items-center space-x-2 bg-gray-200 p-3">
          {/* <SearchIcon /> */}
          <MagnifyingGlassIcon size={20} color="#00CCBB" />
          <TextInput placeholder="Restaurants" keyboardType="default" />
        </View>
        <AdjustmentsVerticalIcon size={20} color="#00CCBB" />
      </View>

      <ScrollView className="bg-gray-100">
        {/* Category */}
        <Categories />

        {/* Feature Row */}
        {featuredCategories.map((featuredCategory) => {
          const { _id, name, short_description, restaurants } =
            featuredCategory;
          return (
            <FeaturedRows
              key={_id}
              id={_id}
              title={name}
              description={short_description}
              restaurants={restaurants}
            />
          );
        })}
        {/* <FeaturedRows
          id="1"
          title="Featured"
          description="Paid placements from our partners"
        />

        <FeaturedRows
          id="2"
          title="Tasty Discounts"
          description="Every one has been enjoying this discounts"
        />

        <FeaturedRows
          id="3"
          title="Offers near you"
          description="Why not support your local restaurants right now"
        /> */}
      </ScrollView>
    </SafeAreaView>
  );
};
export default HomeScreen;
