// @mui
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';
// routes
import { paths } from 'src/routes/paths';

import Iconify from 'src/components/iconify';
// hooks
// ----------------------------------------------------------------------

export default function HomeIntegration() {
  return (
    <Container sx={{ pt: 5 }}>
      <Grid container columnSpacing={{ md: 10 }} sx={{ padding: 3, pb: 5 }}>
        <Grid xs={12} md={6} sx={{ padding: 0 }}>
          <Box
            gap={3}
            display="grid"
            gridTemplateColumns={{
              xs: 'repeat(1, 1fr)',
              md: 'repeat(2, 1fr)',
            }}
          >
            <Box>
              <Card
                sx={{
                  p: (theme) => theme.spacing(3),
                  borderRadius: '8px',
                  boxShadow: '0px 3px 6px 0px #8C98A440',
                  mb: 4,
                }}
              >
                <Box
                  component="img"
                  src="/assets/icons/home/desktop.svg"
                  alt="test"
                  sx={{ width: 60, height: 60, mt: 1 }}
                />
                <Typography variant="h5" sx={{ mt: 2, mb: 0 }}>
                  Operation Status
                </Typography>
                <Typography
                  sx={{ mt: 2, mb: 0, fontSize: '16px', color: (theme) => theme.palette.grey[400] }}
                >
                  透過單一應用程式更聰明地銷
                  <br />
                  售，並更快速地提供支援。
                </Typography>
                <Stack alignItems="flex-end">
                  <Button
                    color="inherit"
                    size="small"
                    target="_blank"
                    rel="noopener"
                    sx={{
                      fontSize: '16px',
                      color: (theme) => theme.palette.primary.main,
                      mt: 4,
                    }}
                    href={paths.minimalUI}
                    endIcon={<Iconify icon="heroicons:arrow-long-right-solid" width={24} />}
                  >
                    Learn more
                  </Button>
                </Stack>
              </Card>
              <Card
                sx={{
                  p: (theme) => theme.spacing(3),
                  borderRadius: '8px',
                  boxShadow: '0px 3px 6px 0px #8C98A440',
                }}
              >
                <Box
                  component="img"
                  src="/assets/icons/home/camera.svg"
                  alt="test"
                  sx={{ width: 60, height: 60, mt: 1 }}
                />
                <Typography variant="h5" sx={{ mt: 2, mb: 0 }}>
                  Intelligent Reports
                </Typography>
                <Typography
                  sx={{ mt: 2, mb: 0, fontSize: '16px', color: (theme) => theme.palette.grey[400] }}
                >
                  透過Service Cloud讓客戶更快
                  <br />
                  感到滿意，並建立忠誠度。
                </Typography>
                <Stack alignItems="flex-end">
                  <Button
                    color="inherit"
                    size="small"
                    target="_blank"
                    rel="noopener"
                    sx={{
                      fontSize: '16px',
                      color: (theme) => theme.palette.primary.main,
                      mt: 4,
                    }}
                    href={paths.minimalUI}
                    endIcon={<Iconify icon="heroicons:arrow-long-right-solid" width={24} />}
                  >
                    Learn more
                  </Button>
                </Stack>
              </Card>
            </Box>
            <Box>
              <Card
                sx={{
                  p: (theme) => theme.spacing(3),
                  borderRadius: '8px',
                  boxShadow: '0px 3px 6px 0px #8C98A440',
                  mt: 5,
                  mb: 4,
                }}
              >
                <Box
                  component="img"
                  src="/assets/icons/home/photo.svg"
                  alt="test"
                  sx={{ width: 60, height: 60, mt: 1 }}
                />
                <Typography variant="h5" sx={{ mt: 2, mb: 0 }}>
                  Task Tracking
                </Typography>
                <Typography
                  sx={{ mt: 2, mb: 0, fontSize: '16px', color: (theme) => theme.palette.grey[400] }}
                >
                  利用業界第一CRM促成更多交
                  <br />
                  易並加速成長。
                </Typography>
                <Stack alignItems="flex-end">
                  <Button
                    color="inherit"
                    size="small"
                    target="_blank"
                    rel="noopener"
                    sx={{
                      fontSize: '16px',
                      color: (theme) => theme.palette.primary.main,
                      mt: 4,
                    }}
                    href={paths.minimalUI}
                    endIcon={<Iconify icon="heroicons:arrow-long-right-solid" width={24} />}
                  >
                    Learn more
                  </Button>
                </Stack>
              </Card>
              <Card
                sx={{
                  p: (theme) => theme.spacing(3),
                  borderRadius: '8px',
                  boxShadow: '0px 3px 6px 0px #8C98A440',
                }}
              >
                <Box
                  component="img"
                  src="/assets/icons/home/arrow.svg"
                  alt="test"
                  sx={{ width: 60, height: 60, mt: 1 }}
                />
                <Typography variant="h5" sx={{ mt: 2, mb: 0 }}>
                  Knowledge Management
                </Typography>
                <Typography
                  sx={{ mt: 2, mb: 0, fontSize: '16px', color: (theme) => theme.palette.grey[400] }}
                >
                  利用資料優先的數位行銷，建
                  <br />
                  立終身的客戶關係。
                </Typography>
                <Stack alignItems="flex-end">
                  <Button
                    color="inherit"
                    size="small"
                    target="_blank"
                    rel="noopener"
                    sx={{
                      fontSize: '16px',
                      color: (theme) => theme.palette.primary.main,
                      mt: 4,
                    }}
                    href={paths.minimalUI}
                    endIcon={<Iconify icon="heroicons:arrow-long-right-solid" width={24} />}
                  >
                    Learn more
                  </Button>
                </Stack>
              </Card>
            </Box>
          </Box>
        </Grid>

        <Grid md={6}>
          <Box sx={{ mt: 4 }}>
            <Typography color="primary" sx={{ mt: 2, fontSize: '16px' }}>
              SEAMLESS INTEGRATION
            </Typography>
            <Typography variant="h3" sx={{ mt: 3 }}>
              了解Infocenter產品如何協助您
            </Typography>
            <Typography sx={{ mt: 5, fontSize: '20px', color: (theme) => theme.palette.grey[400] }}>
              Send one-off and automated email, push, and in-app
              <br /> messages to people.
              <br />
              Create better stories.
            </Typography>
            <Box sx={{ mt: 4 }}>
              <Stack flexDirection="row" sx={{ mb: 2 }}>
                <Box
                  component="img"
                  src="/assets/icons/home/check.svg"
                  alt="test"
                  sx={{ width: 24, height: 24 }}
                />
                <Typography
                  sx={{ fontSize: '16px', color: (theme) => theme.palette.grey[700], ml: 2 }}
                >
                  Lifetime Updates & Introduction and Working
                </Typography>
              </Stack>
              <Stack flexDirection="row" sx={{ mb: 2 }}>
                <Box
                  component="img"
                  src="/assets/icons/home/check.svg"
                  alt="test"
                  sx={{ width: 24, height: 24 }}
                />
                <Typography
                  sx={{ fontSize: '16px', color: (theme) => theme.palette.grey[700], ml: 2 }}
                >
                  Tech support & Mutual Funds
                </Typography>
              </Stack>
              <Stack flexDirection="row" sx={{ mb: 2 }}>
                <Box
                  component="img"
                  src="/assets/icons/home/check.svg"
                  alt="test"
                  sx={{ width: 24, height: 24 }}
                />
                <Typography
                  sx={{ fontSize: '16px', color: (theme) => theme.palette.grey[700], ml: 2 }}
                >
                  Tons of assets & Lifetime Updates
                </Typography>
              </Stack>
              <Stack flexDirection="row" sx={{ mb: 2 }}>
                <Box
                  component="img"
                  src="/assets/icons/home/check.svg"
                  alt="test"
                  sx={{ width: 24, height: 24 }}
                />
                <Typography
                  sx={{ fontSize: '16px', color: (theme) => theme.palette.grey[700], ml: 2 }}
                >
                  Integration ready & Tech support
                </Typography>
              </Stack>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
