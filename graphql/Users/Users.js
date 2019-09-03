const {
  GraphQLInt,
  GraphQLList,
  GraphQLString,
  GraphQLNonNull,
  GraphQLEnumType
} = require('graphql');

const { UsersType, UserInputType } = require('./UsersType');

// https://www.json-generator.com/
// [
//     '{{repeat(10, 10)}}',
//     {
//       id: '{{ index() }}',
//       name: '{{firstName()}} {{surname()}}',
//       email: '{{email()}}',
//       orders: [
//         '{{repeat(3)}}',
//         {
//           id: '{{index()}}',
//           type: '{{random("pacote", "hotel", "atividade")}}',
//           amount: '{{ floating(100, 1000, 2, "0,00") }}'
//         }
//       ]
//     }
//   ]

const UserModel = [
  {
    "id": 0,
    "name": "Figueroa Cervantes",
    "email": "figueroacervantes@imaginart.com",
    "orders": [
      {
        "id": 0,
        "type": "pacote",
        "amount": 413
      },
      {
        "id": 1,
        "type": "hotel",
        "amount": 687
      },
      {
        "id": 2,
        "type": "hotel",
        "amount": 563
      }
    ]
  },
  {
    "id": 1,
    "name": "Joann Castaneda",
    "email": "joanncastaneda@imaginart.com",
    "orders": [
      {
        "id": 0,
        "type": "pacote",
        "amount": 437
      },
      {
        "id": 1,
        "type": "hotel",
        "amount": 930
      },
      {
        "id": 2,
        "type": "hotel",
        "amount": 763
      }
    ]
  },
  {
    "id": 2,
    "name": "Bowen Grimes",
    "email": "bowengrimes@imaginart.com",
    "orders": [
      {
        "id": 0,
        "type": "hotel",
        "amount": 135
      },
      {
        "id": 1,
        "type": "atividade",
        "amount": 852
      },
      {
        "id": 2,
        "type": "pacote",
        "amount": 933
      }
    ]
  },
  {
    "id": 3,
    "name": "Mandy Kent",
    "email": "mandykent@imaginart.com",
    "orders": [
      {
        "id": 0,
        "type": "hotel",
        "amount": 611
      },
      {
        "id": 1,
        "type": "hotel",
        "amount": 556
      },
      {
        "id": 2,
        "type": "hotel",
        "amount": 273
      }
    ]
  },
  {
    "id": 4,
    "name": "Stein Solomon",
    "email": "steinsolomon@imaginart.com",
    "orders": [
      {
        "id": 0,
        "type": "atividade",
        "amount": 240
      },
      {
        "id": 1,
        "type": "atividade",
        "amount": 783
      },
      {
        "id": 2,
        "type": "pacote",
        "amount": 244
      }
    ]
  },
  {
    "id": 5,
    "name": "Rita Charles",
    "email": "ritacharles@imaginart.com",
    "orders": [
      {
        "id": 0,
        "type": "hotel",
        "amount": 562
      },
      {
        "id": 1,
        "type": "pacote",
        "amount": 883
      },
      {
        "id": 2,
        "type": "hotel",
        "amount": 382
      }
    ]
  },
  {
    "id": 6,
    "name": "Tamara Noble",
    "email": "tamaranoble@imaginart.com",
    "orders": [
      {
        "id": 0,
        "type": "hotel",
        "amount": 556
      },
      {
        "id": 1,
        "type": "atividade",
        "amount": 725
      },
      {
        "id": 2,
        "type": "atividade",
        "amount": 735
      }
    ]
  },
  {
    "id": 7,
    "name": "Morris Bonner",
    "email": "morrisbonner@imaginart.com",
    "orders": [
      {
        "id": 0,
        "type": "hotel",
        "amount": 898
      },
      {
        "id": 1,
        "type": "pacote",
        "amount": 698
      },
      {
        "id": 2,
        "type": "hotel",
        "amount": 547
      }
    ]
  },
  {
    "id": 8,
    "name": "Mona Elliott",
    "email": "monaelliott@imaginart.com",
    "orders": [
      {
        "id": 0,
        "type": "atividade",
        "amount": 275
      },
      {
        "id": 1,
        "type": "atividade",
        "amount": 228
      },
      {
        "id": 2,
        "type": "pacote",
        "amount": 501
      }
    ]
  },
  {
    "id": 9,
    "name": "Craft Medina",
    "email": "craftmedina@imaginart.com",
    "orders": [
      {
        "id": 0,
        "type": "pacote",
        "amount": 884
      },
      {
        "id": 1,
        "type": "hotel",
        "amount": 334
      },
      {
        "id": 2,
        "type": "hotel",
        "amount": 499
      }
    ]
  }
]

const generateNewUserId = () => (Math.max(...UserModel.map(u => u.id)) || 0) + 1;

const UsersQuery = {
  usersAmount: {
    type: GraphQLInt,
    resolve: () => UserModel.length,
  },
  users: {
    type: new GraphQLList(UsersType),
    resolve: (_, { name, email, orderType }) => UserModel.filter(u =>
      (!name || u.name.includes(name))
      && (!email || (u.email && u.email.includes(email)))
      && (!orderType || u.orders.some(o => o.type.includes(orderType)))
    ),
    args: {
      name: {
        type: GraphQLString,
      },
      email: {
        type: GraphQLString,
      },
      orderType: {
        type: new GraphQLEnumType({
          name: 'OrderTypeEnum',
          values: {
            HOTEL: {
              value: "hotel",
            },
            PACOTE: {
              value: "pacote",
            },
            ATIVIDADE: {
              value: "atividade",
            },
          },
        }),
      },
    }
  },
  user: {
    type: UsersType,
    args: {
      id: {
        type: new GraphQLNonNull(GraphQLInt),
      }
    },
    resolve: (_, { id }) => UserModel.find(u => u.id === id),
  }
};

const UsersMutation = {
  createUser: {
    type: UsersType,
    args: {
      user: {
        type: UserInputType
      }  
    },
    resolve: (_, user) => {
      user.id = generateNewUserId();
      // user.orders = [];
      UserModel.push(user);
      return user;
    }
  }
};

module.exports = { UsersQuery, UsersMutation };
