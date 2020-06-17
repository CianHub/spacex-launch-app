import React from 'react';
import { Launch } from '../models/launch.model';

export default function LaunchItem(props: {
  key: number;
  launch: Launch;
}): JSX.Element {
  console.log(props);
  return <div>{props.launch.mission_name}</div>;
}
