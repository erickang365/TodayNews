// components/Card.js
export default function Card({ title, category, author, date }) {
  return (
    <div className="border rounded-lg overflow-hidden shadow-lg">
      <div className="bg-gray-300 h-48"></div> {/* Placeholder for image */}
      <div className="p-4">
        <span className="text-sm text-gray-500 bg-orange-200 px-2 py-1 rounded">{category}</span>
        <h2 className="text-xl font-bold mt-2">{title}</h2>
        <p className="text-gray-600 mt-1">By {author} on {date}</p>
      </div>
    </div>
  );
}
