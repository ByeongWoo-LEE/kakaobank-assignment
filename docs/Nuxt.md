# Nuxt.js

## Routing

Next.js처럼 Routing 하는 방법  
[Pages 공식 문서](https://nuxt.com/docs/guide/directory-structure/pages)  
[Layout 공식 문서](https://nuxt.com/docs/guide/directory-structure/layouts)

app.vue

```ts
<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
```

파일 경로

```
- app
    └─ layouts
        ├─ default.vue
        └─ custom.vue
    └─ pages
        └─ index.vue > root page
```

about.vue

```
<script setup lang="ts">
definePageMeta({
  layout: 'custom'
})
</script>
```
