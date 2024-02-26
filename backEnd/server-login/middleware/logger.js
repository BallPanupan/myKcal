function logger(req, res, next) {
  const clientIP = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  console.log(`[${new Date().toISOString()}] ${clientIP} - ${req.method} ${req.url}`);
  next();
}

module.exports = logger