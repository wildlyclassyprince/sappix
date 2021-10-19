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

    async Invoke(stub){
        const key = "first-document";
        const document = await stub.getState(key);
        
        return shim.success(Buffer.from(document.toString()));
    };
};

shim.start(new Chaincode());