// In case of no members,additional methods or dependencies, use a FUNCTIONAL MIDDLEWARE

export function userLogger(req, res, next) {
  console.log(`FUNCTIONAL | Request...`);
  next();
};
