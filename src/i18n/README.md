# Hướng dẫn sử dụng i18n

## Cấu trúc thư mục
```
src/i18n/
├── index.ts          # Cấu hình i18n chính
├── locales/
│   ├── vi.json      # Bản dịch tiếng Việt
│   └── en.json      # Bản dịch tiếng Anh
└── README.md        # File này
```

## Cách sử dụng trong component

### 1. Sử dụng trong template với $t()
```vue
<template>
  <h1>{{ $t('header.title') }}</h1>
  <p>{{ $t('bio.content') }}</p>
</template>
```

### 2. Sử dụng trong script với useI18n()
```vue
<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()

// Sử dụng trong computed hoặc function
const title = computed(() => t('header.title'))

// Thay đổi ngôn ngữ
const changeLanguage = (lang: string) => {
  locale.value = lang
  localStorage.setItem('locale', lang)
}
</script>
```

## Thêm bản dịch mới

1. Mở file `locales/vi.json` và `locales/en.json`
2. Thêm key mới theo cấu trúc:
```json
{
  "section": {
    "key": "Giá trị"
  }
}
```

## Ngôn ngữ được hỗ trợ
- `vi`: Tiếng Việt (mặc định)
- `en`: Tiếng Anh

## Lưu ý
- Ngôn ngữ được lưu trong localStorage với key `locale`
- Khi reload trang, ngôn ngữ sẽ được khôi phục từ localStorage
- Nếu không có ngôn ngữ được lưu, mặc định sẽ là tiếng Việt
