const {
    GraphQLInt,
    GraphQLList
} = require('graphql');

const UsersType = require('./UsersType');

const UserModel = [
    {
        id: 1,
        name: 'Ana',
        email: 'ana@mail.com'
    },
    {
        id: 2,
        name: 'João',
        email: 'joao@mail.com'
    },
    {
        id: 3,
        name: 'Maria',
        email: 'maria@mail.com'
    },
    {
        id: 4,
        name: 'Caio',
        email: 'caio@mail.com'
    },
    {
        id: 5,
        name: 'Paulo',
        email: 'paulo@mail.com'
    },
    {
        id: 6,
        name: 'Joana',
        email: 'joana@mail.com'
    }
]

const UsersQuery = {
    all: {
        type: new GraphQLList(UsersType),
        resolve: (_, data) => {
            return UserModel;
        }
    },
    findById: {
        type: UsersType,
        args: {
            id: {
                type: GraphQLInt
            }
        },
        resolve: (_, { id }) => {
            let User = UserModel.find(u => u.id === id);
            return User;
        }
    }
}

module.exports = UsersQuery;
