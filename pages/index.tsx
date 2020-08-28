import NextLink from 'next/link';
import Page from '../src/components/page';

const About = () => (
  <div>
    <Page />
    hi
    <NextLink
      href="/about"
      as="/about"
    >
      About
    </NextLink>
  </div>
);

export default About;
