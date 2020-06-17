import React from 'react';
import { Launch } from '../models/launch.model';

export default function LaunchItem({
  launch,
}: {
  launch: Launch;
}): JSX.Element {
  return <div>{launch.mission_name}</div>;
}
