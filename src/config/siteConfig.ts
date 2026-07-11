/**
 * VITALITY WELLNESS — BUYER CONFIGURATION FILE
 * ------------------------------------------------------------
 * Edit the values below to rebrand this template for your own
 * wellness studio, day spa, skincare studio or beauty business.
 * You should not need to touch component files to complete a
 * standard rebrand — ordinary business details live in this
 * one file (plus optionally swapping `activeTheme`).
 *
 * IMPORTANT: every name, address, phone number, price, review,
 * rating and statistic below is FICTIONAL DEMONSTRATION CONTENT
 * created for template purposes only. Replace it before you
 * publish your own site. See /disclaimer.html for the full
 * template disclaimer.
 * ------------------------------------------------------------
 */

export interface BusinessHour {
  day: string
  hours: string
}

export interface SocialLinks {
  instagram?: string
  facebook?: string
  tiktok?: string
}

export interface Practitioner {
  name: string
  role: string
  bio: string
}

export interface Treatment {
  id: string
  category: string
  name: string
  description: string
  priceFrom: number
  currency: string
  durationMins?: number
}

export interface ConsultationOption {
  id: string
  label: string
  /** Category or pace tag used to build a non-diagnostic summary. */
  tag: string
}

export interface ConsultationQuestion {
  id: string
  question: string
  options: ConsultationOption[]
}

export interface Testimonial {
  quote: string
  author: string
  location?: string
  rating: number
  /** Always true — used by the UI to render a "fictional sample" badge. */
  isFictional: true
}

export interface FAQItem {
  question: string
  answer: string
}

export interface TrustIndicator {
  value: string
  label: string
  /** Always true — used by the UI to render a "demo content" caption. */
  isDemo: true
}

export interface GalleryItem {
  alt: string
  gradientFrom: string
  gradientTo: string
}

export interface ProcessStep {
  step: number
  title: string
  text: string
}

export interface WhyChooseUsItem {
  title: string
  text: string
}

export interface ThemeColors {
  bg: string
  bgAlt: string
  primary50: string
  primary100: string
  primary500: string
  primary900: string
  accent500: string
  accent600: string
}

export interface ThemePreset {
  label: string
  colors: ThemeColors
}

export type ThemeName = 'sageSerenity' | 'champagneGlow' | 'midnightBotanica'

export interface SiteConfig {
  businessName: string
  tagline: string
  description: string
  phone: string
  whatsappNumber: string
  email: string
  address: {
    line1: string
    line2: string
    country: string
  }
  mapUrl: string
  hours: BusinessHour[]
  bookingUrl: string
  socialLinks: SocialLinks
  practitioners: Practitioner[]
  treatmentCategories: string[]
  treatments: Treatment[]
  consultationQuestions: ConsultationQuestion[]
  consultationResultCategories: Record<string, string>
  testimonials: Testimonial[]
  faqs: FAQItem[]
  trustIndicators: TrustIndicator[]
  galleryItems: GalleryItem[]
  announcementText: string
  disclaimerText: string
  processSteps: ProcessStep[]
  whyChooseUs: WhyChooseUsItem[]
  newsletter: {
    heading: string
    subheading: string
  }
  seo: {
    siteUrl: string
    metaTitle: string
    metaDescription: string
    ogImage: string
  }
  activeTheme: ThemeName
  themes: Record<ThemeName, ThemePreset>
}

export const siteConfig: SiteConfig = {
  businessName: 'Vitality Wellness',
  tagline: 'A calmer kind of glow, in the heart of Claremont',
  description:
    'Vitality Wellness is a fictional demonstration wellness studio offering facials, massage and mindful body treatments in a calm, considered setting.',
  phone: '(203) 555-0148',
  whatsappNumber: '12035550148',
  email: 'hello@vitalitywellness.example',
  address: {
    line1: '221 Maple Ridge Lane',
    line2: 'Claremont, CT 06001',
    country: 'United States',
  },
  mapUrl: '',
  hours: [
    { day: 'Monday – Friday', hours: '9:00 AM – 7:00 PM' },
    { day: 'Saturday', hours: '9:00 AM – 4:00 PM' },
    { day: 'Sunday', hours: 'Closed' },
  ],
  bookingUrl: '',
  socialLinks: {
    instagram: 'https://instagram.com/',
    facebook: 'https://facebook.com/',
    tiktok: '',
  },
  practitioners: [
    {
      name: 'Maren Ellison',
      role: 'Founder & Lead Esthetician',
      bio: 'Maren founded Vitality Wellness to create an unhurried space where skincare and body treatments are paired with genuine, personal attention. Demo team profile — replace with your own practitioner’s name, photo and real qualifications.',
    },
  ],
  treatmentCategories: [
    'Facials & Skincare',
    'Massage & Body Therapies',
    'Wellness Rituals',
    'Special Occasion Packages',
  ],
  treatments: [
    {
      id: 'radiance-facial',
      category: 'Facials & Skincare',
      name: 'Radiance Facial',
      description: 'A multi-step cleanse, gentle exfoliation and hydration facial designed to leave skin feeling refreshed.',
      priceFrom: 95,
      currency: '$',
      durationMins: 60,
    },
    {
      id: 'botanical-peel',
      category: 'Facials & Skincare',
      name: 'Botanical Peel',
      description: 'A gentle plant-enzyme peel intended to support smoother-feeling tone and texture over a course of visits.',
      priceFrom: 120,
      currency: '$',
      durationMins: 45,
    },
    {
      id: 'seasonal-refresh',
      category: 'Facials & Skincare',
      name: 'Seasonal Skin Refresh',
      description: 'A seasonal facial treatment adapted to how your skin is feeling as the weather changes.',
      priceFrom: 100,
      currency: '$',
      durationMins: 60,
    },
    {
      id: 'calming-massage',
      category: 'Massage & Body Therapies',
      name: 'Calming Full-Body Massage',
      description: 'A full-body massage using warm botanical oils, paced to help ease everyday tension.',
      priceFrom: 110,
      currency: '$',
      durationMins: 60,
    },
    {
      id: 'hot-stone',
      category: 'Massage & Body Therapies',
      name: 'Hot Stone Therapy',
      description: 'Heated stones combined with massage technique for a deeply relaxing session.',
      priceFrom: 135,
      currency: '$',
      durationMins: 75,
    },
    {
      id: 'mindful-movement',
      category: 'Wellness Rituals',
      name: 'Mindful Movement & Breathwork',
      description: 'A guided session combining gentle movement and breathing techniques to support everyday balance.',
      priceFrom: 60,
      currency: '$',
      durationMins: 45,
    },
    {
      id: 'infrared-sauna',
      category: 'Wellness Rituals',
      name: 'Infrared Sauna Ritual',
      description: 'A relaxing infrared sauna session, often booked as a stand-alone visit or added to another treatment.',
      priceFrom: 45,
      currency: '$',
      durationMins: 30,
    },
    {
      id: 'occasion-package',
      category: 'Special Occasion Packages',
      name: 'Bridal & Event Glow Package',
      description: 'A curated combination of facial and massage services designed around an upcoming special occasion.',
      priceFrom: 220,
      currency: '$',
      durationMins: 120,
    },
  ],
  consultationQuestions: [
    {
      id: 'focus',
      question: 'What kind of experience are you drawn to today?',
      options: [
        { id: 'facials', label: 'Glowing, refreshed skin', tag: 'Facials & Skincare' },
        { id: 'massage', label: 'Deep relaxation & tension relief', tag: 'Massage & Body Therapies' },
        { id: 'wellness', label: 'Calm, balance & recovery', tag: 'Wellness Rituals' },
        { id: 'event', label: 'Preparing for a special occasion', tag: 'Special Occasion Packages' },
      ],
    },
    {
      id: 'pace',
      question: 'How much time would you like to set aside?',
      options: [
        { id: 'quick', label: 'A quick reset (30 minutes or less)', tag: 'a quick reset' },
        { id: 'full', label: 'A full, unhurried session (60–90 minutes)', tag: 'a full session' },
        { id: 'ongoing', label: 'An ongoing plan over several visits', tag: 'an ongoing plan' },
        { id: 'unsure', label: 'Not sure yet — I’d like guidance', tag: 'guidance on pacing' },
      ],
    },
  ],
  consultationResultCategories: {
    'Facials & Skincare':
      'Based on your preferences, our Facials & Skincare services may be worth discussing with our team.',
    'Massage & Body Therapies':
      'Based on your preferences, our Massage & Body Therapies services may be worth discussing with our team.',
    'Wellness Rituals':
      'Based on your preferences, our Wellness Rituals services may be worth discussing with our team.',
    'Special Occasion Packages':
      'Based on your preferences, our Special Occasion Packages may be worth discussing with our team.',
  },
  testimonials: [
    {
      quote: 'Sample testimonial: the studio felt calm the moment I walked in, and nothing about the visit felt rushed.',
      author: 'J. Whitfield',
      location: 'Demo review',
      rating: 5,
      isFictional: true,
    },
    {
      quote: 'Sample testimonial: I liked that the team asked about my goals instead of just running through a set menu.',
      author: 'R. Alvarez',
      location: 'Demo review',
      rating: 5,
      isFictional: true,
    },
    {
      quote: 'Sample testimonial: clear aftercare guidance and no pressure to book anything extra.',
      author: 'T. Novak',
      location: 'Demo review',
      rating: 4,
      isFictional: true,
    },
    {
      quote: 'Sample testimonial: a genuinely relaxing hour — exactly what I needed before a busy week.',
      author: 'S. Okafor',
      location: 'Demo review',
      rating: 5,
      isFictional: true,
    },
  ],
  faqs: [
    {
      question: 'Do I need to book a consultation before my first visit?',
      answer: 'We recommend a short consultation for first-time visits so our team can discuss your goals and confirm which services suit you.',
    },
    {
      question: 'What should I expect during my first appointment?',
      answer: 'A member of our team will talk through your preferences, answer any questions, and walk you through the space before your treatment begins.',
    },
    {
      question: 'Are your treatments suitable for sensitive skin?',
      answer: 'Many of our treatments can be adapted for different skin types. Let us know about any sensitivities when you book so we can plan accordingly.',
    },
    {
      question: 'What is your cancellation policy?',
      answer: 'We ask for at least 24 hours’ notice for cancellations or rescheduling. (Replace this with your own studio’s policy.)',
    },
    {
      question: 'Do you offer packages for special occasions?',
      answer: 'Yes — our Special Occasion Packages combine a few of our most popular services ahead of events like weddings or celebrations.',
    },
    {
      question: 'How do I book an appointment?',
      answer: 'Use the WhatsApp button, call the studio directly, or send us a message through the contact form below.',
    },
    {
      question: 'Will a treatment guarantee a specific result?',
      answer: 'Results vary between individuals and depend on factors like skin type and consistency of visits. We don’t guarantee specific outcomes and are happy to talk through realistic expectations.',
    },
    {
      question: 'Do you offer gift cards?',
      answer: 'Gift cards are available in-studio and make a popular gift for birthdays, holidays or special occasions.',
    },
  ],
  trustIndicators: [
    { value: '500+', label: 'Client Visits', isDemo: true },
    { value: '4.9', label: 'Sample Rating', isDemo: true },
    { value: '8+', label: 'Years Operating', isDemo: true },
    { value: '8', label: 'Signature Treatments', isDemo: true },
  ],
  galleryItems: [
    { alt: 'Demo gallery image — replace with your own studio photography', gradientFrom: '#e5ede5', gradientTo: '#c7d6c7' },
    { alt: 'Demo gallery image — replace with your own treatment room photography', gradientFrom: '#f4f7f4', gradientTo: '#d8e3d8' },
    { alt: 'Demo gallery image — replace with your own product photography', gradientFrom: '#efe0d2', gradientTo: '#e3c9a8' },
    { alt: 'Demo gallery image — replace with your own facial treatment photography', gradientFrom: '#f7f0e9', gradientTo: '#e6d2b8' },
    { alt: 'Demo gallery image — replace with your own massage room photography', gradientFrom: '#e5ede5', gradientTo: '#a8c3a8' },
    { alt: 'Demo gallery image — replace with your own reception area photography', gradientFrom: '#fcf8f0', gradientTo: '#e5d9c5' },
  ],
  announcementText: 'Now booking seasonal wellness packages — this is placeholder announcement copy, edit in siteConfig.ts',
  disclaimerText:
    'The business details, treatments, prices, reviews and statistics on this site are fictional demonstration content and do not constitute medical advice. See our full disclaimer for details.',
  processSteps: [
    { step: 1, title: 'Enquire', text: 'Reach out by phone, WhatsApp or our contact form to tell us what you’re looking for.' },
    { step: 2, title: 'Consultation', text: 'We’ll discuss your preferences and goals to suggest suitable services.' },
    { step: 3, title: 'Personalized Plan', text: 'Receive a tailored suggestion of treatments and a recommended visit schedule.' },
    { step: 4, title: 'Ongoing Care', text: 'Book follow-up visits and adjust your plan as your preferences change.' },
  ],
  whyChooseUs: [
    { title: 'Unhurried, Personal Care', text: 'Every visit is paced around you — no rushed slots, no clock-watching.' },
    { title: 'Thoughtfully Designed Menu', text: 'A considered range of services rather than an overwhelming checklist of add-ons.' },
    { title: 'A Calm, Considered Space', text: 'A studio designed to feel like a genuine pause in your day.' },
    { title: 'Flexible Scheduling', text: 'Evening and weekend appointments to fit around your routine.' },
  ],
  newsletter: {
    heading: 'Wellness tips, straight to your inbox',
    subheading: 'Occasional emails with seasonal self-care ideas and studio updates.',
  },
  seo: {
    siteUrl: 'https://iederees-create.github.io/vitality-wellness-claremont-ct/',
    metaTitle: 'Vitality Wellness | Wellness Studio & Spa Website Template',
    metaDescription:
      'Vitality Wellness is a premium, conversion-focused website template for wellness studios, day spas, skincare studios and beauty businesses. Fully customizable demo content.',
    ogImage: '/og-image.svg',
  },
  activeTheme: 'sageSerenity',
  themes: {
    sageSerenity: {
      label: 'Sage Serenity',
      colors: {
        bg: '#fdfbf7',
        bgAlt: '#fcf8f0',
        primary50: '#f4f7f4',
        primary100: '#e5ede5',
        primary500: '#8ba78b',
        primary900: '#2c3a2c',
        accent500: '#d4af37',
        accent600: '#b8952e',
      },
    },
    champagneGlow: {
      label: 'Champagne Glow',
      colors: {
        bg: '#fdf8f3',
        bgAlt: '#f8ede0',
        primary50: '#f7f0e9',
        primary100: '#efe0d2',
        primary500: '#b98a5e',
        primary900: '#4a3524',
        accent500: '#d68a8a',
        accent600: '#bf6f6f',
      },
    },
    midnightBotanica: {
      label: 'Midnight Botanica',
      colors: {
        bg: '#f6f5f1',
        bgAlt: '#eeece4',
        primary50: '#eceee9',
        primary100: '#d9ddd0',
        primary500: '#3f5b44',
        primary900: '#1c2a1e',
        accent500: '#a8873f',
        accent600: '#8f7134',
      },
    },
  },
}
