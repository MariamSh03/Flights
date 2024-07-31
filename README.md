# My Angular + .NET Project 

## Overview

This project is a web application that demonstrates integration between an Angular frontend and a .NET backend. The application allows users to search for flights and view flight details, with data provided by a .NET Web API.

## Features

- **Flight Search**: Users can search for flights based on their preferences.
- **Flight Listing**: Displays a list of available flights with details including airline, price, departure, and arrival information.
- **Responsive Design**: The application is designed to be responsive and accessible across different devices.

## Technologies Used

- **Frontend**: Angular
- **Backend**: .NET Web API
- **Other**: TypeScript, HTML, CSS

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (for Angular)
- [.NET SDK](https://dotnet.microsoft.com/download) (for .NET Web API)
- [Visual Studio](https://visualstudio.microsoft.com/) or [Visual Studio Code](https://code.visualstudio.com/) (for development)

### Setup

1. **Clone the Repository**

   ```bash
   git clone https://github.com/your-username/your-repository.git
   cd your-repository
   ```

2. **Frontend (Angular)**

   - Navigate to the Angular project directory:

     ```bash
     cd ClientApp
     ```

   - Install dependencies:

     ```bash
     npm install
     ```

   - Start the Angular development server:

     ```bash
     npm start
     ```

   - The Angular app will be available at `https://localhost:44416`.

3. **Backend (.NET Web API)**

   - Navigate to the .NET project directory:

     ```bash
     cd YourBackendProject
     ```

   - Restore dependencies:

     ```bash
     dotnet restore
     ```

   - Start the .NET application:

     ```bash
     dotnet run
     ```

   - The .NET API will be available at `https://localhost:7169`.

## CORS Configuration

To allow the Angular frontend to communicate with the .NET API, CORS (Cross-Origin Resource Sharing) is configured in the .NET backend. Ensure that the CORS policy in the `Program.cs` or `Startup.cs` file includes the Angular app's URL.

## API Endpoints

- **GET /Flight**: Retrieve a list of flights.

## Project Structure

- **ClientApp/**: Contains the Angular application.
- **Flight/**: Contains the .NET Web API project.

## Contributing

If you'd like to contribute to this project, please fork the repository and submit a pull request. Ensure that your contributions adhere to the project's coding standards and pass all tests.

## Contact

For any questions or feedback, please contact:

- [Mariam Shonia](mshonia18@gmail.com)
- [GitHub Profile](https://github.com/MariamSh03)

