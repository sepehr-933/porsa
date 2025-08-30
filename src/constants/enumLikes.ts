// declare only constant objects here that are useful to infer types and use enum like union values from one place.
// this prevents miswriting the value or ts errors

export const UserRoles = {
  USER: "user",
  ADMIN: "admin",
} as const;
