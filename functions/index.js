const { onRequest } = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");

exports.countries = onRequest((req, res) => {
  logger.info("getCountriesRequest", { structuredData: true });
  res.send([
    { name: "Mexico", code: "+52" },
    { name: "Colombia", code: "+57" },
  ]);
});
