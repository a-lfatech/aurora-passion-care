import LegalLayout, { type LegalSection } from '@/components/LegalLayout';

const sections: LegalSection[] = [
  {
    id: 'who-we-are',
    title: 'Who we are',
    body: (
      <>
        <p>
          Aurora Passion Care ("APC", "we", "us") is a private in-home care and support service based in Calgary, Alberta. This policy explains how we handle personal information collected through our website at www.aurorapassion.care and through enquiries made by phone or email.
        </p>
        <p>
          As a private organization in Alberta, we handle personal information in line with Alberta's <em>Personal Information Protection Act</em> (PIPA) and, where it applies, the federal <em>Personal Information Protection and Electronic Documents Act</em> (PIPEDA).
        </p>
      </>
    ),
  },
  {
    id: 'what-we-collect',
    title: 'What information we collect',
    body: (
      <>
        <h3>Information you give us through the consultation form</h3>
        <ul>
          <li>First and last name</li>
          <li>Email address and, if you choose, a phone number</li>
          <li>Your preferred way to be contacted</li>
          <li>The general type of support you are interested in (for example, respite or companionship)</li>
          <li>A preferred start date, if you have one</li>
          <li>Anything you choose to write in the message box</li>
        </ul>
        <h3>Information you give us by phone or email</h3>
        <p>If you call or email us, we keep the details you share so we can follow up with you.</p>
        <h3>Information collected automatically</h3>
        <p>
          We do not use analytics, advertising or tracking cookies, and we do not build visitor profiles. Like any website, the services that host and deliver our pages may record basic technical information (such as your IP address and browser type) in their security logs. Our site loads fonts from Google Fonts and some photographs from Pexels, so those services receive your IP address when the page loads.
        </p>
      </>
    ),
  },
  {
    id: 'why-we-collect',
    title: 'Why we collect it',
    body: (
      <>
        <p>We only use your information for the reasons you would reasonably expect:</p>
        <ul>
          <li>To reply to your enquiry and arrange a consultation</li>
          <li>To understand, at a general level, what kind of support might suit you or your family member</li>
          <li>To contact you in the way you prefer</li>
          <li>To keep a record of our conversations so you do not have to repeat yourself</li>
        </ul>
        <p>
          We do not sell, rent or trade your information. We do not use it for marketing mailing lists, and we will not contact you about anything unrelated to your enquiry without your permission.
        </p>
      </>
    ),
  },
  {
    id: 'health-information',
    title: 'Health and care information',
    body: (
      <>
        <p>
          We understand that families often reach out about a loved one's health, memory or developmental needs. To protect everyone's privacy, <strong>please do not send detailed medical histories, diagnoses, medication lists, health card numbers or similar records through the website form or by email.</strong> A short, general description of the kind of help you are looking for is all we need to get started.
        </p>
        <p>
          We will ask for the care details we actually need during a private consultation, and only with consent from the person receiving care or someone legally authorized to act for them. If you become a client, care information is handled under your client service agreement, which explains how those records are kept.
        </p>
        <p>
          If you share information about another person, such as a parent or child, please make sure you have their permission or the authority to do so.
        </p>
      </>
    ),
  },
  {
    id: 'storage-protection',
    title: 'How we store and protect it',
    body: (
      <>
        <p>When you submit the consultation form:</p>
        <ul>
          <li>Your enquiry is sent over an encrypted (HTTPS) connection and saved in a secure cloud database operated by our service provider, Supabase. Data is encrypted while stored.</li>
          <li>The database is set up so that website visitors can add an enquiry but cannot read, change or delete anyone's information, including their own. Only authorized APC staff can view enquiries.</li>
          <li>A copy of your enquiry is emailed to APC's business inboxes using our email delivery provider, Resend.</li>
        </ul>
        <p>
          Some of our service providers may store or process information outside Canada, including in the United States. When that happens, the information may be subject to the laws of that country. We choose providers that use recognized security practices, and we limit what we share with them to what is needed to run the service. You can contact us (see below) for more information about our use of service providers outside Canada.
        </p>
        <p>
          Within APC, access is limited to the people who need it to respond to you. No method of storing or sending information online is perfectly secure, but we take reasonable steps to protect your information against loss, theft and unauthorized access.
        </p>
      </>
    ),
  },
  {
    id: 'retention',
    title: 'How long we keep it and how it is deleted',
    body: (
      <>
        <ul>
          <li><strong>Website enquiries</strong> are deleted automatically from our database 24 months after they are submitted. Email copies are deleted on the same schedule.</li>
          <li><strong>If you become a client</strong>, the information you provide becomes part of your client file and is kept for as long as we provide services, then for the period required by law or set out in your client service agreement.</li>
          <li><strong>Earlier deletion:</strong> you can ask us to delete your enquiry at any time. Unless we are legally required to keep it, we will permanently delete it and confirm by email or phone.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'sharing',
    title: 'When we share information',
    body: (
      <>
        <p>We only share personal information:</p>
        <ul>
          <li>With the service providers described above, solely to operate our website and communications</li>
          <li>With your consent, for example with a family member or care professional you have asked us to speak with</li>
          <li>When required or permitted by law, such as to protect someone from serious harm</li>
        </ul>
      </>
    ),
  },
  {
    id: 'your-rights',
    title: 'Your choices and rights',
    body: (
      <>
        <p>You have the right to:</p>
        <ul>
          <li>Ask what personal information we hold about you and receive a copy</li>
          <li>Ask us to correct information that is wrong or incomplete</li>
          <li>Withdraw your consent and ask us to delete your enquiry</li>
          <li>Ask how your information has been used and who it has been shared with</li>
        </ul>
        <p>
          To make a request, contact us using the details below. We may ask you to confirm your identity first. We will respond within 45 days, as required by Alberta law.
        </p>
      </>
    ),
  },
  {
    id: 'contact',
    title: 'Contact us about privacy',
    body: (
      <>
        <p>
          If you have a question, concern or request about your personal information, please contact our privacy contact:
        </p>
        <ul>
          <li>Email: <a href="mailto:care@aurorapassion.care?subject=Privacy%20request">care@aurorapassion.care</a> (please use "Privacy" in the subject line)</li>
          <li>Phone: <a href="tel:4038991572">403-899-1572</a></li>
          <li>Location: Calgary, Alberta, Canada</li>
        </ul>
        <p>
          If you are not satisfied with our response, you have the right to contact the Office of the Information and Privacy Commissioner of Alberta at <a href="https://www.oipc.ab.ca" target="_blank" rel="noopener noreferrer">www.oipc.ab.ca</a>.
        </p>
      </>
    ),
  },
  {
    id: 'changes',
    title: 'Changes to this policy',
    body: (
      <p>
        We may update this policy as our services or the law change. The effective date at the top of this page shows when it was last updated. If we make a significant change to how we use information we already hold, we will let affected people know.
      </p>
    ),
  },
];

export default function PrivacyPolicy() {
  return (
    <LegalLayout
      eyebrow="Your Privacy"
      title="Privacy Policy"
      documentTitle="Privacy Policy | Aurora Passion Care"
      effectiveDate="October 16, 2026"
      intro={
        <p>
          Families trust us with personal and often sensitive information. This page explains, in plain language, what we collect, why, how we protect it, and how you stay in control of it.
        </p>
      }
      sections={sections}
    />
  );
}
