import { useNavigation } from "@react-navigation/native";
import { FormattedNumber, IntlProvider } from "react-intl";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useSelector } from "react-redux";
export default function Basket() {
  const navigation = useNavigation();
  const items = useSelector((state) => state.basket.items);

  const basketTotal = items.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.price;
  }, 0);

  if (items.length === 0) return;

  return (
    // absolute
    <View className="bottom-10 w-full z-50">
      <TouchableOpacity
        className="bg-[#00ccb8] flex-row p-4 mx-5 rounded-lg items-center justify-center space-around space-x-1"
        onPress={() => navigation.navigate("Basket")}
      >
        <Text className="text-white font-bold bg-green-500 py-1 px-2">
          {items.length}
        </Text>
        <Text className="flex-1 font-extrabold text-lg text-center text-white">
          View Basket
        </Text>
        <Text className="text-white font-extrabold text-lg">
          <IntlProvider locale="en" defaultLocale="en">
            <FormattedNumber
              value={basketTotal}
              style={`currency`}
              currency="USD"
            />
          </IntlProvider>
        </Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({});
