import React from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

import LaunchDetailsItem from './launch-details-item';

const LAUNCH_QUERY = gql`
  query LaunchQuery($flight_number: Int!) {
    launch(flight_number: $flight_number) {
      flight_number
      mission_name
      launch_year
      launch_date_local
      launch_success
      rocket {
        id
        rocket_name
        rocket_type
      }
      links {
        mission_patch_small
      }
    }
  }
`;

export default function LaunchDetails(props: any) {
  let flight_number = props.match.params.flightNumber;
  flight_number = flight_number ? parseInt(flight_number) : null;

  let { loading, error, data } = useQuery(LAUNCH_QUERY, {
    variables: { flight_number },
    skip: !flight_number,
  });

  data = data?.launch;

  const contentHandler = (): JSX.Element | undefined => {
    if (loading) return <h4>Loading...</h4>;
    else if (error) console.log(error);
    else {
      if (data) {
        return (
          <div className="mission-grid">
            <LaunchDetailsItem
              key={data?.flight_number}
              launch={data}
            ></LaunchDetailsItem>
          </div>
        );
      }
    }
  };

  return <React.Fragment>{contentHandler()}</React.Fragment>;
}
