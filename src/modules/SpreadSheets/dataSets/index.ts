import { customers } from "./customers";
import { exampleData } from "./example";

const dataSets: DataSet = {
  example: exampleData,
  customers: customers,
};

export interface DataSet {
  [key: string]: Record<string, string>[];
}

export default dataSets;
