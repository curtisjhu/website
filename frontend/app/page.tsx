import Footer from "@/components/Footer";
import ScrollytellingSection from "@/components/ScrollytellingSection";
import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <ScrollytellingSection id="section1">
          <Image
            src="invent.svg"
            alt="Section 1"
            width={200}
            height={200}
          />
          <p>What will you make?</p>
        </ScrollytellingSection>
        <ScrollytellingSection id="section2">
          <p className="max-w-md">
            United by the culture of creation, innovation, and invention.
            We compete in the National Inventors&apos; Hall of Fame collegiate competition
          </p>
        </ScrollytellingSection>
        <Footer />

    </div>
  );
}
