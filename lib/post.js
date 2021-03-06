/**
 * Posts schema
 * @type {SimpleSchema}
 */

Posts.schema = new SimpleSchema({
    body: {
        type: String,
        optional: true,
        max: Meteor.settings.public.HTMLBodySize || 2000000,

        editableBy: ["member", "admin"],
        autoform: {
            rows: 10
        }
    }
});

Posts.attachSchema(Posts.schema);