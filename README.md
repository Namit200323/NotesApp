# Notes App

## Overview
This is a simple notes application built using Node.js, Express, MongoDB, and Google OAuth for authentication. Users can sign in with their Google account, add, update, and delete their notes.

## Features
- Google OAuth authentication.
- Create, update, and delete notes.
- Store notes in MongoDB.
- RESTful API for managing notes.

## Installation
1. Clone the repository:
    ```
    git clone https://github.com/Namit200323/notesApp.git
    ```

2. Navigate into the project directory:
    ```
    cd notes
    ```

3. Install dependencies:
    ```
    npm install
    ```

4. Set up Google OAuth credentials:
    - Visit the [Google Cloud Console](https://console.cloud.google.com/).
    - Create a new project.
    - Enable the Google OAuth API.
    - Create OAuth credentials (OAuth 2.0 Client IDs).
    - Add authorized redirect URIs for your app (e.g., http://localhost:3000/auth/google/callback).
    - Copy the Client ID and Client Secret.
    - Create a `.env` file in the project root and add the following:
        ```
        GOOGLE_CLIENT_ID=your-client-id
        GOOGLE_CLIENT_SECRET=your-client-secret
        ```

5. Start the server:
    ```
    npm start
    ```

6. Access the application at `http://localhost:PORT`.

## API Endpoints
- `GET /notes`: Get all notes.
- `POST /notes`: Create a new note.
- `GET /notes/:id`: Get a single note by ID.
- `PUT /notes/:id`: Update a note by ID.
- `DELETE /notes/:id`: Delete a note by ID.

## Screenshots
 - Home Page
<img src="./assets/Screenshot 2024-02-19 at 12.30.30 AM.jpeg">

- User's Notes
<img src="./assets/Screenshot 2024-02-19 at 12.31.55 AM.jpeg">

- Update Note
<img src="./assets/Screenshot 2024-02-19 at 12.32.17 AM.jpeg">

- Delete Note
<img src="./assets/Screenshot 2024-02-19 at 12.32.21 AM.jpeg">


## Dependencies
- express
- mongoose
- passport
- passport-google-oauth20
- dotenv

## Contributing
Contributions are welcome! Feel free to submit pull requests.

## License
This project is licensed under the [MIT License](LICENSE).
