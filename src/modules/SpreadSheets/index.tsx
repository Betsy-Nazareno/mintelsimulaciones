import React, { useEffect, useRef } from "react";
import dataSets from "./Datasets";
import { useParams } from "react-router-dom";

const SpreadSheets = () => {
  const { id } = useParams();
  const isUnmounted = useRef(false);

  useEffect(() => {
    if (!isUnmounted.current) {
      const cellsData = dataSets[id as string];
      const luckysheet = (window as any).luckysheet;
      luckysheet?.create?.({
        container: "luckysheet",
        title: "Competencias Digitales - Ejercicio práctico",
        data: [
          {
            name: "Sheet1",
            color: "",
            status: "1",
            order: "0",
            data: cellsData,
            config: {},
            index: 0,
            defaultColWidth: 150,
            column: 100,
            row: 100,
          },
        ],
      });
    }
    return () => {
      isUnmounted.current = true;
    };
  }, [id]);

  return (
    <div
      id="luckysheet"
      style={{
        margin: "0px",
        padding: "0px",
        position: "absolute",
        width: "100%",
        height: "100%",
        left: "0px",
        top: "0px",
      }}
    ></div>
  );
};

export default SpreadSheets;
