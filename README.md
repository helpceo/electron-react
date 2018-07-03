# electron-react

## 运行

```bash
$ npm run dev
```
### 也可以分步运行

```bash
$ npm run start-renderer-dev
$ npm run start-main-dev
```

## Packaging

### package 本地平台的apps:

```bash
$ npm run package
```

### package 所有平台的apps（Mac os的需要在Mac上）:
```bash
$ npm run package-all
```

### 运行端到端的测试：

```bash
$ npm run build
$ npm run test-e2e
```

## 怎么下载依赖

1. `./package.json` 根目录（一般的依赖都添加到这个文件中）
2. `./app/package.json` 在 `app` 目录下

## CSS Modules

在 `.global.css`文件中全局引入:

```css
@import "~bootstrap/dist/css/bootstrap.css";
```

## Sass support

```js
import './app.global.scss';
```
