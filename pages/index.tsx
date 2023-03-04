import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import { Button } from "react-bootstrap";
import StarWarsTable from "@/components/StarWarsTable";

export default function Home() {
  const [text, setText] = useState("");
  const [StarWarsItems, setStarWars] = useState({
    people: [],
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
