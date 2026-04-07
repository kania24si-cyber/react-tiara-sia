import { useState } from "react";
import frameworkData from "./framework.json";

export default function FrameworkListSearchFilter() {
  /** 1. Inisialisasi state untuk menyimpan value dari inputan **/
  const [dataForm, setDataForm] = useState({
    searchTerm: "",
    selectedTag: "",
  });

  /** 2. Handle perubahan nilai input secara dinamis **/
  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setDataForm({
      ...dataForm,
      [name]: value,
    });
  };

  /** 3. Logic Search & Filter **/
  const _searchTerm = dataForm.searchTerm.toLowerCase();
  
  const filteredFrameworks = frameworkData.filter((framework) => {
    // Mencari berdasarkan nama, deskripsi, atau developer
    const matchesSearch =
      framework.name.toLowerCase().includes(_searchTerm) ||
      framework.description.toLowerCase().includes(_searchTerm) ||
      framework.details.developer.toLowerCase().includes(_searchTerm);

    // Memfilter berdasarkan tag yang dipilih
    const matchesTag = dataForm.selectedTag
      ? framework.tags.includes(dataForm.selectedTag)
      : true;

    return matchesSearch && matchesTag;
  });

  /** 4. Logic pengambilan nilai unique untuk list tags **/
  const allTags = [
    ...new Set(frameworkData.flatMap((framework) => framework.tags)),
  ];

  return (
    <div className="p-8 bg-gray-50 min-h-screen font-sans text-slate-900">
      <div className="max-w-2xl mx-auto mb-10 space-y-4">
        <h1 className="text-3xl font-extrabold text-slate-800 mb-6 tracking-tight">
          Framework Explorer
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Input Search */}
          <div className="md:col-span-2">
            <input
              type="text"
              name="searchTerm"
              placeholder="Search framework..."
              className="w-full p-3 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none bg-white transition-all"
              value={dataForm.searchTerm}
              onChange={handleChange}
            />
          </div>

          {/* Dropdown Filter Tags */}
          <div className="relative">
            <select
              name="selectedTag"
              value={dataForm.selectedTag}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none bg-white appearance-none cursor-pointer text-gray-600 font-medium"
            >
              <option value="">All Tags</option>
              {allTags.sort().map((tag, index) => (
                <option key={index} value={tag}>
                  {tag}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-400">
              <svg className="fill-current h-4 w-4" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* 5. Mapping data menggunakan filteredFrameworks **/ }
      <div className="max-w-2xl mx-auto space-y-5">
        {filteredFrameworks.length > 0 ? (
          filteredFrameworks.map((item) => (
            <div key={item.id} className="bg-white border border-gray-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all group">
              <h2 className="text-xl font-bold text-slate-800 mb-1 group-hover:text-blue-600">
                {item.name}
              </h2>

              <p className="text-gray-500 text-base mb-2 leading-relaxed">
                {item.description}
              </p>
              
              <p className="text-gray-400 text-sm mb-4">
                Developed by: <span className="font-bold text-slate-600">{item.details.developer}</span>{" "}
                <span className="text-gray-300">({item.details.releaseYear})</span>
              </p>

              <div className="mb-6">
                <a 
                  href={item.details.officialWebsite} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-700 text-sm font-semibold underline underline-offset-4 decoration-blue-200"
                >
                  Visit Website
                </a>
              </div>

              <div className="flex flex-wrap gap-2 border-t border-gray-50 pt-4">
                {item.tags.map((tag, index) => (
                  <span key={index} className="bg-gray-100 text-gray-500 px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded-md">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-gray-300">
            <p className="text-gray-400 font-medium">No frameworks match your search.</p>
          </div>
        )}
      </div>
    </div>
  );
}