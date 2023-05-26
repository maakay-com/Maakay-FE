import Image from 'next/image';

const Logo = () => {
  return (
    <Image src={'/icons/logo.svg'} alt="maakay" width={'46'} height={30} />
  );
};

export default Logo;
