import { redirect } from 'next/navigation';
import { auth } from '@/libs/auth';
import { LogoutButton } from './components/LogoutButton';
import { HomeSection } from './components/HomeSection';

const Home: React.FC = async () => {
  const session = await auth();

  if (!session) {
    redirect("/login");
  }

  return (
    <>
      <div className="mt-8 mb-8 space-y-8">
        <LogoutButton />
        <HomeSection />
      </div>
    </>
  )
}

export default Home;