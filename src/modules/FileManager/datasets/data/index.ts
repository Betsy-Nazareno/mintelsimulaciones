import { fileSystemBusinessModel } from "./business";
import { fileSystemCustomers } from "./customers";
import { fileSystemEmprendimiento } from "./emprendimiento";
import { fileSystemExample } from "./example";

const fileSystemSets = {
  random: fileSystemExample,
  customers: fileSystemCustomers,
  emprendimiento: fileSystemEmprendimiento,
  business: fileSystemBusinessModel,
};

export default fileSystemSets as any;
