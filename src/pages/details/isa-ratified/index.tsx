import Layout from "@theme/Layout";
import { data, columns } from "./_data";
import DetailsTable from "@site/src/components/DetailsTable/index";

export default function ISAPriv() {
  return (
    <Layout>
      <main className="details-main">
        <h1 className="details-title">Isa Privilaged Details View</h1>
        <DetailsTable data={data} columns={columns} />
      </main>
    </Layout>
  );
}
