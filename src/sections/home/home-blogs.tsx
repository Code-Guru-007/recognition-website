import { m } from 'framer-motion';
// @mui
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
// components
import { MotionViewport, varFade } from 'src/components/animate';
import { CardContent, CardMedia } from '@mui/material';
import BlackCheckIcon from 'public/assets/icons/navbar/Black_Check.svg';

// ----------------------------------------------------------------------

const CARDS = [
  {
    icon: ' /assets/images/home/blog1.png',
    round: ' /assets/icons/home/round.svg',
    title: '醫療院所',
    description: ['醫院', '健檢'],
  },
  {
    icon: ' /assets/images/home/blog2.png',
    round: ' /assets/icons/home/round.svg',
    title: 'VIP 場所',
    description: ['行政酒廊', '機場貴賓室'],
  },
  {
    icon: ' /assets/images/home/blog3.png',
    round: ' /assets/icons/home/round.svg',
    title: '活動',
    description: ['Meetings', 'Incentives', 'Conferences', 'Exhibitions'],
  },
  {
    icon: ' /assets/images/home/blog4.png',
    round: ' /assets/icons/home/round.svg',
    title: '飯店',
    description: ['餐廳/酒吧', '會議室', '健身房'],
  },
];

// ----------------------------------------------------------------------

export default function Homeblogs() {
  return (
    <Stack
      component={MotionViewport}
      sx={{
        py: { xs: 10, md: 15 },
        maxWidth: '1722px',
        mx: 'auto',
      }}
    >
      <Stack
        spacing={2}
        sx={{
          textAlign: 'center',
          mb: { xs: 5, md: 10 },
        }}
      >
        <m.div variants={varFade().inUp}>
          <Typography sx={{ fontSize: { xs: '28px', md: '32px' }, fontWeight: 700 }}>
            智慧辨識，無所不在
          </Typography>
        </m.div>

        <m.div variants={varFade().inDown}>
          <Typography
            sx={{
              fontSize: '20px',
              textAlign: 'center',
              color: (theme) => theme.palette.grey[400],
            }}
          >
            從活動場合到尊貴空間，從醫療機構到餐飲娛樂，eGroupAI
            提供全方位的人臉辨識解決方案，為每一個空間帶來絕對的安全與個性化服務。
          </Typography>
        </m.div>
      </Stack>
      <Box
        gap={{ xs: 3, lg: 2, xl: 4 }}
        px={{ xs: 3 }}
        display="grid"
        alignItems="center"
        gridTemplateColumns={{
          xs: 'repeat(1, 1fr)',
          md: 'repeat(2, 1fr)',
          lg: 'repeat(4, 1fr)',
        }}
      >
        {CARDS.map((card, index) => (
          <m.div variants={varFade().inUp} key={card.title}>
            <Card
              sx={{
                height: '486px',
                maxWidth: '387px',
              }}
            >
              <CardMedia sx={{ height: 270 }} image={card.icon} title="green iguana" />
              <CardContent>
                <Typography sx={{ fontSize: '20px', fontWeight: 700, pb: 3 }}>
                  {card.title}
                </Typography>
                {card.description.map((item) => (
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, pb: 1 }}>
                    <BlackCheckIcon />
                    <Typography sx={{ fontSize: '14px' }} key={item}>
                      {item}
                    </Typography>
                  </Box>
                ))}
              </CardContent>
            </Card>
          </m.div>
        ))}
      </Box>
    </Stack>
  );
}
