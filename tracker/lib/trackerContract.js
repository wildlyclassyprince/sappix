'use strict';

const shim = require('fabric-shim');

const Chaincode = class {

    async Init(stub){
        console.info("========== START: Initialize Ledger ==========");

        const documents = [
            {
                id: "first-document",
                name: "First Document"
            }
        ];

        await stub.putState(documents[0].id, Buffer.from(JSON.stringify(documents[0])))

        console.info("========== END: Initialize Ledger ==========");
    };

    async Invoke(stub){}
};

shim.start(new Chaincode());