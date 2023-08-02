import React from "react";
import { Image } from "react-konva";
import useImage from "use-image";

const CustomImage = () => {
  const [image] = useImage(
    "https://m.media-amazon.com/images/I/51B4OSFjYkL._SY500_.jpg"
  );
  return <Image image={image} draggable x={500} y={100} />;
};

export default CustomImage;
