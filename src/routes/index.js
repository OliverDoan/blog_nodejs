const newsRouter = require('./newsRoute');
const siteRouter = require('./siteRoute');
const coursesRouter = require('./courses');
function route(app) {
  app.use('/news', newsRouter);
  app.use('/', siteRouter);
  app.use('/courses', coursesRouter);
}

module.exports = route;
