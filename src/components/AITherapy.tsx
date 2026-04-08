export default function AITherapy() {
  return (
    <section className="py-24 px-6 bg-background-subtle overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — copy */}
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary-subtle text-secondary text-sm font-medium mb-6">
              AI-Powered Support
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
              A compassionate listener,
              <br />
              <span className="text-secondary">whenever you need one</span>
            </h2>
            <p className="mt-6 text-lg text-foreground-secondary leading-relaxed">
              Oku&apos;s AI companion is trained to help you process emotions,
              explore coping strategies, and work through stress and anxiety
              — in a safe, private conversation available 24/7.
            </p>

            <div className="mt-8 space-y-5">
              {CAPABILITIES.map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-secondary-subtle text-secondary flex items-center justify-center shrink-0 mt-0.5">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <p className="text-foreground-secondary text-sm leading-relaxed mt-1">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-8 text-sm text-foreground-muted italic">
              Oku&apos;s AI is not a licensed therapist. If you are in crisis,
              please use the in-app crisis resources or call emergency services.
            </p>
          </div>

          {/* Right — chat mockup */}
          <div className="relative">
            <div className="rounded-3xl border border-border bg-surface p-6 shadow-sm max-w-sm mx-auto lg:ml-auto">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border">
                <div className="w-10 h-10 rounded-full bg-secondary-subtle flex items-center justify-center">
                  <svg className="w-5 h-5 text-secondary" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">
                    Oku AI Companion
                  </p>
                  <p className="text-xs text-foreground-muted">
                    Always here for you
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                <ChatBubble
                  side="right"
                  text="I've been feeling really overwhelmed at work lately and I don't know how to handle it"
                />
                <ChatBubble
                  side="left"
                  text="That sounds really challenging. It takes courage to acknowledge when things feel like too much. Can you tell me more about what's been weighing on you most?"
                />
                <ChatBubble
                  side="right"
                  text="I think it's the constant pressure to perform. I can't seem to switch off"
                />
                <ChatBubble
                  side="left"
                  text="That 'always on' feeling is exhausting. Let's explore some grounding techniques that might help you create boundaries between work and rest. Would you like to try one now?"
                />
              </div>
            </div>

            {/* Decorative gradient behind the card */}
            <div className="absolute -z-10 top-8 -right-8 w-72 h-72 rounded-full bg-secondary-subtle opacity-50 blur-3xl" />
            <div className="absolute -z-10 bottom-8 -left-8 w-56 h-56 rounded-full bg-primary-subtle opacity-40 blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}

function ChatBubble({ side, text }: { side: "left" | "right"; text: string }) {
  const isUser = side === "right";
  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[85%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
          isUser
            ? "bg-primary text-on-primary rounded-br-md"
            : "bg-surface-raised text-foreground rounded-bl-md"
        }`}
      >
        {text}
      </div>
    </div>
  );
}

const CAPABILITIES = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
      </svg>
    ),
    title: "Emotional Processing",
    description:
      "Talk through anxiety, stress, sadness, or confusion in a judgment-free space. The AI helps you name and understand your feelings.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
      </svg>
    ),
    title: "Coping Strategies",
    description:
      "Get personalised techniques — from grounding exercises and breathing to CBT-based reframing — tailored to what you're going through.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
    title: "Completely Private",
    description:
      "Your conversations are encrypted and never shared. No human ever reads them — this space is yours alone.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Available 24/7",
    description:
      "No appointments, no waitlists. Whether it's 3pm or 3am, your AI companion is ready to listen.",
  },
];
