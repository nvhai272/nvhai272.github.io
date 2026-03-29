# Vue Portfolio

Dự án portfolio cá nhân xây dựng bằng Vue 3 + TypeScript + Vite, hỗ trợ đa ngôn ngữ (Tiếng Việt / English) và dark mode.

## Demo

https://nvhai272.github.io

## Công nghệ

- **Vue 3** (Composition API + `<script setup>`)
- **TypeScript**
- **Vite** — build tool
- **Tailwind CSS** — utility-first styling
- **vue-i18n v9** — đa ngôn ngữ (vi / en)
- **Lucide Vue Next** + **Heroicons** — icon libraries
- **OKLCH color space** — CSS custom properties cho theme

## Tính năng

- Dark mode (class-based, lưu vào `localStorage`)
- Đa ngôn ngữ Tiếng Việt / English (lưu vào `localStorage`)
- Responsive — mobile bottom nav + desktop sidebar
- Loading screen animation khi khởi động
- Tab navigation: Overview · Experience · Contact
- Không dùng Vue Router — tab state quản lý thuần bằng `ref` trong `App.vue`

## Cài đặt & chạy

```bash
npm install
npm run dev       # dev server tại localhost:5173
npm run build     # type-check + build ra dist/
npm run preview   # preview production build
```

## Cấu trúc thư mục

```
src/
├── components/
│   ├── LoadingScreen.vue
│   ├── Header.vue
│   ├── Sidebar.vue
│   ├── MobileNav.vue
│   ├── TabNav.vue
│   ├── BioSection.vue
│   ├── CoreTechnologies.vue
│   ├── ExperienceSection.vue
│   ├── ProjectsSection.vue
│   ├── ReposSection.vue
│   ├── ContactSection.vue
│   └── Footer.vue
├── composables/
│   └── useLocale.ts
├── i18n/
│   ├── index.ts
│   └── locales/
│       ├── vi.json
│       └── en.json
├── styles/
│   ├── fonts.css
│   └── theme.css
├── App.vue
├── main.ts
└── style.css
```
