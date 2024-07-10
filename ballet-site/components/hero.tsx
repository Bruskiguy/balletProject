import Image from "next/image";

export const Hero = () => {
  return (
    <div className="relative flex justify-center min-h-fit">
      <div className="relative w-full max-w-7xl">
        <Image
          src="/images/ballet.png"
          alt="Ballet Logo"
          layout="responsive"
          width={1000}
          height={600}
          className="object-contain"
        />
        <div className="absolute left-3 bottom-3 ml-20 inset-0 text-pink-300">
          <h1 className="text-5xl font-bold mt-40 my-4">Dance is art</h1>
          <p className="text-lg my-8">
            Learn to express yourself through classical ballet dance
          </p>
        </div>
      </div>
    </div>
  );
};
