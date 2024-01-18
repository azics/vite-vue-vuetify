<template>
  <v-container>
    <v-card>
      <v-card-title>Test Task</v-card-title>
      <v-card-text>
        Task:
        <p>Create a web application that generates a summarized report (sums of subscribers grouped by region and
          its<br />
          total for Uzbekistan) when a user starts using it. The web application should be available at
          http://localhost:8099.<br />
          Preferably, use only Node.js/JavaScript.</p>
        <p>Recommended Milestones:</p>
        <p>1. Install Database: Set up a MySQL or PostgreSQL database to store subscriber data.
          Root: password, test_user2: password, db: test_db, table: Subscribers</p>
        <p>2. Install Node.js: Ensure Node.js is installed on the server for backend development.
        </p>
        <p>3. Install Nginx or Apache: Set up a web server (Nginx or Apache) to handle incoming HTTP requests and
          serve
          the frontend.
        </p>
        <p>4. Create a Table: Design and create a table in the database to store subscriber information, similar to
          the
          provided Excel file.
        </p>
        <p>5. Create API and Route for Data Import: Develop an API endpoint and a corresponding route to handle
          the
          import of subscriber data (excel) into the database.
        </p>
        <p>6. Create Route for Summarized Data Retrieval: Implement a route connected to the database to retrieve
          summarized data based on a custom query.
        </p>
        <p>7. Custom Query for Summarized Data: Create a custom database query to obtain sums of subscribers grouped
          by
          region and the total for Uzbekistan.
        </p>
        <p>8. Create a Web Application (Vue.js): Develop a frontend using Vue.js to interact with the backend and
          display
          the results.
        </p>
        <p>9. Import Page with Progress: Design a page where users can import an Excel file, and the application
          displays the progress (percentage) of the file loading. Test it for big files as well.
        </p>
        <p>10. Results Page for Custom Query: Create a page that displays the results of the custom query, showing
          sums
          of
          subscribers grouped by region and the total for Uzbekistan.
        </p>
        <p>11. Deploy and Access Report: Ensure the prepared report is accessible at http://localhost:8099.
        </p>

        <p>

          Recommended Frameworks:
          <br />
          # For Node.js:<br />
          - Express: For building the backend server.<br />
          - Sequelize: ORM (Object-Relational Mapping) for database interactions.<br />
          - MySQL: Database for storing subscriber information.<br />
          - PM2: Process manager for Node.js applications.<br />
          - Vue.js: Frontend framework for building user interfaces.<br />
          - or React.js: Frontend framework for building user interfaces.<br />
          # For PHP:<br />
          - CodeIgniter.<br />
          Make sure to follow best practices for security, error handling, and code organization throughout the<br />
          development process. Test the application thoroughly to ensure its functionality.<br />

        </p>

      </v-card-text>
    </v-card>
  </v-container>
</template>

<style scoped>
  .read-the-docs {
    color: #888;
  }
</style>