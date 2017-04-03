module.exports = (err, req, res, next) => {
  console.log('Error temporary logged from error handler: ', err);
  if (res.headersSent) {return next(err);}
  return res
    .status(err.statusCode || 500)
    .send({
      message: err.message,
      code: err.code
    });
};
