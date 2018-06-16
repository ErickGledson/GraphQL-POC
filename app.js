const restify = require('restify');
const { graphqlRestify, graphiqlRestify } =  require('apollo-server-restify');
const Schema = require('./graphql/Schema');

const SERVER_PORT = 3000;
const GRAPHQL_OPTIONS = { schema: Schema };

const SERVER = restify.createServer({ title: 'Apollo Server' });

SERVER.use(restify.plugins.bodyParser());
SERVER.use(restify.plugins.queryParser());

SERVER.post('/graphql', graphqlRestify(GRAPHQL_OPTIONS));
SERVER.get('/graphql', graphqlRestify(GRAPHQL_OPTIONS));
SERVER.get('/igraphql', graphiqlRestify({ endpointURL: '/graphql' }));

SERVER.listen(SERVER_PORT, () => console.log(`SERVER IS ON. PORT ${SERVER_PORT}`));