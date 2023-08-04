import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import initialCanvas from "./datasets/indext";
import CanvasEditor from "./CanvasEditor";

const CanvaSimulation = () => {
  const [initialAssets, setInitialAssets] = useState<any>([]);
  const { id } = useParams();

  useEffect(() => {
    setInitialAssets(initialCanvas[id as string]);
  }, [id]);

  return (
    <div className="bg-[#E5E5E5] px-8 pt-2 overflow-hidden relative">
      <CanvasEditor initialAssets={initialAssets} />
    </div>
  );
};

export default CanvaSimulation;
