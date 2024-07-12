# Nuxt.js

## Routing

Next.js처럼 Routing 하는 방법  
[Pages 공식 문서](https://nuxt.com/docs/guide/directory-structure/pages)  
[Layout 공식 문서](https://nuxt.com/docs/guide/directory-structure/layouts)

app.vue

```
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

## ❗ Troubleshooting

### Eslint + prettier 적용 과정 및 문제 해결

[Nuxt eslint 설정](https://eslint.nuxt.com/packages/module)

1. Nuxt 공식 문서 방법대로 @nuxt/eslint를 이용한 eslint 설정 적용
2. `.prettierrc` 파일을 별도로 생성하여 prettier 설정 적용.
3. vue 파일 script 태그 영역에 indent를 넣고 싶어 `vueIndentScriptAndStyle` 옵션 추가 > 적용 x
4. `eslint.config.mjs` 파일 prettier 설정 영역으로 옵션 이동 > 적용 o
5. `array-bracket-newline`, `array-element-newline` 옵션을 적용하지 못함. > prettier 에서 지원하지 않고, stylistic 등 라이브러리에서 js까지만 지원하는중ㅠㅠ..(20240712 기준)

- 번외 - `.prettierrc` 파일은 각 옵션 별 어떤 설정이 적용되는지 주석을 달 수 없어서 불편함.
