import React from 'react';
import dynamic from 'next/dynamic';
import { MainLayout } from '@/components/layout';
import { NextPageWithLayout } from '@/interfaces/layout';

const DynamicCourseHero = dynamic(() => import('../components/course/course-hero'));
const DynamicCourseList = dynamic(() => import('../components/course/course-list'));

const CoursesPage: NextPageWithLayout = () => {
  return (
    <>
      <DynamicCourseHero />
      <DynamicCourseList />
    </>
  );
};

CoursesPage.getLayout = (page) => <MainLayout>{page}</MainLayout>;

export default CoursesPage;
