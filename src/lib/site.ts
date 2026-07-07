export const SITE = {
  name: "Oku",
  domain: "okuwellness.com",
  url: "https://okuwellness.com",
  tagline: "Your mind deserves a gentle space",
  description:
    "A mental health companion for mood tracking, focus sessions, medication reminders, journaling, and community support. Join the early access waitlist.",
  email: {
    hello: "hello@okuwellness.com",
    privacy: "privacy@okuwellness.com",
  },
  // Base number added to the live waitlist count for social proof.
  waitlistBaseCount: 1200,
} as const;

/**
 * UK crisis resources. Oku launches UK-only first, so we surface UK-specific
 * lines. These are shown in the crisis banner and safety copy.
 */
export const CRISIS_RESOURCES = [
  {
    name: "Emergency services",
    detail: "Call 999 if life is at immediate risk",
    action: "999",
    href: "tel:999",
  },
  {
    name: "Samaritans",
    detail: "Free, 24/7, for anyone who needs to talk",
    action: "116 123",
    href: "tel:116123",
  },
  {
    name: "SHOUT",
    detail: "Free 24/7 crisis text support",
    action: "Text SHOUT to 85258",
    href: "sms:85258?&body=SHOUT",
  },
  {
    name: "NHS 111",
    detail: "Urgent mental health help via NHS",
    action: "111, option 2",
    href: "tel:111",
  },
] as const;
