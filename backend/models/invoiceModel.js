// import connection
import db from "../config/database.js";
 
// Get All invoices
export const getinvoices = (result) => {
    db.query("SELECT * FROM invoice", (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
 
// Get Single invoice
export const getinvoiceById = (id, result) => {
    db.query("SELECT * FROM invoice WHERE id = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results[0]);
        }
    });   
}
 
// Insert invoice to Database
export const insertinvoice = (data, result) => {
    db.query("INSERT INTO invoice SET ?", [data], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
 
// Update invoice to Database
export const updateinvoiceById = (data, id, result) => {
    db.query("UPDATE invoice SET invoice_price = ?, invoice_date = ?, invoice_id = ? WHERE id = ?", [data.invoice_price, data.invoice_date,data.invoice_id, id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
 
// Delete invoice to Database
export const deleteinvoiceById = (id, result) => {
    db.query("DELETE FROM invoice WHERE id = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}