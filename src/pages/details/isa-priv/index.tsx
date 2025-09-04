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
        <h1 className="details-title">Isa Privilaged Details View</h1>
        <DetailsTable data={data} columns={columns} />
        <h2>ISA Ratified Specifications</h2>
        <p>
          This section contains the specifications which were independently
          ratified and subsequently have been pulled into the appropriate ISA
          volumes published on the RISC-V Technical Specifications page.
        </p>
        <DetailsTable data={filteredData} columns={ratifiedColumns} />
      </main>
    </Layout>
  );
}
