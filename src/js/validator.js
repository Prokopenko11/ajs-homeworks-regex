export default class Validator {
  static validateUsername(username) {
    const validPattern = /^[a-zA-Z][a-zA-Z0-9-_]*[a-zA-Z]$/;
    const digitsInARow = /\d{4,}/;

    if (!validPattern.test(username) || digitsInARow.test(username)) {
      return false;
    }

    return true;
  }
}
