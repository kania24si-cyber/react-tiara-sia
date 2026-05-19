export default function TextArea({
  label,
  placeholder
}) {
  return (
    <div className="mb-4">

      <label className="block mb-2 font-medium">
        {label}
      </label>

      <textarea
        placeholder={placeholder}
        rows="4"
        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

    </div>
  );
}