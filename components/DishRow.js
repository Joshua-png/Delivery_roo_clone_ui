import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { FormattedNumber, IntlProvider } from "react-intl";
import { urlFor } from "../sanity";
import { useState } from "react";
import { MinusCircleIcon, PlusCircleIcon } from "react-native-heroicons/solid";
import { useDispatch, useSelector } from "react-redux";
import {
  addToBasket,
  removeFromBasket,
  selectBasketItems,
} from "../features/basketSlice";
export default function DishRow({ dish }) {
  const { _id, name, short_discription, price, image } = dish;

  const [isPressed, setIsPressed] = useState(false);

  // const items = useSelector(
  //   (state) =>
  //     (state.basket.items = state.basket.items.filter(
  //       (item) => item._id === _id
  //     ))
  // );

  const items = useSelector((state) => state.basket.items);

  const filteredItems = items.filter((item) => item._id === _id);

  const dispatch = useDispatch();

  const addItemToBasket = () => {
    // console.log(image);
    dispatch(addToBasket({ _id, name, short_discription, price, image }));
  };

  const removeItemFromBasket = () => {
    if (!items.length > 0) return;
    dispatch(removeFromBasket({ id: _id }));
  };
  return (
    <>
      <TouchableOpacity
        onPress={() => setIsPressed(!isPressed)}
        className={`bg-white border border-gray-200 py-4 px-4 flex-row items-center ${
          isPressed && "border-b-0"
        }`}
      >
        <View className="flex-1">
          <Text className="text-lg mb-1">{name}</Text>
          <Text className="text-gray-400">{short_discription}</Text>
          <Text className="text-gray-400 mt-2">
            <IntlProvider locale="en" defaultLocale="en">
              <FormattedNumber
                value={price}
                style={`currency`}
                currency="USD"
              />
            </IntlProvider>
          </Text>
        </View>
        <View>
          <Image
            style={{ borderWidth: 1, borderColor: "#F3F3F4" }}
            source={{ uri: urlFor(image).url() }}
            className="h-20 w-20 bg-gray-300 p-4"
          />
        </View>
      </TouchableOpacity>

      {isPressed && (
        <View className="bg-white px-4">
          <View className="flex-row items-center space-x-2 py-3">
            <TouchableOpacity
              onPress={removeItemFromBasket}
              disabled={!filteredItems.length}
            >
              <MinusCircleIcon
                size={40}
                color={filteredItems.length > 0 ? "#00CCB8" : "grey"}
              />
            </TouchableOpacity>

            <Text> {filteredItems?.length} </Text>

            <TouchableOpacity onPress={addItemToBasket}>
              <PlusCircleIcon size={40} color="#00CCB8" />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
}
const styles = StyleSheet.create({});
