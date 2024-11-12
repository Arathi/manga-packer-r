# Manga Packer

## 简介

Manga Packer，油猴插件，用于从网页上打包下载图片资源，目前支持 `Telegraph` 和 [NHentai](https://nhentai.net/) 。

## 下载安装

1. [安装 TamperMonkey](https://chromewebstore.google.com/detail/%E7%AF%A1%E6%94%B9%E7%8C%B4/dhdgffkkebhmkfjojejmpbldmpobfkfo)
2. 安装本插件

可以点击以下链接开始安装：

- [GitHub](https://github.com/Arathi/manga-packer-r/raw/master/dist/manga-packer-r.user.js)
- [GitHub Proxy](https://ghp.ci/https://github.com/Arathi/manga-packer-r/raw/master/dist/manga-packer-r.user.js)
- [jsDelivr](https://cdn.jsdelivr.net/gh/Arathi/manga-packer-r/dist/manga-packer-r.user.js)

## 编译运行

### 1. 安装 `Node.js`

[Node.js](https://nodejs.org/en/download) 提供了多种安装方式，自行选择一种方式安装，`Windows` 上目前推荐 [fnm](https://github.com/Schniz/fnm)。

### 2. 安装 `pnpm`（可跳过）

```bash
npm install -g pnpm
```

_注：也可以不安装 `pnpm`，直接使用 `npm`，后续命令请自行修改。_

### 3. 获取源码

从 [GitHub](https://github.com/Arathi/manga-packer-r) 获取源码（需要安装 `git` 客户端）

```bash
git clone https://github.com/Arathi/manga-packer-r.git
```

### 4. 下载依赖包

```bash
pnpm i
```

### 5. 编译开发版本（可跳过）

```bash
pnpm dev
```

### 6. 构建并安装

```bash
pnpm build && pnpm preview
```

## 后续计划

- 支持 e-hentai
- 支持 aria2
