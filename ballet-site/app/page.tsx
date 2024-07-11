import "./globals.css";
import { MainNav } from "@/components/main-nav";
import { Hero } from "@/components/hero";
import { FirstCta } from "@/components/ui/first-cta";
import { Tabs } from "@/components/ui/tabs";
import { DataTable } from "@/components/ui/dataTable";
import { rowDefs, rows } from "@/components/data";

export default function Home() {
  return (
    <main>
      <MainNav />
      <Hero />
      <Tabs />
      <FirstCta />
      <DataTable
        rowDefs={rowDefs}
        rows={rows}
        previewRows={["name", "age", "job", "looking"]}
      />
    </main>
  );
}
