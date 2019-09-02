const {
    GraphQLInt,
    GraphQLList
} = require('graphql');

const UsersType = require('./UsersType');

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
            const User = UserModel.find(u => u.id === id);
            return User;
        }
    }
}

module.exports = UsersQuery;
