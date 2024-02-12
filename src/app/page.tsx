import AcademicProgramsSection from "@/components/home/academicProgramsSection";
import NewsSection from "@/components/home/newsSection";
import WelcomeSection from "@/components/home/welcome";

export default function Home() {
  return (
    <main>
      <WelcomeSection />
      <NewsSection />
      <AcademicProgramsSection />
    </main>
  );
}
