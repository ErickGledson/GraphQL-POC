const { GraphQLSchema, GraphQLObjectType } = require('graphql');

const UsersQuery = require('./Users/Users');

const Schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'Query',
        fields: () => ({
            ...UsersQuery
        })
    })
});

module.exports = Schema;