const { 
    GraphQLInt,
    GraphQLString,
    GraphQLList,
    GraphQLObjectType
} = require('graphql');

const OrdersType = new GraphQLObjectType({
    name: 'OrdersObjectType',
    description: 'A Orders Type Definition',
    fields: () => ({
        id: {
            type: GraphQLInt,
            description: 'A order ID'
        },
        type: {
            type: GraphQLString,
            description: 'A type order'
        },
        amount: {
            type: GraphQLInt,
            description: 'A amount order'
        }
    })
});

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
        },
        orders: {
            type: new GraphQLList(OrdersType)
        }
    })
});

module.exports = UsersType;