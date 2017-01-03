const user = require('./user');
const article = require('./article');
module.exports = function* (router) {
  yield user.init(router);
  article.init(router);
}
