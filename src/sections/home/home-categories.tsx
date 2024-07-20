import { m } from 'framer-motion';
// @mui
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
// components
import { MotionViewport, varFade } from 'src/components/animate';

// ----------------------------------------------------------------------

const CARDS = [
  {
    icon: ' /assets/icons/home/timer.png',
    round: ' /assets/icons/home/round.svg',
    title: '即時辨識，不限裝置',
    description: '不侷限於特定設備，保證您能在任何場合、任何裝置上實現即時辨識。',
  },
  {
    icon: ' /assets/icons/home/code.png',
    round: ' /assets/icons/home/round.svg',
    title: '支援普遍、開源社群',
    description: '全面支持普及的 IOT 解決方案，確保技術的靈活應用與社群的共同進步',
  },
  {
    icon: ' /assets/icons/home/note.png',
    round: ' /assets/icons/home/round.svg',
    title: '價格公開透明、一次買斷',
    description: '提供完全透明的定價，一次購買終生使用。享受簡單明瞭的投資回報，無後顧之憂。',
  },
];

// ----------------------------------------------------------------------

export default function HomeCategories() {
  return (
    <Container
      component={MotionViewport}
      maxWidth={false}
      sx={{
        py: { xs: 10, md: 15 },
        backgroundImage: "url('../assets/images/home/bggpu.png')",
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <Stack
        spacing={3}
        sx={{
          textAlign: 'center',
          mb: { xs: 5, md: 10 },
        }}
      >
        <m.div variants={varFade().inUp}>
          <Typography variant="h3">靈活高效的辨識解決方案，一次買斷享無界限應用</Typography>
        </m.div>

        <m.div variants={varFade().inDown}>
          <Typography sx={{ fontSize: '20px', color: (theme) => theme.palette.grey[400] }}>
            輕便、高彈性的人臉辨識解決方案，無需GPU，支持跨平台即時辨識。一次性購買，省心省力。
          </Typography>
        </m.div>
      </Stack>

      <Container>
        <Box
          gap={{ xs: 3, lg: 10 }}
          display="grid"
          alignItems="center"
          gridTemplateColumns={{
            xs: 'repeat(1, 1fr)',
            md: 'repeat(3, 1fr)',
          }}
        >
          {CARDS.map((card, index) => (
            <m.div variants={varFade().inUp} key={card.title}>
              <Box
                sx={{
                  textAlign: 'center',
                  p: (theme) => theme.spacing(2, 1),
                  minHeight: '248px',
                }}
              >
                <Box
                  component="img"
                  src={card.icon}
                  alt={card.title}
                  sx={{
                    width: 64,
                    height: 64,
                  }}
                />
                <Typography variant="h5" sx={{ mt: 4, mb: 0 }}>
                  {card.title}
                </Typography>
                <Typography sx={{ mt: 2, mb: 0 }}>{card.description}</Typography>
              </Box>
            </m.div>
          ))}
        </Box>
      </Container>
    </Container>
  );
}
