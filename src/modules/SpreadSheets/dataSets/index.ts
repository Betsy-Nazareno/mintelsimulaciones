import { generateCustomers } from "./customers";
import { getExampleData } from "./example";
import { generateTareas } from "./tareas";
import { generateVentas } from "./ventas";

const dataSets = {
  example: getExampleData(),
  customers: generateCustomers(),
  tiendas: generateCustomers(),
  tareas: generateTareas(),
  ventas: generateVentas(),
};

export default dataSets as any;
