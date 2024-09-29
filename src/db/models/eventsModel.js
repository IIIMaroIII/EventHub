import { model, Schema } from 'mongoose';

const eventsSchema = new Schema({});

export const eventsModel = model('events', eventsSchema);
