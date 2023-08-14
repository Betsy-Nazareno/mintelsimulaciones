/* eslint-disable */
import React from "react";
import { Star } from "react-konva";

const CustomStar = ({
  shape,
  idSelected,
  id,
  color,
  setIdSelected,
  setSelectedColor,
}: Props) => {
  const [isSelected, setIsSelected] = React.useState<boolean>(false);
  const [fill, setFill] = React.useState<string>(shape.fill);

  React.useEffect(() => {
    const isSelected = idSelected === id;
    setIsSelected(isSelected);
    if (idSelected === id) setSelectedColor(fill);
  }, [idSelected]);

  React.useEffect(() => {
    isSelected && setFill(color);
  }, [color]);

  return (
    <Star
      {...shape}
      numPoints={5}
      innerRadius={20}
      outerRadius={40}
      fill={fill}
      stroke={isSelected ? "#4FC2FF" : ""}
      onClick={() => setIdSelected(id)}
      onLostPointerCapture={() => setIdSelected(-1)}
    />
  );
};

interface Props {
  shape: any;
  idSelected: number;
  id: number;
  color: string;
  setIdSelected: (value: number) => void;
  setSelectedColor: (value: string) => void;
}

export default CustomStar;
