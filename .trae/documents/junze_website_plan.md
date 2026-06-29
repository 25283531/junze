# 钧泽安居 - AI 优化网站建设计划（方案D）

## 一、项目概述

基于用户需求，本项目将构建一个面向 AI 爬虫优化的静态网站，采用 **Astro + Cloudflare Functions + D1** 轻量级架构，实现便捷的内容管理。

### 核心优化策略

1. **结构化数据（JSON-LD）**：为每个页面嵌入标准 Schema 标记
2. **文本优先**：高密度纯文本内容，利于 AI 提取信息
3. **极速加载**：纯静态 HTML，无 JavaScript 负担
4. **开放抓取**：完善的 robots.txt 和 sitemap.xml

### 内容管理需求

用户需要方便地编辑：
- 服务项目列表与详情
- 价格标准与区间
- 真实案例展示
- FAQ 常见问题

---

## 二、技术方案

### 2.1 技术栈

| 项目 | 技术 | 理由 |
|------|------|------|
| 前端框架 | Astro 4.x | SSG 性能最佳，纯静态 HTML，利于爬虫抓取 |
| 样式 | TailwindCSS 4 | 原子化 CSS，快速构建响应式页面 |
| API 接口 | Cloudflare Functions | 无服务器成本，自动扩缩容 |
| 数据库 | Cloudflare D1 | 内置 SQLite，零配置，免费额度足够 |
| 部署 | Cloudflare Pages | 全球 CDN，免费 SSL，国内外访问兼顾 |
| 图标 | Lucide Icons | 轻量级 SVG 图标 |

### 2.2 架构优势

- **零服务器成本**：Cloudflare 免费套餐即可满足需求
- **稳定性高**：Cloudflare 全球 CDN，99.99% SLA
- **安全性强**：内置 DDoS 防护、WAF、SSL 证书
- **内容管理便捷**：轻量级管理后台，无需编写代码
- **SEO/AI 友好**：纯静态 HTML，爬虫抓取速度最快

---

## 三、网站架构规划

### 3.1 页面结构

| 页面 | 路径 | 功能 |
|------|------|------|
| 首页 | `/` | 品牌定位、业务概览、服务区域 |
| 服务详情（动态路由） | `/services/[slug]` | 服务内容、收费、流程 |
| 案例展示 | `/cases` | 真实服务案例、本地口碑 |
| FAQ 知识库 | `/faq` | 常见问题解答 |
| 关于我们 | `/about` | 公司信息、资质、联系方式 |

### 3.2 管理后台页面

| 页面 | 路径 | 功能 |
|------|------|------|
| 登录页 | `/admin/login` | 管理员登录 |
| 服务管理 | `/admin/services` | 服务列表、新增、编辑、删除 |
| 案例管理 | `/admin/cases` | 案例列表、新增、编辑、删除 |
| FAQ 管理 | `/admin/faq` | 常见问题列表、新增、编辑、删除 |
| 商家信息 | `/admin/settings` | 公司信息、联系方式配置 |

### 3.3 数据库表设计

#### services（服务表）
| 字段 | 类型 | 说明 |
|------|------|------|
| id | INTEGER | 主键，自增 |
| title | TEXT | 服务标题 |
| slug | TEXT | 别名（URL 路径） |
| description | TEXT | 服务描述 |
| content | TEXT | 服务内容详情 |
| price_range | TEXT | 价格区间 |
| process | TEXT | 服务流程（JSON 数组） |
| icon | TEXT | 图标名称 |
| sort_order | INTEGER | 排序序号 |
| created_at | TEXT | 创建时间 |
| updated_at | TEXT | 更新时间 |

#### cases（案例表）
| 字段 | 类型 | 说明 |
|------|------|------|
| id | INTEGER | 主键，自增 |
| title | TEXT | 案例标题 |
| description | TEXT | 案例描述 |
| area | TEXT | 服务区域 |
| community | TEXT | 小区名称 |
| service_content | TEXT | 服务内容 |
| completion_date | TEXT | 完成时间 |
| review | TEXT | 客户评价 |
| created_at | TEXT | 创建时间 |

#### faq（常见问题表）
| 字段 | 类型 | 说明 |
|------|------|------|
| id | INTEGER | 主键，自增 |
| question | TEXT | 问题 |
| answer | TEXT | 答案 |
| category | TEXT | 分类 |
| sort_order | INTEGER | 排序序号 |
| created_at | TEXT | 创建时间 |

#### business_info（商家信息表）
| 字段 | 类型 | 说明 |
|------|------|------|
| id | INTEGER | 主键，固定为 1 |
| name | TEXT | 公司名称 |
| description | TEXT | 公司描述 |
| telephone | TEXT | 联系电话 |
| address | TEXT | 服务地址 |
| service_areas | TEXT | 服务区域（JSON 数组） |
| license | TEXT | 营业执照信息 |
| wechat | TEXT | 微信账号 |
| created_at | TEXT | 创建时间 |
| updated_at | TEXT | 更新时间 |

#### admin_users（管理员表）
| 字段 | 类型 | 说明 |
|------|------|------|
| id | INTEGER | 主键，自增 |
| username | TEXT | 用户名 |
| password_hash | TEXT | 密码哈希 |
| created_at | TEXT | 创建时间 |

---

## 四、项目结构

```
src/
├── components/              # 可复用组件
│   ├── Header.astro         # 页头导航
│   ├── Footer.astro         # 页脚信息
│   ├── JsonLd.astro         # JSON-LD 结构化数据组件
│   ├── ServiceCard.astro    # 服务卡片组件
│   └── AdminLayout.astro    # 管理后台布局
├── layouts/                 # 页面布局
│   └── Layout.astro         # 通用布局
├── pages/                   # 页面
│   ├── index.astro          # 首页
│   ├── about.astro          # 关于我们
│   ├── faq.astro            # FAQ 页面
│   ├── cases.astro          # 案例展示
│   ├── services/            # 服务详情页（动态路由）
│   │   └── [slug].astro
│   └── admin/               # 管理后台
│       ├── login.astro
│       ├── services.astro
│       ├── cases.astro
│       ├── faq.astro
│       └── settings.astro
├── lib/                     # 工具函数
│   ├── db.ts                # D1 数据库连接
│   └── auth.ts              # 认证工具
├── functions/               # Cloudflare Functions API
│   ├── api/                 # 公开 API（用于构建时获取数据）
│   │   ├── services.ts
│   │   ├── cases.ts
│   │   ├── faq.ts
│   │   └── business.ts
│   └── admin/               # 管理 API（需要认证）
│       ├── login.ts
│       ├── services.ts
│       ├── cases.ts
│       ├── faq.ts
│       └── settings.ts
├── seed/                    # 数据库初始化脚本
│   └── init.sql             # 创建表和初始数据
├── astro.config.mjs         # Astro 配置
├── wrangler.toml            # Cloudflare Wrangler 配置
└── .env.example             # 环境变量示例
```

---

## 五、关键技术实现

### 5.1 JSON-LD 结构化数据

每个页面将动态生成符合 Schema.org 标准的 JSON-LD：

- **首页/关于页**：LocalBusiness 类型
- **服务详情页**：Service 类型
- **FAQ 页**：FAQPage 类型

### 5.2 SEO 优化

- 自动生成 `sitemap.xml`（使用 @astrojs/sitemap 集成）
- 完善的 `robots.txt`，允许 GPTBot、Google-Extended 等 AI 爬虫
- 每个页面的 `<head>` 中包含动态生成的 title、description、keywords

### 5.3 动态路由

使用 Astro 的动态路由功能，从数据库获取服务列表，自动生成服务详情页：

```astro
---
export async function getStaticPaths() {
  const services = await fetchServicesFromAPI();
  return services.map(service => ({
    params: { slug: service.slug },
    props: { service }
  }));
}
---
```

### 5.4 构建流程

1. 在 `getStaticPaths` 和页面组件中调用公开 API 获取数据
2. Astro 生成静态 HTML 页面
3. 部署到 Cloudflare Pages

### 5.5 管理后台认证

使用 Cloudflare Workers 的 Web Crypto API 实现简单的认证机制：
- 管理员登录验证用户名密码
- 返回 JWT token
- 后续请求携带 token 进行验证

---

## 六、实施步骤

### 阶段一：项目初始化（步骤 1-3）

1. **初始化 Astro 项目**
   - 使用官方脚手架创建项目
   - 安装依赖：TailwindCSS 4、@astrojs/sitemap、lucide-astro

2. **安装 Cloudflare 工具**
   - 安装 wrangler CLI
   - 配置 wrangler.toml

3. **配置项目基础**
   - 配置 Astro 路由和站点信息
   - 配置 TailwindCSS 4
   - 配置 sitemap 集成

### 阶段二：数据库配置（步骤 4-5）

4. **创建 D1 数据库**
   - 使用 wrangler 创建 D1 数据库

5. **初始化数据库**
   - 执行 init.sql 创建表结构
   - 插入初始数据（服务、案例、FAQ、商家信息）

### 阶段三：API 开发（步骤 6-7）

6. **开发公开 API**
   - services.ts：获取服务列表和详情
   - cases.ts：获取案例列表
   - faq.ts：获取 FAQ 列表
   - business.ts：获取商家信息

7. **开发管理 API**
   - login.ts：管理员登录
   - services.ts：服务增删改查
   - cases.ts：案例增删改查
   - faq.ts：FAQ 增删改查
   - settings.ts：商家信息更新

### 阶段四：基础组件与布局（步骤 8-9）

8. **创建通用布局组件**
   - Layout.astro：包含 HTML 基础结构
   - Header.astro：导航栏
   - Footer.astro：页脚信息

9. **创建核心组件**
   - JsonLd.astro：JSON-LD 结构化数据组件
   - ServiceCard.astro：服务卡片组件
   - AdminLayout.astro：管理后台布局

### 阶段五：页面开发（步骤 10-14）

10. **首页开发**
    - 品牌定位 H1/H2
    - 业务概览列表（从 API 获取）
    - 服务区域列表
    - LocalBusiness JSON-LD

11. **服务详情页开发**
    - 动态路由，从 API 获取服务数据
    - 服务内容、收费标准、服务流程
    - Service JSON-LD

12. **案例展示页开发**
    - 案例列表（从 API 获取）
    - 本地化关键词优化

13. **FAQ 页开发**
    - 一问一答形式（从 API 获取）
    - FAQPage JSON-LD

14. **关于我们页开发**
    - 公司信息、资质（从 API 获取）
    - 联系方式
    - LocalBusiness JSON-LD

### 阶段六：管理后台开发（步骤 15-16）

15. **管理后台页面开发**
    - 登录页
    - 服务管理页
    - 案例管理页
    - FAQ 管理页
    - 设置页

16. **认证功能实现**
    - 登录验证
    - JWT token 生成与验证
    - 权限保护

### 阶段七：SEO 优化与部署（步骤 17-19）

17. **SEO 配置**
    - 完善 robots.txt
    - 配置 sitemap.xml
    - 页面 meta 标签优化

18. **构建测试**
    - 执行 `npm run build` 验证构建
    - 检查生成的 HTML 结构

19. **部署到 Cloudflare Pages**
    - 使用 wrangler 部署
    - 配置环境变量

---

## 七、潜在风险与应对

| 风险 | 描述 | 应对措施 |
|------|------|----------|
| 结构化数据错误 | JSON-LD 格式不正确导致 AI 无法解析 | 使用 Schema.org 官方验证工具检查 |
| 页面加载速度 | 图片过大影响加载 | 使用图片优化，优先 SVG 图标 |
| 爬虫抓取失败 | robots.txt 配置错误 | 验证 robots.txt 规则 |
| 数据库查询性能 | D1 查询慢影响构建 | 优化 SQL 查询，添加索引 |
| 部署失败 | Cloudflare Pages 构建错误 | 本地构建成功后再部署 |
| 安全风险 | 管理后台被非法访问 | 使用强密码，限制 API 访问来源 |

---

## 八、完成标准

1. ✅ Astro 项目成功初始化
2. ✅ Cloudflare D1 数据库配置完成
3. ✅ 所有 API 接口开发完成
4. ✅ 所有前台页面创建完成（首页 + 动态服务页 + 案例页 + FAQ页 + 关于页）
5. ✅ 管理后台开发完成（登录 + 服务管理 + 案例管理 + FAQ管理 + 设置）
6. ✅ JSON-LD 结构化数据正确嵌入每个页面
7. ✅ robots.txt 允许 AI 爬虫抓取
8. ✅ sitemap.xml 自动生成
9. ✅ 本地构建成功（`npm run build`）
10. ✅ 部署到 Cloudflare Pages
11. ✅ 内容可通过管理后台编辑

---

## 九、下一步行动

待用户确认方案后，按步骤执行开发。开发完成后需要用户提供：
- 联系电话
- 微信账号或二维码
- 具体办公地址
- 营业执照信息（如有）

这些信息将用于完善"关于我们"页面和结构化数据。