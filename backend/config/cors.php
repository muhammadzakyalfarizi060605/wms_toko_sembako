<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Cross-Origin Resource Sharing (CORS) Configuration
    |--------------------------------------------------------------------------
    |
    | Here you may configure your settings for cross-origin resource sharing
    | or "CORS". This determines what cross-origin operations may execute
    | in web browsers. You are free to adjust these settings as needed.
    |
    | To learn more: https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
    |
    */

    // config/cors.php

    // Tentukan path yang ingin diizinkan CORS-nya
    'paths' => ['api/*', 'login', 'logout'],  // Sesuaikan dengan path yang diperlukan

    // Tentukan metode HTTP yang diizinkan
    'allowed_methods' => ['*'],  // Mengizinkan semua metode HTTP seperti GET, POST, PUT, DELETE

    // Tentukan asal yang diizinkan (untuk frontend Anda)
    'allowed_origins' => ['*'],  // Ganti dengan URL frontend Anda
    'allowed_origins_patterns' => [],  // Bisa dikosongkan jika tidak memerlukan pola spesifik

    // Tentukan header yang diizinkan
    'allowed_headers' => ['*'],  // Mengizinkan semua header

    // Tentukan header yang dapat di-expose
    'exposed_headers' => [],  // Bisa dikosongkan jika tidak ada header khusus yang perlu di-expose

    // Tentukan waktu cache untuk preflight request (dalam detik)
    'max_age' => 0,  // Anda bisa menetapkan waktu lebih besar jika ingin preflight cache

    // Tentukan apakah mendukung kredensial (cookies, session)
    'supports_credentials' => true,  // Jika menggunakan sesi atau cookies


];
