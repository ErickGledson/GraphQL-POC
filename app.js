const restify = require('restify');
const { graphqlRestify, graphiqlRestify } =  require('apollo-server-restify');
const Schema = require('./graphql/Schema');

const SERVER_PORT = 3000;
const GRAPHQL_OPTIONS = { schema: Schema };

const server = restify.createServer({ title: 'Apollo Server' });

server.use(restify.plugins.bodyParser());
server.use(restify.plugins.queryParser());

server.post('/graphql', graphqlRestify(GRAPHQL_OPTIONS));
server.get('/graphql', graphqlRestify(GRAPHQL_OPTIONS));
server.get('/igraphql', graphiqlRestify({ endpointURL: '/graphql' }));

server.listen(SERVER_PORT, () => console.log(`SERVER IS ON. PORT ${SERVER_PORT}`));