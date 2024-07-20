import { m } from 'framer-motion';
// @mui
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
// components
import { MotionViewport, varFade } from 'src/components/animate';
import { Button } from '@mui/material';
import BlueCheckIcon from 'public/assets/icons/navbar/Blue_Check.svg';

// ----------------------------------------------------------------------

const CARDS = [
  {
    title: 'PC 辨識系統',
    subtitle: '',
    price: '60,000',
    description: ['模型管理系統 - 運作於PC主機', '辨識系統 - 運作於PC主機 '],
  },
  {
    title: 'Edge Computing 辨識系統',
    subtitle: '外加 SDK 授權費用 NT$ 5000/套',
    price: '800,000',
    description: ['模型系統管理 - 運作於 Server 伺服器', '辨識系統 - 運作於 PC 主機 / IOT 設備 '],
  },
  {
    title: 'Edge Computing 辨識系統',
    subtitle: '外加 SDK 授權費用 NT$ 5000/套',
    price: '800,000',
    description: ['模型系統管理 - 運作於 Server 伺服器', '辨識系統 - 運作於 PC 主機 / IOT 設備 '],
  },
];

// ----------------------------------------------------------------------

export default function HomePrice() {
  return (
    <Stack
      sx={{
        py: { xs: 10, md: 15 },
        backgroundColor: '#F8F9FC',
      }}
    >
      <Stack
        component={MotionViewport}
        sx={{
          maxWidth: '1205px',
          mx: 'auto',
        }}
      >
        <Stack
          spacing={3}
          sx={{
            textAlign: 'center',
            mb: { xs: 3, md: '35px' },
          }}
        >
          <m.div variants={varFade().inUp}>
            <Typography sx={{ fontSize: { xs: '28px', md: '32px', fontWeight: 700, pb: 2 } }}>
              立即選擇您的人臉辨識方案！
            </Typography>
          </m.div>

          <m.div variants={varFade().inDown}>
            <Typography sx={{ fontSize: '20px', color: (theme) => theme.palette.grey[400] }}>
              從單一辨識地點快速識別到全域智能辨識，我們提供兩種公開且透明的定價選項以符合您的具體需求
            </Typography>
          </m.div>
        </Stack>

        <Container>
          <Box
            gap={{ xs: 3, lg: 4 }}
            display="grid"
            alignItems="center"
            gridTemplateColumns={{
              xs: 'repeat(1, 1fr)',
              md: 'repeat(3, 1fr)',
            }}
          >
            {CARDS.map((card, index) => (
              <m.div variants={varFade().inUp} key={card.title}>
                <Card
                  sx={{
                    p: (theme) => theme.spacing(2, 1),
                    minWidth: '385px',
                    height: '474px',
                    px: 4,
                    py: '36px',
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      height: '100%',
                    }}
                  >
                    <Box>
                      <Typography sx={{ mb: 2, fontSize: '20px', fontWeight: 700 }}>
                        {card.title}
                      </Typography>
                      <Box>
                        <Typography
                          color="primary"
                          sx={{ fontSize: { xs: '28px', md: '32px' }, fontWeight: 700 }}
                        >
                          NT${card.price}
                        </Typography>
                        <Typography
                          color="primary"
                          sx={{
                            mt: 1,
                            mb: 4,
                            fontSize: { xs: '14px', md: '16px' },
                            fontWeight: 700,
                          }}
                        >
                          {card.subtitle}
                        </Typography>
                      </Box>
                      {card.description.map((item) => (
                        <Box sx={{ mt: 2, mb: 0, display: 'flex', alignItems: 'center', gap: 1 }}>
                          <BlueCheckIcon />
                          <Typography sx={{ fontSize: { xs: '14px', md: '16px' } }} key={item}>
                            {item}
                          </Typography>
                        </Box>
                      ))}
                    </Box>
                    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'end' }}>
                      <Button
                        size="large"
                        variant="contained"
                        color="primary"
                        sx={{
                          width: '118px',
                          height: '42px',
                          fontSize: '15px',
                          fontWeight: 400,
                        }}
                      >
                        方案說明
                      </Button>
                    </Box>
                  </Box>
                </Card>
              </m.div>
            ))}
          </Box>
        </Container>
      </Stack>
    </Stack>
  );
}
