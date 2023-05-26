import Button from '@/lib/components/Button';
import Logo from '@/lib/components/Logo';
import Text from '@/lib/components/Text';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 gap-4 text-almostBlack">
      <Logo />
      <Button>Create</Button>
      <Text level={1}>Hi</Text>
    </main>
  );
}
