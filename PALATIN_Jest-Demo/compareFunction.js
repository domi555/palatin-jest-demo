const NO_TYPEMATCH = 'no typematch';
module.exports = {
  NO_TYPEMATCH,
  /**
     Compares two parameters a and b and @returns a string that represents the compare result.

     If a and b are equal "=" is returned. 
     If a is bigger than b ">" is returned, else "<" is returned.
     
     If both are of the type number, then the values are compared.
     If both are of the type String, then the string values are compared.

     If both are of the type Array, then the length of the arrays are compared.

     If both are of the type Objects, then the value of the property "value" is compared.

     In other cases the parameters are converted to a string (toString()) and 
	 then both strings are compared.
     */

  compareEnhanced(a, b) {
    // 1
    if (!a) {
      return 'no a';
    }
    if (!b) {
      return 'no b';
    }

    // 2
    if (typeof a == 'number') {
      if (typeof b != 'number') {
        return NO_TYPEMATCH;
      }
      if (a == b) {
        return '=';
      }
      if (a > b) {
        return '>';
      } else {
        return '<';
      }
    }

    // 3
    if (typeof a == 'string') {
      if (typeof b != 'string') {
        return NO_TYPEMATCH;
      }
      if (a == b) {
        return '=';
      }
      if (a > b) {
        return '>';
      } else {
        return '<';
      }
    }

    // 4
    if (a instanceof Array) {
      if (!(b instanceof Array)) {
        return NO_TYPEMATCH;
      }
      if (a.length == b.length) {
        return '=';
      }
      if (a.length > b.length) {
        return '>';
      } else {
        return '<';
      }
    }

    // 5
    if (typeof a == 'object') {
      if (typeof b != 'object') {
        return NO_TYPEMATCH;
      }
      if (a.value == b.value) {
        return '=';
      }
      if (a.value > b.value) {
        return '>';
      } else {
        return '<';
      }
    }

    // 6
    if (a.toString() == b.toString()) {
      return '=';
    } else if (a.toString() > b.toString()) {
      return '>';
    }
    return '<';
  },
};
