import {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
  GraphQLSchema,
} from 'graphql';

import axios from 'axios';
// launch
const LaunchType = new GraphQLObjectType({
  name: 'Launch',
  fields: () => ({
    flight_number: { type: GraphQLInt },
    mission_name: { type: GraphQLString },
    lauch_year: { type: GraphQLString },
    launch_date_local: { type: GraphQLString },
    success: { type: GraphQLBoolean },
    rocket: { type: RocketType },
  }),
});

// rocket
const RocketType = new GraphQLObjectType({
  name: 'Rocket',
  fields: () => ({
    id: { type: GraphQLString },
    rocket_name: { type: GraphQLString },
    rocket_type: { type: GraphQLString },
  }),
});

// root query
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    launches: {
      type: new GraphQLList(LaunchType),
      resolve(parent, args) {
        return axios
          .get('https://api.spacexdata.com/v3/launches')
          .then((res) => res.data);
      },
    },
  },
});

export const schema = new GraphQLSchema({
  query: RootQuery,
});
