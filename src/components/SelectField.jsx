export default function SelectField({
  label,
  options = []
}) {
  return (
    <div className="mb-4">

      <label className="block mb-2 font-medium">
        {label}
      </label>

      <select
        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >

        {options.map((option, index) => (
          <option key={index}>
            {option}
          </option>
        ))}

      </select>

    </div>
  );
}