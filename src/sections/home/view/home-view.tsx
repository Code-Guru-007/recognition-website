'use client';

// @mui
import Box from '@mui/material/Box';
// layouts
import MainLayout from 'src/layouts/main';
// components
import HomeHero from '../home-hero';
import HomeIntro from '../home-intro';
import HomeCategories from '../home-categories';
import HomeIntegration from '../home-integration';
import HomeTrial from '../home-trial';
import HomePricing from '../home-pricing';
import HomeQuestion from '../home-question';
import Homeblogs from '../home-blogs';
import Homeesg from '../home-esg';
import Homecross from '../home-cross';
import HomePrice from '../home-price';
import HomeEng from '../home-eng';

export default function HomeView() {
  return (
    <MainLayout>
      <HomeHero />

      <Box
        sx={{
          overflow: 'hidden',
          position: 'relative',
          bgcolor: 'background.default',
        }}
      >
        <Homeesg />

        <Homecross />

        <HomeCategories />

        <Homeblogs />

        <HomePrice />

        <HomeEng />
      </Box>
    </MainLayout>
  );
}
