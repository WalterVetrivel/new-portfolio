import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SkillsTable = props => (
  <table className="skills-table">
    <tbody>
      {props.skillCategories.map(category => (
        <React.Fragment key={category.name}>
          <tr className="skills-heading">
            <th colSpan="2">
              <FontAwesomeIcon icon={category.icon} className="mr-h" />
              {category.name}
            </th>
          </tr>
          {category.subCategories.map(subCategory => (
            <tr className="skills-subcategory" key={subCategory.name}>
              <td className="skills-subcategory-title">{subCategory.name}</td>
              <td>
                {subCategory.skills.map(skill => (
                  <p key={skill}>{skill}</p>
                ))}
              </td>
            </tr>
          ))}
        </React.Fragment>
      ))}
    </tbody>
  </table>
);

export default SkillsTable;
