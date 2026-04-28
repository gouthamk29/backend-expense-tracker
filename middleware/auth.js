import jwt from "jsonwebtoken"


export const auth = (req, res, next) => {
  const authHeader = req.header("Authorization");
  console.log(authHeader)
  if (!authHeader) return res.status(401).json({ msg: "No token" });

   const token = authHeader.startsWith("Bearer ")
    ? authHeader.split(" ")[1]
    : authHeader;


  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log('decoded',decoded)
    req.user = decoded.id;
    next();
  } catch (err) {
    res.status(401).json({ msg: "Invalid token" });
  }
};