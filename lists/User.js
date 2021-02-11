const { Text, Checkbox, Password } = require('@keystonejs/fields')

const userFields = {
  fields: {
    name: {
      type: Text,
      isRequire: true,
    },
    email: {
      type: Text,
      isRequire: true,
      isUnique: true,
    },
    password: {
      type: Password,
      isRequire: true,
    },
    isAdmin: {
      type: Checkbox,
      isRequire: true,
    },
  },
}

module.exports = userFields
