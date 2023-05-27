import Avatar from '@/lib/components/Avatar';
import Button from '@/lib/components/Button';
import Header from '@/lib/components/Header';
import Text from '@/lib/components/Text';
import Image from 'next/image';
import { FC } from 'react';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center text-almostBlack">
      <Header />
      <section className="bg-primaryLight flex flex-col p-20 py-[200px] w-full items-center text-center gap-20 relative overflow-x-hidden">
        <Text level={1} className="z-10" weight={'bold'}>
          Create your crypto profile
        </Text>
        <div className="w-3/5 z-10">
          <Text level={4} weight={'medium'}>
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
      <section className="flex flex-col py-[80px] w-full items-center gap-20">
        <Text level={4}>Popular Profiles</Text>
        <div className="flex gap-20 justify-between px-[200px]">
          <ProfileSectionElement
            src="/dummies/1.png"
            username="franco15"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
          <ProfileSectionElement
            src="/dummies/2.png"
            username="buckyroberts"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
          <ProfileSectionElement
            src="/dummies/3.png"
            username="mustapha007"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
        </div>
      </section>
    </main>
  );
}

type ProfileSectionElementProps = {
  src: string;
  username: string;
  description: string;
};

const ProfileSectionElement: FC<ProfileSectionElementProps> = ({
  src,
  username,
  description,
}) => {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <Avatar src={src} alt={username} width={342} height={344} />
      <Text level={5}>@{username}</Text>
      <Text
        level={6}
        color="almostGray"
        weight="medium"
        className="text-center"
      >
        {description}
      </Text>
    </div>
  );
};
