'use client';

// @mui
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Checkbox from '@mui/material/Checkbox';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import Iconify from 'src/components/iconify';

type Props = {
  handleOpen: () => void;
};

export default function PricingSecond({ handleOpen }: Props) {
  return (
    <Container>
      <Typography
        align="center"
        sx={{
          fontSize: { xs: '32px', md: '48px' },
          fontWeight: 700,
        }}
      >
        Step 2. 選擇功能
      </Typography>

      <Typography
        align="center"
        color="primary"
        sx={{
          fontSize: { xs: '32px', md: '48px' },
          fontWeight: 700,
        }}
      >
        每項 $2500 TWD/月
      </Typography>

      <Typography
        align="center"
        sx={{
          mt: 4,
          fontSize: '20px',
          fontWeight: 400,
          color: (theme) => theme.palette.grey[400],
        }}
      >
        Build a beautiful, modern website with flexible, fully customizable, atomic
        <br />
        Material-UI components.
      </Typography>
      <Box
        gap={{ md: 3, lg: 5 }}
        display="grid"
        alignItems="center"
        gridTemplateColumns={{
          xs: 'repeat(1, 1fr)',
          md: 'repeat(4, 1fr)',
        }}
        sx={{
          mt: 5,
        }}
      >
        <Card
          sx={{
            p: (theme) => theme.spacing(3),
            borderRadius: '8px',
            boxShadow: '0px 3px 6px 0px #8C98A440',
            mb: 4,
            minHeight: '307px',
          }}
        >
          <Checkbox size="medium" />
          <Typography sx={{ mt: 2, ml: 1, fontSize: '24px', fontFamily: 700 }}>網站模組</Typography>
          <Typography
            sx={{ mt: 4, ml: 1, fontSize: '16px', color: (theme) => theme.palette.grey[400] }}
          >
            Choose thousands of web design online course.
          </Typography>
          <Stack alignItems="flex-end">
            <Button
              color="inherit"
              size="small"
              sx={{
                fontSize: '16px',
                color: (theme) => theme.palette.primary.main,
                mt: 4,
              }}
              onClick={handleOpen}
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
            mb: 4,
          }}
        >
          <Checkbox size="medium" />
          <Typography sx={{ mt: 2, ml: 1, fontSize: '24px', fontFamily: 700 }}>Workflow</Typography>
          <Typography
            sx={{ mt: 4, ml: 1, fontSize: '16px', color: (theme) => theme.palette.grey[400] }}
          >
            Choose thousands of business analytics online course.
          </Typography>
          <Stack alignItems="flex-end">
            <Button
              color="inherit"
              size="small"
              sx={{
                fontSize: '16px',
                color: (theme) => theme.palette.primary.main,
                mt: 4,
              }}
              onClick={handleOpen}
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
            mb: 4,
          }}
        >
          <Checkbox size="medium" />
          <Typography sx={{ mt: 2, ml: 1, fontSize: '24px', fontFamily: 700 }}>
            知識管理模組
          </Typography>
          <Typography
            sx={{ mt: 4, ml: 1, fontSize: '16px', color: (theme) => theme.palette.grey[400] }}
          >
            Choose thousands of photography online course.
          </Typography>
          <Stack alignItems="flex-end">
            <Button
              color="inherit"
              size="small"
              sx={{
                fontSize: '16px',
                color: (theme) => theme.palette.primary.main,
                mt: 4,
              }}
              onClick={handleOpen}
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
            mb: 4,
          }}
        >
          <Checkbox size="medium" />
          <Typography sx={{ mt: 2, ml: 1, fontSize: '24px', fontFamily: 700 }}>
            CRM客戶管理模組
          </Typography>
          <Typography
            sx={{ mt: 4, ml: 1, fontSize: '16px', color: (theme) => theme.palette.grey[400] }}
          >
            Choose thousands of video creating online course
          </Typography>
          <Stack alignItems="flex-end">
            <Button
              color="inherit"
              size="small"
              sx={{
                fontSize: '16px',
                color: (theme) => theme.palette.primary.main,
                mt: 4,
              }}
              onClick={handleOpen}
              endIcon={<Iconify icon="heroicons:arrow-long-right-solid" width={24} />}
            >
              Learn more
            </Button>
          </Stack>
        </Card>
      </Box>
    </Container>
  );
}
