---
sidebar_position: 5
---

# 常见问题

## 本地启动时报端口被占用怎么办？

`npm run start` 默认使用 3000 端口，如果被占用，可以指定其他端口：

```bash
npm run start -- --port 8080
```

## 修改文档后页面没更新？

开发模式默认开启热更新，保存文件后会自动刷新。若长时间未更新，可先停掉服务重启，或执行：

```bash
npm run clear   # 清理构建缓存
npm run start
```

## 如何新增一篇文档？

在 `docs/` 目录下新建 `.md` / `.mdx` 文件即可，Docusaurus 会自动把它加入侧边栏（`sidebars.ts` 默认为自动生成模式）。想调整顺序，可在文件头部加 `sidebar_position`：

```md
---
sidebar_position: 2
---

# 我的文档
```

## 构建时报“链接失效”(broken link)？

`docusaurus.config.ts` 里 `onBrokenLinks: 'throw'` 会让构建在遇到失效链接时直接报错。检查文档内的站内链接路径是否正确，或改成 `warn` 临时放行排查。
