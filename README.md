# Roadster — Điều khiển những lực vô hình

Bài đồ họa tương tác theo hướng “Bên trong cỗ máy điều khiển lực”, gồm bản đồ nhìn xuyên và năm chương về hút gầm, khí động học, đánh lái điện tử, vật liệu, bộ đẩy khí lạnh.

## Xem bản đang chạy

http://127.0.0.1:4174/

Bản local đã được mở và kiểm tra trong trình duyệt của Codex. Đây là một bản trải nghiệm biên tập độc lập; chưa xuất bản lên VnExpress.

## Những thao tác chính

- Kéo trực tiếp trên ảnh hoặc dùng thanh trượt để nhìn xuyên thân xe; chạm 5 điểm để mở chú giải.
- Bật/tắt quạt hút, đổi điều kiện khoang gầm kín/hở.
- Đổi ưu tiên đường thẳng / vào cua, mở giải thích về sự đánh đổi.
- Điều chỉnh vô-lăng, so sánh hai độ nhạy và đưa về giữa.
- Khám phá carbon, magiê, titanium.
- So sánh Performance / Thrust / Rocket; giữ rõ phạm vi từng cấu hình.
- Mục lục, nguồn, dừng/chạy chuyển động luôn có thể truy cập khi cuộn.

## Nguồn, hình và giới hạn

- `docs/asset-manifest.json`: nguồn từng ảnh, credit và cách dùng.
- `docs/image-prompts.md`: bộ prompt tạo hình bằng công cụ ImageGen tích hợp.
- `docs/brief-v1.md`: brief, mục tiêu độc giả, phạm vi và nguyên tắc dữ liệu.
- `design/hero-reference.png`: định hướng hình ảnh cho màn mở đầu.
- `design/assets/`: ảnh minh họa gốc có thể tiếp tục chỉnh sửa.
- `design/source-media/`: tư liệu chính thức bổ sung đã tham khảo.

Các hình nhìn xuyên là minh họa AI, không phải cấu tạo được xác nhận của Tesla. Luồng khí, lực và góc lái chỉ giải thích nguyên lý; không phải CFD, số đo thử nghiệm hay phần mềm điều khiển xe. Chú thích tương ứng có ngay trong bài.

## Kiểm tra

`npm run build` tạo bản client và gói hosting. `npm test` chạy 9 kiểm tra về cấu trúc nội dung, ranh giới cấu hình, bất biến của mô hình minh họa và hợp đồng hosting.

`design-qa.md` ghi kết quả kiểm tra giao diện. `docs/qa/` chứa bằng chứng trình duyệt và ảnh đối chiếu.

Đã thử các luồng chính trong trình duyệt ở 1440×1000, 1280×720, 834×1112, 390×844 và 320×740. Kiểm tra bàn phím, kéo/chạm, điều khiển dừng chuyển động, nguồn, trạng thái đóng/mở bảng và lỗi console. Việc thay đổi tùy chọn giảm chuyển động của hệ điều hành chưa được mô phỏng trong trình duyệt; code có lắng nghe thay đổi này.

## Cấu trúc

- `src/App.jsx`: các chương, điều khiển, hộp thoại và hoạt ảnh canvas.
- `src/models.js`: nội dung cấu hình và mô hình minh họa có giới hạn rõ.
- `src/styles.css`: bố cục, responsive, focus và trạng thái chuyển động.
- `src/fonts.css`: phông tiếng Việt cục bộ.
- `public/assets/`: tài sản thực sự được dùng khi chạy.

Các thành phần đóng gói Sites của template được giữ nguyên. Chưa triển khai public; chưa kết nối CMS hoặc dữ liệu vận hành thực tế.

## GitHub và Vercel

Source: https://github.com/namcubacollab/landingpage-motion

Vercel dùng preset Vite, `npm ci`, `npm run build`, xuất bản `dist/client`. Không cần biến môi trường. `node_modules`, `dist`, thông tin đăng nhập và cấu hình tài khoản Vercel không nằm trong source.
