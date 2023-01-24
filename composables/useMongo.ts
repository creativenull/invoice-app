import mongoose from "mongoose";

interface InvoiceContract {
  title: string;
  refId: string;
  createdAt: Date;
  updatedAt: Date;
}

const InvoiceSchema = new mongoose.Schema<InvoiceContract>({
  title: { type: String, required: true },
  refId: { type: String, required: true },
  createdAt: { type: Date, required: true },
  updatedAt: { type: Date, required: true },
});

export const InvoiceModel = mongoose.model<InvoiceContract>(
  "InvoiceModel",
  InvoiceSchema
);

export const useMongo = async () => {
  return await mongoose.connect('mongodb://127.0.0.1:27017/invoicedb');
};
