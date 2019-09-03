const {
    GraphQLInt,
    GraphQLString,
    GraphQLList,
    GraphQLObjectType,
    GraphQLInputObjectType,
    GraphQLNonNull,
} = require('graphql');

const OrdersType = new GraphQLObjectType({
    name: 'Orders',
    description: 'A Orders Type Definition',
    fields: () => ({
        id: {
            type: GraphQLInt,
            description: 'An order ID',
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
    name: 'User',
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

const UserInputType = new GraphQLInputObjectType({
    name: 'UserInput',
    description: 'User used for signing up',
    fields: () => ({
        name: {
            type: GraphQLString,
            description: 'An user name'
        },
        email: {
            type: new GraphQLNonNull(GraphQLString),
            description: 'An user email address'
        },
    }),
});

module.exports = { UsersType, UserInputType };