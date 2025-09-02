import { useState } from "react";

export default function DetailsTable({ data, columns }) {
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });

  const sortedData = [...data].sort((a, b) => {
    if (!sortConfig.key) return 0;
    const valA = a[sortConfig.key];
    const valB = b[sortConfig.key];

    if (valA < valB) return sortConfig.direction === "asc" ? -1 : 1;
    if (valA > valB) return sortConfig.direction === "asc" ? 1 : -1;
    return 0;
  });

  const handleSort = (col) => {
    if (!col.sortable) return;
    setSortConfig((prev) => {
      if (prev.key === col.key) {
        return {
          key: col.key,
          direction: prev.direction === "asc" ? "desc" : "asc",
        };
      }
      return { key: col.key, direction: "asc" };
    });
  };

  return (
    <table className="table">
      <thead>
        <tr>
          {columns.map((col) => (
            <th
              key={col.key}
              onClick={() => handleSort(col)}
              style={{
                cursor: col.sortable ? "pointer" : "default",
                userSelect: "none",
              }}
            >
              {col.label}
              {sortConfig.key === col.key && (
                <span>{sortConfig.direction === "asc" ? " ▲" : " ▼"}</span>
              )}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {sortedData.map((row, i) => (
          <tr key={i}>
            {columns.map((col) => (
              <td key={col.key}>
                {col.render ? col.render(row[col.key], row) : row[col.key]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
