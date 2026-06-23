export const checkXRoleHeaderMiddleWare = (req, res, next) => {
  let xRole = req.headers["xrole"];
  console.log("header: ", xRole);
  if (!xRole) {
    return res.status(400).json({
      error: "xrole header must be present",
    });
  }
  next();
};

export const checkAPIKeyInHeader = (req, res, next) => {
  let APIKey = req.headers["x-api-key"];
  if (!APIKey)
    return res.status(400).json({
      error: "API key not found in header",
    });
  if (APIKey != "NodeJs-ApiKey")
    return res.status(400).json({
      error: "API key invalid",
    });
  next();
};

