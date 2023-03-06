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


## Endpoints

### `GET /api/search`

Search for Star Wars characters, planets, and starships.

#### Request Parameters

- `name` (required) - A string with the name to search for.

#### Response

- `200 OK` - Returns a JSON object with the following properties:
  - `people` - An array of objects with the following fields:
    - `name` - The name of the character.
    - `gender` - The gender of the character.
    - `mass` - The mass of the character.
  - `planets` - An array of objects with the following fields:
    - `name` - The name of the planet.
    - `diameter` - The diameter of the planet.
    - `population` - The population of the planet.
  - `starships` - An array of objects with the following fields:
    - `name` - The name of the starship.
    - `length` - The length of the starship.
    - `crew` - The number of crew members on the starship.
  - `message` - A message from the server may indicate a problem
#### Errors

- `400 Bad Request` - Returns an error message if the request parameters are missing or invalid.
