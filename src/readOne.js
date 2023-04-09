import { db } from "./dbConnect.js"


db.query("SELECT * FROM customers WHERE firstName = 'Sergio'", (err, data) =>{
    if(err){
        console.error(err);
    }
    console.table(data);
    db.end();
});
 