type InvoiceRequest = {
  title: string;
  desc: string;
};

type CreateInvoiceRequest = InvoiceRequest;
type UpdateInvoiceRequest = InvoiceRequest;

const getInvoices = () => {
  const { data: invoices, error, pending } = useFetch("/api/invoices");
  return { invoices, error, pending };
};

const getInvoice = (id: string) => {
  const { data: invoice, error, pending } = useFetch(`/api/invoices/${id}`);
  return { invoice, error, pending };
};

const createInvoice = (request: CreateInvoiceRequest) => {
  const {
    data: success,
    error,
    pending,
  } = useFetch("/api/invoices", { method: "POST", body: request });
  return { success, error, pending };
};

const updateInvoice = (id: string, request: UpdateInvoiceRequest) => {
  const {
    data: success,
    error,
    pending,
  } = useFetch(`/api/invoices/${id}`, { method: "PUT", body: request });
  return { success, error, pending };
};

export default function useApi() {
  return {
    getInvoices,
    getInvoice,
    createInvoice,
    updateInvoice,
  };
}
