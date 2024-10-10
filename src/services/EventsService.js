import CONSTANTS from '../constants/index.js';
import { eventsModel } from '../db/models/eventsModel.js';
import { HttpError } from '../helpers/HttpError.js';
import { structureAggrResponse } from '../utils/structureAggrResponse.js';

const { ERRORS } = CONSTANTS.MESSAGES;

const getAllEvents = async (query) => {
  const { page, perPage, sortBy, sortOrder } = query;

  const skip = (page - 1) * perPage;

  const res = await eventsModel.aggregate([
    {
      $facet: {
        data: [{ $skip: skip }, { $limit: perPage }],
        total: [{ $count: 'totalDocumentsInDB' }],
      },
    },
    {
      $project: {
        data: 1,
        quantityOfDocuments: { $arrayElemAt: ['$total.totalDocumentsInDB', 0] },
        page: { $literal: page },
        perPage: { $literal: perPage },
      },
    },
  ]);

  if (!res || res.length === 0) throw HttpError(500);

  return structureAggrResponse(res);
};

/*
db.artwork.aggregate( [
  {
    $facet: {
      "categorizedByTags": [
        { $unwind: "$tags" },
        { $sortByCount: "$tags" }
      ],
      "categorizedByPrice": [
        // Filter out documents without a price e.g., _id: 7
        { $match: { price: { $exists: 1 } } },
        {
          $bucket: {
            groupBy: "$price",
            boundaries: [  0, 150, 200, 300, 400 ],
            default: "Other",
            output: {
              "count": { $sum: 1 },
              "titles": { $push: "$title" }
            }
          }
        }
      ],
      "categorizedByYears(Auto)": [
        {
          $bucketAuto: {
            groupBy: "$year",
            buckets: 4
          }
        }
      ]
    }
  }
])

*/

const addEvent = async (data) => {
  const result = await eventsModel.create(data);

  return result;
};

const findEventById = async (eventId) => {
  const result = await eventsModel.findById(eventId);

  if (!result)
    throw HttpError(404, `The event ${ERRORS.NOT_FOUND_BY_ID} ${eventId}`);

  return result;
};

const upsertEvent = async (filter, data, options = {}) => {
  const result = await eventsModel.findOneAndUpdate(filter, data, {
    includeResultMetadata: true,
    ...options,
  });
  console.log(result);

  if (!result || !result.value) return null;

  return {
    data: result.value,
    isNew: !result?.lastErrorObject?.updatedExisting,
  };
};

const deleteEvent = async (id) => eventsModel.findOneAndDelete(id);

export const EventsService = {
  getAllEvents,
  addEvent,
  findEventById,
  deleteEvent,
  upsertEvent,
};
