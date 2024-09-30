const CreateResponseObj = (status, message, data = null) => {
  return { status, message, data };
};

export default CreateResponseObj;
