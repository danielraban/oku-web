/**
 * Content for the Resources hub — lightweight, SEO-focused articles that help
 * Oku rank for informational mental-health queries and build topical
 * authority. Content is stored as typed blocks so it stays type-safe and
 * renders without an MDX/markdown dependency.
 *
 * Note: articles are supportive/educational only and are not medical advice.
 */

export type ContentBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] };

export type Resource = {
  slug: string;
  title: string;
  /** Used for <title> and og:title. */
  metaTitle: string;
  /** Meta description / og:description. */
  description: string;
  /** Short summary shown on the listing page. */
  excerpt: string;
  category: string;
  keywords: string[];
  readingTimeMinutes: number;
  datePublished: string;
  dateModified: string;
  content: ContentBlock[];
};

export const RESOURCES: Resource[] = [
  {
    slug: "how-ai-mental-health-support-works",
    title: "How AI mental health support works — and what it can't do",
    metaTitle: "How AI Mental Health Support Works (and Its Limits)",
    description:
      "A plain-English guide to how AI mental health support works, what an AI companion can help with, its limits, and when to seek professional or crisis care.",
    excerpt:
      "What an AI mental health companion actually does, where it genuinely helps, and the important lines it should never cross.",
    category: "AI & Wellbeing",
    keywords: [
      "AI mental health support",
      "AI mental health companion",
      "AI therapy chat",
      "is AI therapy safe",
    ],
    readingTimeMinutes: 6,
    datePublished: "2026-06-15",
    dateModified: "2026-06-15",
    content: [
      {
        type: "p",
        text: "AI mental health support has moved from novelty to a daily habit for many people. But what does an AI companion actually do, and where should you be cautious? This guide breaks it down without the hype.",
      },
      { type: "h2", text: "What AI mental health support is" },
      {
        type: "p",
        text: "An AI mental health companion is a conversational tool designed to listen, reflect your feelings back to you, and suggest evidence-informed coping strategies. It draws on approaches like cognitive behavioural therapy (CBT) to help you notice unhelpful thought patterns and gently reframe them.",
      },
      {
        type: "p",
        text: "The biggest practical advantage is availability. Difficult feelings rarely keep office hours, and a supportive space you can reach at 3am — with no appointment, waitlist, or judgement — lowers the barrier to processing them before they escalate.",
      },
      { type: "h2", text: "What it genuinely helps with" },
      {
        type: "ul",
        items: [
          "Talking through everyday stress, worry, and low mood in the moment",
          "Naming and understanding emotions you can't quite put into words",
          "Learning and practising grounding, breathing, and reframing techniques",
          "Building consistent habits like journaling and mood tracking",
          "Preparing for a conversation with a GP, therapist, or someone you trust",
        ],
      },
      { type: "h2", text: "What AI support cannot do" },
      {
        type: "p",
        text: "An AI companion is not a licensed therapist and is not a substitute for professional care or a diagnosis. It cannot prescribe medication, provide clinical treatment, or safely manage a mental health crisis. Good tools are transparent about these limits and point you towards human help when it matters.",
      },
      { type: "h2", text: "How to use it well" },
      {
        type: "ul",
        items: [
          "Treat it as a supplement to — not a replacement for — professional support",
          "Choose a tool that is clear about privacy and how your conversations are stored",
          "Use it to build habits and self-awareness, then bring insights to a professional",
          "Know the crisis resources for your area before you need them",
        ],
      },
      { type: "h2", text: "When to seek human help immediately" },
      {
        type: "p",
        text: "If you are in crisis or at risk of harm, contact professional help right away. In the UK you can call 999 in an emergency, call Samaritans free on 116 123 at any time, or text SHOUT to 85258 for free 24/7 crisis support. AI support is not designed for emergencies.",
      },
    ],
  },
  {
    slug: "how-to-manage-anxiety-and-stress",
    title: "Managing anxiety and stress: practical techniques that work",
    metaTitle: "How to Manage Anxiety and Stress: Practical Techniques",
    description:
      "Simple, evidence-informed techniques to manage anxiety and stress day to day — grounding, breathing, reframing thoughts, and building calmer routines.",
    excerpt:
      "A toolkit of small, repeatable techniques — grounding, breathing, and reframing — for calmer days when everything feels like too much.",
    category: "Coping Strategies",
    keywords: [
      "how to manage anxiety",
      "manage stress",
      "anxiety coping techniques",
      "grounding techniques for anxiety",
    ],
    readingTimeMinutes: 7,
    datePublished: "2026-06-22",
    dateModified: "2026-06-22",
    content: [
      {
        type: "p",
        text: "Anxiety and stress are normal responses to a demanding world — but that doesn't make them comfortable. The goal isn't to eliminate them entirely, but to build a small set of techniques you can reach for when things feel like too much.",
      },
      { type: "h2", text: "Ground yourself in the present" },
      {
        type: "p",
        text: "Anxiety pulls your attention into worries about the future. Grounding brings it back to now. The 5-4-3-2-1 technique is a reliable start: notice five things you can see, four you can touch, three you can hear, two you can smell, and one you can taste.",
      },
      { type: "h2", text: "Slow your breathing" },
      {
        type: "p",
        text: "When you're anxious, your breathing speeds up and shallows, which signals your body to stay alert. Slowing it deliberately helps switch on your body's calming response.",
      },
      {
        type: "ul",
        items: [
          "Breathe in gently through your nose for a count of four",
          "Hold for a count of four",
          "Breathe out slowly through your mouth for a count of six",
          "Repeat for a minute or two, letting the out-breath lead",
        ],
      },
      { type: "h2", text: "Reframe the thought" },
      {
        type: "p",
        text: "Stress is often amplified by the story we tell ourselves about a situation. A CBT-style approach is to catch the thought, ask whether it's fact or fear, and look for a more balanced version. 'I'll never get through this' can become 'This is hard, and I can take it one step at a time.'",
      },
      { type: "h2", text: "Build calmer routines" },
      {
        type: "ul",
        items: [
          "Protect your sleep — it's the foundation everything else rests on",
          "Move your body daily, even a short walk counts",
          "Track your mood so you can spot patterns and early warning signs",
          "Set boundaries around work and notifications so your mind can switch off",
        ],
      },
      { type: "h2", text: "When to reach for more support" },
      {
        type: "p",
        text: "If anxiety or stress is persistent, interfering with daily life, or leaving you unable to cope, that's a sign to speak to a professional — starting with your GP. If you are in crisis in the UK, call 999, call Samaritans on 116 123, or text SHOUT to 85258.",
      },
    ],
  },
  {
    slug: "mood-tracking-guide",
    title: "Mood tracking: a simple guide to understanding your emotions",
    metaTitle: "Mood Tracking: A Simple Guide to Understanding Emotions",
    description:
      "What mood tracking is, why it works, and how to start a simple daily mood tracking habit that reveals patterns and supports your mental wellbeing.",
    excerpt:
      "Why a few seconds a day of mood tracking can reveal patterns you'd otherwise miss — and how to start without it becoming a chore.",
    category: "Habits & Tools",
    keywords: [
      "mood tracking",
      "mood tracker",
      "how to track your mood",
      "benefits of mood tracking",
    ],
    readingTimeMinutes: 5,
    datePublished: "2026-06-29",
    dateModified: "2026-06-29",
    content: [
      {
        type: "p",
        text: "Mood tracking is the simple practice of noting how you feel over time. It sounds almost too basic to matter — but a few seconds a day can surface patterns that are impossible to see from inside a single hard moment.",
      },
      { type: "h2", text: "Why mood tracking works" },
      {
        type: "p",
        text: "Emotions feel like they come out of nowhere, but they usually have triggers — poor sleep, a skipped meal, a stressful meeting, a particular relationship. Logging your mood turns a vague sense of 'off' into data you can actually learn from.",
      },
      {
        type: "ul",
        items: [
          "Spot patterns and triggers you'd otherwise miss",
          "Notice early warning signs before a dip becomes a slump",
          "See progress over weeks, not just how today feels",
          "Bring concrete examples to a GP or therapist",
        ],
      },
      { type: "h2", text: "How to start" },
      {
        type: "p",
        text: "Keep it light enough that you'll actually stick with it. Pick a consistent moment — often the end of the day — and rate your mood on a simple scale. Add one or two words about what shaped it if you have the energy, but a single tap is enough on hard days.",
      },
      {
        type: "ul",
        items: [
          "Choose a fixed time so it becomes automatic",
          "Use a simple scale you don't have to think about",
          "Jot an optional note: sleep, energy, or a standout event",
          "Review weekly to look for patterns rather than judging single days",
        ],
      },
      { type: "h2", text: "Turning insight into action" },
      {
        type: "p",
        text: "The value isn't in the logging — it's in the review. Once you see that low-sleep days reliably drag your mood down, or that a certain routine lifts it, you can make small, targeted changes. Pairing mood tracking with journaling or an AI companion can help you make sense of what you're noticing.",
      },
      {
        type: "p",
        text: "If your mood is persistently low or you're struggling to cope, please speak to your GP. In a UK crisis, call 999, call Samaritans on 116 123, or text SHOUT to 85258.",
      },
    ],
  },
];

export function getResource(slug: string): Resource | undefined {
  return RESOURCES.find((r) => r.slug === slug);
}
