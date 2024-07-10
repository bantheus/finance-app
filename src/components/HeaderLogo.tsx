import Image from "next/image";
import Link from "next/link";

const Headerlogo = () => {
  return (
    <Link href="/">
      <div className="hidden items-center lg:flex">
        <Image src="/logo.svg" alt="Logo" width={60} height={60} />
        <p className="ml-2.5 text-2xl font-semibold text-white">Finance</p>
      </div>
    </Link>
  );
};

export default Headerlogo;
