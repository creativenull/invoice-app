import { useMockInvoices } from "~/composables/states"

export default defineEventHandler((event) => {
  const invoices = useMockInvoices()
  return { invoices };
});
