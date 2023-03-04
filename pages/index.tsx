import { useMemo, useState, useRef, useCallback } from "react";
import { Button } from "react-bootstrap";
import StarWarsTable from "@/components/StarWarsTable";


export default function Home() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [StarWarsItems, setStarWars] = useState({
    people: [],
    planets: [],
    starships: [],
  });

  const queryItems = useCallback(
    (event: React.MouseEvent) => {
      if (!inputRef.current) return;
      const text = inputRef.current.value;
      fetch(`api/search?name=${text}`)
        .then((response) => response.json())
        .then((data) => {
          setStarWars(data);
        })
        .catch((error) => {
          console.error(error);
        });
    },
    [setStarWars]
  );

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
                ref={inputRef}
              ></input>
            </div>
            <div className="col-md-4 p-2">
              <Button onClick={queryItems}>Получить</Button>
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
