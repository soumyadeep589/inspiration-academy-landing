import { MainLayout } from '@/components/layout';
import { NextPageWithLayout } from '@/interfaces/layout';
import dynamic from 'next/dynamic';

const DynamicContactHero = dynamic(() => import('../components/contact/contact-hero'));
const DynamicContactForm = dynamic(() => import('../components/contact/contact-form'));

const ContactPage: NextPageWithLayout = () => {
  return (
    <>
      <DynamicContactHero />
      <DynamicContactForm />
    </>
  );
};

ContactPage.getLayout = (page) => <MainLayout>{page}</MainLayout>;

export default ContactPage;
