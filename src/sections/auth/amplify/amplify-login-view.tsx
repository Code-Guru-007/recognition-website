'use client';

import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { useCallback, useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
// @mui
import LoadingButton from '@mui/lab/LoadingButton';
import Link from '@mui/material/Link';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputAdornment from '@mui/material/InputAdornment';
// routes
import { paths } from 'src/routes/paths';
import { useSearchParams } from 'src/routes/hook';
import { RouterLink } from 'src/routes/components';
// config
import { PATH_AFTER_LOGIN } from 'src/config-global';
// hooks
import { useBoolean } from 'src/hooks/use-boolean';
// auth
import { useAuthContext } from 'src/auth/hooks';
// components
import Iconify from 'src/components/iconify';
import FormProvider, { RHFTextField } from 'src/components/hook-form';
import { Box, Checkbox, FormControlLabel, FormGroup } from '@mui/material';

// ----------------------------------------------------------------------

type FormValuesProps = {
  email: string;
  password: string;
};

export default function AmplifyLoginView() {
  const { login } = useAuthContext();

  const [errorMsg, setErrorMsg] = useState('');

  const searchParams = useSearchParams();

  const returnTo = searchParams.get('returnTo');

  const password = useBoolean();

  const LoginSchema = Yup.object().shape({
    email: Yup.string().required('Email is required').email('Email must be a valid email address'),
    password: Yup.string().required('Password is required'),
  });

  const defaultValues = {
    email: '',
    password: '',
  };

  const methods = useForm<FormValuesProps>({
    resolver: yupResolver(LoginSchema),
    defaultValues,
  });

  const {
    reset,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = useCallback(
    async (data: FormValuesProps) => {
      try {
        await login?.(data.email, data.password);

        window.location.href = returnTo || PATH_AFTER_LOGIN;
      } catch (error) {
        console.error(error);
        reset();
        setErrorMsg(typeof error === 'string' ? error : error.message);
      }
    },
    [login, reset, returnTo]
  );

  const renderHead = (
    <Stack spacing={2} sx={{ mb: 5 }}>
      <Typography
        sx={{ fontSize: { xs: '24px', md: '30px' }, fontWeight: 500, color: '#1B1642' }}
        align="center"
      >
        eGroupAI
      </Typography>
      <Typography
        sx={{ fontSize: { xs: '16px', md: '24px' }, fontWeight: 700, color: '#1B1642' }}
        align="center"
      >
        登入 eGroupAI{' '}
      </Typography>

      <Stack direction="row" justifyContent="center" spacing={0.5}>
        <Typography sx={{ fontSize: { xs: '12px', md: '14px' }, fontWeight: 600 }} align="center">
          尚未進行註冊嗎？
        </Typography>

        <Link
          component={RouterLink}
          href={paths.auth.amplify.register}
          sx={{ fontSize: { xs: '12px', md: '14px' }, fontWeight: 600, color: '#2065D1' }}
          align="center"
        >
          立即建立您的帳號
        </Link>
      </Stack>
    </Stack>
  );

  const renderForm = (
    <Stack spacing={3}>
      {!!errorMsg && <Alert severity="error">{errorMsg}</Alert>}

      <RHFTextField name="email" label="帳號（Email）" />

      <RHFTextField
        name="password"
        label="密碼"
        type={password.value ? 'text' : 'password'}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={password.onToggle} edge="end">
                <Iconify icon={password.value ? 'solar:eye-bold' : 'solar:eye-closed-bold'} />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox />}
            label={
              <Typography
                component="div"
                sx={{ color: 'text.secondary', typography: 'caption', textAlign: 'center' }}
              >
                {'記住我 '}
              </Typography>
            }
          />
        </FormGroup>
        <Link
          component={RouterLink}
          href={paths.auth.amplify.forgotPassword}
          variant="body2"
          color="inherit"
          underline="always"
          sx={{ alignSelf: 'flex-end' }}
        >
          忘記密碼？
        </Link>
      </Box>

      <LoadingButton
        fullWidth
        sx={{ background: '#2065D1' }}
        size="large"
        type="submit"
        variant="contained"
        loading={isSubmitting}
      >
        登入
      </LoadingButton>
      <LoadingButton
        fullWidth
        size="large"
        type="submit"
        variant="contained"
        sx={{ background: 'white', border: '#E9ECEE solid 1px', color: 'black' }}
        loading={isSubmitting}
      >
        <img alt="cover" src="/assets/icons/auth/google_icon.png" style={{ paddingRight: '5px' }} />
        Google 登入
      </LoadingButton>
    </Stack>
  );

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      {renderHead}

      {renderForm}
    </FormProvider>
  );
}
