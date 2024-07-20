'use client';

// components
import DocumentationLayout from 'src/layouts/documentation/layout';

// ----------------------------------------------------------------------

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return <DocumentationLayout>{children}</DocumentationLayout>;
}
