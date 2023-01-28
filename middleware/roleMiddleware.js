// const jwt = require("jsonwebtoken");

// exports.roleMiddleware = (req, res, next) => {
//   const token = req.headers.authorization ?? null;

//   if (!token) return res.send(" authorization token is required");

//   try {
//     const payload = jwt.verify(token, process.env.JWT_SECRET);

//     if (!payload) return res.send("Unauthorized");

//     if (!payload.roles.includes("Admin")) {
//       return res.status(403).send("Permission denied");
//     }
//     next();
//   } catch (error) {
//     throw res.send(error);
//   }
// };
const jwt = require("jsonwebtoken");

exports.roleMiddleware = (...allowedRoles) => {
    return (req, res, next) => {    
        
    const token = req.headers.authorization ?? null;
    if (!token) return res.send("Authorization token is required");

    try {
      const payload = jwt.verify(token, process.env.JWT_SECRET);

      if (!payload) return res.send("Unauthorized");

      if (!req?.roles) return res.sendStatus(401);
      const rolesArray = [...allowedRoles];
      const result = req.roles
        .map((role) => rolesArray.includes(role))
          .find((val) => val === true);
        console.log(rolesArray)
      if (!result) return res.sendStatus(401);
      next();
    } catch (error) {
      throw res.send({ error });
    }
  };
};
