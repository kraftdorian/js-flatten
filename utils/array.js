function append(array1, array2) {
  return [...array1, ...array2];
}

function list(array) {
  return [
    array[0],
    array.slice(1)
  ];
}

function is_list_empty(list_head) {
  return undefined === list_head;
}

exports.append = append;
exports.list = list;
exports.is_list_empty = is_list_empty;
