import React from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import MissionKey from './mission-key';
import LaunchItem from './launch-item';
import { Launch } from '../models/launch.model';

const LAUNCH_QUERY = gql`
  query LaunchQuery($flight_number: Int!) {
    launch(flight_number: $flight_number) {
      flight_number
      mission_name
      lauch_year
      launch_date_local
      launch_success
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
            <LaunchItem key={data?.flight_number} launch={data}></LaunchItem>
          </div>
        );
      }
    }
  };

  return (
    <React.Fragment>
      <h1 className="display-4 my-3">Launch</h1>
      <MissionKey></MissionKey>
      {contentHandler()}
    </React.Fragment>
  );
}
