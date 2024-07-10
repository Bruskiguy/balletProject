import Image from "next/image";

export const Hero = () => {
  return (
    <div className="flex justify-center min-h-screen">
      <div className="max-w-screen-md mx-auto">
        <Image
          src="/images/ballet.png"
          alt="Ballet Logo"
          layout="responsive"
          width={9000}
          height={9000}
          className="object-contain"
        />
      </div>
    </div>
  );
};
