import React from "react";

function StarWarsTable(props: any) {
 const { starships, planets, people } = props.props;
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Starship Name</th>
          <th>Length</th>
          <th>Crew Size</th>
        </tr>
      </thead>
      <tbody>
        {starships?.map((starship: any) => (
          <tr key={starship.name}>
            <td>{starship.name}</td>
            <td>{starship.length}</td>
            <td>{starship.crew}</td>
          </tr>
        ))}
      </tbody>

      <thead>
        <tr>
          <th>Planet Name</th>
          <th>Diameter</th>
          <th>Population</th>
        </tr>
      </thead>
      <tbody>
        {planets?.map((planet: any) => (
          <tr key={planet.name}>
            <td>{planet.name}</td>
            <td>{planet.diameter}</td>
            <td>{planet.population}</td>
          </tr>
        ))}
      </tbody>

      <thead>
        <tr>
          <th>Person Name</th>
          <th>Gender</th>
          <th>Mass</th>
        </tr>
      </thead>
      <tbody>
        {people?.map((person: any) => (
          <tr key={person.name}>
            <td>{person.name}</td>
            <td>{person.gender}</td>
            <td>{person.mass}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default StarWarsTable;
