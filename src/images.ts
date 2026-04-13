// =============================================================
// 🖼️  HƯỚNG DẪN THAY ẢNH SẢN PHẨM
// -------------------------------------------------------------
// 1. Thêm file ảnh của bạn vào thư mục: assets/images/
// 2. Thay tên file bên phải require(...) bằng tên file thực tế
//    Ví dụ: require("../assets/images/ten-anh-cua-ban.png")
// 3. Lưu file → ảnh tự động hiện trong app.
// =============================================================

// ── Exclusive / Best-Selling Products ─────────────────────────
export const productImages = {
  apple: require("../assets/images/apple.png"),     // 🍎 Thay tên ảnh táo
  banana: require("../assets/images/banana.png"),    // 🍌 Thay tên ảnh chuối
  pepper: require("../assets/images/pepper.png"),    // 🫑 Thay tên ảnh ớt chuông
  ginger: require("../assets/images/ginger.png"),    // 🫚 Thay tên ảnh gừng
} as const;

// ── Grocery Products ──────────────────────────────────────────
export const groceryImages = {
  "beef-bone":       require("../assets/images/beef-bone.png"),  // 🥩 Thay tên ảnh xương bò
  "broiler-chicken": require("../assets/images/chicken.png"),    // 🍗 Thay tên ảnh gà
} as const;
