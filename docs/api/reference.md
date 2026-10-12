---
sidebar_position: 1
---

# API 参考

本文档描述 test-docs 对外提供的 REST API 规范，涵盖资源、参数与返回格式。

## 基本约定

- 基础地址：`https://api.test-docs.example.com/v1`
- 数据格式：JSON
- 认证方式：通过 `Authorization: Bearer <token>` 请求头携带令牌

## 通用返回结构

所有接口统一返回如下结构：

```json
{
  "code": 0,
  "message": "ok",
  "data": {}
}
```

## 文档资源

### 查询文档列表

```
GET /docs
```

分页返回文档资源列表。

**查询参数：**

| 参数 | 类型 | 必填 | 说明 |
|------|------|------|------|
| `page` | int | 否 | 页码，默认 1 |
| `page_size` | int | 否 | 每页条数，默认 20，最大 100 |
| `keyword` | string | 否 | 标题关键字模糊搜索 |

**响应示例：**

```json
{
  "code": 0,
  "data": {
    "items": [
      {"id": 1, "title": "欢迎使用 test-docs", "path": "/docs/intro"},
      {"id": 2, "title": "快速开始", "path": "/docs/guide/quickstart"}
    ],
    "total": 2,
    "page": 1,
    "page_size": 20
  }
}
```

### 获取文档详情

```
GET /docs/{id}
```

根据文档 ID 获取单篇文档详情。

**路径参数：**

| 参数 | 类型 | 说明 |
|------|------|------|
| `id` | int | 文档 ID（必填） |

**响应示例：**

```json
{
  "code": 0,
  "data": {
    "id": 1,
    "title": "欢迎使用 test-docs",
    "content": "# 欢迎使用 test-docs\n...",
    "updated_at": "2026-10-12T11:00:00+08:00"
  }
}
```

## 分页说明

- 列表接口默认返回 `page` 与 `page_size` 字段，供客户端翻页使用。
- `page_size` 超出 100 时会按 100 处理。

## 错误处理

当请求失败时，返回非零 `code`，并通过 `message` 字段说明原因。常见错误码见[错误码说明](/docs/api/errors)。
