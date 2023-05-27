import Button from '@/lib/components/Button';
import Header from '@/lib/components/Header';
import Text from '@/lib/components/Text';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center text-almostBlack">
      <Header />
      <section className="bg-primaryLight flex flex-col p-20 py-[200px] w-full items-center text-center gap-20 relative overflow-x-hidden">
        <Text level={1} className="z-10">
          Create your crypto profile
        </Text>
        <div className="w-3/5 z-10">
          <Text level={4}>
            Login with thenewboston blockchain to build your crypto donation or
            payment profile
          </Text>
        </div>
        <Button buttonSize={'medium'} className="z-10">
          Create Now
        </Button>
        <Image
          src={'/doodles/bg1.svg'}
          alt="doodle"
          width={834}
          height={752}
          className="absolute -bottom-0 -left-80 hidden md:block"
        />
        <Image
          src={'/doodles/bg2.svg'}
          alt="doodle"
          width={834}
          height={752}
          className="absolute top-0 -right-80 hidden md:block"
        />
      </section>
    </main>
  );
}
