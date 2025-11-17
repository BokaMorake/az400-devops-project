# Infrastructure as Code (IaC) Explanation  
### Bag Boutique E-Commerce Platform – AZ-400 Practical Assessment  
---

## 1. Introduction
This document explains the Infrastructure as Code (IaC) structure used for the Bag Boutique project.  
IaC allows the application’s infrastructure, deployments and environments to be defined in a **machine-readable format**, ensuring repeatability, consistency and automation.  

## 2. Overview of the Infrastructure
The Bag Boutique system consists of:

- A **frontend static website** hosted on GitHub Pages  
- A **backend Node.js API** hosted on Render  
- CI/CD pipelines using GitHub Actions  
- A monitoring and reporting layer feeding into a dashboard  

These resources are described in JSON format inside *infra.json*.  

---

## 3. Explanation of Each Resource in infra.json
### 3.1. Frontend (GitHub Pages)
```json
"frontend": {
  "type": "static-website",
  "provider": "GitHub Pages",
  "deploy_url": "https://bokamorake.github.io/az400-devops-project/",
  "root_directory": "frontend",
  "ci_pipeline": ".github/workflows/deploy-frontend.yml"
}
### 3.2. Backend (Render Web Service)
"backend": {
  "type": "web-service",
  "provider": "Render",
  "runtime": "Node.js 18",
  "entry_point": "server.js",
  "start_command": "npm start",
  "deploy_url": "https://bag-boutique-backend.onrender.com"
}

### 3.3. Monitoring System
"monitoring": {
  "type": "ci-monitoring",
  "provider": "GitHub Actions",
  "data_source": "monitoring/builds_issues.csv",
  "dashboard_tool": "Excel / Power BI"
}

## 4. Relationships Between Resources
### 4.1 Frontend → Backend
"frontend_calls_backend": true
### 4.2 Backend → Client
https://bag-boutique-backend.onrender.com/
## 5. Security Considerations
## 6. Benefits of IaC
## 7. Conclusion

