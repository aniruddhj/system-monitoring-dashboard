var express = require("express");
var router = express.Router();
const cors = require("cors");
const app = express();

app.use(cors());

/* GET users listing. */
router.get("/", function(req, res, next) {
  res.locals.connection.query(
    "SELECT * FROM storage ORDER BY id DESC LIMIT 1",
    (error, results, fields) => {
      if (error) throw erorr;
      res.send(JSON.stringify(results));
    }
  );
});

module.exports = router;
