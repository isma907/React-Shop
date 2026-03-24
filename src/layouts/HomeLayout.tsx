import { Footer } from '../components/Footer';
import Header from '../components/Header';

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <div className="w-full">{children}</div>
      <Footer />
    </>
  );
}
