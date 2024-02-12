import AcademicProgramsSection from "@/components/home/academicProgramsSection";
import NewsSection from "@/components/home/newsSection";
import Banner from "@/components/home/banner";
import WelcomeSection from "@/components/home/welcome";

export default function Home() {
  return (
    <main>
      <Banner />
      <WelcomeSection />
      <NewsSection />
      <AcademicProgramsSection />
    </main>
  );
}
