import { TouchableOpacity } from "react-native";
import { Image } from "react-native";
import { View, Text } from "react-native";
import { urlFor } from "../sanity";
const CategoryCard = ({ image, title }) => {
  return (
    <TouchableOpacity className="mr-2">
      <Image source={{ uri: image }} className="h-20 w-20 rounded" />
      <Text className="absolute bottom-1 left-1 text-white font-bold">
        {title}
      </Text>
    </TouchableOpacity>
  );
};
export default CategoryCard;
