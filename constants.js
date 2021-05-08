const root_primitive_type_keys = {
  primitive: "primitive",
  array: "array",
  object: "object"
}

const root_types_map = new Map(
  Object
    .values(root_primitive_type_keys)
    .map(type_key => [type_key, "FlatRoot" + type_key[0].toUpperCase() + type_key.slice(1)])
);

exports.root_primitive_type_keys = root_primitive_type_keys;
exports.root_types_map = root_types_map;
