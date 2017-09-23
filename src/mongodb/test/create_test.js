const assert = require("assert");
const Title = require("../model/model");

describe('Creating records', () => {
    it('creates an input', (done) => {
        const title = new Title ({
            type: "jabber", 
            title: "test title 1", 
            description: "test description 1"
        });

        title.save()
            .then( title.findOne({ _id: title._id }))
            .then((record) => {
                assert( record.type === "jabber" );
                done();
            });
    });
});