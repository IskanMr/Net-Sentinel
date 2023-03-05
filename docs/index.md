---
layout: default
---

# WireEnthusiasts

- Ketua Kelompok: Iskan Mustamir 20/456367/TK/50497
- Anggota 1: Ryan Kusnadi 20/463613/TK/51605
- Anggota 2: Aditya Yusuf Pramudita 19/444036/TK/49232

## “Project Senior Project TI”

## Instansi

Departemen Teknologi Elektro dan Teknologi Informasi, Fakultas Teknik, Universitas Gadjah Mada

### Nama Produk

NetSentinel

### Jenis Produk

Software Intrusion Detection System

### Latar Belakang

Integrasi Teknologi Informasi dan Transformasi Digital terjadi pada laju yang sangat cepat. sayangnya jaringan lokal dan sistem informasi pada mayoritas instansi masih belum memiliki perlindungan yang cukup padahal sering berisi data privat dan sensitif. Hal ini terjadi karena kurangnya wawasan keamanan oleh personel IT dan mahalnya akses ke layanan SaaS keamanan yang ada. Sehingga, kelompok kami ingin menyelesaikan gap ini dengan membuat intrusion detection system yang murah dan mudah diimplementasikan, tetapi memiliki akurasi dan efektivitas deteksi intrusi yang memadai.

### Permasalahan

- Bagaimana cara membuat model Kecerdasan Buatan untuk mendeteksi malicious connection atau intrusion yang efektif dan efisien?
- Bagaimana cara mendeploy AI tersebut untuk dapat menjadi layanan SaaS yang murah dan mudah digunakan?

### Ide Solusi

Membuat layanan webapp bersifat SaaS yang menyediakan layanan untuk membaca traffic local network dan memberikan warning jika terdeteksi suatu malicious network connection. Ide ini akan diimplementasikan menggunakan: wireshark dan node-wireshark untuk membaca dan mengirim traffic network ke AI; Model classifier ML untuk mendeteksi malicious traffic yang di host di cloud sebagai API; dan frontend berupa dashboard untuk mengkoneksikan local network dengan cloud service, serta tempat user dapat melihat warning dan flagged connections.

### Analisis Kompetitor

#### KOMPETITOR 1

- Nama : Hardware IDS (Cisco Firepower NGIPS, Cisco Stealthwatch, Juniper Networks SRX Series, dst)
- Jenis Kompetitor : Direct Competitor
- Jenis Produk : Hardware Intrusion Detection System
- Target Customer : Enterprise yang memiliki local network yang harus diamankan
- Kelebihan :
  - Deteksi akurat dibuat oleh industry leader
- Kekurangan :
  - Mahal
  - Sulit di-install dan dikonfigurasi (integrasi ke network)
- Key Competitive Advantage & Unique Value :
  Akurasi tinggi karena dibuat industry leader pada networking

#### KOMPETITOR 2

- Nama : Shopos Home
- Jenis Kompetitor : Indirect Competitor
- Jenis Produk : Online Intrusion Detection Application
- Target Customer : Keluarga dan Enterprise kecil yang memiliki local network yang harus diamankan
- Kelebihan :
  - Simple
  - Mudah digunakan
  - Mudah diakses
- Kekurangan :
  - Mahal
  - Tidak cocok untuk enterprise berukuran sedang dan besar
- Key Competitive Advantage & Unique Value :
  Mudah digunakan oleh orang awam

#### KOMPETITOR 3

- Nama : Kismet
- Jenis Kompetitor : Indirect Competitor
- Jenis Produk : Software Intrusion Detection System
- Target Customer : Pengguna Linux, FreeBSD, NetBSD, OpenBSD, and macOS dan bisa untuk wireless connections
- Kelebihan :
  - log sangat detail
- Kekurangan :
  - kurang user-friendly
- Key Competitive Advantage & Unique Value :
  memiliki plugin yang banyak
