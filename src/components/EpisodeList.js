import React, { useEffect, useState }  from "react";
import axios from "axios";
import EpisodeCard from './EpisodeCard'
import { Container, Grid } from "semantic-ui-react";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [episodeData, setepisodeData] = useState([]);

  useEffect(() => {
    axios
    .get(`https://rickandmortyapi.com/api/episode/`)
    .then(response => {
        setepisodeData(response.data.results);
        console.log(response.data.results);
      })
  }, []);

  return (
    <section className="episode-list grid-view">
      <h2>Ooooooh Weeeee! That's a lot of episodes!</h2>
      <Container text>
            <Grid relaxed columns={2} divided="vertically">
                <Grid.Row padded="vertically" columns={2}>
                    {episodeData.map(episode => {
                        // console.log(character)
                        return (
                        <EpisodeCard
                        className='episodes'
                            key={episode.id}
                            air={episode.air_date}
                            created={episode.created}
                            episode={episode.episode}
                            name={episode.name}
                            id={episode.id}
                            url={episode.url}
                        />
                        );
                    })}
            </Grid.Row>
          </Grid>
        </Container>
    </section>
  );
}
