import Button from "../components/Button";
import Badge from "../components/Badge";
import Avatar from "../components/Avatar";
import Container from "../components/Container";
import Footer from "../components/Footer";
import Card from "../components/Card";
import ProductCard from "../components/ProductCard";
import Table from "../components/Table";

import InputField from "../components/InputField";
import TextArea from "../components/TextArea";
import SelectField from "../components/SelectField";

import Alert from "../components/Alert";
import Loading from "../components/Loading";

import HeroSection from "../components/HeroSection";

export default function Components() {

  const headers = [
    "No",
    "Nama Produk",
    "Kategori",
    "Harga",
    "Aksi"
  ];

  const products = [
    {
      id: 1,
      name: "Laptop Asus",
      category: "Elektronik",
      price: "Rp 8.000.000"
    },
    {
      id: 2,
      name: "Sepatu Sport",
      category: "Fashion",
      price: "Rp 450.000"
    },
    {
      id: 3,
      name: "Jam Tangan",
      category: "Aksesoris",
      price: "Rp 799.000"
    }
  ];

  return (
    <>
      {/* HERO SECTION */}
      <HeroSection />

      <Container className="bg-gray-100 rounded-lg">

        <h1 className="text-3xl font-bold mb-6">
          Components Playground
        </h1>

        {/* CARD COMPONENT */}
        <Card>

          <h2 className="text-xl font-bold mb-2">
            Judul Card
          </h2>

          <p className="text-gray-600 mb-5">
            Ini adalah isi dari card.
          </p>

          {/* BUTTON */}
          <div className="space-x-3 mb-5">
            <Button type="primary">
              Primary
            </Button>

            <Button type="success">
              Simpan
            </Button>

            <Button type="danger">
              Hapus
            </Button>
          </div>

          {/* BADGE */}
          <div className="space-x-3 mb-5">
            <Badge type="success">
              Aktif
            </Badge>

            <Badge type="warning">
              Pending
            </Badge>

            <Badge type="danger">
              Ditolak
            </Badge>
          </div>

          {/* AVATAR */}
          <div className="flex gap-3">
            <Avatar name="Budi" />

            <Avatar name="Siti" />

            <Avatar name="Andi" />
          </div>

        </Card>

        {/* PRODUCT CARD */}
        <div className="grid md:grid-cols-2 gap-5 mt-8">

          <ProductCard
            image="https://images.unsplash.com/photo-1542291026-7eec264c27ff"
            title="Sepatu Sport"
            category="Fashion"
            price="Rp 450.000"
            description="Sepatu sport modern dengan desain nyaman dan ringan untuk aktivitas sehari-hari."
          />

          <ProductCard
            image="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
            title="Smartphone"
            category="Elektronik"
            price="Rp 4.500.000"
            description="Smartphone dengan performa cepat, kamera jernih, dan baterai tahan lama."
          />

        </div>

        {/* TABLE */}
        <div className="mt-10">

          <h2 className="text-2xl font-bold mb-4">
            Data Produk
          </h2>

          <Table headers={headers}>

            {products.map((product, index) => (
              <tr
                key={product.id}
                className="hover:bg-gray-50"
              >

                <td className="border px-4 py-3">
                  {index + 1}
                </td>

                <td className="border px-4 py-3">
                  {product.name}
                </td>

                <td className="border px-4 py-3">
                  {product.category}
                </td>

                <td className="border px-4 py-3">
                  {product.price}
                </td>

                <td className="border px-4 py-3">

                  <Button type="primary">
                    Detail
                  </Button>

                </td>

              </tr>
            ))}

          </Table>

        </div>

        {/* FORM COMPONENT */}
        <Card className="mt-10">

          <h2 className="text-2xl font-bold mb-5">
            Form Components
          </h2>

          <InputField
            label="Nama"
            placeholder="Masukkan nama"
          />

          <InputField
            label="Email"
            type="email"
            placeholder="Masukkan email"
          />

          <TextArea
            label="Deskripsi"
            placeholder="Masukkan deskripsi"
          />

          <SelectField
            label="Kategori"
            options={[
              "Fashion",
              "Elektronik",
              "Aksesoris"
            ]}
          />

          <Button type="success">
            Submit
          </Button>

        </Card>

        {/* FEEDBACK COMPONENT */}
        <div className="mt-10">

          <h2 className="text-2xl font-bold mb-5">
            Feedback Components
          </h2>

          <Alert type="success">
            Data berhasil disimpan
          </Alert>

          <Alert type="danger">
            Terjadi kesalahan
          </Alert>

          <Alert type="warning">
            Harap periksa kembali data
          </Alert>

          <div className="mt-5">
            <Loading />
          </div>

        </div>

      </Container>

      <Footer />
    </>
  );
}