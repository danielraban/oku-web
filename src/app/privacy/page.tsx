import type { Metadata } from "next";
import LegalPageShell from "@/components/LegalPageShell";

export const metadata: Metadata = {
  title: "Privacy Policy | Oku",
  description:
    "Privacy Policy for Oku — how we collect, use, store, and protect your personal data. Effective 3 April 2026.",
};

export default function PrivacyPage() {
  return (
    <LegalPageShell>
      <article className="max-w-3xl mx-auto text-foreground leading-relaxed space-y-8">
        <header className="space-y-2">
          <h1 className="text-3xl font-semibold text-foreground">
            Privacy Policy
          </h1>
          <p className="text-lg text-foreground-secondary">
            Oku — Your mind deserves a gentle space
          </p>
          <p className="text-sm text-foreground-muted">
            Effective Date: 3 April 2026
          </p>
        </header>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">1. Who We Are</h2>
          <p className="text-foreground-secondary">
            Oku is a mental health companion app operated by Oku (&quot;we&quot;,
            &quot;us&quot;, &quot;our&quot;). Our marketing website is located at{" "}
            <a
              href="https://oku-web-nu.vercel.app"
              className="text-primary underline underline-offset-2 hover:text-primary-dark"
              rel="noopener noreferrer"
            >
              https://oku-web-nu.vercel.app
            </a>
            . This Privacy Policy explains how we collect, use, store, and protect
            your personal data when you visit our website, join our waitlist, or use
            the Oku app.
          </p>
          <p className="text-foreground-secondary">
            For enquiries about this policy, contact us at:{" "}
            <a
              href="mailto:privacy@okuapp.co.uk"
              className="text-primary underline underline-offset-2 hover:text-primary-dark"
            >
              privacy@okuapp.co.uk
            </a>
            .
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">
            2. What Data We Collect
          </h2>
          <div className="space-y-3">
            <h3 className="text-lg font-medium text-foreground">
              2.1 Marketing Website &amp; Waitlist
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-foreground-secondary">
              <li>Email address (when you join the early access waitlist)</li>
              <li>
                Basic analytics data (page views, device type, browser type,
                approximate location via IP address)
              </li>
              <li>Cookies and similar tracking technologies (see Section 7)</li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="text-lg font-medium text-foreground">
              2.2 Oku App (Upon Launch)
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-foreground-secondary">
              <li>
                Account information: name, email address, date of birth, profile
                preferences
              </li>
              <li>
                Mood and wellbeing data: mood logs, energy levels, focus scores,
                stress levels, journal entries
              </li>
              <li>
                Medication data: medication names, dosage schedules, dose logs,
                reported side effects
              </li>
              <li>
                Focus session data: session durations, ambient sound preferences
              </li>
              <li>
                AI companion conversations: text-based conversations with the AI
                companion
              </li>
              <li>
                Community data: posts, comments, and interactions within the
                community features
              </li>
              <li>
                Gamification data: streaks, points, achievements, and level progress
              </li>
              <li>
                Device information: operating system, app version, device model,
                crash logs
              </li>
              <li>
                Apple HealthKit or Google Health Connect data (only if you grant
                explicit permission)
              </li>
            </ul>
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">
            3. How We Use Your Data
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-foreground-secondary">
            <li>To provide, maintain, and improve the Oku app and its features</li>
            <li>
              To send you early access updates and product announcements (waitlist
              only)
            </li>
            <li>
              To personalise your experience, including AI companion responses and
              mood insights
            </li>
            <li>
              To generate anonymised, aggregated insights to improve our services
            </li>
            <li>
              To moderate community content and maintain a safe environment
            </li>
            <li>
              To comply with legal obligations, including UK GDPR and the Data
              Protection Act 2018
            </li>
            <li>To detect, prevent, and address technical issues or abuse</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">
            4. Legal Basis for Processing
          </h2>
          <p className="text-foreground-secondary">
            We process your data under the following lawful bases as defined by UK
            GDPR:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-foreground-secondary">
            <li>
              Consent: When you join our waitlist, opt in to analytics, or grant
              access to HealthKit/Health Connect data. You may withdraw consent at
              any time.
            </li>
            <li>
              Contract: When processing is necessary to provide you with the Oku app
              and its services.
            </li>
            <li>
              Legitimate interests: For improving our services, ensuring security,
              and preventing abuse, where these interests do not override your
              rights.
            </li>
            <li>
              Legal obligation: Where we are required to process data to comply with
              applicable law.
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">
            5. Health &amp; Sensitive Data
          </h2>
          <p className="text-foreground-secondary">
            Oku processes special category data including mood logs, medication
            information, mental health journal entries, and AI companion
            conversations. This data is processed under Article 9(2)(a) of UK GDPR on
            the basis of your explicit consent, which you provide when creating an
            account and using these features.
          </p>
          <p className="text-foreground-secondary">
            We treat all health and wellbeing data with the highest level of care. AI
            companion conversations are encrypted and are not read by any human. We
            do not sell, share, or use your health data for advertising purposes.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">
            6. Data Sharing &amp; Third Parties
          </h2>
          <p className="text-foreground-secondary">
            We do not sell your personal data. We may share data with the following
            categories of third parties, only as necessary:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-foreground-secondary">
            <li>
              Hosting providers: For secure storage and delivery of the app and
              website (e.g. Vercel, cloud infrastructure providers)
            </li>
            <li>
              Analytics providers: For anonymised usage analytics to improve our
              services
            </li>
            <li>
              AI service providers: To power the AI companion feature. Conversations
              are processed in accordance with strict data processing agreements. No
              third-party AI provider retains your conversations.
            </li>
            <li>Moderation tools: To help maintain community safety</li>
            <li>
              Legal authorities: Where required by law, regulation, or valid legal
              process
            </li>
          </ul>
          <p className="text-foreground-secondary">
            All third-party processors are bound by data processing agreements that
            require them to handle your data securely and only for the purposes we
            specify.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">7. Cookies</h2>
          <p className="text-foreground-secondary">
            Our marketing website uses cookies and similar technologies. These
            include:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-foreground-secondary">
            <li>
              Strictly necessary cookies: Required for the website to function (e.g.
              security, load balancing)
            </li>
            <li>
              Analytics cookies: To understand how visitors use our site (e.g. page
              views, traffic sources). These are only set with your consent.
            </li>
          </ul>
          <p className="text-foreground-secondary">
            You can manage your cookie preferences through your browser settings.
            For more information, see our Cookie Banner on first visit.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">8. Data Retention</h2>
          <p className="text-foreground-secondary">
            We retain your data for as long as necessary to provide our services and
            fulfil the purposes described in this policy:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-foreground-secondary">
            <li>
              Waitlist emails: Retained until you unsubscribe or the waitlist is
              closed
            </li>
            <li>
              Account and app data: Retained for the duration of your account. Upon
              account deletion, your data will be permanently deleted within 30
              days, except where retention is required by law.
            </li>
            <li>
              AI companion conversations: Encrypted at rest and deleted upon account
              deletion. Not retained by third-party AI providers.
            </li>
            <li>
              Analytics data: Retained in anonymised form for up to 26 months
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">9. Data Security</h2>
          <p className="text-foreground-secondary">
            We implement appropriate technical and organisational measures to
            protect your personal data, including:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-foreground-secondary">
            <li>Encryption of data in transit (TLS) and at rest</li>
            <li>Access controls limiting who can view personal data</li>
            <li>Regular security assessments and monitoring</li>
            <li>Secure development practices</li>
          </ul>
          <p className="text-foreground-secondary">
            While we take all reasonable steps to protect your data, no method of
            electronic storage or transmission is 100% secure.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">10. Your Rights</h2>
          <p className="text-foreground-secondary">
            Under UK GDPR, you have the following rights in relation to your personal
            data:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-foreground-secondary">
            <li>
              Right of access: Request a copy of the personal data we hold about you
            </li>
            <li>
              Right to rectification: Request correction of inaccurate or incomplete
              data
            </li>
            <li>Right to erasure: Request deletion of your personal data</li>
            <li>
              Right to restrict processing: Request that we limit how we use your
              data
            </li>
            <li>
              Right to data portability: Receive your data in a structured,
              machine-readable format
            </li>
            <li>
              Right to object: Object to processing based on legitimate interests
            </li>
            <li>
              Right to withdraw consent: Withdraw consent at any time without
              affecting the lawfulness of prior processing
            </li>
          </ul>
          <p className="text-foreground-secondary">
            To exercise any of these rights, contact us at{" "}
            <a
              href="mailto:privacy@okuapp.co.uk"
              className="text-primary underline underline-offset-2 hover:text-primary-dark"
            >
              privacy@okuapp.co.uk
            </a>
            . We will respond within one month.
          </p>
          <p className="text-foreground-secondary">
            You also have the right to lodge a complaint with the Information
            Commissioner&apos;s Office (ICO) at{" "}
            <a
              href="https://ico.org.uk"
              className="text-primary underline underline-offset-2 hover:text-primary-dark"
              rel="noopener noreferrer"
            >
              ico.org.uk
            </a>{" "}
            if you believe your rights have been infringed.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">
            11. International Transfers
          </h2>
          <p className="text-foreground-secondary">
            Your data may be processed outside the UK where our service providers are
            located. Where this occurs, we ensure appropriate safeguards are in place,
            such as Standard Contractual Clauses approved by the ICO or adequacy
            decisions, to protect your data in accordance with UK GDPR.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">12. Children</h2>
          <p className="text-foreground-secondary">
            Oku is not directed at children under the age of 16. We do not knowingly
            collect personal data from children under 16. If we become aware that we
            have collected data from a child under 16 without appropriate parental
            consent, we will take steps to delete that data promptly.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">
            13. Changes to This Policy
          </h2>
          <p className="text-foreground-secondary">
            We may update this Privacy Policy from time to time. We will notify you
            of material changes by posting the updated policy on our website and,
            where applicable, by email. The date at the top of this policy indicates
            when it was last updated.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">14. Contact Us</h2>
          <p className="text-foreground-secondary">
            If you have questions about this Privacy Policy or how we handle your
            data, please contact us at:
          </p>
          <p className="text-foreground-secondary">
            Email:{" "}
            <a
              href="mailto:privacy@okuapp.co.uk"
              className="text-primary underline underline-offset-2 hover:text-primary-dark"
            >
              privacy@okuapp.co.uk
            </a>
          </p>
        </section>
      </article>
    </LegalPageShell>
  );
}
