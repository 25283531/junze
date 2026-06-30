export const onRequest = async (context, next) => {
  context.locals.env = context.env;
  return next();
};
