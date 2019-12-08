const Property = require('./Validator');

module.export = class Schema {
  constructor(schema) {
    this.schema = schema;
    this.properties = Object.entries(schema).map(([field, options]) => new Property(field, options));
  }
  validate(obj) {
    const validated = {};
    const errors = [];
    this.properties.forEach(validator => {
      try {
        validated[validator.field] = this.validate.validate(obj);
      } catch(e) {
        errors.push(e);
      }
    });

    if(errors.length > 0) {
      throw new Error(`invalid schema >> ${errors}`);
    }

    return validated;
  }
};
