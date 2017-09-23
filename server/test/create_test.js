const assert = require("assert");
const Title = require("../model/model");

describe('Creating records', () => {
    it('creates an input', (done) => {
        const title = new Title ({
            category: "jabber", 
            title: "test title 1", 
            description: "test description 1"
        });

        title.save()
            .then(() => Title.findOne({ _id: title._id }))
            .then((record) => {
                console.log(record);
                assert( record.category === "jabber" );
                done();
            });
    });
});