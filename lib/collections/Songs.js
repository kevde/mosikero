import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

export let Songs = new Mongo.Collection('Songs');
Songs.schema = new SimpleSchema({
    title: { type: String },
    artists: { type: [String] },
    userId: { type: String, regEx: SimpleSchema.RegEx.Id, optional: true }
});
