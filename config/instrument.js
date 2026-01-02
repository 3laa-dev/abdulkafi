import * as Sentry from "@sentry/node";
// const Sentry = require("@sentry/node");

Sentry.init({
  dsn: "https://1c26517c9d970f934dabd2749632c8d7@o4509763337388032.ingest.de.sentry.io/4509763342368848",

  // Setting this option to true will send default PII data to Sentry.
  // For example, automatic IP address collection on events
  sendDefaultPii: true,
});