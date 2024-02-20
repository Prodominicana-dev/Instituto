import NewsSection from "@/components/home/newsSection";
import Banner from "@/components/home/banner";
import WelcomeSection from "@/components/home/welcome";
import PhrasesSection from "@/components/home/phrasesSection";
import { MantineProvider } from "@mantine/core";
import Contact from "@/components/home/contact";
import AcademicProgramSection from "@/components/home/academicProgramSection";
import ContinuingEducationSection from "@/components/home/continuingEducationSection";
import VideoSection from "@/components/home/videoSection";

export default function Home() {
  return (
    <MantineProvider>
      <main>
        <Banner />
        <WelcomeSection />
        <AcademicProgramSection />
        <VideoSection />
        <NewsSection />
        <PhrasesSection />
        <ContinuingEducationSection />
        <Contact />
      </main>
    </MantineProvider>
  );
}
