import React, { useEffect, useState } from "react";
// import {
//   ColumnDirective,
//   ColumnsDirective,
//   RangeDirective,
//   RangesDirective,
//   SheetDirective,
//   SheetsDirective,
//   SpreadsheetComponent,
// } from "@syncfusion/ej2-react-spreadsheet";
import "./styles/styles.css";
import dataSets from "./dataSets";
import { useParams } from "react-router-dom";

const SpreadSheetSimulation = () => {
  const [data, setData] = useState<any[]>();
  const { id: dataSetKey = "" } = useParams();

  useEffect(() => {
    setData(dataSets[dataSetKey]);
  }, [dataSetKey]);

  return (
    // <SpreadsheetComponent height={"100vh"}>
    //   <SheetsDirective>
    //     <SheetDirective>
    //       <RangesDirective>
    //         <RangeDirective dataSource={data}></RangeDirective>
    //       </RangesDirective>
    //       <ColumnsDirective>
    //         {data &&
    //           data.map((_e) => <ColumnDirective width={200}></ColumnDirective>)}
    //       </ColumnsDirective>
    //     </SheetDirective>
    //   </SheetsDirective>
    // </SpreadsheetComponent>
    <div>hola</div>
  );
};

export default SpreadSheetSimulation;
