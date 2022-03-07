import Validation from 'validate.js';

import validation from './validation';

function validate(fieldName, value) {
  // Validate.js validates your values as an object
  // e.g. var form = {email: 'email@example.com'}
  // Line 9-10 creates an object based on the field name and field value
  var formValues = {};
  formValues[fieldName] = value;
  // Line 18-19 creates an temporary form with the validation fields
  // e.g. var constraint = {
  //                        email: {
  //                         presence: {
  //                          message: 'Email is blank'
  //                         }
  //                       }
  var constraint = validation[fieldName];

  //If value is an empty string, message from "presence" will be stored in result
  var result = Validation({}, {[fieldName]: constraint});
  if (value != '') {
    //If value is not empty, then message from "fieldname" will be stored in the result
    result = Validation(formValues, {[fieldName]: constraint});
  }

  // If there is an error message, return it!
  if (result) {
    // Return only the field error message if there are multiple
    return result[fieldName][0];
  }

  return null;
}

export default validate;
