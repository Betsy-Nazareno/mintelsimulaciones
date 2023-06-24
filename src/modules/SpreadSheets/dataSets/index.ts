import { generateCustomers } from "./customers";
import { getExampleData } from "./example";
import { generateTareas } from "./tareas";

const dataSets = {
  example: getExampleData(),
  customers: generateCustomers(),
  tiendas: generateCustomers(),
  tareas: generateTareas(),
};

export default dataSets as any;
