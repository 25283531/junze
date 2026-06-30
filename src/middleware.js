export const onRequest = async (context, next) => {
  context.locals.runtime = { env: context.env };
  return next();
};
