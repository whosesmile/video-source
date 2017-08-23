import os
if 'NODE_ENV' in os.environ:
  print os.environ['NODE_ENV']
else:
  print 'undefined'
