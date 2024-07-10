import Image from "next/image";
import "./globals.css";
import { MainNav } from "@/components/main-nav";
import { Hero } from "@/components/hero";
import { FirstCta } from "@/components/ui/first-cta";

export default function Home() {
  return (
    <main>
      <MainNav />
      <Hero />
      <FirstCta />
    </main>
  );
}
