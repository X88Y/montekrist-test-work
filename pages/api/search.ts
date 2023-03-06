// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { constants } from "buffer";
import type { NextApiRequest, NextApiResponse } from "next";

async function swapiSearch(name: string, api: string) {
  const searchApi = api + `?search=${name}`
  const response = await fetch(api);
  const data = await response.json();

  return results;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (typeof req.query.name !== "string") {
    return res.status(400).json({ error: "Wrong usage" });
  }
  const name: string = req.query.name;

  let people = await swapiSearch(name, "https://swapi.dev/api/people/");
  let planets = await swapiSearch(name, "https://swapi.dev/api/planets/");
  let starships = await swapiSearch(name, "https://swapi.dev/api/starships/");

  people = people.map((val) => {
    return { name: val.name, gender: val.gender, mass: val.mass };
  });

  planets = planets.map((val) => {
    return {
      name: val.name,
      diameter: val.diameter,
      population: val.population,
    };
  });

  starships = starships.map((val) => {
    return {
      name: val.name,
      length: val.length,
      crew: val.crew,
    };
  });

  res.status(200).json({
    people,
    planets,
    starships,
  });
}
