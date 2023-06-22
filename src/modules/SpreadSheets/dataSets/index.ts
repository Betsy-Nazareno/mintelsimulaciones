import { generateCustomers } from "./customers";
import { getExampleData } from "./example";

const dataSets = {
  example: getExampleData(),
  customers: generateCustomers(),
};

export default dataSets as any;
