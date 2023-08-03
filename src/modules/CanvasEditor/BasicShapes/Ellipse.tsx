import React from "react";
import { Ellipse } from "react-konva";

const CustomEllipse = ({
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
    <Ellipse
      key={id}
      draggable
      {...shape}
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

export default CustomEllipse;
