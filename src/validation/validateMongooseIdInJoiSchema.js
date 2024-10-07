import mongoose from 'mongoose';

export const validateMongooseIdInJoiSchema = (v, h) => {
  const result = mongoose.isValidObjectId(v);

  if (!result) return h.error('any.invalid');

  return result;
};
