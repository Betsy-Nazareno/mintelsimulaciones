import React from "react";
import { Line } from "react-konva";

const CustomPencil = ({ lines, color }: Props) => {
  return lines.map((line: any, i: number) => (
    <Line
      key={i}
      points={line.points}
      stroke={color}
      strokeWidth={5}
      tension={0.5}
      lineCap="round"
      lineJoin="round"
      globalCompositeOperation={
        line.tool === "eraser" ? "destination-out" : "source-over"
      }
    />
  ));
};

interface Props {
  lines: any;
  color: string;
}

export default CustomPencil;
