export const columns = [
  { key: "version", label: "Version" },
  { key: "publishDate", label: "Publish Date", sortable: true },
  {
    key: "pdfLink",
    label: "PDF",
    render: (val) => (
      <a href={val} target="_blank" rel="noopener noreferrer">
        Download
      </a>
    ),
  },
];

export const data = [
  { version: "20240411", publishDate: "Apr. 2024", pdfLink: "/pdfs/doc-v7.pdf" },
  { version: "20211203", publishDate: "Dec. 2021", pdfLink: "/pdfs/doc-v6.pdf" },
  { version: "1.11", publishDate: "June 2019", pdfLink: "/pdfs/doc-v5.pdf" },
  { version: "1.10", publishDate: "May 2017", pdfLink: "/pdfs/doc-v4.pdf" },
  { version: "1.9", publishDate: "July 2016", pdfLink: "/pdfs/doc-v3.pdf" },
  { version: "1.7", publishDate: "May 2015", pdfLink: "/pdfs/doc-v2.pdf" },
];

export const ratifiedColumns = [
  {
    key: "name",
    label: "Specification Name",
  },
  { key: "date", label: "Ratified" },
  { key: "extensions", label: "Extensions" },
  {
    key: "pdfLink",
    label: "PDF",
    render: (val) => (
      <a href={val} target="_blank" rel="noopener noreferrer">
        View
      </a>
    ),
  },
];