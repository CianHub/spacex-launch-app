import React from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

import { Launch } from '../models/launch.model';
import LaunchItem from './launch-item';
import MissionKey from './mission-key';

const LAUNCHES_QUERY = gql`
  query LaunchesQuery {
    launches {
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

export function Launches() {
  const { loading, error, data } = useQuery(LAUNCHES_QUERY);

  const contentHandler = (): JSX.Element | undefined => {
    if (loading) return <h4>Loading...</h4>;
    else if (error) console.log(error);
    else {
      if (data) {
        return (
          <div className="mission-grid">
            {data.launches.map((item: Launch) => {
              return (
                <LaunchItem key={item.flight_number} launch={item}></LaunchItem>
              );
            })}
          </div>
        );
      }
    }
  };

  return (
    <React.Fragment>
      <h5 className="display-4 my-3">Launches</h5>
      <MissionKey></MissionKey>
      {contentHandler()}
    </React.Fragment>
  );
}

export default Launches;
