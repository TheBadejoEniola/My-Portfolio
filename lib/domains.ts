export const domainMap: Record<string, string> = {
  // Languages & Querying
  Python: "python.org",
  SQL: "mysql.com",
  MySQL: "mysql.com",
  R: "r-project.org",

  // Tools & Platforms
  Tableau: "tableau.com",
  "Power BI": "powerbi.com",
  "Power BI Desktop": "powerbi.com",
  "Power Query": "powerbi.com",
  DAX: "powerbi.com",
  "Data Modelling": "powerbi.com",
  "Data Cleaning": "mysql.com",
  GitHub: "github.com",
  Excel: "microsoft.com",
  "Microsoft Excel": "microsoft.com",
  "Excel / Google Sheets": "google.com",
  "Jupyter Notebook": "jupyter.org",
  "Google Analytics": "analytics.google.com",
  Looker: "looker.com",
  "Azure Data Factory": "azure.com",
  dbt: "getdbt.com",

  // Databases
  PostgreSQL: "postgresql.org",
  BigQuery: "cloud.google.com",
  "SQL Server": "microsoft.com",
  MongoDB: "mongodb.com",

  // Libraries
  Pandas: "pandas.pydata.org",
  NumPy: "numpy.org",
  "Scikit-learn": "scikit-learn.org",
  Matplotlib: "matplotlib.org",
  Seaborn: "seaborn.pydata.org",
  Plotly: "plotly.com",

  // Companies
  "TS Academy": "tsacademyonline.com",
  "International Centre for Evaluation and Development (ICED)": "iced-eval.org",
  Paystack: "paystack.com",
  Flutterwave: "flutterwave.com",
  "McKinsey & Company": "mckinsey.com",
};

export function getDomain(name: string): string {
  return domainMap[name] ?? "";
}
