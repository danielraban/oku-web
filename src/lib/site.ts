export const SITE = {
  name: "Oku",
  domain: "okuwellness.com",
  url: "https://okuwellness.com",
  tagline: "Your mind deserves a gentle space",
  description:
    "Oku is an AI-powered mental health companion offering 24/7 supportive conversations, mood tracking, focus sessions, medication reminders, and journaling. Join the UK early access waitlist.",
  // Shorter, keyword-forward summary used for social cards and structured data.
  shortDescription:
    "AI mental health support, mood tracking, and journaling — in one gentle app. Join the UK waitlist.",
  email: {
    hello: "hello@okuwellness.com",
    privacy: "privacy@okuwellness.com",
  },
  // Public profiles for schema.org `sameAs`. Add real URLs as accounts go live.
  social: {} as { twitter?: string; instagram?: string; linkedin?: string },
  // Twitter/X handle (including @) for Twitter card attribution, if any.
  twitterHandle: "" as string,
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
