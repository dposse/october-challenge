Before running:
```npm install```
```cd client/ && npm install```

Run backend tests with

```mocha test/challengeBackendTests.js --exit```
don't think --exit should be required, unsure why test stays running with ```mocha test/challengeBackendTests.js``` and not using the ```--watch``` flag. Not important right now.

Backend express server in root folder, run with

```node server.js```

Front end react client in ```client/``` folder, run with 

```cd client/ && npm start```