import type { Metadata } from "next";
import LegalPageShell from "@/components/LegalPageShell";

export const metadata: Metadata = {
  title: "Terms of Service | Oku",
  description:
    "Terms of Service for Oku — the mental health companion website and app. Effective 3 April 2026.",
};

export default function TermsPage() {
  return (
    <LegalPageShell>
      <article className="max-w-3xl mx-auto text-foreground leading-relaxed space-y-8">
        <header className="space-y-2">
          <h1 className="text-3xl font-semibold text-foreground">
            Terms of Service
          </h1>
          <p className="text-lg text-foreground-secondary">
            Oku — Your mind deserves a gentle space
          </p>
          <p className="text-sm text-foreground-muted">
            Effective Date: 3 April 2026
          </p>
        </header>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">
            1. About These Terms
          </h2>
          <p className="text-foreground-secondary">
            These Terms of Service (&quot;Terms&quot;) govern your use of the Oku
            website (https://oku-web-nu.vercel.app), the Oku mobile application,
            and all related services (collectively, the &quot;Service&quot;). By
            accessing or using the Service, you agree to be bound by these Terms.
          </p>
          <p className="text-foreground-secondary">
            The Service is operated by Oku (&quot;we&quot;, &quot;us&quot;,
            &quot;our&quot;). If you do not agree to these Terms, you must not use
            the Service.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">2. Eligibility</h2>
          <p className="text-foreground-secondary">
            You must be at least 16 years old to use the Service. By using the
            Service, you represent and warrant that you meet this age requirement.
            If you are under 18, you confirm that you have obtained consent from a
            parent or guardian.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">
            3. Account Registration
          </h2>
          <p className="text-foreground-secondary">
            To access certain features of the Service, you may need to create an
            account. You agree to:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-foreground-secondary">
            <li>Provide accurate and complete information during registration</li>
            <li>Keep your login credentials secure and confidential</li>
            <li>
              Notify us immediately of any unauthorised access to your account
            </li>
            <li>Accept responsibility for all activity that occurs under your account</li>
          </ul>
          <p className="text-foreground-secondary">
            We reserve the right to suspend or terminate accounts that violate
            these Terms.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">4. The Service</h2>
          <div className="space-y-3">
            <h3 className="text-lg font-medium text-foreground">
              4.1 What Oku Provides
            </h3>
            <p className="text-foreground-secondary">
              Oku is a mental health companion app offering mood tracking, focus
              timers, medication reminders, journaling, gamification features,
              community features, and an AI-powered companion. The Service is
              designed to support your mental wellbeing and is not a substitute for
              professional medical advice, diagnosis, or treatment.
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="text-lg font-medium text-foreground">
              4.2 Not a Medical Service
            </h3>
            <p className="text-foreground-secondary">
              Oku is not a healthcare provider. The AI companion is not a licensed
              therapist, counsellor, psychologist, or psychiatrist. The information
              and support provided through the Service are for general wellbeing
              purposes only.
            </p>
            <p className="text-foreground-secondary">
              If you are experiencing a mental health crisis, please contact
              emergency services (999 in the UK), the Samaritans (116 123), or
              Crisis Text Line (text SHOUT to 85258). Do not rely on Oku as a
              substitute for professional help.
            </p>
            <p className="text-foreground-secondary">
              Always seek the advice of a qualified healthcare provider with any
              questions regarding a medical condition or treatment.
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="text-lg font-medium text-foreground">
              4.3 Medication Reminders
            </h3>
            <p className="text-foreground-secondary">
              The medication reminder feature is provided as a convenience tool
              only. It is not a medical device and should not be relied upon as the
              sole method of managing your medication. We are not responsible for
              missed doses, incorrect dosages, or any health consequences arising
              from use of this feature. Always follow your prescriber&apos;s
              instructions.
            </p>
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">5. AI Companion</h2>
          <p className="text-foreground-secondary">
            The AI companion feature uses artificial intelligence to provide
            conversational support. You acknowledge and agree that:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-foreground-secondary">
            <li>
              The AI is not a human and does not provide medical, psychological,
              or therapeutic advice
            </li>
            <li>
              AI responses are generated automatically and may not always be
              accurate, appropriate, or complete
            </li>
            <li>
              You should not make medical or life-critical decisions based solely on
              AI companion conversations
            </li>
            <li>
              AI conversations are encrypted and processed in accordance with our{" "}
              <a
                href="/privacy/"
                className="text-primary underline underline-offset-2 hover:text-primary-dark"
              >
                Privacy Policy
              </a>
            </li>
            <li>We may update, modify, or improve the AI companion at any time</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">
            6. Community Features
          </h2>
          <p className="text-foreground-secondary">
            Oku includes community features that allow you to share posts and
            interact with other users. When using community features, you agree to:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-foreground-secondary">
            <li>Treat other users with respect and kindness</li>
            <li>
              Not post content that is abusive, threatening, discriminatory, or
              harmful
            </li>
            <li>
              Not share content that promotes self-harm, eating disorders, or
              substance abuse
            </li>
            <li>Not post spam, advertising, or promotional material</li>
            <li>Not impersonate other users or misrepresent your identity</li>
            <li>
              Not share other users&apos; personal information without their consent
            </li>
            <li>
              Report content that violates these guidelines using in-app reporting
              tools
            </li>
          </ul>
          <p className="text-foreground-secondary">
            We reserve the right to remove any content and suspend or terminate
            accounts that violate these community guidelines, at our sole discretion
            and without prior notice.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">
            7. Intellectual Property
          </h2>
          <p className="text-foreground-secondary">
            All content, features, and functionality of the Service, including but
            not limited to text, graphics, logos, icons, the Oku name and branding,
            software, and design, are the exclusive property of Oku and are
            protected by copyright, trademark, and other intellectual property laws.
          </p>
          <p className="text-foreground-secondary">
            You may not copy, modify, distribute, sell, or lease any part of the
            Service, nor may you reverse-engineer or attempt to extract the source
            code of the software, unless applicable law permits this or you have
            our written permission.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">8. User Content</h2>
          <p className="text-foreground-secondary">
            You retain ownership of any content you create within the Service,
            including journal entries, mood logs, and community posts. By posting
            content in community areas, you grant Oku a non-exclusive, royalty-free,
            worldwide licence to display, distribute, and moderate that content
            within the Service.
          </p>
          <p className="text-foreground-secondary">
            You are solely responsible for the content you post. We do not endorse
            any user content and assume no liability for it.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">9. Acceptable Use</h2>
          <p className="text-foreground-secondary">
            You agree not to use the Service to:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-foreground-secondary">
            <li>Violate any applicable law or regulation</li>
            <li>
              Attempt to gain unauthorised access to the Service or its systems
            </li>
            <li>
              Interfere with or disrupt the integrity or performance of the Service
            </li>
            <li>Upload or transmit viruses, malware, or other harmful code</li>
            <li>Collect or harvest information about other users</li>
            <li>
              Use the Service for any commercial purpose without our prior written
              consent
            </li>
            <li>Circumvent any content moderation or safety features</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">
            10. Availability &amp; Changes
          </h2>
          <p className="text-foreground-secondary">
            We aim to keep the Service available at all times but do not guarantee
            uninterrupted access. The Service may be temporarily unavailable due to
            maintenance, updates, or circumstances beyond our control.
          </p>
          <p className="text-foreground-secondary">
            We reserve the right to modify, suspend, or discontinue any part of the
            Service at any time. We will provide reasonable notice of material
            changes where practicable.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">
            11. Subscriptions &amp; Payments
          </h2>
          <p className="text-foreground-secondary">
            Some features of the Service may require a paid subscription. If
            applicable, subscription terms, pricing, billing cycles, and cancellation
            policies will be clearly presented to you before purchase. Subscriptions
            will be processed through the relevant app store (Apple App Store or
            Google Play) and are subject to their respective terms and refund
            policies.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">
            12. Limitation of Liability
          </h2>
          <p className="text-foreground-secondary">
            To the maximum extent permitted by law:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-foreground-secondary">
            <li>
              The Service is provided on an &quot;as is&quot; and &quot;as
              available&quot; basis without warranties of any kind, whether express
              or implied
            </li>
            <li>
              We do not warrant that the Service will be error-free, secure, or
              uninterrupted
            </li>
            <li>
              We are not liable for any indirect, incidental, special,
              consequential, or punitive damages arising from your use of the Service
            </li>
            <li>
              Our total liability to you for any claims arising from or related to
              the Service shall not exceed the amount you have paid us in the 12
              months preceding the claim, or £50, whichever is greater
            </li>
          </ul>
          <p className="text-foreground-secondary">
            Nothing in these Terms excludes or limits our liability for death or
            personal injury caused by our negligence, fraud or fraudulent
            misrepresentation, or any other liability that cannot be excluded or
            limited by English law.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">13. Indemnification</h2>
          <p className="text-foreground-secondary">
            You agree to indemnify and hold harmless Oku, its officers, directors,
            employees, and agents from any claims, liabilities, damages, losses, and
            expenses (including reasonable legal fees) arising out of or in
            connection with your use of the Service, your violation of these Terms,
            or your violation of any rights of a third party.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">14. Termination</h2>
          <p className="text-foreground-secondary">
            You may delete your account at any time through the app settings. Upon
            deletion, your personal data will be handled in accordance with our{" "}
            <a
              href="/privacy/"
              className="text-primary underline underline-offset-2 hover:text-primary-dark"
            >
              Privacy Policy
            </a>
            .
          </p>
          <p className="text-foreground-secondary">
            We may suspend or terminate your access to the Service at any time if we
            reasonably believe you have violated these Terms, with or without notice.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">
            15. Governing Law &amp; Disputes
          </h2>
          <p className="text-foreground-secondary">
            These Terms are governed by and construed in accordance with the laws of
            England and Wales. Any disputes arising from or related to these Terms or
            the Service shall be subject to the exclusive jurisdiction of the courts
            of England and Wales.
          </p>
          <p className="text-foreground-secondary">
            Nothing in these Terms affects your statutory rights as a consumer under
            UK law.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">16. Severability</h2>
          <p className="text-foreground-secondary">
            If any provision of these Terms is found to be invalid or unenforceable,
            that provision will be limited or eliminated to the minimum extent
            necessary, and the remaining provisions will remain in full force and
            effect.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">
            17. Changes to These Terms
          </h2>
          <p className="text-foreground-secondary">
            We may update these Terms from time to time. We will notify you of
            material changes by posting the updated Terms on our website and, where
            applicable, through the app or by email. Your continued use of the
            Service after changes take effect constitutes acceptance of the revised
            Terms.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">18. Contact Us</h2>
          <p className="text-foreground-secondary">
            If you have questions about these Terms, please contact us at:
          </p>
          <p className="text-foreground-secondary">
            Email:{" "}
            <a
              href="mailto:hello@okuapp.co.uk"
              className="text-primary underline underline-offset-2 hover:text-primary-dark"
            >
              hello@okuapp.co.uk
            </a>
          </p>
        </section>
      </article>
    </LegalPageShell>
  );
}
