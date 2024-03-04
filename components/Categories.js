import { ScrollView } from "react-native";
import CategoryCard from "./CategoryCard";

import Images from "../constants/images";
import { useEffect, useState } from "react";
import { client, urlFor } from "../sanity";
const { image1, image2, image3, image4 } = Images;

export default function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      try {
        const categories = await client.fetch(`*[_type=="category"]{...}`);
        return categories;
      } catch (error) {
        console.log(`error is ${error}`);
      }
    };

    getCategories().then((data) => setCategories(data));
  }, []);

  // console.log(categories);
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
    >
      {/* Category Card */}
      {/* <CategoryCard image={image1} title="Testing" />
      <CategoryCard image={image2} title="Testing" />
      <CategoryCard image={image3} title="Testing" />
      <CategoryCard image={image4} title="Testing" /> */}
      {categories?.map((item) => {
        const { _id, image, name } = item;
        return (
          <CategoryCard key={_id} image={urlFor(image).url()} title={name} />
        );
      })}
    </ScrollView>
  );
}

{
  /* <View className={`h-[100px] w-[100%] bg-red-400`}>
        <Image
          source={image}
          resizeMode="contain"
          className="w-[100%] h-[100%]"
        />
      </View> */
}
