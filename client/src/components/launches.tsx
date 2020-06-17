import React, { Component } from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

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
  console.log(data);
  return (
    <div>
      <h1 className="display-4 my-3"></h1>
    </div>
  );
}

export default Launches;
