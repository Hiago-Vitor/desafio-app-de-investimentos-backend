module.exports = (err, _req, res, _next) => {
    if (err.status) {
      return res.status(err.status).json({ message: err.message, code: err.code });
    }
  
    ;
    return res.status(500).json({ message: err.message });
  };
