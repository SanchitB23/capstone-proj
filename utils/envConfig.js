const getEnvironmentVariable = (environmentVariable) => {
  const unvalidatedEnvironmentVariable = process.env[environmentVariable];
  if (!unvalidatedEnvironmentVariable) {
    throw new Error(
      `Couldn't find environment variable: ${environmentVariable}`
    );
  } else {
    return unvalidatedEnvironmentVariable;
  }
};

export const config = {
  FIREBASE_APIKEY: getEnvironmentVariable("NEXT_PUBLIC_FIREBASE_APIKEY"),
  FIREBASE_AUTH_DOMAIN: getEnvironmentVariable(
    "NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN"
  ),
  FIREBASE_PROJECT_ID: getEnvironmentVariable(
    "NEXT_PUBLIC_FIREBASE_PROJECT_ID"
  ),
  FIREBASE_STORAGE_BUCKET: getEnvironmentVariable(
    "NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET"
  ),
  FIREBASE_MESSAGING_SENDER_ID: getEnvironmentVariable(
    "NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID"
  ),
  FIREBASE_APP_ID: getEnvironmentVariable("NEXT_PUBLIC_FIREBASE_APP_ID"),
  FIREBASE_MEASUREMENT_ID: getEnvironmentVariable(
    "NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID"
  ),
  GOOGLE_CLIENT_ID: getEnvironmentVariable("NEXT_PUBLIC_GOOGLE_CLIENT_ID"),
  GOOGLE_CLIENT_SECRET: getEnvironmentVariable(
    "NEXT_PUBLIC_GOOGLE_CLIENT_SECRET"
  ),
};
