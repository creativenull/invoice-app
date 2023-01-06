export default defineEventHandler((event) => {
  const invoices = useMockInvoices()
  return { invoices };
});
