import type { Invoice } from "~/types/api";

export const useMockInvoices = (): Invoice[] => [
  {
    title: "Invoice for Oct 2022",
    refId: "123someref",
    route: "/invoice/2020202020",
  },
  {
    title: "Invoice for Nov 2022",
    refId: "123someref2",
    route: "/invoice/20202020202",
  },
  {
    title: "Invoice for Dec 2022",
    refId: "123someref3",
    route: "/invoice/20202020203",
  },
];
