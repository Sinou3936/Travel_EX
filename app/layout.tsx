import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'My Journeys',
  description: '나만의 여행 계획 페이지',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
