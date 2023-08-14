import React, { useEffect, useRef } from "react";
import dataSets from "./datasets";
import { useParams } from "react-router-dom";

const SpreadSheets = () => {
  const { id } = useParams();
  const isUnmounted = useRef(false);

  useEffect(() => {
    if (!isUnmounted.current) {
      const doc = dataSets[id as string];
      const sheets = doc.map((e: any) => ({
        name: e.name,
        color: "",
        status: "1",
        order: "0",
        data: e.data,
        config: {},
        index: 0,
        defaultColWidth: e.colWidth,
        column: 100,
        row: 100,
      }));
      const luckysheet = (window as any).luckysheet;
      luckysheet?.create?.({
        container: "luckysheet",
        title: "Competencias Digitales - Ejercicio práctico",
        data: sheets,
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
