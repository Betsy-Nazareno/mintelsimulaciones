/* eslint-disable */
import React from "react";
import { Image } from "react-konva";
import useImage from "use-image";

const CustomImage = ({ shape }: Props) => {
  const screenWidth = window?.screen?.width;

  const [image] = useImage(shape.imageUrl);
  return (
    <Image
      image={image}
      {...shape}
      width={screenWidth <= 600 ? 250 : shape.width}
      height={screenWidth <= 600 ? 250 : shape.height}
    />
  );
};

interface Props {
  shape: any;
}

export default CustomImage;
