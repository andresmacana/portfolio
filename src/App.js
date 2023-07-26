import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import CareerObjective from "./CareerObjective";
import SkillColumn from "./SkillColumn";
import Menu from "./Menu";
import Education from "./Education";
import WorkExperience from "./WorkExperience";
import Projects from "./Projects";
import Contact from "./Contact";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <CareerObjective />
        <div className="skills">
          <SkillColumn
            title="Frontend"
            color="blue"
            skills={["Javascript", "HTML", "CSS", "React.js"]}
          />
          <SkillColumn
            title="Backend"
            color="red"
            skills={["Node.js", "Python"]}
          />
          <SkillColumn
            title="Databases"
            color="green"
            skills={["MySQL", "Postgres"]}
          />
          <SkillColumn
            title="Version Control"
            color="yellow"
            skills={["git"]}
          />
          <SkillColumn
            title="Project MGMT tools"
            color="grey"
            skills={["Agile", "Scrum"]}
          />
        </div>
        <Menu />
        <Routes>
          <Route path="/education" element={<Education />} />
          <Route path="/work-experience" element={<WorkExperience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
