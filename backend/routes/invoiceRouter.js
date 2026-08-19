import express from 'express';
import { getInvoices } from '../controllers/invoiceContoller.js';
import { getInvoiceById } from '../controllers/invoiceContoller.js';
import { createInvoice } from '../controllers/invoiceContoller.js';
import { updateInvoice } from '../controllers/invoiceContoller.js';
import { deleteInvoice } from '../controllers/invoiceContoller.js';
import { clerkMiddleware } from '@clerk/express';

const invoiceRouter = express.Router();

invoiceRouter.use(clerkMiddleware());

invoiceRouter.get('/', getInvoices);
invoiceRouter.get('/:id', getInvoiceById);
invoiceRouter.post('/', createInvoice);
invoiceRouter.put('/:id', updateInvoice);
invoiceRouter.delete('/:id', deleteInvoice);

export default invoiceRouter;
