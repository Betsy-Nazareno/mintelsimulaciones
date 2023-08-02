import React from "react";
import { Rect } from "react-konva";

const CustomRect = ({ shape, id, idSelected, color, setIdSelected }: Props) => {
  const [isSelected, setIsSelected] = React.useState<boolean>(false);
  const [fill, setFill] = React.useState<string>(shape.fill);

  React.useEffect(() => {
    setIsSelected(idSelected === id);
  }, [idSelected]);

  React.useEffect(() => {
    isSelected && setFill(color);
  }, [color]);

  return (
    <Rect
      {...shape}
      draggable
      stroke={isSelected ? "#4FC2FF" : ""}
      onClick={() => setIdSelected(id)}
      onLostPointerCapture={() => setIdSelected(-1)} //At the moment is disable the onFocus
      fill={fill}
    />
  );
};

interface Props {
  shape: any;
  id: number;
  color: string;
  idSelected: number;
  setIdSelected: (value: number) => void;
}

export default CustomRect;
