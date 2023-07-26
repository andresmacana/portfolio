import React from "react";

const SkillColumn = ({ title, color, skills }) => {
  return (
    <div className={`skill-column text-${color}`}>
      <h3>{title}</h3>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
};

export default SkillColumn;
