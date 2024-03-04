import { useMemo, useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { XCircleIcon } from "react-native-heroicons/solid";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";
import { urlFor } from "../sanity";
import { FormattedNumber, IntlProvider } from "react-intl";
import { removeFromBasket } from "../features/basketSlice";
export default function BasketScreen({ navigation }) {
  const restaurant = useSelector((state) => state.restaurant.restaurant);

  const items = useSelector((state) => state.basket.items);

  const [groupedItemsInBasket, setGroupedItemsInBasket] = useState([]);

  const dispatch = useDispatch();

  useMemo(() => {
    const groupItems = items.reduce((result, item) => {
      const id = item._id;

      if (!result[id]) {
        result[id] = [];
      }

      result[id].push(item);

      return result;
    }, {});

    setGroupedItemsInBasket(groupItems);
  }, [items]);

  const basketTotal = items.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.price;
  }, 0);

  //   console.log(Object.entries(groupedItemsInBasket)[0]);
  //   console.log(restaurant.image);
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 bg-gray-100">
        <View className="p-5 border-b border-[#00CCB8] bg-white shadow-xs">
          <View>
            <Text className="text-lg text-center font-bold">Basket</Text>
            <Text className="text-center text-gray-400">
              {restaurant.title}
              {/* {Object.values(restaurant)} */}
            </Text>
          </View>

          <TouchableOpacity
            className="rounded-full bg-gray-100 absolute top-1 right-5"
            onPress={() => navigation.goBack()}
          >
            <XCircleIcon color="#00ccb8" size={50} />
          </TouchableOpacity>
        </View>

        <View className="flex-row items-center space-x-4 px-4 py-3 bg-white my-5 ">
          <Image
            source={{
              uri: "data:image/jpeg;base64,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",
            }}
            className="h-7 w-7 bg-gray-300 p-4 rounded-full"
          />
          <Text className="flex-1">Deliver in 45 - 50 minutes</Text>
          <TouchableOpacity>
            <Text className="text-[#00CCB8]">Change</Text>
          </TouchableOpacity>
        </View>

        <ScrollView className="divide-y divide-gray-200">
          {Object.entries(groupedItemsInBasket).map(([key, items]) => {
            return (
              <View
                key={key}
                className="flex-row items-center space-x-4 bg-white py-2 px-4"
              >
                <Text className="text-[#00ccb8]">{items.length} x</Text>
                <Image
                  source={{ uri: urlFor(items[0]?.image).url() }}
                  className="h-12 w-12 rounded-full"
                />
                <Text className="flex-1">{items[0]?.name}</Text>

                <Text>
                  <IntlProvider locale="en" defaultLocale="en">
                    <FormattedNumber
                      value={items[0]?.price}
                      style={`currency`}
                      currency="USD"
                    />
                  </IntlProvider>
                </Text>

                <TouchableOpacity
                  onPress={() => dispatch(removeFromBasket({ id: key }))}
                >
                  <Text className="text-[#00ccb8] text-sm">Remove</Text>
                </TouchableOpacity>
              </View>
            );
          })}
        </ScrollView>

        <View className="p-4 bg-white mt-5 space-y-4">
          <View className="flex-row items-center justify-between">
            <Text className="text-gray-400">Subtotal</Text>
            <Text>
              <IntlProvider locale="en" defaultLocale="en">
                <FormattedNumber
                  value={basketTotal}
                  style={`currency`}
                  currency="USD"
                />
              </IntlProvider>
            </Text>
          </View>

          <View className="flex-row items-center justify-between">
            <Text className="text-gray-400">Delivery Fee</Text>
            <Text>
              <IntlProvider locale="en" defaultLocale="en">
                <FormattedNumber
                  value={10.0}
                  style={`currency`}
                  currency="USD"
                />
              </IntlProvider>
            </Text>
          </View>

          <View className="flex-row items-center justify-between">
            <Text className="font-extrabold">Total</Text>
            <Text className="font-extrabold">
              <IntlProvider locale="en" defaultLocale="en">
                <FormattedNumber
                  value={basketTotal + 10.0}
                  style={`currency`}
                  currency="USD"
                />
              </IntlProvider>
            </Text>
          </View>

          <TouchableOpacity
            className="rounded-lg bg-[#00bbc8] p-4"
            onPress={() => navigation.navigate("PreparingOrder")}
          >
            <Text className="text-center text-white font-bold text-lg">
              Place Order
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({});
