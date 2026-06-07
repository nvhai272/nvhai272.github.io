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
- Đa ngôn ngữ Tiếng Việt / English (lưu vào `localStorage`, mặc định `en`)
- Single-page scroll layout với các section neo: About · Stack · Work · Contact
- Header nav cuộn mượt tới từng section (anchor link), responsive
- Scroll reveal animation qua directive `v-reveal` (IntersectionObserver)
- Loading screen animation khi khởi động
- WeatherModal nổi, độc lập
- Không dùng Vue Router — không dùng tab; state `dark` / `appReady` quản lý thuần bằng `ref` trong `App.vue`

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
│   ├── LoadingScreen.vue      # splash khi khởi động
│   ├── Header.vue            # top bar: nav anchor + locale + dark toggle
│   ├── HeroSection.vue       # hero + about (#about)
│   ├── CoreTechnologies.vue  # tech stack (#stack)
│   ├── ReposSection.vue      # projects / GitHub repos (#work)
│   ├── ContactSection.vue    # liên hệ (#contact)
│   ├── Footer.vue
│   ├── WeatherModal.vue      # modal thời tiết nổi
│   ├── SectionHeader.vue     # heading dùng chung cho các section
│   └── CvModal.vue           # modal xem CV
├── composables/
│   └── useLocale.ts
├── directives/
│   └── reveal.ts             # v-reveal: scroll reveal animation
├── i18n/
│   ├── index.ts
│   └── locales/
│       ├── vi.json
│       └── en.json
├── styles/
│   ├── fonts.css
│   ├── tailwind.css
│   └── theme.css
├── App.vue
├── main.ts
└── style.css
```
