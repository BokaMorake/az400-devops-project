Bag Boutique DevOps Project
AZ-400 Practical Assessment
1. Introduction

This document presents the complete DevOps implementation for the Bag Boutique project as required by the AZ-400 Practical Assessment.
The solution includes:

Git repository setup

CI/CD pipelines

Infrastructure as Code (IaC)

Frontend and backend deployments

Monitoring and dashboards

Issue tracking and continuous feedback

All components follow DevOps best practices, automation principles, and reproducibility.

2. Project Overview

The Bag Boutique system is a simple e-commerce frontend with a Node.js backend API.
It demonstrates:

Source control with GitHub

Automated deployments

Render and GitHub Pages hosting

Workflow automation

Quality tracking

Continuous monitoring

3. Repository Structure
az400-devops-project/
│
├── backend/
│   ├── server.js
│   ├── package.json
│   └── package-lock.json
│
├── frontend/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── infra/
│   └── infra.json
│
├── monitoring/
│   ├── builds_issues.csv
│   └── dashboard.xlsx
│
├── docs/
│   ├── iac_explanation.md
│   ├── final_documentation.md
│   └── reflection.md
│
└── .github/
    └── workflows/
        ├── ci-cd.yml
        └── deploy-frontend.yml


This structure supports separation of concerns and clean lifecycle management.

4. Infrastructure as Code (IaC)

IaC is defined in:

infra/infra.json


It includes:

Frontend: GitHub Pages static hosting

Backend: Render Node.js API

Monitoring: GitHub Actions workflows and CSV logs

Relationships: Frontend uses backend API

A detailed explanation is documented in:

docs/iac_explanation.md

5. CI/CD Pipeline
5.1 GitHub Actions Workflows

ci-cd.yml performs:

Checkout code

Install Node.js

Validate JSON

Build frontend (simulated build)

Run checks

deploy-frontend.yml performs:

Build frontend

Publish to GitHub Pages

5.2 Render Auto-Deploy

Render automatically deploys the backend on every push to main.
No manual intervention required.

6. Deployment Architecture
Frontend Deployment

Platform: GitHub Pages

URL:

https://bokamorake.github.io/az400-devops-project/


Automated by GitHub Actions

Backend Deployment

Platform: Render

Backend URL:

https://bag-boutique-backend.onrender.com/


Automatic build + deploy on push

Interaction

The frontend communicates with the backend via HTTP API calls.

7. Monitoring & Continuous Feedback

Monitoring is implemented using:

GitHub Issues

GitHub Actions workflow results

Monitoring CSV file:

monitoring/builds_issues.csv


A dashboard including:

Build success rate (pie)

Duration over time (line)

Open vs closed issues (bar)

Dashboard file:

monitoring/dashboard.xlsx


This demonstrates continuous improvement, reporting, and visibility.

8. Issue Management

GitHub Issues were used to track tasks:

Layout fixes

API improvements

Integration testing

Navigation corrections

Asset optimization

Issues were closed using commits with:

Fixes #X


This auto-linked work to changes — demonstrating DevOps traceability.

9. Reflection (Summaries)

Full reflection stored in:

docs/reflection.md

Summary:

Learned how to set up CI/CD pipelines using GitHub Actions

Understood branching, commits, and automated issue closing

Successfully deployed a multi-tier system (frontend + backend)

Built a monitoring dashboard for insights

Improved understanding of DevOps automation and Infrastructure as Code

Challenges:

JSON validation errors

Folder structure issues

Excel CSV import formatting

Render deployment issues

Growth:

Better understanding of pipelines

Confidence with Git, GitHub Actions and hosting

Professional dashboard-building skills

10. Conclusion

The Bag Boutique DevOps project successfully demonstrates the core principles required in the AZ-400 Practical Assessment:

Automated deployments

Infrastructure as Code

Live monitoring

Issue tracking

Frontend + backend integration

Professional documentation

All deliverables are complete and structured according to best practices.