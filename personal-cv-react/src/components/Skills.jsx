import { useState } from "react";

function Skills({ skills }) {
  const [showSkills, setShowSkills] = useState(true);

  return (
    <>
      <button id="toggleSkills" onClick={() => setShowSkills(!showSkills)}>
        {showSkills ? "Hide Skills" : "Show Skills"}
      </button>
      {showSkills && (
        <section className="card" id="skillsSection">
          <h2>Skills</h2>
          <table>
            <thead>
              <tr>
                <th>Category</th>
                <th>Skills</th>
              </tr>
            </thead>
            <tbody>
              {skills.map((skill, index) => (
                <tr key={index}>
                  <td>{skill.category}</td>
                  <td>{skill.items}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      )}
    </>
  );
}

export default Skills;