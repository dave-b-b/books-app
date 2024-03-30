# Dave's Cool Book App

Welcome to Dave's Cool Book App! This application displays both old and new books. Old books are displayed at the `/deck` endpoint, while new books are displayed at the `/deck2` endpoint.

## Setup Instructions

To set up and run the application locally, follow these steps:

1. Clone this repository to your local machine.
2. Navigate to the project directory.
3. Run `npm install` to install dependencies.
4. Run `npm start` to start the development server.
5. Open your web browser and go to `http://localhost:3000` to view the application.

## Project Structure

The project is structured as follows:

- `src/`
    - `components/`
        - `BookCard.js`: Component to display individual book details.
        - `BookDeck.js`: Component to display a carousel of old books.
        - `BookDeck2.js`: Component to display a carousel of new books.
        - `Landing.js`: Home page component.
        - `Navigation.js`: Component for the navigation bar.
        - `NotFound.js`: Component to display when a route doesn't match.
    - `App.js`: Main component controlling other components and routes.
    - `index.js`: Entry point of the application.

## Key Components

- **BookCard**: Displays individual book details.
- **BookDeck**: Displays a carousel of old books.
- **BookDeck2**: Displays a carousel of new books.
- **Landing**: Home page component.
- **Navigation**: Navigation bar component.
- **NotFound**: Component displayed when a route doesn't match.

## Styling

Bootstrap-React is used for styling the application.

## Deployed Version

Currently, there is no deployed version of the application.

## Additional Information

There are no additional considerations for reviewers.
