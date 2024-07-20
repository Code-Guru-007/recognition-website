/* eslint-disable import/no-extraneous-dependencies */
import { Box, Stack, Typography } from '@mui/material';

type Props = {
  header: string;
  body: string;
};

export default function Content({ header, body }: Props) {
  return (
    <Box borderRadius={1} overflow="hidden" border="1px solid #d8dee4">
      <Stack
        spacing={1}
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        bgcolor="#ebeef1"
        px={2}
        py={1}
      >
        <Typography variant="body2" fontWeight={600}>
          {header}
        </Typography>
      </Stack>
      <Box px={2} py={1}>
        <Typography variant="body2">{body}</Typography>
      </Box>
    </Box>
  );
}
