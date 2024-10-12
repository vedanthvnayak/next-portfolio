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
    <main className="w-full h-screen bg-gradient-to-r from-gray-800 to-gray-900 flex flex-col items-center justify-center">
      <div className="w-full h-full flex flex-col items-center justify-center p-4">
        <Terminal />
        {/* Portfolio button */}
        <p className="text-white text-lg mb-4 text-center">
          If you are not a CS person, don&apos;t worry! 😅👇
        </p>
        <button
          onClick={handleRedirect}
          className="mt-6 bg-green-500 text-white font-bold py-2 px-6 rounded-md shadow-lg hover:bg-green-600 transition duration-300 transform hover:scale-105"
        >
          View Portfolio
        </button>
      </div>
    </main>
  );
};

export default Home;
