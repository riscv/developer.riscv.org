import Layout from "@theme/Layout";
import { data, columns, ratifiedColumns } from "./_data";
import DetailsTable from "@site/src/components/DetailsTable/index";
import RatifiedData from "../../_ratified_data.json";

export default function ISAPriv() {
  const filteredData = RatifiedData.filter(
    (d) => d.community === "Privileged Horizontal Committee"
  );
  return (
    <Layout>
      <main className="details-main">
        <h1 className="details-title">ISA Privileged Details</h1>

      <p>The RISC-V ISA Privileged Specification is a collection of all of the ratified, published privileged extensions for RISC-V.</p>

<p>The ISA Privileged Specification is developed by the [RISC-V Privileged Horizontal Committee](https://lists.riscv.org/g/tech-privileged).</p>

<h2>ISA Ratified Specifications</h2>
        <p>
          This section contains the specifications that were independently
          ratified and subsequently have been pulled into the RISC-V ISA Privileged Specification documentation.
        </p>
        <DetailsTable data={data} columns={columns} />


        <h2>ISA Ratified Specifications Archive</h2>
        <p>
       This page contains the list of all archived ratified technical specification version.
        </p>
        <DetailsTable data={filteredData} columns={ratifiedColumns} />
      </main>
    </Layout>
  );
}
