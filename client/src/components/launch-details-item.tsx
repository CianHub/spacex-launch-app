import React from 'react';
import classNames from 'classnames';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';

import { Launch } from '../models/launch.model';

export default function LaunchDetailsItem({
  launch,
}: {
  launch: Launch;
}): JSX.Element {
  return (
    <div className="mission-launch-details mb-3">
      <div className="mission-launch-heading">
        <p className="h5 display-5">
          <span className="text-dark">Mission: {launch.mission_name}</span>
        </p>
      </div>
      <div className="mission-launch-body mb-3">
        <div className="launch-details">
          {' '}
          <h5>Launch Details</h5>
          <ul className="list-group">
            <li className="list-group-item">
              Flight Number: {launch.flight_number}
            </li>
            <li className="list-group-item">
              Launch Year: {launch.launch_year}
            </li>
            <li className="list-group-item">
              Launch Success:{' '}
              <span
                className={classNames(
                  {
                    'text-success': launch.launch_success,
                  },
                  {
                    'text-danger': !launch.launch_success,
                  }
                )}
              >
                {launch.launch_success ? 'Yes' : 'No'}
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="rocket-details">
        <h5>Rocket Details</h5>
        <ul className="list-group">
          <li className="list-group-item">
            Rocket ID: {launch.rocket.id ? launch.rocket.id : 'N/A'}{' '}
          </li>
          <li className="list-group-item">
            Rocket Name: {launch.rocket.rocket_name}{' '}
          </li>
          <li className="list-group-item">
            Rocket Type: {launch.rocket.rocket_type}{' '}
          </li>
        </ul>
      </div>
      <hr />
      <Link to="/" className="btn btn-secondary">
        Back
      </Link>
    </div>
  );
}
