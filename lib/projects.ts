export interface Project {
  title: string
  aim: string
  description: string
  techStack: string[]
  images: string[]
  githubUrl: string
  liveUrl?: string
}

/**
 * Add new projects by duplicating a project object below.
 * Just replace: title, aim, description, techStack, images, githubUrl, and optional liveUrl.
 */
export const projects: Project[] = [
  {
    title: "Real-Time NYC Transit Data Pipeline",
    aim: "Build a production-ready ETL pipeline to ingest, transform, and load data from multiple sources into a centralized data warehouse.",
    description:
      "Designed and implemented an end-to-end ETL pipeline using Apache Airflow for orchestration, Python for data transformations, and PostgreSQL as the target warehouse. The pipeline processes over 500K records daily with built-in error handling, retry logic, and Slack alerting for pipeline failures.",
    techStack: ["Python", "Apache Airflow", "PostgreSQL", "Docker", "AWS S3"],
    images: [
      "/images/projects/etl-pipeline-1.jpg",
      "/images/projects/etl-pipeline-2.jpg",
    ],
    githubUrl: "https://github.com/raheimhoilett/etl-pipeline",
    liveUrl: undefined,
  },
  {
    title: "E-commerce Medallion Architecture Pipeline",
    aim: "Design a scalable cloud-based data warehouse with optimized star-schema modeling for business analytics.",
    description:
      "Architected a data warehouse on AWS Redshift with a star-schema design featuring fact and dimension tables. Implemented dbt for data transformations and Metabase for self-serve analytics dashboards. Reduced query response times by 60% through proper indexing and materialized views.",
    techStack: ["AWS Redshift", "dbt", "SQL", "Python", "Metabase"],
    images: [
      "/images/projects/data-warehouse-1.jpg",
      "/images/projects/data-warehouse-2.jpg",
    ],
    githubUrl: "https://github.com/raheimhoilett/cloud-data-warehouse",
    liveUrl: undefined,
  },
  {
    title: "Financial Market Data Warehouse with SLA Monitoring",
    aim: "Automate the collection, cleaning, and storage of real-time market data from multiple web sources.",
    description:
      "Built a Python-based web scraping system using BeautifulSoup and Selenium to extract data from 10+ sources. Data is cleaned with pandas, validated with Great Expectations, and stored in a PostgreSQL database. Scheduled via cron jobs with comprehensive logging and monitoring.",
    techStack: ["Python", "BeautifulSoup", "Selenium", "pandas", "PostgreSQL"],
    images: [
      "/images/projects/web-scraper-1.jpg",
      "/images/projects/web-scraper-2.jpg",
    ],
    githubUrl: "https://github.com/raheimhoilett/web-scraper-pipeline",
    liveUrl: "https://scraper-dashboard.example.com",
  },
  
]
