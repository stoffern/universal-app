var graphqlHTTP = require('koa-graphql');
var convert = require('koa-convert');

module.exports = async (router, app, config) => {
  var graphql = 
    convert(
      graphqlHTTP((request, context, all) => {
        return {
          schema: require(process.cwd() + '/schema/index.js'),
          graphiql: true,
        };
      })
    )
  router.post( 'graphql', graphql);
  router.get( 'graphql', graphql);
};
