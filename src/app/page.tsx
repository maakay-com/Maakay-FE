import Button from '@/lib/components/Button';
import Logo from '@/lib/components/Logo';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 gap-4">
      <Logo />
      <Button>Create</Button>
    </main>
  );
}
