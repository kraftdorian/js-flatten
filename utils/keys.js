const {root_primitive_type_keys, root_types_map} = require("../constants");
const {is_string_empty} = require("./string");

function get_primitive_key(key) {
  if (is_string_empty(key)) {
    return root_types_map.get(root_primitive_type_keys.primitive);
  }
  return key;
}

function get_array_key(key, index, left_char, right_char) {
  const index_string = left_char + index.toString() + right_char;
  if (is_string_empty(key)) {
    return root_types_map.get(root_primitive_type_keys.array) + index_string;
  }
  return key + index_string;
}

function get_object_key(key) {
  if (is_string_empty(key)) {
    return root_types_map.get(root_primitive_type_keys.object);
  }
  return key;
}

exports.get_primitive_key = get_primitive_key;
exports.get_array_key = get_array_key;
exports.get_object_key = get_object_key;
