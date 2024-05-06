function AboutFragment() {
  return (
    <main className="pb-14 pt-28 sm:pt-32 bg-gray-800 text-neutral-300 xl:h-[60rem]">
      <section className="px-5 text-center">
        <header>
          <h1 className="font-semibold text-2xl xl:text-4xl text-neutral-50 border-b-2 border-primary px-3 w-max mx-auto">
            About Us
          </h1>
        </header>
        <p className="mt-3 xl:mt-7 xl:w-1/2 xl:mx-auto">
          Menjaga kebersihan sepatu, menjaga Lingkungan. bersih, berkelanjutan,
          serta berkomitmen dan bertanggung jawab terhadap lingkungan yang kita
          cintai.
        </p>
      </section>

      <figure className="mt-5 sm:mt-10 xl:mt-12 xl:flex xl:items-center xl:px-40 xl:gap-14">
        <img src="../../assets/hero/hero6.jpg" alt="" className="xl:w-1/2" />
        <figcaption className="px-5 sm:px-14 mt-5 sm:mt-10 xl:mt-0 xl:w-1/2 xl:px-0">
          <h1 className="font-semibold italic text-neutral-50 xl:text-xl">
            &quot;Langkah Bersih, Jejak Keberlanjutan&quot;
          </h1>
          <p className="mt-3 text-justify">
            Selamat datang di Klin8, tempat yang berkomitmen untuk memberikan
            layanan laundry sepatu berkualitas tinggi dengan sentuhan ramah
            lingkungan. Kami percaya bahwa menjaga kebersihan sepatu Anda tidak
            harus merusak lingkungan sekitar kita. Dengan pendekatan inovatif
            dan ramah lingkungan, kami menggunakan teknologi dan bahan-bahan
            yang ramah lingkungan untuk membersihkan, memperbaiki, dan merawat
            sepatu Anda.Kami juga berdedikasi untuk mendidik pelanggan kami
            tentang pentingnya pemeliharaan sepatu yang ramah lingkungan.
            Melalui panduan dan tips yang kami bagikan, kami ingin membantu
            mengubah kesadaran konsumen tentang dampak positif yang dapat
            dimiliki dengan merawat sepatu secara bertanggung jawab. Kami bangga
            menjadi bagian dari gerakan global untuk menjaga kelestarian
            lingkungan, sambil tetap memberikan layanan unggul kepada pelanggan
            kami. Bergabunglah dengan Klin8 dalam perjalanan kami untuk
            menjadikan dunia lebih bersih, sepatu Anda lebih bersinar, dan
            lingkungan kita lebih hijau.
          </p>
        </figcaption>
      </figure>
    </main>
  );
}

export default AboutFragment;
