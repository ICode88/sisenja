import Link from "next/link";
import { Mail, Phone, MapPin, Facebook, Instagram, Youtube, Droplets } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-cyan-900 text-white dark:bg-cyan-950">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="space-y-4">
            <div className="flex items-end">
              {/* <Droplets size={24} /> */}
            <Image src="/images/tanbu.png" alt="Tanbu" width={60} height={60} />
              <Image src="/images/Logo.png" alt="Tanbu" width={120} height={120} />
              
              {/* <span className="font-bold text-xl">SISENJA</span> */}
            </div>
            <div className="flex items-center gap-2">


            <p className="text-cyan-100 text-sm mt-2">
              Sistem Informasi Layanan Sedot Tinja Kabupaten Tanah Bumbu.
              Menyediakan informasi lengkap tentang layanan sedot tinja.
            </p>
            </div>
            {/* <Image src="/images/berakhlak.png" alt="Tanbu" width={80} height={80} /> */}


            <div className="flex items-center gap-4 mt-4">
              <a href="#" className="hover:text-cyan-300 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-cyan-300 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-cyan-300 transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Link Cepat</h3>
            <ul className="space-y-2 text-cyan-100">
              <li>
                <Link href="/layanan" className="hover:text-cyan-300 transition-colors">
                  Layanan
                </Link>
              </li>
              <li>
                <Link href="/tarif" className="hover:text-cyan-300 transition-colors">
                  Informasi Tarif
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-cyan-300 transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/berita" className="hover:text-cyan-300 transition-colors">
                  Berita & Pengumuman
                </Link>
              </li>
              <li>
                <Link href="/tentang" className="hover:text-cyan-300 transition-colors">
                  Tentang Kami
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Layanan</h3>
            <ul className="space-y-2 text-cyan-100">
              <li>
                <Link href="/layanan/pendaftaran" className="hover:text-cyan-300 transition-colors">
                  Pendaftaran Pelanggan Baru
                </Link>
              </li>
              <li>
                <Link href="/layanan/pengaduan" className="hover:text-cyan-300 transition-colors">
                  Pengaduan Layanan
                </Link>
              </li>
              <li>
                <Link href="/layanan/pembayaran" className="hover:text-cyan-300 transition-colors">
                  Informasi Pembayaran
                </Link>
              </li>
              <li>
                <Link href="/layanan/edukasi" className="hover:text-cyan-300 transition-colors">
                  Edukasi Masyarakat
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Kontak</h3>
            <ul className="space-y-3 text-cyan-100">
              <li className="flex gap-3">
                <MapPin size={20} className="flex-shrink-0 text-cyan-300" />
                <span>Jalan Dharma Praja No. 5 Kelurahan Gunung Tinggi Kecamatan Batulicin Kabupaten Tanah Bumbu Provinsi Kalimantan Selatan</span>
              </li>
              <li className="flex gap-3">
                <Phone size={20} className="flex-shrink-0 text-cyan-300" />
                <span> (+62) 821 5505 5167</span>
              </li>
              <li className="flex gap-3">
                <Mail size={20} className="flex-shrink-0 text-cyan-300" />
                <span>info@sisenja-tanbu.go.id</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-cyan-800 mt-12 pt-6 text-sm text-cyan-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p>© 2025 SISENJA - UPTD Pengelolaan Air Limbah Domestik Kab. Tanah Bumbu</p>
            <div className="flex gap-6">
              <Link href="/kebijakan-privasi" className="hover:text-cyan-300 transition-colors">
                Kebijakan Privasi
              </Link>
              <Link href="/syarat-ketentuan" className="hover:text-cyan-300 transition-colors">
                Syarat & Ketentuan
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}