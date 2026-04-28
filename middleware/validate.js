export const validate = (schema) => (req, res, next) => {
  try {
    const result = schema.parse({
      body: req.body,
      query: req.query,
      params: req.params,
    });

    req.validated = result;
    next();
  } catch (err) {
    res.status(400).json({
      errors: err.issues,
    });
  }
};