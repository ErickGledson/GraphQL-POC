const { GraphQLSchema, GraphQLObjectType } = require('graphql');

const { UsersQuery, UsersMutation } = require('./Users/Users');

const Schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'Query',
        fields: () => ({
            ...UsersQuery
        })
    }),
    mutation: new GraphQLObjectType({
        name: 'Mutation',
        fields: () => ({
            ...UsersMutation
        })
    })
});

module.exports = Schema;