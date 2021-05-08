const {is_primitive, is_array, is_object} = require("../utils/types");
const {append, list, is_list_empty} = require("../utils/array");
const {get_primitive_key, get_array_key, get_object_key} = require("../utils/keys");

function flatten_primitive(primitive, key, acc) {
  const key1 = get_primitive_key(key);
  return append(acc, [[key1, primitive]]);
}

function flatten_array(array, index, key, _object_key_separator, array_index_left_char, array_index_right_char, acc) {
  const [head, tail] = list(array);
  if (is_list_empty(head)) {
    return acc;
  }
  const index1 = index + 1;
  const key1 = get_array_key(key, index, array_index_left_char, array_index_right_char);
  const acc1 = flatten_proxy(head, key1, _object_key_separator, array_index_left_char, array_index_right_char, acc);
  return flatten_array(tail, index1, key, _object_key_separator, array_index_left_char, array_index_right_char, acc1)
}

function flatten_object_entries(entries, key, object_key_separator, array_index_left_char, array_index_right_char, acc) {
  const [entry, entries_tail] = list(entries);
  if (is_list_empty(entry)) {
    return acc;
  }
  const [entry_key, entry_val] = entry;
  const key1 = key + object_key_separator + entry_key;
  const acc1 = flatten_proxy(entry_val, key1, object_key_separator, array_index_left_char, array_index_right_char, acc);
  return flatten_object_entries(entries_tail, key, object_key_separator, array_index_left_char, array_index_right_char, acc1);
}

function flatten_object(object, key, object_key_separator, array_index_left_char, array_index_right_char, acc) {
  const entries = Object.entries(object);
  const key1 = get_object_key(key);
  return flatten_object_entries(entries, key1, object_key_separator, array_index_left_char, array_index_right_char, acc);
}

function flatten_proxy(value, key, object_key_separator, array_index_left_char, array_index_right_char, acc) {
  if (is_primitive(value)) {
    return flatten_primitive(value, key, acc);
  } else if (is_array(value)) {
    return flatten_array(value, 0, key, object_key_separator, array_index_left_char, array_index_right_char, acc);
  } else if (is_object(value)) {
    return flatten_object(value, key, object_key_separator, array_index_left_char, array_index_right_char, acc);
  }
  return [];
}

exports.flatten_proxy = flatten_proxy;
