/* eslint consistent-return:0 */

const express = require('express');
const logger = require('./logger');

const argv = require('minimist')(process.argv.slice(2));
const setup = require('./middlewares/frontendMiddleware');
const isDev = process.env.NODE_ENV !== 'production';
const ngrok = (isDev && process.env.ENABLE_TUNNEL) || argv.tunnel ? require('ngrok') : false;
const resolve = require('path').resolve;
const app = express();

const sendmail = require('sendmail')({
  logger: {
    debug: console.log,
    info: console.info,
    warn: console.warn,
    error: console.error
  }
})
const bodyParser = require('body-parser');
const sm = require('sitemap');
const compression = require('compression');

app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const sitemap = sm.createSitemap({
  hostname: 'http://alohabrothers.surf',
  cacheTime: 600000,
  urls: [
    { url: '/rates', changefreq: 'monthly', priority: 0.9 },
    { url: '/contact', changefreq: 'monthly', priority: 0.9 },
    { url: '/about', changefreq: 'monthly', priority: 0.7 },
  ]
});

app.get('/sitemap.xml', function(req, res) {
  sitemap.toXML( function (err, xml) {
      if (err) {
        return res.status(500).end();
      }
      res.header('Content-Type', 'application/xml');
      res.send( xml );
  });
});



// If you need a backend, e.g. an API, add your custom backend-specific middleware here
// app.use('/api', myApi);

function handleSendMail(req, res){
  console.log('req.body', req.body);


  sendmail({
      from: req.body.contactEmail,
      to: 'victoriakdunham@gmail.com',
      subject: 'Silicon Beach Guitar Lessons',
      html: '<p>name: ' + req.body.contactName +'</p>' + '<p>email: ' + req.body.contactEmail + '</p>' + '<p>number: ' + req.body.contactPhone +'</p>' + '<p>message: ' + req.body.contactMessage + '</p>'
    }, function(err, reply) {
      console.log(err && err.stack);
      if (reply.indexOf('221') >= 0){
        res.status(200).send('Message sent');
      }
      console.dir(reply);
  });
}

app.use('/contactus', handleSendMail);

// In production we need to pass these values in instead of relying on webpack
setup(app, {
  outputPath: resolve(process.cwd(), 'build'),
  publicPath: '/',
});

// get the intended host and port number, use localhost and port 3000 if not provided
const customHost = argv.host || process.env.HOST;
const host = customHost || null; // Let http.Server use its default IPv6/4 host
const prettyHost = customHost || 'localhost';

const port = argv.port || process.env.PORT || 3000;

// Start your app.
app.listen(port, host, (err) => {
  if (err) {
    return logger.error(err.message);
  }

  // Connect to ngrok in dev mode
  if (ngrok) {
    ngrok.connect(port, (innerErr, url) => {
      if (innerErr) {
        return logger.error(innerErr);
      }

      logger.appStarted(port, prettyHost, url);
    });
  } else {
    logger.appStarted(port, prettyHost);
  }
});
