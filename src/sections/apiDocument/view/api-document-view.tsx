'use client';

import { Box, Divider, Grid, Stack, Typography } from '@mui/material';
import { useTheme } from '@mui/system';
import Image from 'next/image';
import { NAV_ITEMS } from 'src/_mock/_apiDocs';
import CodePan from '../code-pan';
import Content from '../content';

export default function ApiDocumentView() {
  const theme = useTheme();
  return (
    <Stack spacing={{ xs: 3, md: 5 }}>
      <Typography variant="body1" fontWeight={700} px={{ xs: 3, md: 7 }}>
        API 串接文件
      </Typography>
      <Box py={3} px={{ xs: 3, md: 7 }}>
        <Stack
          direction="row"
          spacing={1.5}
          bgcolor="#00B8D914"
          px="12px"
          py="13px"
          alignItems="center"
          borderRadius={1}
          border={`1px solid ${theme.palette.info.light}`}
        >
          <Image src="/assets/icons/docs/primary-warn.svg" width={24} height={24} alt="warn" />
          <Typography variant="body2" sx={{ color: theme.palette.info.dark }}>
            點擊此處立即查看您的試用金鑰
          </Typography>
        </Stack>
      </Box>
      {NAV_ITEMS.map((item) => (
        <Stack spacing={{ xs: 3, md: 5 }} key={item.scrollTo}>
          <Stack spacing={{ xs: 1, md: 2 }} px={{ xs: 3, md: 7 }} id={item.scrollTo}>
            <Typography variant="h6">{item.label}</Typography>
            <Grid container spacing={{ xs: 2, md: 3 }}>
              <Grid item xs={12} md={6}>
                <Typography variant="body2">
                  The Stripe API is organized around REST. Our API has predictable resource-oriented
                  URLs, accepts form-encoded request bodies, returns JSON-encoded responses, and
                  uses standard HTTP response codes, authentication, and verbs. You can use the
                  Stripe API in test mode, which doesn’t affect your live data or interact with the
                  banking networks. The API key you use to authenticate the request determines
                  whether the request is live mode or test mode. The Stripe API doesn’t support bulk
                  updates. You can work on only one object per request. The Stripe API differs for
                  every account as we release new versions and tailor functionality. Log in to see
                  docs with your test key and data. The Stripe API is organized around REST. Our API
                  has predictable resource-oriented URLs, accepts form-encoded request bodies,
                  returns JSON-encoded responses, and uses standard HTTP response codes,
                  authentication, and verbs. You can use the Stripe API in test mode, which doesn’t
                  affect your live data or interact with the banking networks. The API key you use
                  to authenticate the request determines whether the request is live mode or test
                  mode. The Stripe API doesn’t support bulk updates. You can work on only one object
                  per request. The Stripe API differs for every account as we release new versions
                  and tailor functionality. Log in to see docs with your test key and data. The
                  Stripe API is organized around REST. Our API has predictable resource-oriented
                  URLs, accepts form-encoded request bodies, returns JSON-encoded responses, and
                  uses standard HTTP response codes, authentication, and verbs.
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Stack spacing={{ xs: 1, md: 2 }}>
                  <Typography variant="body2" fontWeight={600}>
                    Just getting started?
                  </Typography>
                  <Typography variant="body2" color="primary">
                    Check out our development quickstart guide.
                  </Typography>
                  <Typography variant="body2" fontWeight={600}>
                    Not a developer?
                  </Typography>
                  <Typography variant="body2" color="primary">
                    Use Stripe’s no-code options or apps from our partners to get started with
                    Stripe and to do more with your Stripe account—no code required.
                  </Typography>
                  <Box ml={{ xs: 1, md: 2 }}>
                    <CodePan header="BASE URL" code="curl https://api.stripe.com" />
                  </Box>
                  <Box ml={{ xs: 1, md: 2 }}>
                    <Content
                      header="YOUR API KEY"
                      body="A sample test API key is included in all the examples here, so you can test any example right away. Do not submit any personally identifiable information in requests made with this key. To test requests using your account, replace the sample API key with your actual API key or sign in."
                    />
                  </Box>
                </Stack>
              </Grid>
            </Grid>
          </Stack>
          <Divider />
          {item.children?.map((child) => (
            <Stack spacing={{ xs: 3, md: 5 }} key={child.scrollTo}>
              <Stack spacing={{ xs: 1, md: 2 }} px={{ xs: 3, md: 7 }} id={child.scrollTo}>
                <Typography variant="h6">{child.label}</Typography>
                <Grid container spacing={{ xs: 2, md: 3 }}>
                  <Grid item xs={12} md={6}>
                    <Typography variant="body2">
                      The Stripe API is organized around REST. Our API has predictable
                      resource-oriented URLs, accepts form-encoded request bodies, returns
                      JSON-encoded responses, and uses standard HTTP response codes, authentication,
                      and verbs. You can use the Stripe API in test mode, which doesn’t affect your
                      live data or interact with the banking networks. The API key you use to
                      authenticate the request determines whether the request is live mode or test
                      mode. The Stripe API doesn’t support bulk updates. You can work on only one
                      object per request. The Stripe API differs for every account as we release new
                      versions and tailor functionality. Log in to see docs with your test key and
                      data. The Stripe API is organized around REST. Our API has predictable
                      resource-oriented URLs, accepts form-encoded request bodies, returns
                      JSON-encoded responses, and uses standard HTTP response codes, authentication,
                      and verbs. You can use the Stripe API in test mode, which doesn’t affect your
                      live data or interact with the banking networks. The API key you use to
                      authenticate the request determines whether the request is live mode or test
                      mode. The Stripe API doesn’t support bulk updates. You can work on only one
                      object per request. The Stripe API differs for every account as we release new
                      versions and tailor functionality. Log in to see docs with your test key and
                      data. The Stripe API is organized around REST. Our API has predictable
                      resource-oriented URLs, accepts form-encoded request bodies, returns
                      JSON-encoded responses, and uses standard HTTP response codes, authentication,
                      and verbs.
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Stack spacing={{ xs: 1, md: 2 }}>
                      <Typography variant="body2" fontWeight={600}>
                        Just getting started?
                      </Typography>
                      <Typography variant="body2" color="primary">
                        Check out our development quickstart guide.
                      </Typography>
                      <Typography variant="body2" fontWeight={600}>
                        Not a developer?
                      </Typography>
                      <Typography variant="body2" color="primary">
                        Use Stripe’s no-code options or apps from our partners to get started with
                        Stripe and to do more with your Stripe account—no code required.
                      </Typography>
                      <Box ml={{ xs: 1, md: 2 }}>
                        <CodePan header="BASE URL" code="curl https://api.stripe.com" />
                      </Box>
                      <Box ml={{ xs: 1, md: 2 }}>
                        <Content
                          header="YOUR API KEY"
                          body="A sample test API key is included in all the examples here, so you can test any example right away. Do not submit any personally identifiable information in requests made with this key. To test requests using your account, replace the sample API key with your actual API key or sign in."
                        />
                      </Box>
                    </Stack>
                  </Grid>
                </Grid>
              </Stack>
              <Divider />
            </Stack>
          ))}
        </Stack>
      ))}
    </Stack>
  );
}
