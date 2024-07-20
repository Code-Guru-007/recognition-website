// components
import ApiDocumentView from 'src/sections/apiDocument/view/api-document-view';

// ----------------------------------------------------------------------

export const metadata = {
  title: 'API 串接文件 | eGroupAI Face Recognition Platform',
  description: 'API Documentation',
  openGraph: {
    title: 'API Documentation',
    description: 'API Documentation',
  },
  alternates: {
    canonical: '/docs/api',
  },
};

export default function ApiDocumentPage() {
  return <ApiDocumentView />;
}
