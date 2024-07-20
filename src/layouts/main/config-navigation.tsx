// routes
import { paths } from 'src/routes/paths';
// config
// import { PATH_AFTER_LOGIN } from 'src/config-global';
// components
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

export const navConfig = [
  // {
  //   title: 'Landings',
  //   icon: <Iconify icon="solar:home-2-bold-duotone" />,
  //   path: '/',
  //   childred: [],
  // },
  {
    title: 'About Us',
    path: '/about-us',
    icon: <Iconify icon="solar:file-bold-duotone" />,
    children: [
      {
        subheader: '',
        items: [
          { title: 'About us', path: paths.about },
          { title: 'Contact us', path: paths.contact },
          { title: 'FAQs', path: paths.faqs },
          { title: 'Pricing', path: paths.pricing },
          { title: 'Payment', path: paths.payment },
          { title: 'Maintenance', path: paths.maintenance },
          { title: 'Coming Soon', path: paths.comingSoon },
        ],
      },
      // {
      //   subheader: 'Dashboard',
      //   items: [{ title: 'Dashboard', path: PATH_AFTER_LOGIN }],
      // },
    ],
  },
  {
    title: 'Recognize',
    path: '/recognize',
    icon: <Iconify icon="solar:file-bold-duotone" />,
    children: [
      {
        subheader: '',
        items: [
          { title: 'About us', path: paths.about },
          { title: 'Contact us', path: paths.contact },
          { title: 'FAQs', path: paths.faqs },
          { title: 'Pricing', path: paths.pricing },
          { title: 'Payment', path: paths.payment },
          { title: 'Maintenance', path: paths.maintenance },
          { title: 'Coming Soon', path: paths.comingSoon },
        ],
      },
      // {
      //   subheader: 'Dashboard',
      //   items: [{ title: 'Dashboard', path: PATH_AFTER_LOGIN }],
      // },
    ],
  },
  {
    title: 'Liveness',
    path: '/liveness',
    icon: <Iconify icon="solar:file-bold-duotone" />,
    children: [
      {
        subheader: '',
        items: [
          { title: 'About us', path: paths.about },
          { title: 'Contact us', path: paths.contact },
          { title: 'FAQs', path: paths.faqs },
          { title: 'Pricing', path: paths.pricing },
          { title: 'Payment', path: paths.payment },
          { title: 'Maintenance', path: paths.maintenance },
          { title: 'Coming Soon', path: paths.comingSoon },
        ],
      },
      // {
      //   subheader: 'Dashboard',
      //   items: [{ title: 'Dashboard', path: PATH_AFTER_LOGIN }],
      // },
    ],
  },
  {
    title: 'Scenario',
    path: '/scenario',
    icon: <Iconify icon="solar:file-bold-duotone" />,
    children: [
      {
        subheader: '',
        items: [
          { title: 'About us', path: paths.about },
          { title: 'Contact us', path: paths.contact },
          { title: 'FAQs', path: paths.faqs },
          { title: 'Pricing', path: paths.pricing },
          { title: 'Payment', path: paths.payment },
          { title: 'Maintenance', path: paths.maintenance },
          { title: 'Coming Soon', path: paths.comingSoon },
        ],
      },
      // {
      //   subheader: 'Dashboard',
      //   items: [{ title: 'Dashboard', path: PATH_AFTER_LOGIN }],
      // },
    ],
  },
  {
    title: 'Article',
    path: '/article',
    icon: <Iconify icon="solar:file-bold-duotone" />,
    children: [
      {
        subheader: '',
        items: [
          { title: 'About us', path: paths.about },
          { title: 'Contact us', path: paths.contact },
          { title: 'FAQs', path: paths.faqs },
          { title: 'Pricing', path: paths.pricing },
          { title: 'Payment', path: paths.payment },
          { title: 'Maintenance', path: paths.maintenance },
          { title: 'Coming Soon', path: paths.comingSoon },
        ],
      },
      // {
      //   subheader: 'Dashboard',
      //   items: [{ title: 'Dashboard', path: PATH_AFTER_LOGIN }],
      // },
    ],
  },
  // {
  //   title: 'Account',
  //   path: '/account',
  //   icon: <Iconify icon="solar:file-bold-duotone" />,
  //   children: [
  //     {
  //       subheader: '',
  //       items: [{ title: 'Coming Soon', path: paths.comingSoon }],
  //     },
  //   ],
  // },
  // {
  //   title: 'Documentation',
  //   icon: <Iconify icon="solar:notebook-bold-duotone" />,
  //   path: paths.documentation,
  // },
];
