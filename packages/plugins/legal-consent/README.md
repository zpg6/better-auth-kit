# Legal Consent Plugin for [Better Auth](https://github.com/better-auth/better-auth)

Keep your application compliant by requiring legal consent on your sign-up routes.

In short, this plugin will require the user to accept the terms of service, privacy policy, age verification, marketing consent, and cookie consent before they can sign up.

Supported compliances:

- Terms of Service
- Privacy Policy
- Age Verification
- Marketing Consent
- Cookie Consent

## Installation

```bash
npm install @better-auth-kit/legal-consent
```

## Usage

```ts
import { legalConsent } from "@better-auth-kit/legal-consent";

export const auth = betterAuth({
  plugins: [
    legalConsent({
      requireTOS: true,
      requirePrivacyPolicy: true,
      requireAgeVerification: true,
      requireMarketingConsent: true,
      requireCookieConsent: true,
    }),
  ],
});
```

## Documentation

Read our documentation at [better-auth-kit.com](https://better-auth-kit.com/docs/plugins/legal-consent).

## What does it do?

By utilizing the `legalConsent` plugin, you can require the following legal consents on your sign-up routes:

- Terms of Service
- Privacy Policy
- Age Verification
- Marketing Consent
- Cookie Consent

Whenever a user signs up, the plugin requires you to pass additional data to the `signup` method.
The data can vary depending on the legal consent requirements you have set.
For example, if you require the user to accept the terms of service, you must pass `tosAccepted: true` to the `signup` method.
After the plugin has verified the given data is all valid, it will pass those legal consent values to the user data that will be created.

## Configuring the saved values

The plugin will save the following values to the user data:

- `tosAccepted`
- `privacyPolicyAccepted`
- `ageVerified`
- `marketingConsentAccepted`
- `cookieConsentAccepted`

You can configure the name of these fields by passing the `schema` option to the plugin.

```ts
legalConsent({
  schema: {
    userModelName: "user",
    tosAccepted: "tosAccepted",
    privacyPolicyAccepted: "privacyPolicyAccepted",
    ageVerified: "ageVerified",
    marketingConsentAccepted: "marketingConsentAccepted",
    cookieConsentAccepted: "cookieConsentAccepted",
  },
});
```

## License

[MIT](LICENSE)
