\# Angular 22 CRUD Practice – Full Stack Employee Management



This project is a \*\*learning and practice project\*\* created to gain hands-on experience with \*\*Angular 22\*\* and its integration with a \*\*.NET 8 Web API\*\* and \*\*SQL Server\*\*.



The main focus of this project is to understand how Angular applications communicate with a backend REST API and implement complete \*\*Create, Read, Update, and Delete (CRUD)\*\* functionality.



\---



\## 🎯 Project Objective



The goal of this project is to practice real-world Angular development concepts rather than simply following tutorials.



Through this project, I am learning how to:



\* Build Angular standalone components

\* Create reusable Angular services

\* Communicate with REST APIs

\* Work with TypeScript interfaces

\* Build forms using Angular

\* Implement CRUD operations

\* Pass data between Angular components

\* Handle API responses

\* Update the UI after API operations

\* Connect Angular with a .NET 8 backend

\* Work with SQL Server through Entity Framework Core



\---



\# 🛠️ Technology Stack



\## Frontend



\* Angular 22

\* TypeScript

\* HTML5

\* CSS3

\* Angular `HttpClient`

\* Template-driven forms



\## Backend



\* .NET 8

\* ASP.NET Core Web API

\* C#

\* Entity Framework Core



\## Database



\* Microsoft SQL Server



\## Development Tools



\* Visual Studio

\* Visual Studio Code

\* SQL Server Management Studio (SSMS)

\* Git



\---



\# 🏗️ Application Architecture



The project follows a simple full-stack client-server architecture:



```text

┌─────────────────────────────────┐

│        Angular 22 Frontend      │

│                                 │

│  Components                     │

│  Services                       │

│  Models                         │

│  Forms                           │

│  HTML / CSS / TypeScript        │

└───────────────┬─────────────────┘

&#x20;               │

&#x20;               │ HTTP / REST API

&#x20;               ▼

┌─────────────────────────────────┐

│          .NET 8 Web API         │

│                                 │

│  Controllers                    │

│  Entity Framework Core          │

│  API Logic                      │

└───────────────┬─────────────────┘

&#x20;               │

&#x20;               │ EF Core

&#x20;               ▼

┌─────────────────────────────────┐

│          SQL Server             │

│                                 │

│       Employee Records          │

└─────────────────────────────────┘

```



\---



\# 📁 Project Structure



The solution contains an Angular frontend and a .NET 8 Web API backend.



```text

EmployeeManagement

│

├── EmployeeManagement.API

│   │

│   ├── Controllers

│   ├── Models

│   ├── Data

│   └── ...

│

├── EmployeeManagement.Angular

│   │

│   ├── src

│   │   └── app

│   │       ├── employee

│   │       ├── models

│   │       └── services

│   │

│   ├── angular.json

│   ├── package.json

│   └── ...

│

└── README.md

```



> The exact folder structure may change as the project grows during learning.



\---



\# ⚡ Angular 22 Practice



The frontend is built using \*\*Angular 22\*\* and standalone components.



The project currently contains an employee list along with separate components for adding and editing employees.



\### Main Components



```text

EmployeeList

│

├── AddEmployee

├── EditEmployee

└── Delete Confirmation

```



\---



\# 📋 Employee List



The Employee List component is responsible for:



\* Loading employees from the API

\* Displaying employees in a table

\* Opening the Add Employee modal

\* Opening the Edit Employee modal

\* Opening the Delete Confirmation modal

\* Updating the displayed list after CRUD operations



Angular's modern control flow syntax is used for rendering the employee list.



Example:



```html

@for (employee of employees; track employee.id) {

&#x20;   ...

}

```



The employee ID is still maintained internally because it is required for Edit and Delete operations, but it is not displayed to the user.



\---



\# ➕ Add Employee



The Add Employee feature is implemented using a separate Angular component.



The form uses Angular's template-driven forms and two-way data binding.



Example:



```html

\[(ngModel)]="employee.name"

```



When the form is submitted:



```text

Angular Form

&#x20;    ↓

EmployeeService

&#x20;    ↓

POST /api/Employee

&#x20;    ↓

.NET Web API

&#x20;    ↓

Entity Framework Core

&#x20;    ↓

SQL Server

```



After the employee is successfully created, the new employee is added to the displayed list.



\---



\# ✏️ Edit Employee



The Edit Employee functionality is implemented using a separate Angular component.



The selected employee is passed from the parent component using:



```typescript

@Input() employee!: Employee;

```



After the employee is updated, the child component sends the updated employee back to the parent using:



```typescript

@Output() employeeUpdated = new EventEmitter<Employee>();

```



The update request is sent to:



```text

PUT /api/Employee/{id}

```



The updated employee is then reflected in the Angular table.



\---



\# 🗑️ Delete Employee



The Delete functionality includes a confirmation dialog.



When the user clicks Delete:



```text

Employee Table

&#x20;     ↓

Delete Button

&#x20;     ↓

Confirmation Modal

&#x20;     ↓

User confirms

&#x20;     ↓

DELETE API

&#x20;     ↓

SQL Server

```



The employee is removed from the database and from the Angular employee list.



The confirmation dialog helps prevent accidental deletion.



\---



\# 🔌 Angular Employee Service



The Angular application uses an `EmployeeService` to communicate with the .NET Web API.



The service contains methods for the four main CRUD operations:



```typescript

getEmployees()

createEmployee()

updateEmployee()

deleteEmployee()

```



The service uses Angular's `HttpClient` for HTTP communication.



The current local API URL is:



```text

https://localhost:7073/api/Employee

```



> This URL is used only for local development and may change depending on the API configuration.



\---



\# 🌐 REST API



The .NET 8 backend exposes the following endpoints:



| Method | Endpoint             | Purpose           |

| ------ | -------------------- | ----------------- |

| GET    | `/api/Employee`      | Get all employees |

| POST   | `/api/Employee`      | Create employee   |

| PUT    | `/api/Employee/{id}` | Update employee   |

| DELETE | `/api/Employee/{id}` | Delete employee   |



\---



\# 🔄 CRUD Flow



\## Create



```text

Angular Form

&#x20;    ↓

POST Request

&#x20;    ↓

.NET Web API

&#x20;    ↓

Entity Framework Core

&#x20;    ↓

SQL Server

```



\## Read



```text

Angular Component

&#x20;    ↓

GET Request

&#x20;    ↓

.NET Web API

&#x20;    ↓

SQL Server

&#x20;    ↓

Employee List

```



\## Update



```text

Edit Form

&#x20;    ↓

PUT Request

&#x20;    ↓

.NET Web API

&#x20;    ↓

SQL Server

&#x20;    ↓

Updated Employee

&#x20;    ↓

Angular Table

```



\## Delete



```text

Delete Button

&#x20;    ↓

Confirmation

&#x20;    ↓

DELETE Request

&#x20;    ↓

.NET Web API

&#x20;    ↓

SQL Server

&#x20;    ↓

Angular Table Updated

```



\---



\# 📦 Employee Model



The Angular application uses the following TypeScript interface:



```typescript

export interface Employee {

&#x20; id: number;

&#x20; name: string;

&#x20; email: string;

&#x20; department: string;

&#x20; salary: number;

}

```



This interface represents the employee data exchanged between the Angular frontend and .NET API.



\---



\# 🗄️ Database



The project uses \*\*SQL Server\*\* to store employee information.



The database currently contains employee records with information such as:



\* ID

\* Name

\* Email

\* Department

\* Salary



The .NET 8 Web API uses \*\*Entity Framework Core\*\* to perform database operations.



\---



\# 🔐 CORS



CORS is configured in the .NET API to allow the Angular development server to communicate with the backend during local development.



Example:



```csharp

builder.Services.AddCors(options =>

{

&#x20;   options.AddPolicy("AllowAll", policy =>

&#x20;   {

&#x20;       policy

&#x20;           .AllowAnyOrigin()

&#x20;           .AllowAnyHeader()

&#x20;           .AllowAnyMethod();

&#x20;   });

});

```



> This configuration is intended for local development. A production application should restrict access to known frontend origins.



\---



\# ▶️ How to Run the Project



\## Prerequisites



The following tools are required:



\* .NET 8 SDK

\* Node.js

\* Angular CLI

\* SQL Server

\* SQL Server Management Studio

\* Visual Studio or Visual Studio Code



\---



\## 1. Start SQL Server



Make sure SQL Server is running and the Employee Management database is available.



Configure the connection string in the .NET API.



Example:



```json

{

&#x20; "ConnectionStrings": {

&#x20;   "DefaultConnection": "YOUR\_SQL\_SERVER\_CONNECTION\_STRING"

&#x20; }

}

```



> Do not commit real passwords or sensitive connection strings to GitHub.



\---



\## 2. Run the .NET API



Open the backend project in Visual Studio.



Build and run the application.



The API will start on its configured URL.



For example:



```text

https://localhost:7073

```



\---



\## 3. Run Angular



Open a terminal inside the Angular project folder.



Install dependencies:



```bash

npm install

```



Start the Angular development server:



```bash

ng serve

```



Angular will normally be available at:



```text

http://localhost:4200

```



\---



\# 🧠 Angular Concepts Practiced



This project is being used to practice the following Angular concepts:



\* Angular 22

\* Standalone components

\* Component-based architecture

\* TypeScript

\* Interfaces

\* Dependency Injection

\* Angular Services

\* `HttpClient`

\* HTTP GET

\* HTTP POST

\* HTTP PUT

\* HTTP DELETE

\* Template-driven forms

\* `ngModel`

\* Two-way data binding

\* `@Input()`

\* `@Output()`

\* `EventEmitter`

\* Angular control flow

\* `@if`

\* `@for`

\* Component communication

\* Modal components

\* UI state management

\* API response handling

\* Error handling



\---



\# 🧠 .NET Concepts Practiced



The backend is being used to practice:



\* C#

\* .NET 8

\* ASP.NET Core Web API

\* REST APIs

\* Controllers

\* Entity Framework Core

\* SQL Server

\* HTTP methods

\* CRUD operations

\* Model binding

\* API responses

\* CORS



\---



\# 🐛 Problems Encountered During Development



One of the goals of this project is to learn by solving real development problems.



During development, some issues were encountered and resolved, including:



\### Angular table not updating after DELETE



The database record was successfully deleted, but the UI did not immediately reflect the change.



The employee was removed from the Angular array and change detection was triggered:



```typescript

this.employees = this.employees.filter(

&#x20; employee => employee.id !== id

);



this.cdr.detectChanges();

```



This helped me understand the relationship between application state and UI rendering in Angular.



\### PUT API response



Initially, the update API returned no response body.



The API was changed to return the updated employee:



```csharp

return Ok(employee);

```



This allowed Angular to receive the updated employee and immediately update the table.



\---



\# 📈 Current Learning Progress



The current version of the project has successfully implemented:



```text

Angular 22

&#x20;   │

&#x20;   ├── Components                 ✅

&#x20;   ├── Services                   ✅

&#x20;   ├── Models                     ✅

&#x20;   ├── Forms                      ✅

&#x20;   ├── API Communication          ✅

&#x20;   ├── Component Communication    ✅

&#x20;   │

&#x20;   └── CRUD                       ✅



.NET 8 Web API

&#x20;   │

&#x20;   ├── GET                        ✅

&#x20;   ├── POST                       ✅

&#x20;   ├── PUT                        ✅

&#x20;   └── DELETE                     ✅



SQL Server

&#x20;   │

&#x20;   └── Employee Data              ✅

```



\---



\# 🚀 Future Learning Goals



As I continue learning Angular and full-stack development, I plan to extend this project with:



\* Search functionality

\* Pagination

\* Sorting

\* Better form validation

\* Toast notifications

\* Loading indicators

\* Centralized error handling

\* JWT authentication

\* Authorization

\* Role-based access

\* Angular route guards

\* HTTP interceptors

\* Unit testing

\* .NET Clean Architecture

\* Logging

\* Docker

\* Azure deployment

\* CI/CD pipeline



The project will continue to evolve as new concepts are learned.



\---



\# 📸 Screenshots



Screenshots of the application can be added here as the project develops.



Example:



```text

Employee List

Add Employee

Edit Employee

Delete Confirmation

```



\---



\# 📚 Purpose of This Repository



This repository is primarily a \*\*learning and practice project\*\*.



The purpose is to document my progress while learning Angular 22 and applying Angular concepts to a practical full-stack application using a technology stack that I am already familiar with:



```text

Angular 22

\+

.NET 8 Web API

\+

Entity Framework Core

\+

SQL Server

```



Rather than building everything at once, new features and improvements will be added gradually while learning and practicing modern Angular development.



\---



\# 👨‍💻 Author



\*\*Gaurav Surroach\*\*



.NET Developer | Learning Angular 22



\### Technologies Practiced



\*\*C# | .NET 8 | ASP.NET Core Web API | Angular 22 | TypeScript | Entity Framework Core | SQL Server | REST APIs | Git\*\*



\---



\## ⭐ Project Status



\*\*Status: Active Learning Project\*\*



CRUD functionality has been completed successfully.



More Angular concepts and full-stack features will be added as learning continues.



