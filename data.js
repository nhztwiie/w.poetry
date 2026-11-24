// ============================================================================
// Thiên Minh | w.poetry - Dữ liệu cấu hình, tuyển tập thơ & Firebase Sync
// Tác giả: Nhật Huy (Bút danh: Thiên Minh)
// ============================================================================

window.POETRY_DATA = {
  // Thông tin nhận diện trang web (Hiển thị tiêu đề, nút Copy Link & QR Code)
  siteInfo: {
    title: "Thiên Minh | w.poetry",
    shareUrl: "", // Để trống sẽ tự động lấy link trang web hiện tại (window.location.href)
    featuredHeading: "Tuyển tập nổi bật",
    guestbookTitle: "Gửi lời nhắn cho Thiên Minh",
    guestbookSubtitle: "Một vài dòng cảm nhận hoặc lời chào dịu dàng gửi đến góc viết của Nhật Huy."
  },

  // 1. Cấu hình Firebase Console (Thay bằng thông số dự án Firebase của bạn)
  // Khi cấu hình xong, mọi thay đổi của Admin (thơ mới, chỉnh sửa, bình luận, hồ sơ)
  // sẽ tự động đồng bộ thời gian thực (Realtime) lên tất cả thiết bị User.
  firebaseConfig: {
    apiKey: "YOUR_FIREBASE_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    databaseURL: "https://YOUR_PROJECT_ID-default-rtdb.firebaseio.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_SENDER_ID",
    appId: "YOUR_APP_ID"
  },

  // 2. Cấu hình EmailJS (Nhận lời nhắn / cảm nhận từ độc giả về mail cá nhân)
  emailjsConfig: {
    publicKey: "YOUR_EMAILJS_PUBLIC_KEY",
    serviceId: "YOUR_EMAILJS_SERVICE_ID",
    templateId: "YOUR_EMAILJS_TEMPLATE_ID",
    receiverEmail: "lnh.quii@gmail.com"
  },

  // 3. Tài khoản Admin mặc định
  adminAccount: {
    email: "lnh.quii@gmail.com",
    password: "nhzt.wii100614",
    displayName: "Nhật Huy",
    penName: "Thiên Minh",
    role: "admin"
  },

  // 4. Thông tin Thi gia (Home Tab)
  author: {
    name: "Nhật Huy",
    penName: "Thiên Minh",
    // Thay bằng đường dẫn ảnh thật trên GitHub (ví dụ: 'images/avatar.jpg')
    avatar: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=400&q=80",
    bioLabel: "Nhật Huy | w.bio",
    bioUrl: "https://nhztwiie.github.io/w",
    tagline: "Trầm mặc & điềm tĩnh sau từng con chữ",
    introParagraph:
      "Tôi tên Nhật Huy. Nhằm muốn ẩn mình để hòa nhịp cùng những áng thơ, tôi quyết định chọn bút danh Thiên Minh. Tên gọi khởi từ Nhật (mặt trời) và Huy (ánh sáng), chuyển thành Thiên Minh như một cách giữ sự trầm mặc và điềm tĩnh của riêng mình. Thay vì lựa chọn sự rực rỡ, tôi chọn một bút danh mang sắc thái trầm lặng, ẩn sau từng dòng chữ để người đọc tự tìm thấy nhịp điệu của riêng mình.",
    philosophy:
      "Thơ không cần ồn ào để chạm tới lòng người. Mỗi khoảng trắng trên trang giấy là một nhịp thở để cảm xúc tự ngân vang.",
    milestones: [
      { year: "2024", text: "Khởi nguồn những trang viết đầu tiên dưới bút danh Thiên Minh." },
      { year: "2025", text: "Hình thành mạch thơ trữ tình, chiêm nghiệm về thời gian và tĩnh lặng." },
      { year: "2026", text: "Ra mắt không gian thơ cá nhân w.poetry — lưu giữ và đồng bộ từng vần thơ." }
    ],
    socials: [
      { label: "w.bio Chính Thức", url: "https://nhztwiie.github.io/w" },
      { label: "GitHub", url: "https://github.com/nhztwiie" },
      { label: "Email", url: "mailto:lnh.quii@gmail.com" }
    ]
  },

  // 5. Danh mục Tập thơ / Chủ đề (Admin có thể thêm/xóa trực tiếp trên web)
  collections: [
    { id: "all", name: "Tất cả" },
    { id: "tap-nang-nhat", name: "Tập: Nắng Nhạt Bên Thềm" },
    { id: "tap-dem-tinh", name: "Tập: Khúc Trầm Đêm Tĩnh" },
    { id: "tu-su", name: "Tự sự & Chiêm nghiệm" },
    { id: "mua-va-ky-uc", name: "Mùa & Ký ức" }
  ],

  // 6. Danh sách Bài thơ mẫu (Admin có thể thêm, sửa, xóa, tùy chỉnh ảnh/nhạc/tương tác)
  poems: [
    {
      id: "poem-01",
      title: "Chiều Nghiêng Qua Khung Cửa",
      collectionId: "tap-nang-nhat",
      genre: "Thơ tự do",
      featured: true,
      highlightVerse: "Nắng lùi một bước sau rèm mỏng,\nĐể lại khoảng trời vừa đủ yên.",
      createdAt: "14/11/2026 · 17:15",
      context: "Viết vào một buổi chiều muộn khi ánh nắng cuối ngày vừa tắt trên hiên nhà.",
      coverImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80",
      // Dán link bài hát Spotify bất kỳ (dạng https://open.spotify.com/track/...)
      spotifyUrl: "https://open.spotify.com/track/4cOdK2wGLETKBW3PvgPWqT",
      content: `Nắng lùi một bước sau rèm mỏng,
Để lại khoảng trời vừa đủ yên.
Gió khẽ chạm qua từng kẽ lá,
Nhắc lòng thôi giữ những ưu phiền.

Có những điều không cần gọi tên,
Như vệt sáng chiều rơi lặng lẽ.
Ai đi qua miền ký ức cũ,
Mới hay lòng mình đã bình yên.

Tôi ngồi đếm nhịp thời gian trôi,
Giữa trang giấy trắng còn thơm mực.
Mặt trời khuất bóng sau đồi vắng,
Vẫn còn tia ấm ở trong tim.`,
      authorNote:
        "Bài thơ này được viết khi mình nhận ra sự tĩnh lặng không phải là trống rỗng, mà là lúc tâm trí đủ nhẹ nhàng để lắng nghe những điều nhỏ bé nhất.",
      likes: 28,
      favorites: 15,
      allowComments: true,
      comments: [
        {
          id: "c-101",
          authorName: "Minh Anh",
          authorAvatar: "",
          text: "Nhịp thơ nhẹ nhàng và bình yên quá, đọc vào buổi chiều thấy lòng dịu lại hẳn.",
          createdAt: "15/11/2026"
        }
      ]
    },
    {
      id: "poem-02",
      title: "Gửi Lại Mùa Thu Cũ",
      collectionId: "mua-va-ky-uc",
      genre: "Lục bát biến thể",
      featured: true,
      highlightVerse: "Lá rơi chẳng hẹn mùa sau,\nNgười đi giữ lại một màu sương phai.",
      createdAt: "02/11/2026 · 21:40",
      context: "Đêm gió se lạnh đầu tháng Mười Một, nghe một bản nhạc cũ.",
      coverImage: "https://images.unsplash.com/photo-1476820865390-c52aeebb9891?auto=format&fit=crop&w=900&q=80",
      spotifyUrl: "https://open.spotify.com/track/0VjIjW4GlUZAMYd2vXMi3b",
      content: `Lá rơi chẳng hẹn mùa sau,
Người đi giữ lại một màu sương phai.
Con đường cũ vắng dấu hài,
Chiều nghiêng bóng đổ trải dài phố xa.

Ta về nhặt chút hương hoa,
Gói trong trang sách mở ra thẫn thờ.
Tháng năm dệt những vần thơ,
Nửa như thực tại, nửa mơ thuở nào.

Đêm nghe tiếng gió xôn xao,
Hỏi lòng còn nhớ hay vào lãng quên?
Chỉ còn ánh sáng dịu êm,
Soi qua khung cửa ru mềm giấc sâu.`,
      authorNote:
        "Mỗi mùa đi qua đều để lại một dư âm riêng. Mình chọn giữ lại bằng những câu lục bát chậm rãi như một cuốn nhật ký.",
      likes: 42,
      favorites: 24,
      allowComments: true,
      comments: []
    },
    {
      id: "poem-03",
      title: "Khoảng Lặng Giữa Đêm Trường",
      collectionId: "tap-dem-tinh",
      genre: "Thơ tự do",
      featured: true,
      highlightVerse: "Khi phố thị khép hàng mi mệt mỏi,\nÁnh đèn vàng thức cùng những suy tư.",
      createdAt: "24/10/2026 · 23:55",
      context: "Nửa đêm bên bàn viết, khi mọi âm thanh xung quanh đã lắng xuống.",
      coverImage: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=900&q=80",
      spotifyUrl: "https://open.spotify.com/track/3n3Ppam7vgaVa1iaRUc9Lp",
      content: `Khi phố thị khép hàng mi mệt mỏi,
Ánh đèn vàng thức cùng những suy tư.
Không cần vội vã trả lời câu hỏi,
Cứ để đêm sâu tự hóa hiền từ.

Tôi ẩn mình sau từng con chữ nhỏ,
Như ánh trăng gầy nép bóng mây trôi.
Chẳng mong rực rỡ giữa trời lộng gió,
Chỉ xin làm một đốm sáng lẻ loi.

Ai thức giấc giữa muôn trùng tĩnh mịch,
Đọc vần thơ này hẳn sẽ hiểu ra:
Trong trầm mặc vẫn ươm mầm hy vọng,
Đợi bình minh lên dịu ngọt hiền hòa.`,
      authorNote:
        "Đây là bài thơ gắn liền với ý nghĩa bút danh Thiên Minh — ánh sáng không chói lòa nhưng bền bỉ trong đêm.",
      likes: 35,
      favorites: 19,
      allowComments: true,
      comments: []
    },
    {
      id: "poem-04",
      title: "Tự Sự Bên Tách Trà Sớm",
      collectionId: "tu-su",
      genre: "Thơ văn xuôi / Tự do",
      featured: true,
      highlightVerse: "Học cách cúi đầu như bông lúa chín,\nĐể thấy trời cao rộng hơn mỗi ngày.",
      createdAt: "10/10/2026 · 06:30",
      context: "Buổi sáng sớm tinh sương, trước giờ bắt đầu một ngày mới.",
      coverImage: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=900&q=80",
      spotifyUrl: "",
      content: `Học cách cúi đầu như bông lúa chín,
Để thấy trời cao rộng hơn mỗi ngày.
Học cách lắng nghe trước khi lên tiếng,
Giữ lòng bình thản giữa chốn đổi thay.

Chữ nghĩa dạy ta biết điều khiêm tốn,
Một dấu chấm câu cũng mang sức nặng.
Người viết chỉ là kẻ đi gom nhặt,
Những hạt sương rơi trên lá dịu dàng.`,
      authorNote:
        "Lời tự nhắc nhở bản thân trên hành trình cầm bút: luôn giữ sự khiêm nhường và chân thành.",
      likes: 51,
      favorites: 31,
      allowComments: true,
      comments: []
    }
  ]
};
