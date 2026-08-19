import mongoose from 'mongoose';

const ItemSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    qty: {
      type: Number,
      required: true,
      default: 1,
    },
    unitPrice: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  {
    _id,
  },
);

// Invoice Schema
const invoiceSchema = new mongoose.Schema(
  {
    owner: {
      type: String,
      required: true,
      index: true,
    },
    invoiceNumber: {
      type: String,
      required: true,
      index: true,
    },
    issueDate: {
      type: String,
      required: true,
    },
    dueDate: {
      type: String,
      default: '',
    },

    // Business Info
    fromBusinessName: { type: String, default: '' },
    fromEmail: { type: String, default: '' },
    fromAddress: { type: String, default: '' },
    fromPhone: { type: String, default: '' },
    fromGst: { type: String, default: '' },

    //Client Info
    client: {
      name: { type: String, default: '' },
      email: { type: String, default: '' },
      address: { type: String, default: '' },
      phone: { type: String, default: '' },
    },

    currency: { type: String, default: 'ZAR' },
    status: {
      type: String,
      enum: ['draft', 'unpaid', 'paid', 'overdue'],
      default: 'draft',
    },

    // For Asset Handling
    logoDataUrl: { type: String, default: null },
    stampDataUrl: { type: String, default: null },
    signatureDataUrl: { type: String, default: null },

    signatureName: { type: String, default: '' },
    signatureTitle: { type: String, default: '' },

    taxPercent: { type: Number, default: 18 },

    subtotal: { type: Number, default: 0 },
    tax: { type: Number, default: 0 },
    total: { type: Number, default: 0 },
  },
  {
    timestamps: true,
  },
);

const Invoice =
  mongoose.models.Invoice || mongoose.model('Invoice', invoiceSchema);
