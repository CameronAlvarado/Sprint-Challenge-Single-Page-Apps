import React, { useEffect, useState }  from "react";
import axios from "axios";
import LocationCard from './LocationCard'
import { Container, Grid, List } from "semantic-ui-react";

export default function LocationsList() {
  // TODO: Add useState to track data from useEffect
  const [locationData, setLocationData] = useState([]);
  const [residentData, setResidentData] = useState([]);

  useEffect(() => {
    axios
    .get(`https://rickandmortyapi.com/api/location/`)
    .then(response => {
        setLocationData(response.data.results);
        // console.log(response.data.results);
      })
  }, []);

  useEffect(() => {
    axios
    .get(`https://rickandmortyapi.com/api/character/401`)
    .then(response => {
        // setResidentData(response.data.results);
        console.log(response);
      })
  }, []);

  return (
    <section className="location-list grid-view">
      <h2>Ooooooh Weeeee! That sure is a lot of dimensions!</h2>
      <Container text>
            <Grid relaxed columns={2} divided="vertically">
                <Grid.Row padded="vertically" columns={2}>
                    {locationData.map(location => {
                        console.log(location)
                        return (
                        <LocationCard
                            key={location.id}
                            name={location.name}
                            id={location.id}
                            dimension={location.dimension}
                            type={location.type}
                            residents={location.residents.map(residents => {
                                console.log(residents);
                                
                            })}
                        />
                        );
                    })}
            </Grid.Row>
          </Grid>
        </Container>
    </section>
  );
}
