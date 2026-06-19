
import VideoBanner from "@/app/components/VideoBanner";
import NewInSection from "@/app/components/NewInSection";
import TwoCardsSection from "@/app/components/TwoCardsSection";
import DiscoverMoreSection from "@/app/components/DiscoverMoreSection";
import DesignersSection from "@/app/components/DesignersSection";
export default function Home() {
  return (
    <main className="w-full">
      <VideoBanner />
      <NewInSection />
      <TwoCardsSection />
      <DesignersSection />
      <DiscoverMoreSection />
    </main>
  );
}
