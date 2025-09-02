export const columns = [
  { key: "version", label: "Version", sortable: true },
  { key: "publishDate", label: "Publish Date", sortable: true },
  { 
    key: "pdfLink", 
    label: "PDF", 
    render: (val) => <a href={val} target="_blank" rel="noopener noreferrer">Download</a>
  },
];

export const data = [
  { version: 2, publishDate: "01/2020", pdfLink: "/pdfs/doc-v2.pdf" },
  { version: 3, publishDate: "06/2020", pdfLink: "/pdfs/doc-v3.pdf" },
  { version: 4, publishDate: "12/2020", pdfLink: "/pdfs/doc-v4.pdf" },
  { version: 5, publishDate: "05/2021", pdfLink: "/pdfs/doc-v5.pdf" },
  { version: 6, publishDate: "11/2021", pdfLink: "/pdfs/doc-v6.pdf" },
  { version: 7, publishDate: "04/2022", pdfLink: "/pdfs/doc-v7.pdf" },
  { version: 8, publishDate: "09/2022", pdfLink: "/pdfs/doc-v8.pdf" },
];
