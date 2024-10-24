// pages/index.js
import Card from '../components/Card';

export default function Home() {
  const featuredPosts = [
    { title: 'The Road Ahead', category: 'Photography', author: 'Mat Vogels', date: 'September 25, 2015' },
    { title: 'From Top Down', category: 'Adventure', author: 'William Wong', date: 'September 25, 2015' },
  ];

  const recentPosts = [
    { title: 'Still Standing Tall', category: 'Nature', author: 'William Wong', date: '9/25/2015' },
    { title: 'Sunny Side Up', category: 'Photography', author: 'Mat Vogels', date: '9/25/2015' },
    { title: 'Water Falls', category: 'Vacation', author: 'Mat Vogels', date: '9/25/2015' },
  ];

  return (
    <div className="container mx-auto p-4">
      {/* 배경 이미지가 있는 섹션 */}
      <section className="bg-cover bg-center h-64" style={{ backgroundImage: "url('https://cdn.pixabay.com/photo/2017/08/26/10/47/businessman-2682712_1280.jpg')" }}>
        <div className="flex flex-col items-center justify-center h-full bg-black bg-opacity-50">
          <h1 className="text-5xl font-bold text-white">Card News</h1>
          <p className="text-xl text-white">Your Daily Dose of Global Stories</p>
          <p className="text-gray-300">We travel the world in search of stories. Come along for the ride.</p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-bold mb-4">Featured Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredPosts.map((post, index) => (
            <Card key={index} title={post.title} category={post.category} author={post.author} date={post.date} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-4">Most Recent</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {recentPosts.map((post, index) => (
            <Card key={index} title={post.title} category={post.category} author={post.author} date={post.date} />
          ))}
        </div>
      </section>
    </div>
  );
}
