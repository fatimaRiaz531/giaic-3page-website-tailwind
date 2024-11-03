// pages/index.tsx
import Link from 'next/link';

const HomePage = () => {
  return (
    <div className="container mx-auto">
      <div className="bg-blue-100 p-10 rounded-lg">
        <h2 className="text-2xl font-bold">Hire the best developers and designers around!</h2>
        <Link href="/hire-developers">
          <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
            Hire Top Developers
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;


