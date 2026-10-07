const roleBasedAuth = (...allowedRoles) => (req, res, next) => {
  if (!req.user) {
    return res.status(401).send("User not authenticated.");
  }

  const userRoles = req.user.roles || req.user.role || [];
  const rolesList = Array.isArray(userRoles) ? userRoles : [userRoles];

  const hasRole = allowedRoles.some((role) =>
    rolesList.includes(role) || rolesList.includes("ADMIN") || rolesList.includes("SUPER_ADMIN")
  );

  if (hasRole) return next();

  return res.status(403).send("Access denied. Insufficient permissions.");
};

export default roleBasedAuth;