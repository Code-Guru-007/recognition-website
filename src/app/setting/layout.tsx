'use client';

import AuthSimpleLayout from "src/layouts/authLayout/layout";

// components

// ----------------------------------------------------------------------

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return <AuthSimpleLayout>{children}</AuthSimpleLayout>;
}
