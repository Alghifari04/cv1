'use client';

import Image from 'next/image';
import { FaCode, FaDatabase, FaChartLine, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white font-sans">
      {/* About Section */}
      <section className="p-6 text-center" id="about">
        <Image src="/picture.jpg" alt="Raya Rizkyana" width={150} height={150} className="mx-auto rounded-full border-4 border-white" />
        <h1 className="text-4xl font-bold mt-4">Raya Rizkyana</h1>
        <p className="text-lg mt-2">Database Administrator | Programmer</p>
      </section>

      {/* Skills Section */}
      <section className="p-6" id="skills">
        <h2 className="text-3xl font-bold mb-4">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white text-black p-4 rounded-lg shadow-md text-center">
            <FaDatabase className="text-4xl mx-auto text-yellow-500" />
            <h3 className="text-xl font-semibold mt-2">Database Administration</h3>
            <p className="mt-2">MySQL, PostgreSQL, MongoDB</p>
          </div>
          <div className="bg-white text-black p-4 rounded-lg shadow-md text-center">
            <FaCode className="text-4xl mx-auto text-green-500" />
            <h3 className="text-xl font-semibold mt-2">Programming</h3>
            <p className="mt-2">JavaScript, Python, PHP</p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="p-6" id="services">
        <h2 className="text-3xl font-bold mb-4">Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white text-black p-4 rounded-lg shadow-md">
            <FaDatabase className="text-4xl text-yellow-500" />
            <h3 className="text-xl font-semibold mt-2">Database Management</h3>
            <p className="mt-2">Mengelola dan mengoptimalkan database untuk performa maksimal.</p>
          </div>
          <div className="bg-white text-black p-4 rounded-lg shadow-md">
            <FaCode className="text-4xl text-green-500" />
            <h3 className="text-xl font-semibold mt-2">Software Development</h3>
            <p className="mt-2">Membangun aplikasi web dan software berbasis kebutuhan Anda.</p>
          </div>
        </div>
      </section>

      {/* Portfolios Section */}
      <section className="p-6" id="portfolios">
        <h2 className="text-3xl font-bold mb-4">Portfolios</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white text-black p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Website Inventaris Obat RSUD Cicalengka</h3>
            <p className="mt-2">Sistem pengelolaan obat dengan fitur lengkap untuk pencatatan obat masuk dan keluar.</p>
          </div>
          <div className="bg-white text-black p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Dashboard Analisis Penjualan</h3>
            <p className="mt-2">Dashboard interaktif untuk memantau kinerja penjualan dengan visualisasi data yang menarik.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="p-6" id="contact">
        <h2 className="text-3xl font-bold mb-4">Contact</h2>
        <div className="space-y-2">
          <div className="flex items-center">
            <FaEnvelope className="mr-2 text-xl" />
            <span>raya@example.com</span>
          </div>
          <div className="flex items-center">
            <FaPhone className="mr-2 text-xl" />
            <span>+62 812 3456 7890</span>
          </div>
          <div className="flex items-center">
            <FaMapMarkerAlt className="mr-2 text-xl" />
            <span>Bandung, Indonesia</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center p-4 bg-black/20">
        &copy; 2024 Raya Rizkyana. All Rights Reserved.
      </footer>
    </div>
  );
}
