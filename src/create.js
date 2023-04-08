import { db } from "./dbConnect.js";

const newCustomer = {
  firstName: "Damian",
  lastName: "Montero",
  email: "damian@bocacode.com",
  phone: "976-CODE",
};

db.query("INSERT INTO customers SET ?", newCustomer, (err, result) => {
  if (err) {
    console.error(err);
  } else {
    console.log(`Inserted ${result.affectedRows} row(s)`);
  }
});
