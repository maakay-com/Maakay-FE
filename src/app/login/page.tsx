import Button from '@/lib/components/Button';
import Header from '@/lib/components/Header';
import Logo from '@/lib/components/Logo';
import Text from '@/lib/components/Text';

const LoginPage = () => {
  return (
    <div className="flex flex-col md:flex-row w-screen md:justify-between min-h-screen h-full">
      <Header className="md:hidden" />
      <div className="bg-primary hidden md:flex flex-col gap-10 items-center w-full justify-center">
        <Logo size="big" />
        <Text level={2} weight="font-bold" color="text-white">
          Maakay
        </Text>
      </div>
      <div className="flex flex-col justify-center w-full bg-primaryLight py-20 items-center h-screen">
        <div className="flex flex-col gap-14 px-20">
          <div className="flex flex-col">
            <Text level={3} weight="font-bold">
              Log in
            </Text>
            <Text level={6}>
              Welcome to Maakay.com, please input your login details to get
              started
            </Text>
          </div>
          <Button buttonSize="full">Log In with MetaMask</Button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
