'use client';

// @mui
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Button, Divider } from '@mui/material';

// ----------------------------------------------------------------------

export default function SettingView() {
  return (
    <Box>
      <Typography
        sx={{ fontSize: { xs: '12px', md: '16px' }, fontWeight: 700, color: '#212B36', mb: '40px' }}
        paragraph
      >
        設定
      </Typography>
      <Box sx={{ width: '100%', boxShadow: 2, p: { xs: 2, md: 3 }, borderRadius: '16px' }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <Box sx={{ display: 'flex', gap: { xs: 1, md: 2 } }}>
            <Typography
              sx={{ fontSize: { xs: '12px', md: '16px' }, fontWeight: 700, color: '#212B36' }}
              paragraph
            >
              Domain :
            </Typography>
            <Box>
              <Typography
                sx={{ fontSize: { xs: '12px', md: '16px' }, fontWeight: 500, color: '#212B36' }}
                paragraph
              >
                127.0.0.1:3000
              </Typography>
              <Typography
                sx={{ fontSize: { xs: '12px', md: '16px' }, fontWeight: 500, color: '#212B36' }}
                paragraph
              >
                https://figma.com
              </Typography>
              <Typography
                sx={{ fontSize: { xs: '12px', md: '16px' }, fontWeight: 500, color: '#212B36' }}
                paragraph
              >
                https://egroup-infocenter.com
              </Typography>
              <Typography
                sx={{ fontSize: { xs: '12px', md: '16px' }, fontWeight: 500, color: '#212B36' }}
                paragraph
              >
                https://dev.egroup-infocenter.com
              </Typography>
              <Typography
                sx={{ fontSize: { xs: '12px', md: '16px' }, fontWeight: 500, color: '#212B36' }}
                paragraph
              >
                https://github.com
              </Typography>
            </Box>
          </Box>
          <Box sx={{ display: 'flex', height: 'fit-content' }}>
            <Button sx={{ background: '#F7F8F9', px: '12px', py: '6px', borderRadius: '8px' }}>
              <Typography
                sx={{
                  fontSize: { xs: '12px', md: '14px' },
                  fontWeight: 700,
                  color: '#212B36',
                  mb: 0,
                }}
                paragraph
              >
                更新
              </Typography>
            </Button>
          </Box>
        </Box>
        <Divider sx={{ borderStyle: 'dotted' }} />
        <Box sx={{ pt: 2 }}>
          <Typography
            sx={{ fontSize: { xs: '12px', md: '16px' }, fontWeight: 400, mb: 0, color: '#212B36' }}
            paragraph
          >
            此為允許訪問的 Domain 列表，請確認所需的 Domain 已正確設定，以確保系統運作順利。
          </Typography>
        </Box>
      </Box>
      <Box sx={{ height: '40px' }} />
      <Box sx={{ width: '100%', boxShadow: 2, p: { xs: 2, md: 3 }, borderRadius: '16px' }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            pb: 2,
          }}
        >
          <Box sx={{ display: 'flex', gap: { xs: 1, md: 2 } }}>
            <Typography
              sx={{
                fontSize: { xs: '12px', md: '16px' },
                mb: 0,
                fontWeight: 700,
                color: '#212B36',
              }}
              paragraph
            >
              API Key :
            </Typography>
            <Box>
              <Typography
                sx={{
                  fontSize: { xs: '12px', md: '16px' },
                  mb: 0,
                  fontWeight: 500,
                  color: '#212B36',
                }}
                paragraph
              >
                44yr-jwkh-65dw-12dd
              </Typography>
            </Box>
          </Box>
          <Box sx={{ display: 'flex', height: 'fit-content' }}>
            <Button sx={{ background: '#F7F8F9', px: '12px', py: '6px', borderRadius: '8px' }}>
              <Typography
                sx={{
                  fontSize: { xs: '12px', md: '14px' },
                  fontWeight: 700,
                  color: '#212B36',
                  mb: 0,
                }}
                paragraph
              >
                產生新的 API Key
              </Typography>
            </Button>
          </Box>
        </Box>
        <Divider sx={{ borderStyle: 'dotted' }} />
        <Box sx={{ pt: 2 }}>
          <Typography
            sx={{ fontSize: { xs: '12px', md: '16px' }, fontWeight: 400, color: '#212B36', mb: 0 }}
            paragraph
          >
            此為為期 10 天的試用 API Key，試用期過後請聯繫 eGroupAI 以獲取進一步的購買資訊。
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
