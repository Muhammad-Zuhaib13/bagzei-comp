
import VideoBanner from "@/app/components/VideoBanner";
import NewInSection from "@/app/components/NewInSection";
import TwoCardsSection from "@/app/components/TwoCardsSection"
export default function Home() {
  return (
    <div className="w-full">
      <VideoBanner />
      <TwoCardsSection />
      <NewInSection />
    </div>
  );
}
