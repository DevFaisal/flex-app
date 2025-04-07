import FAQ from '../../pages/info/faq/FAQ';
import PageWrapper from '../components/PageWrapper';

const infoRoutes = [
  {
    path: 'faqs',
    element: () => PageWrapper({ title: 'FAQs', children: <FAQ /> }),
  },
];

export default infoRoutes;
