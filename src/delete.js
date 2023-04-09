import { db } from "./dbConnect.js"


db.query("DELETE FROM customers WHERE firstName = 'Camila'", (err, data) =>{
    if(err){
        console.error(err);
    }
    console.table(data);
    db.end();
});
 