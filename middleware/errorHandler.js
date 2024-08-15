const { constents } = require('../constents');

const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;

  switch (statusCode) {
    case constents.VALIDATION_ERROR:
      res.json({
        title: 'Validation failed',
        message: err.message,
        stackTrace: err.stack,
      });
      break;
    case constents.UNAUTHORIZED:
      res.json({
        title: 'Unauthorized ',
        message: err.message,
        stackTrace: err.stack,
      });
      break;
    case constents.FORBIDDEN:
      res.json({
        title: 'Forbiden ',
        message: err.message,
        stackTrace: err.stack,
      });
      break;
    case constents.NOT_FOUND:
      res.json({
        title: 'Not found ',
        message: err.message,
        stackTrace: err.stack,
      });
      break;
    default:
      console.log('no error all good');
      break;
  }
};

module.exports = errorHandler;
