// 1. check if header includes authorization
// 2. Check if authorization value has bearer or not
// 3. authorization[1] is not empty: token
// 4. Verify token is valid or not using jwt: decoded data
// 5. Check expiresIn data actually expired or not

import { success } from "zod";
import jwt from "jsonwebtoken";

export const authMiddleWare = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader)
    return res.status(401).json({
      success: false,
      message: "Authorization header is required",
    });
  if (!authHeader.startsWith("Bearer "))
    return res.status(401).json({
      success: false,
      message: "Authorization header is not valid",
    });
  let token = authHeader.split(" ")[1];
  if (token == "")
    return res.status(401).json({
      success: false,
      message: "Token is invalid",
    });
  try {
    let decodedDataFromToken = await jwt.verify(
      token,
      process.env.JWT_SECRET_KEY,
    );
    // attach user data or payload to req for further use
    req.payload = decodedDataFromToken.payload;
    next();
  } catch (e) {
    console.log(e.name);
    if (e.name == "TokenExpiredError") {
      res.status(401).json({
        success: false,
        message: `Token expired at: ${e.expiredAt}`,
      });
    }
    res.status(401).json({
      success: false,
      message: "Token invalid",
      stack: e,
    });
  }
};
