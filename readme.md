# User Birthday Task

This application is a migration of PingCRM from Ruby on Rails to FastAPI, React.js, and TypeScript.

## Features

- Autentication: Jwt based authentication is added.
- Organzation: Organizationn complete CRUD is added on backend and listing and creation on frontend.
- Contacts: Contact complete CRUD is added on backend and listing on frontend, Accociated organization is also displayed.
- Search: Searching on both organization and contacts is integrated.
- Filters: Filtering on both organization and contacts data is integrated.
- Code Formatting: Black is added for code formatting

<img width="1072" height="342" alt="Screenshot 2025-07-15 at 10 26 49 PM" src="https://github.com/user-attachments/assets/148098e1-9ccb-4d19-b920-970087a03109" />
<img width="1094" height="396" alt="Screenshot 2025-07-15 at 10 27 06 PM" src="https://github.com/user-attachments/assets/7074d6c5-f948-48c0-9d1f-68f382d13a6b" />


## Demo
https://ping-crm-migration.vercel.app/

# Build With
## Backend
- Framework: FastAPI
- Database: PostgreSQL

## FrontEnd
- Framework: ReactJS, Typescript
- Store: RTKQuery

# Getting Started

## Prerequisites

- Python3
- node 20
- PostgresQl 15 (Use `admin` for both user and password and create database with name: `ping_crm`)
- npm
- pip3

## Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/beinghaziq/ping-crm-migration.git
   cd repo
   ```
2. **Setup TTAB**:
   ```bash
      npm install ttab
   ```
3. **Setup ENVs**:
   ```bash
   bash scripts/setup-env.sh
   ```
4. **Setup Database and Seed**:
   ```bash
   bash scripts/setup-database.sh
   ```
5. **Run both servers**:
   ```bash
   bash scripts/run-servers.sh
   ```

## API Documentation

https://ping-crm-migration.onrender.com/docs

## Deployment
- Backend: Render
- Frontend: Vercel
- Database: supabase

## Features that are missing or nice to have
- Eslint can be added
- I have added user creation and JWT generation but it needs to be properly handled with HTTP only cookies and sessions.
- Testing using pytest and react testing library.
- Pre commit hook for formatting and tests
- Loaders and notifications
- Missing Validations
- Docker

