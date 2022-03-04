# login-test

practicing postgresql, sequelize, express, vuejs and add some redis things on there

# Note

2 MARET 2022

1. Installing Environtment
   Note:
   Windows Sub-System for Linux
   a. Chrome
   status: aman terkendali
   b. Git for windows
   status: aman digunakan
   c. ESLint & Prettier

2. Redis

# Redis - Remote Dictionary Server

Struktur data dictionary(key value) berbasis server. --> Memory based (RAM bukan HD)
Memory Data structure Store - digunakan sebagai database, cache dan message broker.

Key-value database -> data disimpan dalam bentuk pair (key(primary)-value(data))

In-Memory Database -> media penyimpanan utamanya adalah memory.

Why Redis? -> popularitas.

# Kapan kita butuh redis?

Problem: Database Utama Lambat
Redis digunakan sebagai cache atau data sementara.

Problem: Aplikasi Lain Lambat
integrasi Third party aplication yang lambat.

Problem: Proses berat di aplikasi
Proses perhitungan yang berat dalam request suatu aplikasi.

Problem: Membuat delayed job.
request business logic yang banyak bisa dimasukan kedalam redis kemudian dalam aplikasi bisa menggunakan scheduler untuk melakukan proses yang butuh delay job.

Intinya: Redis digunakan untuk mempercepat aplikasi yang mulai lambat dengan melakukan proses caching (menyimpan data secara sementara)

# Install Redis

Note: Redis adalah aplikasi yang dibuat menggunakan bahasa pemrograman C --> See ioredis as compatible sources untuk pake redis di NodeJs

# UPDATE 3 MARET 2022

1. Redis - cache dan strategi cache (CrashCourse - YT)

Redis - Database - Key-Value Database

Redis Expiration --> Key: redis.expire(nama data, time(in sec))

2. List - Array Type of Redis (data set list)

key: lpush/rpush key value --> tidak bisa dipanggil dengan "get". use lrange key vIndexStart vIndexFinish

deleting - key : lpop/rpop

3. Sets - similar to list (its unique array)
