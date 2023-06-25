import { generateCustomers } from "./customers";
import { getExampleData } from "./example";
import { generateTareas } from "./tareas";
import { generateVentas } from "./ventas";

const dataSets = {
  example: [{ name: "Sheet1", data: getExampleData() }],
  customers: [
    { name: "Clientes", data: generateCustomers() },
    { name: "Ventas", data: generateVentas() },
  ],
  tareas: [{ name: "Tareas", data: generateTareas() }],
};

export default dataSets as any;
