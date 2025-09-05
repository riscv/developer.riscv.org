import Layout from "@theme/Layout";
import { data, columns, ratifiedColumns } from "./_data";
import DetailsTable from "@site/src/components/DetailsTable";
import RatifiedData from "../../_ratified_data.json";

export default function ISAUnpriv() {
  const filteredData = RatifiedData.filter(
    (d) => d.community === "Unprivileged Horizontal Committee"
  );
  return (
    <Layout>
      <main className="details-main">
        <h1 className="details-title">ISA Unprivileged Details</h1>
<p>The RISC-V ISA Unprivileged Specification is a collection of all of the ratified, published unprivileged extensions for RISC-V.</p>

<p>The ISA Unprivileged Specification is developed by the [RISC-V Unprivileged Horizontal Committee](https://lists.riscv.org/g/tech-unprivileged).</p>

        <DetailsTable data={data} columns={columns} />

        <h2>ISA Ratified Specifications</h2>
        <p>
          This section contains the specifications that were independently
          ratified and subsequently have been pulled into the RISC-V ISA Unprivileged Specification document.
        </p>

        <h2>ISA Ratified Specifications Archive</h2>
        <p>
       Find the list of all archived ratified technical specification versions for the Unprivileged Specification.
        </p>

        <DetailsTable data={filteredData} columns={ratifiedColumns} />
      </main>
    </Layout>
  );
}
