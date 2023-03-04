import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import { Button } from "react-bootstrap";
import StarWarsTable from "@/components/StarWarsTable";

export default function Home() {
  const [text, setText] = useState("");
  const [StarWarsItems, setStarWars] = useState({
    people: [
      {
        name: "Luke Skywalker",
        height: "172",
        mass: "77",
        hair_color: "blond",
        skin_color: "fair",
        eye_color: "blue",
        birth_year: "19BBY",
        gender: "male",
        homeworld: "https://swapi.dev/api/planets/1/",
        films: [
          "https://swapi.dev/api/films/1/",
          "https://swapi.dev/api/films/2/",
          "https://swapi.dev/api/films/3/",
          "https://swapi.dev/api/films/6/",
        ],
        species: [],
        vehicles: [
          "https://swapi.dev/api/vehicles/14/",
          "https://swapi.dev/api/vehicles/30/",
        ],
        starships: [
          "https://swapi.dev/api/starships/12/",
          "https://swapi.dev/api/starships/22/",
        ],
        created: "2014-12-09T13:50:51.644000Z",
        edited: "2014-12-20T21:17:56.891000Z",
        url: "https://swapi.dev/api/people/1/",
      },
    ],
    planets: [],
    starships: [],
  });

  function handleChange(event: any): void {
    setText(event.target.value);
  }

  function updateItems(event: any): void {
    fetch(`api/search?name=${text}`)
      .then((response) => response.json())
      .then((data) => {
        setStarWars(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <>
      <div className="d-flex justify-content-center">
        <div>
          <div className="p-5"></div>
          <div className="row">
            <div className="col-md-8 p-2">
              <input
                type="text"
                className="form-control"
                id="inputText"
                placeholder="Кого ищем?"
                value={text}
                onChange={handleChange}
              ></input>
            </div>
            <div className="col-md-4 p-2">
              <Button onClick={updateItems}>Получить</Button>
            </div>
          </div>
          <div className="p-5"></div>
          <div>
            <StarWarsTable props={StarWarsItems} />
          </div>
        </div>
      </div>
    </>
  );
}
