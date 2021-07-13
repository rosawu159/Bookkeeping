// Import function from invoice Model
import { getinvoices, getinvoiceById, insertinvoice, updateinvoiceById, deleteinvoiceById } from "../models/invoiceModel.js";
 
// Get All invoices
export const showinvoices = (req, res) => {
    getinvoices((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
 
// Get Single invoice 
export const showinvoiceById = (req, res) => {
    getinvoiceById(req.params.id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
 
// Create New invoice
export const createinvoice = (req, res) => {
    const data = req.body;
    insertinvoice(data, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
 
// Update invoice
export const updateinvoice = (req, res) => {
    const data  = req.body;
    const id    = req.params.id;
    console.log(data);
    updateinvoiceById(data, id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
 
// Delete invoice
export const deleteinvoice = (req, res) => {
    const id = req.params.id;
    deleteinvoiceById(id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}