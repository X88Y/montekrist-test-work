// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { constants } from "buffer";
import type { NextApiRequest, NextApiResponse } from "next";

async function swapiSearch(name: string, api: string) {
  const searchApi = api + `?search=${name}`
  const response = await fetch(api);
  const data = await response.json();

  return data.results;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{
    people?: Person[];
    planets?: Planet[];
    starships?: Starship[];
    message: string;
  }>
) {
  if (typeof req.query.name !== "string") {
    return res.status(400).json({ message: "Wrong usage" });
  }
  const name: string = req.query.name;

  let people: Person[] = await swapiSearch(name, "https://swapi.dev/api/people/");
  let planets: Planet[] = await swapiSearch(name, "https://swapi.dev/api/planets/");
  let starships: Starship[] = await swapiSearch(name, "https://swapi.dev/api/starships/");

  people = people.map((val: Person) => {
    return { name: val.name, gender: val.gender, mass: val.mass };
  });

  planets = planets.map((val: Planet) => {
    return {
      name: val.name,
      diameter: val.diameter,
      population: val.population,
    };
  });

  starships = starships.map((val: Starship) => {
    return {
      name: val.name,
      length: val.length,
      crew: val.crew,
    };
  });

  res.status(200).json({
    message: "Success",
    people,
    planets,
    starships,
  });
}
