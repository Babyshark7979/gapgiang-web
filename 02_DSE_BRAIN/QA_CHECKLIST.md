# QA CHECKLIST — v0.1 (GapGiang.com)

## A) Functional (Kiểm tra chức năng)
- [ ] **Điều hướng mượt mà**: Toàn bộ các liên kết menu trên Navbar (`Bài Viết`, `Hệ Thống`, `Về Giang`, `Newsletter`) cuộn mượt (smooth scroll) đến đúng ID tương ứng.
- [ ] **Mobile Menu**: Hamburger menu trên thiết bị di động đóng/mở chuẩn, không bị lệch giao diện.
- [ ] **Slider Hero**: Chuyển slide tự động sau mỗi 5 giây, các nút chỉ mục chuyển slide hoạt động chính xác.
- [ ] **Video phát tự động**: Video `giang-video.mp4` ở phần About tự động phát (autoplay), lặp lại (loop) và luôn ở chế độ tắt tiếng (muted).
- [ ] **Đăng ký bản tin**: Form đăng ký Newsletter ở Hero và Footer nhận dạng đúng email, ngăn chặn gửi trống, và kích hoạt Toast thông báo thành công đẹp mắt khi nhấn Submit.

## B) Consistency (Độ đồng bộ thẩm mỹ - Ambient Tech)
- [ ] **Màu sắc nền tối**: Đảm bảo nền body giữ đúng màu đen sâu `#07070c`, chữ màu xám sáng thanh lịch `#94a3b8` hoặc trắng tinh khiết `#f8fafc`.
- [ ] **Lighter Experience**: Khoảng trắng giữa các phần lớn, giao diện thoáng đãng, không bị overload chữ hay các framework trang trí quá mức.
- [ ] **Công nghệ làm phông nền (Atmosphere)**: Không sử dụng các bảng thông tin dashboard giả lập phức tạp, các hiệu ứng nhấp nháy lòe loẹt.
- [ ] **Hiệu ứng hover mượt mà**: Các card dự án, snapshot ảnh và nút bấm có viền sáng mờ nhẹ (glow) mượt mà 0.3s kiểu Linear.app.

## C) Content & Worldview (Đúng tinh thần & Lõi "Gap")
- [ ] **Cấm từ ngữ sáo rỗng**: Rà soát 100% trang web, không chứa các từ: *mơ hồ*, *vô định*, *thức tỉnh*, *chữa lành*, *truyền cảm hứng*.
- [ ] **Bắt buộc dùng từ hệ thống**: Toàn bộ các tiêu đề và nội dung sử dụng các từ: *systems*, *experiments*, *observations*, *real-world gaps*, *practical thinking*.
- **Định danh Hero**: Đổi định vị hiển thị tại Hero thành: "GapGiang — Founder / System Builder / Cognitive Lab".
- [ ] **Không lifestyle flex**: Thư viện ảnh được trình bày dưới dạng "System Logs / Real-world snapshots". Mọi bức ảnh thật của anh Giang (chạy bộ, gym, làm việc) phải có ghi chú thông số kỹ thuật (Ví dụ: "Log #082: Thử nghiệm nhịp tim dưới cường độ cao" hoặc "Observation #014: Tối ưu không gian làm việc tập trung").
