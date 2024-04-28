# Manga Packer

## 简介

Manga Packer，油猴插件，用于从网页上打包下载图片资源，目前支持 `Telegraph` 和 [NHentai](https://nhentai.net/) 。

## 下载安装

1. [安装TamperMonkey](https://chromewebstore.google.com/detail/%E7%AF%A1%E6%94%B9%E7%8C%B4/dhdgffkkebhmkfjojejmpbldmpobfkfo)
2. [安装本脚本](https://github.com/Arathi/manga-packer-r/blob/master/dist/manga-packer-r.user.js)

## 编译运行

1. 安装 `Node.js`

* 去 [Node.js官网](https://nodejs.org/en/download) 下载安装包后自行安装
* 使用包管理器下载安装（TODO）

2. 安装 `pnpm`

```bash
npm install -g pnpm
```

3. 获取源码

* 从 [GitHub](https://github.com/Arathi/manga-packer-r) 获取源码（需要安装 `git` 客户端）

```bash
git clone https://github.com/Arathi/manga-packer-r.git
```

* 直接下载源码（TODO）

4. 编译开发版本

```bash
pnpm dev
```

5. 构建并安装

```bash
pnpm build && pnpm preview
```
