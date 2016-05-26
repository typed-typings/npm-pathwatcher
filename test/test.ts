import tape = require('blue-tape');

import PathWatcher = require('pathwatcher');

tape('exported classes', (test) => {
  test.plan(2);
  test.assert(new PathWatcher.File('') instanceof PathWatcher.File);
  test.assert(new PathWatcher.Directory('') instanceof PathWatcher.Directory);
});
