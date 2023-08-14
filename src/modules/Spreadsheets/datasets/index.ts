import { getAsistencias } from "./asistencias";
import { generateCustomers } from "./customers";
import { getExampleData } from "./example";
import { generateTareas } from "./tareas";
import { generateVentas } from "./ventas";

const dataSets = {
  example: [{ name: "Sheet1", data: getExampleData(), colWidth: 250 }],
  customers: [
    { name: "Clientes", data: generateCustomers(), colWidth: 250 },
    { name: "Ventas", data: generateVentas(), colWidth: 250 },
  ],
  tareas: [{ name: "Tareas", data: generateTareas(), colWidth: 250 }],
  asistencias: [
    { name: "Control Asistencia", data: getAsistencias(), colWidth: 100 },
  ],
};

export default dataSets as any;
