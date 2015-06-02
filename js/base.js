function isValidPassword(password) {
  var reChar = /[A-Z]/;
  var reDigit = /\d/;
  return reChar.test(password) && reDigit.test(password);
};

function isEmail(email) {
  var re = /[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/igm;
  return re.test(email);
};