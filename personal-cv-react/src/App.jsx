import { useState } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const skills = [
  { category: "Frontend", items: "HTML, CSS, JavaScript" },
  { category: "Backend", items: "PHP, Python (Basic), SQL" },
  { category: "Web Development", items: "React, Node.js" },
];

const education = [
  { year: "2028", program: "BS Information Technology", school: "USTP – CDO Campus" },
  { year: "2022", program: "Senior High School", school: "Liceo de Cagayan University" },
  { year: "2020", program: "Junior High School", school: "Misamis Oriental General Comprehensive High School (MOGCHS)" },
  { year: "2016", program: "Elementary", school: "Consolacion Elementary School" },
  { year: "2010", program: "Kindergarten", school: "Kalilangan Baptist Christian Academy (KBCA)" },
];

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark-mode" : ""}>
      <Header />
      <main>
        <div className="container">
          <button id="themeToggle" onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
          <About />
          <Skills skills={skills} />
          <Education education={education} />
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
}