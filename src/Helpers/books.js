const books = [
  {
    title: 'Marmut Merah Jambu',
    author: 'Raditya Dika',
    image_url: 'https://ssvr.bukukita.com/babacms/displaybuku/101540_f.jpg',
    description:
      'Marmut Merah Jambu adalah kumpulan tulisan komedi Raditya Dika. Sebagian besar dari tiga belas tulisan ngawur di dalamnya adalah pengalaman dan observasi Radit dalam menjalani hal paling absurd di dunia: jatuh cinta.',
    date: 'Agustus 2017',
    year: '2017',
    status: 'Available',
    genre: 'Romance'
  },
  {
    title: 'Kambing Jantan',
    author: 'Raditya Dika',
    image_url: 'https://ssvr.bukukita.com/babacms/displaybuku/101536_f.jpg',
    description:
      'Kambing jantan adalah kumpulan cerita sehari-hari yang konyol dan unik dari kehidupan Raditya Dika (Radit). Mahasiswa hasil peranakan orang Batak dan mesin jahit. Format yang ditampilkan adalah format diary. Karena buku ini adalah kumpulan diary dia yang diterbitkan di internet (blog), semua kisah lucu di dalamnya merupakan kisah nyata dari tahun 2002-2004.',
    date: 'Agustus 2017',
    year: '2005',
    status: 'Available',
    genre: 'Comedy'
  },
  {
    title: 'Laskar Pelangi',
    author: 'Andrea Hirata',
    image_url:
      'https://raitetsu.files.wordpress.com/2010/12/cover-laskar-pelangi.jpg',
    description:
      'Buku ini dipersembahkan buat mereka yang meyakini the magic of childhood memories, dan khususnya juga buat siapa saja yang masih meyakini adanya pintu keajaiban lain untuk mengubah dunia: pendidikan.',
    date: 'September 2005',
    year: '2005',
    status: 'Available',
    genre: 'Empty'
  },
  {
    title: 'DILAN dia Adalah Dilanku Tahun 1990',
    author: 'Pidi Baiq',
    image_url:
      'https://bukubukularis.com/wp-content/uploads/2015/12/dilan-edisi-revisi.jpg',
    description: `<p>“Milea kamu cantik, tapi aku belum mencintaimu. Enggak tahu kalau sore. Tunggu aja.”
(Dilan 1990)</p>

<p>“Milea jangan pernah bilang ke aku ada yang menyakitimu., nanti besoknya, orang itu akan hilang.” (Dilan 1990)</p>

<p>“Cinta sejati adalah kenyamanan, kepercayaan, dan dukungan. Kalau kamu tidak setuju, aku tidak peduli. “ (Milea 1990)</p>`,
    date: 'April 2014',
    year: '2014',
    status: 'Available',
    genre: 'Romance'
  },
  {
    title: 'Kenangan Terindah',
    author: 'Tri Okta Hesti Ningrum',
    image_url: 'https://ssvr.bukukita.com/babacms/displaybuku/100198_f.jpg',
    description: `<p>Tiga tahun telah berlalu, namun semua yang ada masih terjaga dengan sempuma dan apa yang ada di hati masih tetap utuh.</p>

<p>Udyana Firdausi membiarkan dirinya melangkah pada taman SMA. Menemukan dirinya tersenyum pada kenangan. Hanya satu harapannya, bertemu kembali dengan Angkasa pada acara reuni SMA kali ini untuk janjinya yang akan menanti Angkasa datang.</p>

<p>Angkasa pun masih menyimpan segala hal tentangnya. la ingin menunjukkan bahwa rasa itu tidak pemah berkurang sekalipun jarak terbentang, Angkasa dan perasaannya masih ada.</p>`,
    date: 'Agustus 2014',
    year: '2014',
    status: 'Empty',
    genre: 'Romance'
  },
  {
    title: 'Head Over Heels : Sebuah Romansa Bening',
    author: 'Indah Hanaco',
    image_url: 'https://ssvr.bukukita.com/babacms/displaybuku/105385_f.jpg',
    description: `<p>Mereka punya cerita patah hati sendiri yang tidak tersembuhkan oleh waktu. Hingga mereka bertemu di Pulai Nias, di suatu dini hari. Pagi yang belum merekah sempurna itu menjadi awal kisah serupa benang kusut yang menautkan Milo dan Btari.</p>

<p>Keduanya bertengkar dan saling bantah tak kenal musim. Sampai di suatu titik jenuh yang menjungkirbalikkan semua, Btari dan Milo tak pernah menduga, cinta bisa menaklukan keduanya</p>`,
    date: 'Februari 2018',
    year: '2018',
    status: 'Available',
    genre: 'Romance'
  },
  {
    title: 'Sherlock Sam dan Raungan Hantu Di Fort Canning',
    author: 'A.J. Low',
    image_url: 'https://ssvr.bukukita.com/babacms/displaybuku/112598_f.jpg',
    description: `<p>Petualangan</p>
                    <p>Sherlock Sam berlanjut! Suara raungan hantu terdengar di tempat wisata
                    sejarah paling digemari di Singapura, Fort Canning! Sherlock Sam
                    menemukan dirinya di tengah misteri yang menarik.</p>
                     <p>Hantu </p>
                     <p>tidak ada... atau mereka sebenarnya ada? Apakah teka teki ini terlalu
                    sulit untuk dipecahkan oleh Sherlock Sam dan robot setianya, Watson? </p>`,
    date: 'Juni 2015',
    year: '2015',
    status: 'Empty',
    genre: 'Adventure'
  },
  {
    title: 'Koala Kumal',
    author: 'Raditya Dika',
    image_url: 'https://ssvr.bukukita.com/babacms/displaybuku/101537_f.jpg',
    description: `Selain main perang-perangan, gue, Dodo, dan Bahri juga suka berjemur di atas mobil tua warna merah yang sering diparkir di pinggir sungai samping kompleks. Formasinya selalu sama: Bahri dan gue tiduran di atap mobil, sedangkan Dodo, seperti biasa, agak terbuang, di atas bagasi.
Kadang kami tiduran selama setengah jam. Kadang, kalau cuaca lagi sangat terik, bisa sampai dua jam. Kalau cuacanya lagi sejuk dan tidak terlalu terik, kami biasanya sama-sama menatap ke arah matahari, memandangi langit sambil tiduran.

Kalau sudah begini, Bahri menaruh kedua tangannya di belakang kepala, sambil tiduran dia berkata,

"Rasanya kayak di Miami, ya?"

"Iya," jawab gue.

"Iya," jawab Dodo.

Kami bertiga gak ada yang pernah ke Miami.

Koala Kumal adalah buku komedi yang menceritakan pengalaman Raditya Dika dari mulai jurit malam SMP yang berakhir dengan kekacauan sampai bertemu perempuan yang mahir bermain tombak.
Seluruh cerita di dalamnya berasal dari kisah nyata.`,
    date: 'Agustus 2017',
    year: '2017',
    status: 'Available',
    genre: 'Comedy'
  },
  {
    title: 'Gulliver’s Travel',
    author: 'Jonathan Swift',
    image_url:
      'https://i2.wp.com/mariviu.com/wp-content/uploads/2018/08/pw7.jpg?resize=194%2C300&ssl=1',
    description:
      'Marmut Merah Jambu adalah kumpulan tulisan komedi Raditya Dika. Sebagian besar dari tiga belas tulisan ngawur di dalamnya adalah pengalaman dan observasi Radit dalam menjalani hal paling absurd di dunia: jatuh cinta.',
    date: 'Agustus 2014',
    year: '2014',
    status: 'Empty',
    genre: 'Adventure'
  },
  {
    title: 'Maneken',
    author: 'SJ Munkian',
    image_url: 'https://ssvr.bukukita.com/babacms/displaybuku/87882_f.jpg',
    description:
      'Marmut Merah Jambu adalah kumpulan tulisan komedi Raditya Dika. Sebagian besar dari tiga belas tulisan ngawur di dalamnya adalah pengalaman dan observasi Radit dalam menjalani hal paling absurd di dunia: jatuh cinta.',
    date: 'Agustus 2014',
    year: '2014',
    status: 'Available',
    genre: 'Romance'
  },
  {
    title: 'Gulliver’s Travel',
    author: 'Jonathan Swift',
    image_url:
      'https://i2.wp.com/mariviu.com/wp-content/uploads/2018/08/pw7.jpg?resize=194%2C300&ssl=1',
    description:
      'Marmut Merah Jambu adalah kumpulan tulisan komedi Raditya Dika. Sebagian besar dari tiga belas tulisan ngawur di dalamnya adalah pengalaman dan observasi Radit dalam menjalani hal paling absurd di dunia: jatuh cinta.',
    date: 'Agustus 2014',
    year: '2014',
    status: 'Available',
    genre: 'Entertainment'
  }
];

module.exports = books;
