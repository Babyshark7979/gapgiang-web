# WORKFLOW — WebAI Build Loop

## Step 1 — Read Brain
Đọc kỹ các chỉ dẫn trong thư mục `02_DSE_BRAIN/` (PRD_MINI.md, PHILOSOPHY.md, QA_CHECKLIST.md) trước khi tiến hành code.

## Step 2 — Plan
Phác thảo kế hoạch triển khai chia làm hai lớp:
1. **Pages / Routes**: Cấu trúc các trang hoặc khu vực hiển thị.
2. **Components**: Slider Hero, Thẻ bài viết, Danh mục Trụ cột, Dòng thời gian, Form đăng ký, Bộ sưu tập ảnh.

## Step 3 — Make it Work (MVP)
Đảm bảo phần khung hoạt động trơn tru:
- Responsive trên mọi thiết bị di động và desktop.
- Slider Hero chuyển tiếp mượt mà.
- Form đăng ký bắt được sự kiện và hiển thị thông báo phản hồi (Toast).
- Video tự động phát (autoplay) và lặp lại chế độ câm (muted).

## Step 4 — Self-Check (QA Pass 1)
AI chủ động chạy bộ tiêu chuẩn tự kiểm thử trong `QA_CHECKLIST.md` để tự phát hiện và sửa các lỗi hiển thị, lệch khung, hoặc thiếu ảnh.

## Step 5 — Make it Right (Đồng bộ Thẩm mỹ)
- Chuốt lại màu nền đen sâu `#07070c`, viền glow mờ của các card.
- Định hình typography Inter sắc nét kiểu Apple, chữ tiêu đề đậm và chữ phụ thanh lịch.
- Đơn giản hóa toàn bộ ngôn ngữ trên trang theo đúng Spec của Giang (Tầng 2 đại chúng - dễ hiểu, dễ dùng).

## Step 6 — Self-Check (QA Pass 2)
Kiểm tra lại một lần nữa để đảm bảo sản phẩm đạt chất lượng cao nhất trước khi gửi báo cáo nghiệm thu lên Chủ đầu tư.

## Step 7 — Version & Changelog
Cập nhật file thay đổi lịch sử để theo dõi tiến độ:
- Đã thay đổi những gì (What changed).
- Lý do thay đổi (Why).
- Rủi ro/ảnh hưởng nếu có (Risk/impact).
