/* eslint-disable import/no-extraneous-dependencies */
import { Box, Stack, Typography } from '@mui/material';
import CopyToClipboard from 'react-copy-to-clipboard';
import Image from 'next/image';
import { useSnackbar } from 'notistack';

type Props = {
  header: string;
  code: string;
};

export default function CodePan({ header, code }: Props) {
  const { enqueueSnackbar } = useSnackbar();
  return (
    <Box borderRadius={1} overflow="hidden" color="white" border="1px solid #d8dee4">
      <Stack
        spacing={1}
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        bgcolor="#474e5a"
        px={2}
        py={1}
      >
        <Typography variant="body2" fontWeight={600}>
          {header}
        </Typography>
        <CopyToClipboard
          text={code}
          onCopy={() => {
            enqueueSnackbar({ variant: 'success', message: '已複製！' });
          }}
        >
          <Image src="/assets/icons/docs/copy.svg" alt="copy" width={14} height={14} />
        </CopyToClipboard>
      </Stack>
      <Box px={2} py={1} bgcolor="#545969">
        <code>{code}</code>
      </Box>
    </Box>
  );
}
