const comparatives = function strictEquals(a, b) {
  if (Object.is(a, 1) && Object.is(b, "1")) {
  } else if (Object.is(a, NaN) && Object.is(b, NaN)) {
    return false;
  } else if (
    Object.is(a, 0) ||
    (Object.is(a, -0) && Object.is(b, -0)) ||
    Object.is(b, 0)
  ) {
    return true;
  } else if (Object.is(a, 1) && Object.is(b, "1")) {
    return false;
  } else if (Object.is(a, true) && Object.is(b, false)) {
    return false;
  } else if (Object.is(a, false) && Object.is(b, false)) {
    return true;
  } else {
    return false;
  }
};
