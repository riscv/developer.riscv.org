export const columns = [
  { key: "version", label: "Version" },
  { key: "publishDate", label: "Publish Date", sortable: true },
  // {
  //   key: "pdfLink",
  //   label: "PDF",
  //   render: (val) => (
  //     <a href={val} target="_blank" rel="noopener noreferrer">
  //       Download
  //     </a>
  //   ),
  // },
];

export const data = [
  {
    version: "20240411",
    publishDate: "Apr. 2024",
    pdfLink: "/pdfs/doc-v7.pdf",
  },
  {
    version: "20191213",
    publishDate: "Dec. 2019",
    pdfLink: "/pdfs/doc-v6.pdf",
  },
  { version: "2.2", publishDate: "May 2017", pdfLink: "/pdfs/doc-v5.pdf" },
  { version: "2.1", publishDate: "May 2016", pdfLink: "/pdfs/doc-v4.pdf" },
  { version: "2.0", publishDate: "May 2014", pdfLink: "/pdfs/doc-v3.pdf" },
  { version: "Original", publishDate: "May 2011", pdfLink: "/pdfs/doc-v2.pdf" },
];

export const ratifiedColumns = [
  {
    key: "name",
    label: "Specification Name",
  },
  { key: "date", label: "Date Ratified" },
  { key: "extensions", label: "Extensions" },
  // {
  //   key: "pdfLink",
  //   label: "PDF",
  //   render: (val) => (
  //     <a href={val} target="_blank" rel="noopener noreferrer">
  //       View
  //     </a>
  //   ),
  // },
];
