import { db } from "./dbConnect.js"


db.query("UPDATE customers SET firstName = 'Camilaaaaa' WHERE firstName = 'Camila'", (err, data) =>{
    if(err){
        console.error(err);
    }
    console.table(data);
    db.end();
});
