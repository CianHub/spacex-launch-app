import React from 'react';
import { Launch } from '../models/launch.model';

export default function LaunchItem({
  launch,
}: {
  launch: Launch;
}): JSX.Element {
  return (
    <div className="card card-body mb-3">
      <div className="row">
        <div className="col-md-9">
          <h4>Mission: {launch.mission_name}</h4>
          <p>Date: {launch.launch_date_local}</p>
        </div>
        <div className="col-md-3">
          <button className="btn btn-secondary">Launch Details</button>
        </div>
      </div>
    </div>
  );
}
