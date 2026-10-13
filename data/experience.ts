export interface Experience {
  company: string;
  role: string;
  period: string;
  type: "Full-time" | "Contract" | "Part-time" | "Remote" | "Internship";
  location: "Remote" | "On-site" | "Hybrid";
  description?: string[];
  current?: boolean;
}

export const experiences: Experience[] = [
  {
    company: "TS Academy",
    role: "Student",
    period: "Jun 2026 – Oct 2026",
    type: "Full-time",
    location: "Remote",
    description: [
      "Completed structured training in Data Analytics, developing practical skills in Excel, SQL, Power Query, and Power BI.",
      "Cleaned and transformed datasets for analysis.",
      "Built data models and created DAX measures.",
      "Developed interactive dashboards to monitor business performance.",
      "Applied analytical techniques to sales and logistics datasets.",
      "Presented findings through data visualisations and business insights.",
      "Applied these skills through hands-on projects, including sales performance analysis and a logistics operations dashboard.",
    ],
  },
  {
    company: "International Centre for Evaluation and Development (ICED)",
    role: "Enumerator – Program Outcomes Assessment",
    period: "Sep 2026",
    type: "Contract",
    location: "On-site",
    description: [
      "Worked on a programme outcomes assessment for the Mastercard Foundation Youth in Work/Work enabling outreach Programme, implemented by Amahoro Coalition.",
      "Conducted field-based data collection and participant interviews across assigned locations in the FCT.",
      "Contacted and followed up with programme participants to verify their availability and participation status.",
      "Recorded responses and updated participant tracking records accurately.",
      "Maintained confidentiality when handling participant information.",
      "Coordinated with team members and supervisors to resolve fieldwork challenges and support timely reporting.",
    ],
  },
];
