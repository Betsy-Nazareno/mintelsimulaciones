import React from "react";
import { Image } from "react-konva";
import useImage from "use-image";

const CustomImage = ({ shape }: Props) => {
  const [image] = useImage(shape.imageUrl);
  return <Image image={image} {...shape} />;
};

interface Props {
  shape: any;
}

export default CustomImage;
