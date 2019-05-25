# dog-api-nuxtjs

## Getting started
https://luftgarden.work/tut-nuxt-dog-part1/

```
➜ vue --version # 2.9.6
➜ vue init nuxt-community/starter-template dog-api-nuxtjs
➜ cd dog-api-nuxtjs
➜ npm install @nuxtjs/bulma --save
➜ npm install axios --save
➜ npm install
➜ npm run dev
```

## Add & Mod Files
```
➜  dog-api-nuxtjs tree -I node_modules
.
├── README.md
├── api
│   └── dog.js # <- 追加
├── assets
│   └── README.md
├── components
│   ├── AppHeader.vue # <- 追加
│   ├── AppLogo.vue
│   └── README.md
├── layouts
│   ├── README.md
│   └── default.vue # <- 変更
├── middleware
│   └── README.md
├── nuxt.config.js # <- 変更
├── package-lock.json
├── package.json
├── pages
│   ├── README.md
│   ├── dogs
│   │   └── _breed
│   │       └── index.vue # <- 追加
│   └── index.vue # <- 変更
├── plugins
│   └── README.md
├── static
│   ├── README.md
│   └── favicon.ico
└── store
    ├── README.md
    └── index.js # <- 追加
```

## Deploy
Run and upload ./dist
```
➜ npm run generate
```

Add following if using subdirectory
```
//nuxt.config.js
router: {
    base: '/dog-api/'
}
```