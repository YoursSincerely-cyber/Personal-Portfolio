import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import FacebookIcon from "../components/Icon/FacebookIcon";
import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilePic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'My portfolio',
  description: "Personal portfolio designed to showcase my expertise",
};

/**
 * Section definition
 */
export const SectionId = {
  About: 'about',
  Contact: 'contact',
  Hero: 'hero',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  actions: [
    {
      href: '/assets/resume.pdf',
      Icon: ArrowDownTrayIcon,
      primary: true,
      text: 'Resume',
    },
    {
      href: `#${SectionId.Contact}`,
      primary: false,
      text: 'Contact',
    },
  ],
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a Pakistan based <strong className="text-stone-100">Front-End Web Developer</strong>, currently looking
        for an <strong className="text-stone-100">Internship.</strong> Eager to help build a modern, mobile-first, domain
        registrar and site builder.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time, I love exploring new adventures whether it's <strong className="text-stone-100">hiking</strong>,
        through scenic trails, capturing moments with <strong className="text-stone-100">photography</strong>
        , or diving into creative <strong className="text-stone-100">coding projects</strong> that bring ideas to life.{' '}
      </p>
    </>
  ),
  imageSrc: heroImage,
  name: `I'm Haseen Afridi.`,
};

/**
 * About section
 */
export const aboutData: About = {
  aboutItems: [
    { Icon: MapIcon, label: 'Location', text: 'Karachi' },
    { Icon: CalendarIcon, label: 'Age', text: '20' },
    { Icon: FlagIcon, label: 'Nationality', text: 'Pakistani' },
    { Icon: SparklesIcon, label: 'Interests', text: 'Sports, Gym' },
    { Icon: AcademicCapIcon, label: 'Study', text: 'Ned University' },
    { Icon: BuildingOffice2Icon, label: 'Employment', text: 'Seeking internship' },
  ],
  description: `As a Front-end Developer, my key purpose is to build scalable, responsive
  and secure websites using latest Tech stacks.`,
  profileImageSrc: profilepic,
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Frontend development',
    skills: [
      { level: 9, name: 'React' },
      { level: 7, name: 'Typescript' },
      { level: 6, name: 'Nextjs' },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      { level: 8, name: 'Node.js' },
      { level: 5, name: 'Rust' },
      { level: 4, name: 'Golang' },
    ],
  },
  {
    name: 'Spoken languages',
    skills: [
      { level: 10, name: 'English' },
      { level: 4, name: 'Urdu' },
      { level: 1, name: 'Turkish' },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  { description: 'Give a short description of your project here.', image: porfolioImage1, title: 'Project title 1', url: 'https://reactresume.com' },
  { description: 'Give a short description of your project here.', image: porfolioImage2, title: 'Project title 2', url: 'https://reactresume.com' },
  { description: 'Give a short description of your project here.', image: porfolioImage3, title: 'Project title 3', url: 'https://reactresume.com' },
  { description: 'Give a short description of your project here.', image: porfolioImage4, title: 'Project title 4', url: 'https://reactresume.com' },
  { description: 'Give a short description of your project here.', image: porfolioImage5, title: 'Project title 5', url: 'https://reactresume.com' },
  { description: 'Give a short description of your project here.', image: porfolioImage6, title: 'Project title 6', url: 'https://reactresume.com' },
  { description: 'Give a short description of your project here.', image: porfolioImage7, title: 'Project title 7', url: 'https://reactresume.com' },
  { description: 'Give a short description of your project here.', image: porfolioImage8, title: 'Project title 8', url: 'https://reactresume.com' },
  { description: 'Give a short description of your project here.', image: porfolioImage9, title: 'Project title 9', url: 'https://reactresume.com' },
  { description: 'Give a short description of your project here.', image: porfolioImage10, title: 'Project title 10', url: 'https://reactresume.com' },
  { description: 'Give a short description of your project here.', image: porfolioImage11, title: 'Project title 11', url: 'https://reactresume.com' },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  { date: 'October 2023', location: 'Ned University', title: 'Bachelors in Telecommunication', content: <p>Describe your experience at school, what you learned, what useful skills you have acquired etc.</p> },
  { date: 'March 2021', location: 'FalconHouse Grammar School', title: 'Matriculation', content: <p>Describe your experience at school, what you learned, what useful skills you have acquired etc.</p> },
];

export const experience: TimelineItem[] = [
  { date: 'March 2010 - Present', location: 'Awesome Development Company', title: 'Senior UX Engineer', content: <p>Describe work, special projects, notable achievements, what technologies you have been working with, and anything else that would be useful for an employer to know.</p> },
  { date: 'March 2007 - February 2010', location: 'Garage Startup Studio', title: 'Junior bug fixer', content: <p>Describe work, special projects, notable achievements, what technologies you have been working with, and anything else that would be useful for an employer to know.</p> },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    { name: 'Haseen Khan', text: 'I’ve been thoroughly impressed by this portfolio!...', image: 'https://th.bing.com/th/id/OIP.IhHfxrnrxZcij7AAwZrnZQAAAA?w=115&h=190&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
    { name: 'Omer Khan', text: 'This portfolio is a great example of how to effectively present...', image: 'https://th.bing.com/th/id/OIP.IzipPT7JyLJxY7HbTWRUkAHaHa?w=190&h=190&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
    { name: 'Someone Me', text: 'I absolutely love how this portfolio captures...', image: 'https://th.bing.com/th/id/OIP.47sG9d2l51fPG3gIr7CbEgHaHa?w=207&h=207&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
  ],
};

/**
 * Contact section
 */
export const contact: ContactSection = {
  description: 'Here is a good spot for a message to your readers to let them know how best to reach out to you.',
  headerText: 'Get in touch.',
  items: [
    { type: ContactType.Email, text: 'haseenafridi10@gmail.com' },
    { type: ContactType.Location, text: 'Karachi, Pakistan' },
    { type: ContactType.Instagram, text: '@haseen__afridi', href: 'https://www.instagram.com/tbakerx/' },
    { type: ContactType.Github, text: 'haseenafridi10', href: 'https://github.com/tbakerx' },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  { label: 'Facebook', Icon: FacebookIcon, href: 'https://www.facebook.com/haseenafridi10@gmail.com' },
  { label: 'Github', Icon: GithubIcon, href: 'https://github.com/haseenafridi10' },
  { label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/haseen__afridi/' },
];
