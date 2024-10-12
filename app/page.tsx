"use client";

import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";

const Terminal = dynamic(() => import("../components/terminal"), {
  ssr: false,
});

const Home: React.FC = () => {
  const router = useRouter();

  const handleRedirect = () => {
    router.push("/profile"); // Redirect to the profile page
  };

  return (
    <main className="w-full h-screen bg-black flex flex-col items-center justify-center">
      <div className="w-full h-full flex flex-col items-center justify-center p-4">
        <Terminal />
        {/* Portfolio button */}
        <button
          onClick={handleRedirect}
          className="mt-6 bg-green-500 text-black font-bold py-2 px-4 rounded-md hover:bg-green-600 transition duration-300"
        >
          View Portfolio
        </button>
      </div>
    </main>
  );
};

export default Home;
