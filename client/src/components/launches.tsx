import React, { Fragment } from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import { Launch } from '../models/launch.model';
import LaunchItem from './launch-item';

const LAUNCHES_QUERY = gql`
  query LaunchesQuery {
    launches {
      flight_number
      mission_name
      lauch_year
      launch_date_local
      success
    }
  }
`;

export function Launches() {
  const { loading, error, data } = useQuery(LAUNCHES_QUERY);

  const contentHandler = (): JSX.Element | undefined => {
    if (loading) return <h4>Loading...</h4>;
    else if (error) return <h4>{{ error }}</h4>;
    else {
      if (data) {
        console.log(data);
        return (
          <Fragment>
            {data.launches.map((item: Launch) => {
              return (
                <LaunchItem key={item.flight_number} launch={item}></LaunchItem>
              );
            })}
          </Fragment>
        );
      }
    }
  };

  return (
    <React.Fragment>
      <h1 className="display-4 my-3">Launches</h1>
      {contentHandler()}
    </React.Fragment>
  );
}

export default Launches;
