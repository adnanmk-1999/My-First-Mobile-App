const validation = {
  email: {
    presence: {
      message: '^Please enter your email address',
    },
    email: {
      message: '^Please enter a valid email address',
    },
  },
  username: {
    presence: {
      message: '^Please enter a username',
    },
    length: {
      minimum: 6,
      message: '^your username must have atleast 6 characters',
    },
  },
  name: {
    presence: {
      message: '^Please enter your name',
    },
    format: {
      pattern: /^[a-z A-Z]*[a-z A-Z]$/,
      message: '^Your name can contain only letters',
    },
  },
  password: {
    presence: {
      message: '^Please enter a password',
    },
    length: {
      minimum: 5,
      message: '^Your password must be at least 5 characters',
    },
  },
  contact: {
    presence: {
      message: '^Please enter a phone number',
    },
    length: {
      minimum: 10,
      maximum: 10,
      message: '^Your number must have 10 digits',
    },
  },
};

export default validation;
