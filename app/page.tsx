"use client";

import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const Terminal = dynamic(() => import("@/components/terminal"), {
  ssr: false,
});

const Home: React.FC = () => {
  const router = useRouter();

  const handleRedirect = () => {
    router.push("/profile"); // Redirect to the profile page
  };

  return (
    <main className="w-full min-h-screen bg-gradient-to-r from-gray-800 to-gray-900 flex flex-col items-center justify-center p-4 sm:p-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full h-full flex flex-col items-center justify-center"
      >
        <div className="w-full max-w-4xl flex-grow flex flex-col items-center justify-center">
          <Terminal />
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-center mt-8 space-y-4"
        >
          <p className="text-white text-base sm:text-lg md:text-xl">
            If you are not a CS person, don&apos;t worry! 😅
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleRedirect}
            className="bg-green-500 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-green-600 transition duration-300"
          >
            View Portfolio
          </motion.button>
        </motion.div>
      </motion.div>
    </main>
  );
};

export default Home;
