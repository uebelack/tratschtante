/* istanbul ignore file */

import tratschtante from "./index.js";

console.log(
  "--- MODERN ------------------------------------------------------------",
);
let logger = tratschtante({ level: "trace" });
logger.critical("Exercitation qui sint non aliquip minim officia.");
logger.error(
  "Laboris aliquip sunt cillum officia sit aliqua officia id eiusmod sint irure.",
);
logger.warning("Veniam consequat ullamco est in id.");
logger.info("Eu esse veniam ex cupidatat commodo consequat cillum.");
logger.debug("Cupidatat eiusmod eiusmod eiusmod.");
logger.trace("Esse aute deserunt excepteur enim pariatur.");

try {
  throw new Error(
    "Labore esse quis commodo incididunt proident magna exercitation anim.",
  );
} catch (e) {
  logger.error(e);
}

console.log(
  "--- CLASSIC ------------------------------------------------------------",
);
logger = tratschtante({ level: "trace", formatter: "classic" });
logger.critical("Exercitation qui sint non aliquip minim officia.");
logger.error(
  "Laboris aliquip sunt cillum officia sit aliqua officia id eiusmod sint irure.",
);
logger.warning("Veniam consequat ullamco est in id.");
logger.info("Eu esse veniam ex cupidatat commodo consequat cillum.");
logger.debug("Cupidatat eiusmod eiusmod eiusmod.");
logger.trace("Esse aute deserunt excepteur enim pariatur.");

try {
  throw new Error(
    "Labore esse quis commodo incididunt proident magna exercitation anim.",
  );
} catch (e) {
  logger.error(e);
}

console.log(
  "--- JSON ------------------------------------------------------------",
);
logger = tratschtante({ level: "trace", formatter: "json" });
logger.critical("Exercitation qui sint non aliquip minim officia.");
logger.error(
  "Laboris aliquip sunt cillum officia sit aliqua officia id eiusmod sint irure.",
);
logger.warning("Veniam consequat ullamco est in id.");
logger.info("Eu esse veniam ex cupidatat commodo consequat cillum.");
logger.debug("Cupidatat eiusmod eiusmod eiusmod.");
logger.trace("Esse aute deserunt excepteur enim pariatur.");

try {
  throw new Error(
    "Labore esse quis commodo incididunt proident magna exercitation anim.",
  );
} catch (e) {
  logger.error(e);
}

console.log(
  "--- EMOJI ------------------------------------------------------------",
);
logger = tratschtante({ level: "trace", formatter: "emoji" });
logger.critical("Exercitation qui sint non aliquip minim officia.");
logger.error(
  "Laboris aliquip sunt cillum officia sit aliqua officia id eiusmod sint irure.",
);
logger.warning("Veniam consequat ullamco est in id.");
logger.info("Eu esse veniam ex cupidatat commodo consequat cillum.");
logger.debug("Cupidatat eiusmod eiusmod eiusmod.");
logger.trace("Esse aute deserunt excepteur enim pariatur.");

try {
  throw new Error(
    "Labore esse quis commodo incididunt proident magna exercitation anim.",
  );
} catch (e) {
  logger.error(e);
}

console.log(
  "--- LAMBDA ------------------------------------------------------------",
);
logger = tratschtante({ level: "trace", formatter: "lambda" });
logger.critical("Exercitation qui sint non aliquip minim officia.");
logger.error(
  "Laboris aliquip sunt cillum officia sit aliqua officia id eiusmod sint irure.",
);
logger.warning("Veniam consequat ullamco est in id.");
logger.info("Eu esse veniam ex cupidatat commodo consequat cillum.");
logger.debug("Cupidatat eiusmod eiusmod eiusmod.");
logger.trace("Esse aute deserunt excepteur enim pariatur.");

try {
  throw new Error(
    "Labore esse quis commodo incididunt proident magna exercitation anim.",
  );
} catch (e) {
  logger.error(e);
}
