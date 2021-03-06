import React from 'react';
import classNames from 'classnames';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';

import { Launch } from '../models/launch.model';

export default function LaunchItem({
  launch,
}: {
  launch: Launch;
}): JSX.Element {
  console.log(launch.links);
  return (
    <div className="card card-body mb-3 mission-grid-item">
      <div className="">
        <div className="">
          <p className="h5">
            Mission:
            <span
              className={classNames(
                { 'text-success': launch.launch_success },
                { 'text-danger': launch.launch_success === false },
                { 'text-primary': launch.launch_success === null }
              )}
            >
              {' '}
              {launch?.mission_name}
              {launch?.links?.mission_patch_small ? (
                <img
                  className={classNames(
                    { 'img-fluid mb-3 mission-item-patch': true },
                    { 'margin-left': true }
                  )}
                  src={launch?.links?.mission_patch_small}
                  alt="The patch awarded for the mission"
                />
              ) : null}
            </span>
          </p>
          <p>
            Date:{' '}
            <Moment format="DD/MM/YYYY">{launch?.launch_date_local}</Moment>
          </p>
        </div>
      </div>

      <div className="">
        <Link
          to={`/launch/${launch?.flight_number}`}
          className="btn btn-secondary mission-item-details-btn"
        >
          Launch Details
        </Link>
      </div>
    </div>
  );
}
