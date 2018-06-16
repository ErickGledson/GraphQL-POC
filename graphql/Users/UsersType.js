const { 
    GraphQLInt,
    GraphQLString,
    GraphQLObjectType
} = require('graphql');

const UsersType = new GraphQLObjectType({
    name: 'UserObjectType',
    description: 'A User Type Definition',
    fields: () => ({
        id: {
            type: GraphQLInt,
            description: 'A user ID'
        },
        name: {
            type: GraphQLString,
            description: 'A user name'
        },
        email: {
            type: GraphQLString,
            description: 'A user email address'
        }
    })
});

module.exports = UsersType;