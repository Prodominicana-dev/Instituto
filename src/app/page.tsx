import AcademicProgramsSection from "@/components/home/academicProgramsSection";
import NewsSection from "@/components/home/newsSection";
import Banner from "@/components/home/banner";
import WelcomeSection from "@/components/home/welcome";
import PhrasesSection from "@/components/home/phrasesSection";
import ContinuingEducationSection from "@/components/home/continuingEducation";
import { MantineProvider } from "@mantine/core";
import Contact from "@/components/home/contact";

export default function Home() {
  return (
    <MantineProvider>
      <main>
        <Banner />
        <WelcomeSection />
        <NewsSection />
        <PhrasesSection />
        <AcademicProgramsSection />
        <ContinuingEducationSection />
        <Contact />
      </main>
    </MantineProvider>
  );
}
