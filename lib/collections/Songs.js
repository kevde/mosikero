import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

export let Songs = new Mongo.Collection('Songs');
Songs.schema = new SimpleSchema({
    title: { type: String },
    artists: { type: [String] },
    lyrics: { type: String }
});
