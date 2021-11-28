const newsRouter = require('./newsRoute');
const siteRouter = require('./siteRoute');
const coursesRouter = require('./courses');
const meRouter = require('./me');
function route(app) {
  app.use('/news', newsRouter);
  app.use('/me', meRouter);
  app.use('/courses', coursesRouter);
  app.use('/', siteRouter);
}

module.exports = route;
