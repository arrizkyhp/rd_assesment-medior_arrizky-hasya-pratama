import Link from 'next/link';

const Navigation = () => (
  <nav className="fixed top-0 z-30 w-screen bg-black flex flex-col items-center py-4 justify-center w-100% ">
    <div className="absolute inset-0 bg-radiohead bg-cover bg-center opacity-40 pointer-events-none" />
    <h1 className="font-bold text-2xl bg-inRainbows-red text-white  z-20 mb-2 font-archivo-black uppercase">
      Radiohead
    </h1>
    <div className="flex relative gap-5">
      <Link
        href="/#newest-album"
        className="text-inRainbows-yellow uppercase font-archivo font-semibold"
      >
        Newest Album
      </Link>
      <Link
        href="/#discography"
        className="text-inRainbows-blue uppercase font-archivo font-semibold"
      >
        Discography
      </Link>
      <Link
        href="/#follow"
        className="text-inRainbows-red uppercase font-archivo font-semibold"
      >
        Follow
      </Link>
    </div>
  </nav>
);

export default Navigation;
