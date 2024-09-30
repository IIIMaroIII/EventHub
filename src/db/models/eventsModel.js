import mongoose, { model, Schema } from 'mongoose';
import { CONSTANTS } from '../../constants/constants.js';

const eventSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    eventDate: {
      type: Date,
      default: new Date(),
    },
    participationsID: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users',
        default: [],
        validate: {
          validator: (v) => mongoose.isValidObjectId(v),
          message: ({ value }) =>
            `${value} ${CONSTANTS.MESSAGES.ERRORS.MONGOOSE_ID}`,
        },
      },
    ],
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export const eventsModel = model('events', eventSchema);
