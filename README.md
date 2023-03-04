# Swapi Search API

This API allows you to search for characters, planets, and starships from the Star Wars universe. The API uses the https://swapi.dev/ API to retrieve data.

## Installation

Clone the repository and install the dependencies.

```bash
git clone https://github.com/x88y/montekrist-test-work.git
cd montekrist-test-work
npm install
```

## Usage
To start the server, run:

```bash
npm run dev
```

This will start the server on http://localhost:3000.

Search
To search for characters, planets, and starships, make a GET request to the `/api/search` endpoint with the `name` query parameter set to the value you want to search for.

```bash
Example request:
GET /api/search?name=skywalker
```
