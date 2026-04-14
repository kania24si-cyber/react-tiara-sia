import { useState } from "react";
import InputField from "./components/InputField";
import SelectField from "./components/SelectField";

export default function UserForm() {
  const [form, setForm] = useState({
    nama: "",
    email: "",
    umur: "",
    gender: "",
    pekerjaan: "",
  });

  const [error, setError] = useState({});
  const [hasil, setHasil] = useState(null);

  // VALIDASI
  const validate = (data) => {
    const err = {};

    // NAMA
    if (!data.nama) err.nama = "Nama wajib diisi";
    else if (!isNaN(data.nama)) err.nama = "Nama tidak boleh angka";
    else if (data.nama.length < 3) err.nama = "Minimal 3 karakter";

    // EMAIL
    if (!data.email) err.email = "Email wajib diisi";
    else if (!data.email.includes("@")) err.email = "Email harus ada @";
    else if (!data.email.includes(".")) err.email = "Email harus ada domain";

    // UMUR
    if (!data.umur) err.umur = "Umur wajib diisi";
    else if (data.umur <= 0) err.umur = "Umur harus > 0";
    else if (data.umur < 17) err.umur = "Minimal umur 17 tahun";

    // SELECT
    if (!data.gender) err.gender = "Pilih gender";
    if (!data.pekerjaan) err.pekerjaan = "Pilih pekerjaan";

    return err;
  };

  // HANDLE INPUT
  const handleChange = (field, value) => {
    const updated = { ...form, [field]: value };
    setForm(updated);
    setError(validate(updated));
  };

  // SUBMIT
  const handleSubmit = () => {
    const err = validate(form);
    setError(err);

    if (Object.keys(err).length === 0) {
      setHasil(form);
    }
  };

  // CEK VALID
  const isValid =
    Object.keys(error).length === 0 &&
    form.nama &&
    form.email &&
    form.umur &&
    form.gender &&
    form.pekerjaan;

  return (
    <div className="space-y-3">
      <InputField
        label="Nama"
        type="text"
        value={form.nama}
        onChange={(e) => handleChange("nama", e.target.value)}
        error={error.nama}
      />

      <InputField
        label="Email"
        type="email"
        value={form.email}
        onChange={(e) => handleChange("email", e.target.value)}
        error={error.email}
      />

      <InputField
        label="Umur"
        type="number"
        value={form.umur}
        onChange={(e) => handleChange("umur", e.target.value)}
        error={error.umur}
      />

      <SelectField
        label="Gender"
        value={form.gender}
        onChange={(e) => handleChange("gender", e.target.value)}
        options={["Laki-laki", "Perempuan"]}
        error={error.gender}
      />

      <SelectField
        label="Pekerjaan"
        value={form.pekerjaan}
        onChange={(e) => handleChange("pekerjaan", e.target.value)}
        options={["Mahasiswa", "Karyawan", "Freelancer"]}
        error={error.pekerjaan}
      />

      {/* BUTTON */}
      {isValid && (
        <button
          onClick={handleSubmit}
          className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:scale-105 transition text-white p-2 rounded-lg shadow"
        >
          Submit
        </button>
      )}

      {/* HASIL */}
      {hasil && (
        <div className="mt-4 bg-blue-50 border-l-4 border-blue-500 p-3 rounded">
          <p><b>Nama:</b> {hasil.nama}</p>
          <p><b>Email:</b> {hasil.email}</p>
          <p><b>Umur:</b> {hasil.umur}</p>
          <p><b>Gender:</b> {hasil.gender}</p>
          <p><b>Pekerjaan:</b> {hasil.pekerjaan}</p>
        </div>
      )}
    </div>
  );
}