'use strict';

const shim = require('fabric-shim');

const Chaincode = class {

    async Init(stub){}

    async Invoke(stub){}
};

shim.start(new Chaincode());