import LegalLayout, { type LegalSection } from '@/components/LegalLayout';

const sections: LegalSection[] = [
  {
    id: 'about-these-terms',
    title: 'About these terms',
    body: (
      <p>
        These terms apply to your use of the Aurora Passion Care website at www.aurorapassion.care. By using the site, you agree to them. If you do not agree, please do not use the site. Our care services themselves are provided under a separate written client service agreement.
      </p>
    ),
  },
  {
    id: 'not-emergency',
    title: 'Not for emergencies',
    body: (
      <p>
        <strong>This website and our consultation form are not monitored around the clock and must never be used in an emergency.</strong> If you or someone you care for is in immediate danger or needs urgent medical help, call 911. For non-urgent health advice in Alberta, call Health Link at 811.
      </p>
    ),
  },
  {
    id: 'information-only',
    title: 'General information only',
    body: (
      <>
        <p>
          The content on this website describes our services and approach to care. It is general information and is not medical, legal or professional advice. Every person's situation is different, so please speak with a qualified health professional about specific medical needs.
        </p>
        <p>
          We work to keep the website accurate and up to date, but service descriptions, availability and other details may change without notice.
        </p>
      </>
    ),
  },
  {
    id: 'enquiries',
    title: 'Enquiries and consultations',
    body: (
      <>
        <p>
          Sending us an enquiry does not create a client relationship or commit you or us to any services. Care begins only once we have completed a consultation and both parties have signed a client service agreement.
        </p>
        <p>
          When you send an enquiry, please provide accurate contact details and only share information you have the right to share. Please keep your message general and do not include detailed medical histories. Our <a href="/privacy">Privacy Policy</a> explains how we handle the information you send.
        </p>
      </>
    ),
  },
  {
    id: 'acceptable-use',
    title: 'Acceptable use',
    body: (
      <>
        <p>When using this website, you agree not to:</p>
        <ul>
          <li>Submit false, misleading or someone else's information without their permission</li>
          <li>Send spam, advertising or abusive content through the consultation form</li>
          <li>Attempt to interfere with, damage or gain unauthorized access to the website or its systems</li>
          <li>Use the website for any unlawful purpose</li>
        </ul>
      </>
    ),
  },
  {
    id: 'intellectual-property',
    title: 'Our content and brand',
    body: (
      <p>
        The Aurora Passion Care name, logo, written content and design of this website belong to Aurora Passion Care or are used with permission. Some photographs are licensed stock images. You may view and share pages for personal, non-commercial purposes, but please do not copy, modify or reuse our content or branding without written permission.
      </p>
    ),
  },
  {
    id: 'third-party',
    title: 'Links to other websites',
    body: (
      <p>
        We may link to other websites, such as government or community resources, for your convenience. We are not responsible for the content or privacy practices of those sites, and a link does not mean we endorse them.
      </p>
    ),
  },
  {
    id: 'liability',
    title: 'Limitation of liability',
    body: (
      <p>
        The website is provided "as is". To the extent permitted by law, Aurora Passion Care is not responsible for any loss or damage arising from your use of the website or reliance on its general information, or from temporary interruptions to the site. Nothing in these terms limits any rights you have under applicable consumer protection law.
      </p>
    ),
  },
  {
    id: 'governing-law',
    title: 'Governing law',
    body: (
      <p>
        These terms are governed by the laws of the Province of Alberta and the federal laws of Canada that apply there.
      </p>
    ),
  },
  {
    id: 'changes',
    title: 'Changes to these terms',
    body: (
      <p>
        We may update these terms from time to time. The effective date at the top of this page shows when they last changed. Continuing to use the website after an update means you accept the revised terms.
      </p>
    ),
  },
];

export default function TermsOfService() {
  return (
    <LegalLayout
      eyebrow="Website Terms"
      title="Terms of Service"
      documentTitle="Terms of Service | Aurora Passion Care"
      effectiveDate="October 16, 2026"
      intro={
        <p>
          The simple ground rules for using our website. Questions about our care services are always welcome by phone or email.
        </p>
      }
      sections={sections}
    />
  );
}
