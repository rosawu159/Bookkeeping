// import express
import express from "express";
 
// import function from controller
import { showinvoices, showinvoiceById, createinvoice, updateinvoice, deleteinvoice } from "../controllers/invoice.js";
 
// init express router
const router = express.Router();
 
// Get All invoice
router.get('/invoices', showinvoices);
 
// Get Single invoice
router.get('/invoices/:id', showinvoiceById);
 
// Create New invoice
router.post('/invoices', createinvoice);
 
// Update invoice
router.put('/invoices/:id', updateinvoice);
 
// Delete invoice
router.delete('/invoices/:id', deleteinvoice);
 
// export default router
export default router;