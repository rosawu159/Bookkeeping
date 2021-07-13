// import express
import express from "express";

// import function from controller
import { showinvoices, showinvoiceById, createinvoice, updateinvoice, deleteinvoice } from "../controllers/invoice.js";
import { signupinvoice, logininvoice, loggedtime } from "../controllers/user.js";

// init express router
const router = express.Router();
 

import  isLoggedIn from "../middleware/user.js"; 

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
 
// Signup
router.post('/sign-up', signupinvoice);
 
// Login
router.post('/login', logininvoice);

// Islogged
router.get('/secret-route', isLoggedIn, loggedtime);

// export default router
export default router;