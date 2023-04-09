import { db } from "./dbConnect.js";

const newCustomer = {
  firstName: "Camila",
  lastName: "Sandoval",
  email: "camila@bocacode.com",
  phone: "888-CODE",
};

db.query("INSERT INTO customers SET ?", newCustomer, (err, result) => {
  if (err) {
    console.error(err);
  } else {
    console.log(`Inserted ${result.affectedRows} row(s)`);
  }
  db.end();
});
