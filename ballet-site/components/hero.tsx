import Image from "next/image";

export const Hero = () => {
  return (
    <>
      <div style={{ height: "2000px" }}>
        <p className="text-center mt-4">Tis Sticky.</p>
        <p className="text-center font-bold">But wtf is the image?</p>
        <Image
          src="/public/images/ballet.png "
          alt="Ballet Logo"
          width={100}
          height={100}
        />
      </div>
    </>
  );
};
