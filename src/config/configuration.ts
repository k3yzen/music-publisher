export default () => ({
  environment: process.env.ENVIRONMENT,
  port: parseInt(process.env.PORT, 10),
  headers: {
    timezone: process.env.TIMEZONE,
    environment: process.env.ENVIRONMENT,
    countries: process.env.COUNTRIES,
    x_commerce: process.env.X_COMMERCE,
    x_chref: process.env.X_CHREF,
    atrib_domain: process.env.ATRIB_DOMAIN,
    atrib_capability: process.env.ATRIB_CAPABILITY,
  },
  pullLimit: process.env.GCLOUD_PUBSUB_SUBSCRIPTION_PULL_LIMIT,
  api: {
    topic: {
      endpoint: process.env.API_TASKS_ENDPOINT,
    },
  },
  pubsub: {
    pullLimit: process.env.GCLOUD_PUBSUB_SUBSCRIPTION_PULL_LIMIT,
    subscriptionName: process.env.GCLOUD_PUBSUB_SUBCRIPTION_NAME,
    subscriberB64: process.env.GCLOUD_PUBSUB_SUBSCRIBER_B64,
    projectId: process.env.GCLOUD_PROJECT_ID,
    topicId: process.env.GCLOUD_PUBSUB_TOPIC_ID,
  },
});
