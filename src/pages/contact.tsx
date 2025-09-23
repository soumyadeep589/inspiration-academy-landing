import React from 'react';
import dynamic from 'next/dynamic';
import { MainLayout } from '@/components/layout';
import { NextPageWithLayout } from '@/interfaces/layout';

const DynamicContactForm = dynamic(() => import('../components/contact/contact-form'));

const ContactPage: NextPageWithLayout = () => {
  return (
    <>
      <DynamicContactForm />
    </>
  );
};

ContactPage.getLayout = (page) => <MainLayout>{page}</MainLayout>;

export default ContactPage;
