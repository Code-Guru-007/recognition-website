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
// hooks
import { useBoolean } from 'src/hooks/use-boolean';
// routes
import { paths } from 'src/routes/paths';
import { useRouter } from 'src/routes/hook';
import { RouterLink } from 'src/routes/components';
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
  firstName: string;
  lastName: string;
};

export default function AmplifyRegisterView() {
  const { register } = useAuthContext();

  const [errorMsg, setErrorMsg] = useState('');

  const router = useRouter();

  const password = useBoolean();

  const RegisterSchema = Yup.object().shape({
    firstName: Yup.string().required('First name required'),
    lastName: Yup.string().required('Last name required'),
    email: Yup.string().required('Email is required').email('Email must be a valid email address'),
    password: Yup.string().required('Password is required'),
  });

  const defaultValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  };

  const methods = useForm<FormValuesProps>({
    resolver: yupResolver(RegisterSchema),
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
        await register?.(data.email, data.password, data.firstName, data.lastName);

        const searchParams = new URLSearchParams({ email: data.email }).toString();

        const href = `${paths.auth.amplify.verify}?${searchParams}`;

        router.push(href);
      } catch (error) {
        console.error(error);
        reset();
        setErrorMsg(typeof error === 'string' ? error : error.message);
      }
    },
    [register, reset, router]
  );

  const renderHead = (
    <Stack spacing={2} sx={{ mb: 5, position: 'relative' }}>
      <Typography
        sx={{ fontSize: { xs: '24px', md: '30px' }, fontWeight: 500, color: '#1B1642' }}
        align="center"
      >
        eGroupAI
      </Typography>
      <Typography
        sx={{ fontSize: { xs: '16px', md: '24px' }, fontWeight: 700, color: '#1B1642' }}
        align="center"
        color="secondary"
      >
        建立您的帳號
      </Typography>

      <Stack direction="row" justifyContent="center" spacing={0.5}>
        <Typography sx={{ fontSize: { xs: '12px', md: '14px' }, fontWeight: 600 }} align="center">
          已經註冊過了嗎？
        </Typography>

        <Link
          component={RouterLink}
          href={paths.auth.amplify.login}
          sx={{ fontSize: { xs: '12px', md: '14px' }, fontWeight: 600, color: '#2065D1' }}
          align="center"
        >
          立即登入
        </Link>
      </Stack>
    </Stack>
  );

  const renderTerms = (
    <FormGroup>
      <FormControlLabel
        control={<Checkbox />}
        label={
          <Typography
            component="div"
            sx={{ color: 'text.secondary', typography: 'caption', textAlign: 'center' }}
          >
            {'我同意《服務條款》、《隱私政策》和《Cookie 政策》 '}
          </Typography>
        }
      />
    </FormGroup>
  );

  const renderForm = (
    <Stack spacing={2.5}>
      {!!errorMsg && <Alert severity="error">{errorMsg}</Alert>}

      <RHFTextField name="firstName" label="姓名" />
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

      <RHFTextField name="password_confirm" label="確認密碼" type="password" />

      <LoadingButton
        fullWidth
        sx={{ background: '#2065D1' }}
        size="large"
        type="submit"
        variant="contained"
        loading={isSubmitting}
      >
        註冊
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
        Google 註冊
      </LoadingButton>
    </Stack>
  );

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      {renderHead}

      {renderForm}
      <Box sx={{ pt: '20px' }}>{renderTerms}</Box>
    </FormProvider>
  );
}
