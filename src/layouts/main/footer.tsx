import { m } from 'framer-motion';
// @mui
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

// ----------------------------------------------------------------------

export default function Footer() {
  const simpleFooter = (
    <Box
      component="footer"
      sx={{
        // pt: 5,
        pb: 0,
        bgcolor: 'background.default',
        position: 'relative',
      }}
    >
      <Box
        sx={{
          borderTop: '1px solid #0000001F',
          borderBottom: '1px solid #0000001F',
          px: 6,
          py: 5,
          maxWidth: '1296px',
          mx: 'auto',
        }}
      >
        <Grid container>
          <Grid xs={12} md={3}>
            <Stack flexDirection="column" gap={1}>
              <Typography
                sx={{
                  fontSize: '34px',
                  fontWeight: 500,
                  color: (theme) => theme.palette.grey[900],
                }}
              >
                eGroupAI
              </Typography>
              <Typography
                sx={{
                  color: (theme) => theme.palette.grey[800],
                  fontSize: '16px',
                }}
              >
                eGroupAI Inc.
              </Typography>
              <Typography
                sx={{
                  color: (theme) => theme.palette.grey[800],
                  fontSize: '16px',
                }}
              >
                No. 47, Sec. 2, Xinhai Rd., Da’an Dist.,
              </Typography>
              <Typography
                sx={{
                  color: (theme) => theme.palette.grey[800],
                  fontSize: '16px',
                }}
              >
                Taipei City 106, Taiwan(R.O.C.)
              </Typography>
            </Stack>
            <Box sx={{ mt: 4, display: 'flex', gap: 2, alignItems: 'start' }}>
              <Box
                component={m.img}
                alt="iso"
                src="/assets/icons/home/30701-3 2.jpg"
                sx={{
                  width: 184,
                }}
              />
              <Box
                component={m.img}
                alt="iso_mark"
                src="/assets/icons/home/iso_mark.png"
                sx={{
                  width: 80,
                }}
              />
            </Box>
          </Grid>
          <Grid xs={12} md={9} sx={{ px: { xs: 0, md: 2 }, mt: { xs: 2, md: 0 } }}>
            <Stack flexDirection="row" flexWrap="wrap" gap={1} justifyContent="space-between">
              <Stack flexDirection="column" gap={2}>
                <Typography
                  sx={{
                    color: (theme) => theme.palette.grey[800],
                    fontSize: '16px',
                    fontWeight: 'bold',
                  }}
                >
                  AboutUs
                </Typography>
                <Typography
                  sx={{
                    color: (theme) => theme.palette.grey[800],
                    fontSize: '16px',
                  }}
                >
                  Vision
                </Typography>
                <Typography
                  sx={{
                    color: (theme) => theme.palette.grey[800],
                    fontSize: '16px',
                  }}
                >
                  Why choose eGroupAI
                </Typography>
                <Typography
                  sx={{
                    color: (theme) => theme.palette.grey[800],
                    fontSize: '16px',
                  }}
                >
                  What we do
                </Typography>
                <Typography
                  sx={{
                    color: (theme) => theme.palette.grey[800],
                    fontSize: '16px',
                  }}
                >
                  Company development
                </Typography>
              </Stack>
              <Stack flexDirection="column" gap={2}>
                <Typography
                  sx={{
                    color: (theme) => theme.palette.grey[800],
                    fontSize: '16px',
                    fontWeight: 'bold',
                  }}
                >
                  Recognize
                </Typography>
                <Typography
                  sx={{
                    color: (theme) => theme.palette.grey[800],
                    fontSize: '16px',
                  }}
                >
                  Feature
                </Typography>
                <Typography
                  sx={{
                    color: (theme) => theme.palette.grey[800],
                    fontSize: '16px',
                  }}
                >
                  Deployed
                </Typography>
                <Typography
                  sx={{
                    color: (theme) => theme.palette.grey[800],
                    fontSize: '16px',
                  }}
                >
                  API
                </Typography>
                <Typography
                  sx={{
                    color: (theme) => theme.palette.grey[800],
                    fontSize: '16px',
                  }}
                >
                  Specification
                </Typography>
                <Typography
                  sx={{
                    color: (theme) => theme.palette.grey[800],
                    fontSize: '16px',
                  }}
                >
                  Senario
                </Typography>
                <Typography
                  sx={{
                    color: (theme) => theme.palette.grey[800],
                    fontSize: '16px',
                  }}
                >
                  Price
                </Typography>
              </Stack>
              <Stack flexDirection="column" gap={2}>
                <Typography
                  sx={{
                    color: (theme) => theme.palette.grey[800],
                    fontSize: '16px',
                    fontWeight: 'bold',
                  }}
                >
                  Liveness
                </Typography>
                <Typography
                  sx={{
                    color: (theme) => theme.palette.grey[800],
                    fontSize: '16px',
                  }}
                >
                  Feature
                </Typography>
                <Typography
                  sx={{
                    color: (theme) => theme.palette.grey[800],
                    fontSize: '16px',
                  }}
                >
                  Deployed
                </Typography>
                <Typography
                  sx={{
                    color: (theme) => theme.palette.grey[800],
                    fontSize: '16px',
                  }}
                >
                  API
                </Typography>
                <Typography
                  sx={{
                    color: (theme) => theme.palette.grey[800],
                    fontSize: '16px',
                  }}
                >
                  Specification
                </Typography>
                <Typography
                  sx={{
                    color: (theme) => theme.palette.grey[800],
                    fontSize: '16px',
                  }}
                >
                  Senario
                </Typography>
                <Typography
                  sx={{
                    color: (theme) => theme.palette.grey[800],
                    fontSize: '16px',
                  }}
                >
                  Price
                </Typography>
              </Stack>
              <Stack flexDirection="column" gap={2}>
                <Typography
                  sx={{
                    color: (theme) => theme.palette.grey[800],
                    fontSize: '16px',
                    fontWeight: 'bold',
                  }}
                >
                  Scenario
                </Typography>
                <Typography
                  sx={{
                    color: (theme) => theme.palette.grey[800],
                    fontSize: '16px',
                  }}
                >
                  Facial Recognition
                </Typography>
                <Typography
                  sx={{
                    color: (theme) => theme.palette.grey[800],
                    fontSize: '16px',
                  }}
                >
                  Applications -Service
                </Typography>
              </Stack>
              <Stack flexDirection="column" gap={2}>
                <Typography
                  sx={{
                    color: (theme) => theme.palette.grey[800],
                    fontSize: '16px',
                    fontWeight: 'bold',
                  }}
                >
                  Article
                </Typography>
                <Typography
                  sx={{
                    color: (theme) => theme.palette.grey[800],
                    fontSize: '16px',
                  }}
                >
                  Classification
                </Typography>
                <Typography
                  sx={{
                    color: (theme) => theme.palette.grey[800],
                    fontSize: '16px',
                  }}
                >
                  Knowledge
                </Typography>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Box>
      <Stack
        flexDirection="row"
        flexWrap="wrap"
        justifyContent="space-between"
        sx={{ px: 6, py: 2, position: 'relative' }}
        gap={2}
      >
        <Typography
          sx={{
            color: (theme) => theme.palette.grey[400],
            fontSize: '14px',
          }}
        >
          © eGroupAI. 2023. All rights reserved
        </Typography>
        <Stack flexDirection="row" justifyContent="flex-end" gap={5}>
          <Typography
            sx={{
              color: (theme) => theme.palette.grey[400],
              fontSize: '14px',
            }}
          >
            Privacy Policy
          </Typography>
          <Typography
            sx={{
              color: (theme) => theme.palette.grey[400],
              fontSize: '14px',
            }}
          >
            Cookie Policy
          </Typography>
        </Stack>
      </Stack>
        <Box sx={{ position:'absolute', right:'2%', top:'30%', display:{xs:'hidden', md:'grid'}, gap:2 }}>
        <img
            alt="cover"
            src="/assets/icons/home/share.png"
          />
          <img
            alt="cover"
            src="/assets/icons/home/contact.png"
          />
        </Box>
    </Box>
  );

  return simpleFooter;
}
