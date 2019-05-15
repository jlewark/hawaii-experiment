module.exports = {
  search: function search(req, res, next) {
    res.json({search: "results"});
  },
  get: function get(req, res, next) {
    res.json({get: "results"});
  },
  put: function put(req, res, next) {
    res.json({put: "results"});
  },
  del: function del(req, res, next) {
    res.json({del: "results"});
  }
};