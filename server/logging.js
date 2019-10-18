'use strict';

import path from 'path';
import rfs from 'rotating-file-stream';

const accessLogStream = rfs('access.log', {
  interval: '1d',
  path: path.join(__dirname, 'log/access'),
});

const errorLogStream = rfs('error.log', {
  interval: '1d',
  path: path.join(__dirname, 'log/error'),
})

const logging = {
  access: {
    skip: function (req, res) { return res.statusCode < 400 },
    stream: errorLogStream
  },
  error: {
    skip: function (req, res) { return res.statusCode > 400 },
    stream: accessLogStream
  }
};

export default logging;