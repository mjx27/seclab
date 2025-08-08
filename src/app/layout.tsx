import './config/global.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FinanceDash',
  description: '',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="ru">
      <body>
        {children}
        <div id="modal-root" />
      </body>
    </html>
  );
};

export default RootLayout;
