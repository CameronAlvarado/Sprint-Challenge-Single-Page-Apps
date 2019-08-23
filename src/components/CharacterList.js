import React, { useEffect, useState }  from "react";
import axios from "axios";
import CharacterCard from './CharacterCard'
import { Container, Grid } from "semantic-ui-react";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characterData, setcharacterData] = useState([]);

  useEffect(() => {
    axios
    .get(`https://rickandmortyapi.com/api/character/`)
    .then(response => {
        setcharacterData(response.data.results);
        // console.log(response.data.results);
      })
  }, []);

  return (
    <section className="character-list grid-view">
      <h2>Ooooooh Weeeee! Just look at all these zany characters!</h2>
      <Container text>
            <Grid relaxed columns={2} divided="vertically">
                <Grid.Row padded="vertically" columns={2}>
                    {characterData.map(character => {
                        // console.log(character)
                        return (
                        <CharacterCard
                            image={character.image}
                            key={character.id}
                            className="cards"
                            name={character.name}
                            species={character.species}
                            gender={character.gender}
                            id={character.id}
                            status={character.status}
                            link={character.url}
                        />
                        );
                    })}
            </Grid.Row>
          </Grid>
        </Container>
    </section>
  );
}
