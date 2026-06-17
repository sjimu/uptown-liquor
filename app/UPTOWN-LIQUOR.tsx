 import Image from "next/image";

export default function Home() {
  return (
    <>
<nav className="bg-black text-white sticky top-0 z-50 shadow-lg">
  <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

    {/* Logo */}
    <h1 className="text-2xl font-extrabold text-red-500 tracking-wider drop-shadow-lg">
  UPTOWN LIQUOR
</h1>

    {/* Desktop Menu */}
    <div className="hidden md:flex gap-8 font-semibold">
      <a href="#" className="hover:text-red-500 transition duration-300">
        Home
      </a>

      <a href="#branches" className="hover:text-red-500 transition duration-300">
        Branches
      </a>

      <a href="#products" className="hover:text-red-500 transition duration-300">
        Products
      </a>

      <a href="#specials" className="hover:text-red-500 transition duration-300">
        Specials
      </a>

      <a href="#contact" className="hover:text-red-500 transition duration-300">
        Contact
      </a>
    </div>

    {/* Mobile Button */}
    <button className="md:hidden text-3xl">
      ☰
    </button>

  </div>
</nav>

     <main className="min-h-screen p-10 bg-white bg-[radial-gradient(circle_at_top_left,rgba(220,38,38,0.20),transparent_25%),radial-gradient(circle_at_top_right,rgba(220,38,38,0.20),transparent_25%),radial-gradient(circle_at_bottom_left,rgba(220,38,38,0.20),transparent_25%),radial-gradient(circle_at_bottom_right,rgba(220,38,38,0.20),transparent_25%)]">

{/* Hero Section */}
<div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-black via-gray-900 to-red-900 py-24 px-8 text-center shadow-2xl mb-16">

  {/* Glow Effects */}
  <div className="absolute top-0 left-0 w-72 h-72 bg-red-500/20 rounded-full blur-3xl"></div>
  <div className="absolute bottom-0 right-0 w-72 h-72 bg-red-700/20 rounded-full blur-3xl"></div>

  <div className="relative z-10">
    <h1 className="text-5xl md:text-7xl font-black text-white tracking-wider">
      UPTOWN
    </h1>

    <h2 className="text-2xl md:text-4xl font-light text-red-400 mt-2">
      LIQUOR
    </h2>

    <p className="text-gray-300 text-lg md:text-xl mt-6 max-w-2xl mx-auto">
      Zimbabwe's Premium Liquor Destination
    </p>

    <div className="flex flex-col md:flex-row justify-center gap-4 mt-10">
      <a
        href="#products"
        className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full font-bold shadow-lg hover:scale-105 transition-all duration-300"
      >
        Shop Now
      </a>

      <a
        href="#contact"
        className="border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-black transition-all duration-300"
      >
        Contact Us
      </a>
    </div>
  </div>
</div>
{/* Contact Banner */}
<div className="bg-red-600 text-white py-5 text-center rounded-xl my-10">
  <h2 className="text-5xl font-extrabold mb-6">
    CONTACT NOW
  </h2>

  <div className="flex flex-wrap justify-center gap-6">

    {/* Waterfalls */}
    <div className="text-center">
      <a
        href="https://wa.me/263774044156"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white text-red-600 px-6 py-3 rounded-lg font-bold inline-block float-animation transform transition-all duration-300 hover:scale-110 hover:-translate-y-2 hover:shadow-2xl"
      >
        WhatsApp Waterfalls
      </a>
      <p className="mt-2 text-white font-semibold">
        0774044156
      </p>
    </div>

    {/* Mabelreign */}
    <div className="text-center">
      <a
        href="https://wa.me/263777220687"
        target="_blank"
        rel="noopener noreferrer"
      className="bg-white text-red-600 px-6 py-3 rounded-lg font-bold inline-block float-animation transform transition-all duration-300 hover:scale-110 hover:-translate-y-2 hover:shadow-2xl"
      >
        WhatsApp Mabelreign
      </a>
      <p className="mt-2 text-white font-semibold">
        0777220687
      </p>
    </div>

    {/* Belgravia */}
    <div className="text-center">
      <a
        href="https://wa.me/263777220687"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white text-red-600 px-6 py-3 rounded-lg font-bold inline-block float-animation transform transition-all duration-300 hover:scale-110 hover:-translate-y-2 hover:shadow-2xl"
      >
        WhatsApp Belgravia
      </a>
      <p className="mt-2 text-white font-semibold">
        0777220687
      </p>
    </div>

  </div>
</div>
<div className="mt-16 text-center">
  <h2 className="text-4xl font-bold mb-8">
    Shop By Category
  </h2>

  <div className="flex flex-wrap justify-center gap-4">
   <div
  className="
    category-btn
    bg-white
    px-6
    py-3
    rounded-full
    shadow-lg
    cursor-pointer

    hover:bg-red-600
    hover:text-white
    hover:scale-110
    hover:-translate-y-2

    transition-all
    duration-300
  "
>
  🥃 Whisky
</div>

    <div
  className="
    category-btn
    bg-white
    px-6
    py-3
    rounded-full
    shadow-lg
    cursor-pointer

    hover:bg-red-600
    hover:text-white
    hover:scale-110
    hover:-translate-y-2

    transition-all
    duration-300
  "
>
  🥃 Gin
</div>

  <div
  className="
    category-btn
    bg-white
    px-6
    py-3
    rounded-full
    shadow-lg
    cursor-pointer

    hover:bg-red-600
    hover:text-white
    hover:scale-110
    hover:-translate-y-2

    transition-all
    duration-300
  "
>

      🍷 Wine
    </div>

  <div
  className="
    category-btn
    bg-white
    px-6
    py-3
    rounded-full
    shadow-lg
    cursor-pointer

    hover:bg-red-600
    hover:text-white
    hover:scale-110
    hover:-translate-y-2

    transition-all
    duration-300
  "
>
      🍹 Cognac
    </div>

 <div
  className="
    category-btn
    bg-white
    px-6
    py-3
    rounded-full
    shadow-lg
    cursor-pointer

    hover:bg-red-600
    hover:text-white
    hover:scale-110
    hover:-translate-y-2

    transition-all
    duration-300
  "
>
      🍾 Champagne
    </div>

  <div
  className="
    category-btn
    bg-white
    px-6
    py-3
    rounded-full
    shadow-lg
    cursor-pointer

    hover:bg-red-600
    hover:text-white
    hover:scale-110
    hover:-translate-y-2

    transition-all
    duration-300
  "
>
      🍺 Beer
    </div>
  </div>
</div>
{/* Featured Products */}
<div id="products" className="mt-20">

  <div className="text-center mb-12">
  <p className="text-red-600 uppercase tracking-[0.5em] text-sm font-bold">
    UPTOWN LIQUOR
  </p>

  <h2 className="text-5xl font-black text-gray-900 mt-3 drop-shadow-md">
    Featured Products
  </h2>

  <div className="flex justify-center items-center mt-5 gap-3">
    <div className="w-16 h-[2px] bg-red-600"></div>
    <div className="w-3 h-3 rounded-full bg-red-600"></div>
    <div className="w-16 h-[2px] bg-red-600"></div>
  </div>
</div>

  <div className="grid md:grid-cols-3 gap-8">

    {/* Tanqueray */}
<div className="group bg-white rounded-2xl border border-red-100 shadow-lg hover:shadow-2xl hover:shadow-red-500/20 hover:-translate-y-3 transition-all duration-500 overflow-hidden">

  <div className="relative">
    <div className="absolute top-4 right-4 bg-red-600 text-white text-xs px-3 py-1 rounded-full font-bold z-10">
      BEST SELLER
    </div>

    <Image
      src="/tanqarey.jpeg"
      alt="Tanqueray Gin"
      width={280}
      height={280}
      className="mx-auto rounded-lg transition-transform duration-700 group-hover:scale-110"
    />
  </div>

  <div className="p-5 text-center">
    <h3 className="text-2xl font-bold text-gray-900">
      Tanqueray Gin
    </h3>

    <p className="text-red-600 font-semibold mt-2">
      Premium Selection
    </p>

    <a
  href="https://wa.me/263777220687?text=Hello%20Uptown%20Liquor,%20I%20would%20like%20to%20order%20DTK"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block mt-4 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
>
  Order on WhatsApp
</a>
  </div>

</div>

    {/* Hennessy VSOP */}
<div className="group bg-white rounded-2xl border border-red-100 shadow-lg hover:shadow-2xl hover:shadow-red-500/20 hover:-translate-y-3 transition-all duration-500 overflow-hidden">

  <div className="relative">
    <div className="absolute top-4 right-4 bg-amber-500 text-white text-xs px-3 py-1 rounded-full font-bold z-10">
      PREMIUM
    </div>

    <Image
      src="/VSOp.jpeg.jpg"
      alt="Hennessy VSOP"
      width={280}
      height={280}
      className="mx-auto rounded-lg transition-transform duration-700 group-hover:scale-110"
    />
  </div>

  <div className="p-5 text-center">
    <h3 className="text-2xl font-bold text-gray-900">
      Hennessy VSOP
    </h3>

    <p className="text-red-600 font-semibold mt-2">
      Cognac Collection
    </p>

    <a
  href="https://wa.me/263777220687?text=Hello%20Uptown%20Liquor,%20I%20would%20like%20to%20order%20DTK"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block mt-4 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
>
  Order on WhatsApp
</a>
  </div>

</div>
   {/* Baileys */}
<div className="group bg-white rounded-2xl border border-red-100 shadow-lg hover:shadow-2xl hover:shadow-red-500/20 hover:-translate-y-3 transition-all duration-500 overflow-hidden">

  <div className="relative">
    <div className="absolute top-4 right-4 bg-pink-500 text-white text-xs px-3 py-1 rounded-full font-bold z-10">
      CUSTOMER FAVORITE
    </div>

    <Image
      src="/bailey.jpeg.jpg"
      alt="Baileys"
      width={280}
      height={280}
      className="mx-auto rounded-lg transition-transform duration-700 group-hover:scale-110"
    />
  </div>

  <div className="p-5 text-center">
    <h3 className="text-2xl font-bold text-gray-900">
      Baileys
    </h3>

    <p className="text-red-600 font-semibold mt-2">
      Cream Liqueur
    </p>

    <a
  href="https://wa.me/263777220687?text=Hello%20Uptown%20Liquor,%20I%20would%20like%20to%20order%20DTK"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block mt-4 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
>
  Order on WhatsApp
</a>
  </div>

</div>

    {/* Bahama */}
<div className="group bg-white rounded-2xl border border-red-100 shadow-lg hover:shadow-2xl hover:shadow-red-500/20 hover:-translate-y-3 transition-all duration-500 overflow-hidden">

  <div className="relative">
    <div className="absolute top-4 right-4 bg-orange-500 text-white text-xs px-3 py-1 rounded-full font-bold z-10">
      TRENDING
    </div>

    <Image
      src="/bahama.jpeg"
      alt="Bahama"
      width={280}
      height={280}
      className="mx-auto rounded-lg transition-transform duration-700 group-hover:scale-110"
    />
  </div>

  <div className="p-5 text-center">
    <h3 className="text-2xl font-bold text-gray-900">
      Bahama
    </h3>

    <p className="text-red-600 font-semibold mt-2">
      Ready To Drink
    </p>

    <a
  href="https://wa.me/263777220687?text=Hello%20Uptown%20Liquor,%20I%20would%20like%20to%20order%20DTK"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block mt-4 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
>
  Order on WhatsApp
</a>
  </div>

</div>

    {/* Billiato */}
<div className="group bg-white rounded-2xl border border-red-100 shadow-lg hover:shadow-2xl hover:shadow-red-500/20 hover:-translate-y-3 transition-all duration-500 overflow-hidden">

  <div className="relative">
    <div className="absolute top-4 right-4 bg-purple-600 text-white text-xs px-3 py-1 rounded-full font-bold z-10">
      POPULAR
    </div>

    <Image
      src="/billiato.jpeg.jpg"
      alt="Billiato"
      width={280}
      height={280}
      className="mx-auto rounded-lg transition-transform duration-700 group-hover:scale-110"
    />
  </div>

  <div className="p-5 text-center">
    <h3 className="text-2xl font-bold text-gray-900">
      Billiato
    </h3>

    <p className="text-red-600 font-semibold mt-2">
      Premium Liqueur
    </p>

    <a
  href="https://wa.me/263777220687?text=Hello%20Uptown%20Liquor,%20I%20would%20like%20to%20order%20DTK"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block mt-4 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
>
  Order on WhatsApp
</a>
  </div>

</div>

    {/* DTK */}
<div className="group bg-white rounded-2xl border border-red-100 shadow-lg hover:shadow-2xl hover:shadow-red-500/20 hover:-translate-y-3 transition-all duration-500 overflow-hidden">

  <div className="relative">
    <div className="absolute top-4 right-4 bg-black text-white text-xs px-3 py-1 rounded-full font-bold z-10">
      EXCLUSIVE
    </div>

    <Image
      src="/DTK.jpeg.jpg"
      alt="DTK"
      width={280}
      height={280}
      className="mx-auto rounded-lg transition-transform duration-700 group-hover:scale-110"
    />
  </div>

  <div className="p-5 text-center">
    <h3 className="text-2xl font-bold text-gray-900">
      DTK
    </h3>

    <p className="text-red-600 font-semibold mt-2">
      Signature Collection
    </p>

   <a
  href="https://wa.me/263777220687?text=Hello%20Uptown%20Liquor,%20I%20would%20like%20to%20order%20DTK"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block mt-4 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
>
  Order on WhatsApp
</a>
  </div>

</div>

  </div>
</div>
        {/* Branches */}
        <div id="branches" className="text-center mt-10">
          <h2 className="text-3xl font-bold">
            Our Branches
          </h2>
        </div>

       <div className="grid md:grid-cols-3 gap-6 mt-10 text-center">
          {/* Waterfalls */}
          <div className="bg-white rounded-xl shadow-xl p-6 hover:scale-105 transition duration-300">

            <h3 className="text-2xl font-bold mb-4">
              📍 Waterfalls Branch
            </h3>

            <Image
              src="/waterfalls.jpeg.jpeg"
              alt="Waterfalls Branch"
              width={400}
              height={500}
              className="mx-auto rounded-lg"
            />

            <p className="mt-4 text-gray-600">
              📍 Masotsha Ndlovu Way, Opposite Police Station
            </p>

            <p className="text-gray-600">
              📞 0774044156
            </p>

            <a
              href="https://wa.me/263774044156"
              target="_blank"
              className="inline-block mt-4 bg-red-600 text-white px-6 py-2 rounded-lg"
            >
              Contact Branch
            </a>
          </div>

          {/* Mabelreign */}
          <div className="bg-white rounded-xl shadow-xl p-6 hover:scale-105 transition duration-300">

            <h3 className="text-2xl font-bold mb-4">
              📍 Mabelreign Branch
            </h3>

            <Image
              src="/mabelreign.png.jpeg"
              alt="Mabelreign Branch"
              width={400}
              height={500}
              className="mx-auto rounded-lg"
            />

            <p className="mt-4 text-gray-600">
              📍 Shop No. 2, Mabelreign Shopping Centre
            </p>

            <p className="text-gray-600">
              📞 0777220687
            </p>

            <a
              href="https://wa.me/263777220687"
              target="_blank"
              className="inline-block mt-4 bg-red-600 text-white px-6 py-2 rounded-lg"
            >
              Contact Branch
            </a>
          </div>
          {/* New Branch */}
<div className="bg-white rounded-xl shadow-xl p-6 hover:scale-105 transition duration-300">

  <h3 className="text-2xl font-bold mb-4">
    📍 New Branch
  </h3>

  <Image
    src="/BELGRAVIA.JPEG"
    alt="BELGRAVIA"
    width={400}
    height={400}
    className="mx-auto rounded-lg"
  />

  <p className="mt-4 text-gray-600">
    📍 Branch Address Here
  </p>

  <p className="text-gray-600">
    📞 Phone Number Here
  </p>

  <a
    href="https://wa.me/263XXXXXXXXX"
    target="_blank"
    className="inline-block mt-4 bg-red-600 text-white px-6 py-2 rounded-lg"
  >
    Contact Branch
  </a>

</div>
        </div>
        <div className="text-center mt-20">
  <h2 className="text-4xl font-bold mb-6">
    Shop By Category
  </h2>

  <div className="flex flex-wrap justify-center gap-4">
    <div className="bg-white px-6 py-3 rounded-full shadow-lg">
      Whisky
    </div>

    <div className="bg-white px-6 py-3 rounded-full shadow-lg">
      Gin
    </div>

    <div className="bg-white px-6 py-3 rounded-full shadow-lg">
      Vodka
    </div>

    <div className="bg-white px-6 py-3 rounded-full shadow-lg">
      Cognac
    </div>

    <div className="bg-white px-6 py-3 rounded-full shadow-lg">
      Tequila
    </div>

    <div className="bg-white px-6 py-3 rounded-full shadow-lg">
      Liqueurs
    </div>
  </div>
</div>
{/* Specials */}
<div id="specials" className="mt-20 text-center"></div>
        {/* Specials */}
        <div id="specials" className="mt-20 text-center">
          <h2 className="text-3xl font-bold mb-8">
            Weekly Specials
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="font-bold text-xl">Ballantine's</h3>
              <p className="mt-2">Special Offer Available</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="font-bold text-xl">Jameson</h3>
              <p className="mt-2">Limited Time Discount</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="font-bold text-xl">Smirnoff</h3>
              <p className="mt-2">Best Value This Week</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <a
  href="https://instagram.com/uptownliquor.zw"
  target="_blank"
  className="inline-block mt-4 bg-pink-600 text-white px-6 py-2 rounded-lg"
>
  Follow Us On Instagram
</a>
        <footer
          id="contact"
          className="bg-black text-white text-center py-10 mt-20 rounded-xl"
        >
          <h3 className="text-2xl font-bold text-red-500">
            Uptown Liquor
          </h3>

          <p className="mt-2">
            Zimbabwe's Premium Liquor Destination
          </p>

          <p className="mt-2">
            Waterfalls • Mabelreign
          </p>

          <p className="mt-4">
            📞 0774044156 | 0777220687
          </p>
       </footer>

</main>

{/* Floating WhatsApp Button */}
<a
  href="https://wa.me/263774044156"
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-6 right-6 bg-green-500 text-white px-5 py-3 rounded-full shadow-xl hover:bg-green-600 transition-all duration-300 hover:scale-110"
>
  WhatsApp
</a>

</>
);
}