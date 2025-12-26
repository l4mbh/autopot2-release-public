# Hướng dẫn Deploy Website lên GitHub Pages

## Tự động Deploy với GitHub Actions

Website sẽ tự động được deploy khi:
- Push code lên branch `main` hoặc `master`
- Có thay đổi trong thư mục `Website/`
- Hoặc trigger manual từ GitHub Actions tab

## Cấu hình GitHub Pages

1. Vào **Settings** của repository `autopot2-release-public`
2. Vào **Pages** trong menu bên trái
3. Chọn:
   - **Source**: GitHub Actions
   - **Branch**: Không cần chọn (sẽ dùng GitHub Actions)

## Kiểm tra Deploy

Sau khi workflow chạy xong, website sẽ có tại:
- `https://l4mbh.github.io/autopot2-release-public/`

## Deploy Manual (nếu cần)

```bash
cd Website
npm install
npm run build
# Copy thư mục dist lên GitHub Pages
```

## Lưu ý

- Base path đã được cấu hình là `/autopot2-release-public/`
- Nếu muốn deploy vào root domain, cần cập nhật `vite.config.ts` và `App.tsx`
- File `.nojekyll` đã được tạo để GitHub Pages không xử lý như Jekyll

