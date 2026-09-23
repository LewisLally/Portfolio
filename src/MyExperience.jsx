import React from 'react';

export const MyExperience = () => {
  const experience = [
    { Start: '2026', Finish: 'present', Role: 'Event Team  Member', Company: 'Levy (Compass Group)'},
    { Start: '2015', Finish: 'present', Role: 'Volunteer', Company: 'Barnardos (Clydebank Donation Centre)'},
    { Start: '2016', Finish: 'present', Role: 'Youth Club Volunteer', Company: 'BCM International (BCM Scotland)'},
    { Start: '2025', Finish: '2025', Role: 'Work Experience - Hospitality Assistant', Company: 'LGH Hotels Management (Glasgow Argyle Hotel)'},
    { Start: '2024', Finish: '2024', Role: 'Work Experience - Office Assistant', Company: 'Jobcentre Plus (Clydebank)'},
    { Start: '2023', Finish: '2023', Role: 'Work Experience - Retail Assistant', Company: 'B&M Retail (Linnvale, Clydebank)'},
    { Start: '2018', Finish: '2020', Role: 'Modern Apprentice - Office Junior', Company: 'Loch Lomond & The Trossachs National Park Authority'},
    
  ];

  return (
    <div>
      <h1>My Experience</h1>
      <table border="1" cellPadding="10" cellSpacing="0">
        <thead>
          <tr>
            <th>Start</th>
            <th>Finish</th>
            <th>Role</th>
            <th>Company</th>
          </tr>
        </thead>
        <tbody>
          {experience.map((exp, index) => (
            <tr key={index}>
              <td>{exp.Start}</td>
              <td>{exp.Finish}</td>
              <td>{exp.Role}</td>
              <td>{exp.Company}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};