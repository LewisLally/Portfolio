import React from 'react';

export const MyQualifications = () => {
  const qualifications = [
    { Year: '2025', Subject: 'Food Safety', Level: 'Level 2', AwardingBody: 'HighField', TrainingProvider: 'Hub International' },
    { Year: '2025', Subject: 'Good Customer Service', Level: 'Level 2', AwardingBody: 'HighField', TrainingProvider: 'Hub International' },
    { Year: '2024', Subject: 'Manual Handling Awareness', Level: 'SCQF Level 5', AwardingBody: 'REHIS', TrainingProvider: 'Routes To Work' },
    { Year: '2024', Subject: 'Principles of Customer Service', Level: '', AwardingBody: 'WorldHost', TrainingProvider: 'Routes To Work' },
    { Year: '2024', Subject: 'Elem. Infection Control & Prevention', Level: 'SCQF Level 5', AwardingBody: 'REHIS', TrainingProvider: 'Routes To Work' },
    { Year: '2024', Subject: 'Manual Handling Awareness', Level: 'SCQF Level 5', AwardingBody: 'REHIS', TrainingProvider: 'Routes To Work' },
    { Year: '2024', Subject: 'Elem. Food Hygiene', Level: 'SCQF Level 5', AwardingBody: 'REHIS', TrainingProvider: 'Routes To Work' },
    { Year: '2024', Subject: 'Elem. Health & Safety', Level: 'SCQF Level 5', AwardingBody: 'REHIS', TrainingProvider: 'Routes To Work' },
    { Year: '2025', Subject: 'Employability Award', Level: 'SQV 3', AwardingBody: 'SQA', TrainingProvider: 'Routes To Work' },
    { Year: '2023', Subject: 'Award in Volunteering Skills', Level: 'SVQ 3', AwardingBody: 'SQA', TrainingProvider: 'Working4U (West Dunbartonshire Council)' },
    { Year: '2022', Subject: 'Financial & Professional Services', Level: 'SCQF Level 7', AwardingBody: '', TrainingProvider: 'City of Glasgow College' },
    { Year: '2019', Subject: 'Business & Administration (MA)', Level: 'SQV 3', AwardingBody: 'West Dunbartonshire Council', TrainingProvider: 'Loch Lomond & The Trossachs National Park Authority' },
    { Year: '2018', Subject: 'Cert. of Work Readiness in Customer Service', Level: 'SCQF Level 4', AwardingBody: '', TrainingProvider: 'Learndirect' },
    { Year: '2016', Subject: 'HNC Accounting', Level: 'SCQF Level 7', AwardingBody: '', TrainingProvider: 'City of Glasgow College' },
    { Year: '2014', Subject: 'NC Product Design', Level: 'SCQF Level 5', AwardingBody: '', TrainingProvider: 'City of Glasgow College' },
  ];

  return (
    <div>
      <h1>My Qualifications</h1>
      <table border="1" cellPadding="10" cellSpacing="0">
        <thead>
          <tr>
            <th>Year</th>
            <th>Subject</th>
            <th>Level</th>
            <th>Awarding Body</th>
            <th>Training Provider</th>
          </tr>
        </thead>
        <tbody>
          {qualifications.map((qual, index) => (
            <tr key={index}>
              <td>{qual.Year}</td>
              <td>{qual.Subject}</td>
              <td>{qual.Level}</td>
              <td>{qual.AwardingBody}</td>
              <td>{qual.TrainingProvider}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};