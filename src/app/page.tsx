import ExperienceSection from "./components/ExperienceSection/ExperienceSection";
import HeroSection from "./components/HeroSection/HeroSection";
import ProjectsSection from "./components/ProjectSection/ProjectSection";
import SkillsSection from "./components/SkillsSection/SkillsSection";

const Home = () => {
  return (
    <main className="page">
      <HeroSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
    </main>
  );
};

export default Home;
