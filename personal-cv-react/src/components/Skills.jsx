import { useState } from "react";

export default function Skills() {
  const [showSkills, setShowSkills] = useState(true);

  return (
    <>
      <button
        id="toggleSkills"
        onClick={() => setShowSkills(!showSkills)}
      >
        {showSkills ? "Hide Skills" : "Show Skills"}
      </button>

      {showSkills && (
        <section className="card" id="skillsSection">
          <h2>Skills</h2>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
          </ul>
          <ul>
            <li>
              Web Development
              <ul>
                <li>
                  Frontend
                  <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                  </ul>
                </li>
                <li>Backend</li>
              </ul>
            </li>
          </ul>
        </section>
      )}
    </>
  );
}