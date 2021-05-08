function is_string_empty(string) {
  return "string" === typeof string && 0 === string.length;
}

exports.is_string_empty = is_string_empty;
