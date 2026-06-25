export const addRequestTimestamp = (req, res, next) => {
  req.requestTimeStamp - new Date().toISOString();
  console.log("request time stamp: ", req.requestTimeStamp);
  next();
};
export const customError = (err, req, res, next) => {
  res.status(500).json({
    message: "Something went wrong",
    error: err.message,
  });
};

export const customSuccessMiddleware = (dataObj, req, res, next) => {
  res.status(200).json({
    message: dataObj.msg,
    data: dataObj.data,
    trace: dataObj.trace,
  });
};
