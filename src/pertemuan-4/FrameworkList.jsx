import frameworkData from "./framework.json";

export default function FrameworkList() {
    
  return (
    <div className="p-8 bg-gray-50 min-h-screen font-sans">
      <div className="max-w-2xl mx-auto space-y-4">
        {frameworkData.map((item) => (
          <div
            key={item.id}
            className="bg-white border border-gray-300 p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
          >
            {/* Judul Framework */}
            <h2 className="text-xl font-bold text-slate-800 mb-1">
              {item.name}
            </h2>

            {/* Deskripsi */}
            <p className="text-gray-500 text-base mb-1 leading-snug">
              {item.description}
            </p>

            {/* Detail Pengembang & Tahun Rilis */}
            <p className="text-gray-500 text-sm mb-3">
              Developed by:{" "}
              <span className="font-bold text-slate-600">
                {item.details.developer}
              </span>{" "}
              <span className="text-gray-400">({item.details.releaseYear})</span>
            </p>

            {/* Link Website */}
            <div className="mb-5">
              <a
                href={item.details.officialWebsite}
                className="text-blue-500 hover:text-blue-700 text-sm font-medium underline underline-offset-4 decoration-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Website
              </a>
            </div>

            {/* Tags Section */}
            <div className="flex flex-wrap gap-y-2">
              {item.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-gray-200 text-gray-700 px-3 py-1 text-xs rounded-full mr-2 font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}