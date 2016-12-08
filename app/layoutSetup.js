const path = require('path');
const handlebars = require('express-handlebars');

module.exports = app => {
  const hbs = handlebars.create({
    extname: '.hbs',
    compilerOptions: { preventIndent: true },
    partialsDir: path.join(__dirname, '../../app/views/partials'),
    defaultLayout: path.join(__dirname, '../../app/views/layouts/layout'),
  });

  app.engine('hbs', hbs.engine);
  app.set('view engine', 'hbs');
  app.set('views', path.join(__dirname, '../../app/views'));
}
