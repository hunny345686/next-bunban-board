export default function Modal({ item, onClose }) {
  if (!item) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#00000075] bg-opacity-40 z-50">
      <div className="bg-white w-full max-w-lg rounded-lg shadow-lg p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 cursor-pointer"
        >
          ✕
        </button>
        <h2 className="text-xl font-bold mb-2">{item.title}</h2>
        <p className="text-gray-700 mb-4">{item.desc}</p>
        <h3 className="font-semibold mb-1">Key Points:</h3>
        <ul className="list-disc list-inside mb-4 text-gray-600">
          {item.keyPoints?.map((point, idx) => (
            <li key={idx}>{point}</li>
          ))}
        </ul>

        {/* Resources */}
        <h3 className="font-semibold mb-1">Resources:</h3>
        <ul className="list-disc list-inside text-blue-600">
          {item.resources?.map((res, idx) => (
            <li key={idx}>
              <a
                href={res.link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                {res.type}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
