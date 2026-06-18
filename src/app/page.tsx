import Image from "next/image";
import VideoBanner from "@/app/components/VideoBanner";
import NewInSection from "@/app/components/NewInSection";
export default function Home() {
  return (
    <div className="w-full">
      <VideoBanner />
      <NewInSection />
    </div>
  );
}
