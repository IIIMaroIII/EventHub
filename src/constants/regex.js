export const regex = {
  fullName: /^[A-Z][a-z]+\s[A-Z][a-z]+$/,
  email: /^\S+@\S+\.\S+$/,
  birthDate: /^\d{4}-\d{2}-\d{2}$/,
  password:
    /^(?=.*[A-Za-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!#$%^&*<>?/\|[\]{}"`;:]).{8,}$/,
  eventDate: /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d{1,3})?Z$/,
};
