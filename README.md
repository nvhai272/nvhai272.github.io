# Vue Portfolio

Dự án portfolio được chuyển đổi từ React sang Vue 3 với Composition API và TypeScript.

## Cài đặt

```bash
npm install
```

## Chạy development server

```bash
npm run dev
```

## Build production

```bash
npm run build
```

## Preview production build

```bash
npm run preview
```

## Công nghệ sử dụng

- Vue 3 (Composition API)
- TypeScript
- Vite
- Tailwind CSS
- Public Sans Font

## Cấu trúc thư mục

```
src/
├── components/
│   ├── icons/          # Các icon components
│   ├── Header.vue
│   ├── Sidebar.vue
│   ├── TabNav.vue
│   ├── BioSection.vue
│   ├── CoreTechnologies.vue
│   ├── SkillsTechnologies.vue
│   ├── ReposSection.vue
│   ├── ProjectsSection.vue
│   └── Footer.vue
├── styles/
│   ├── fonts.css
│   ├── tailwind.css
│   └── theme.css
├── App.vue
├── main.ts
└── style.css
```

## Tính năng

- Dark mode toggle
- Responsive design
- Tab navigation (Overview, Repositories, Projects)
- Mobile menu
- Animated transitions
- TypeScript type safety
