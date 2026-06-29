# 钧泽安居

一个基于 Astro 构建的企业官网项目，专为平顶山本地家居服务平台设计。

## 技术栈

- **框架**: Astro 4.x
- **部署**: Cloudflare Pages
- **数据库**: Cloudflare D1
- **样式**: TailwindCSS 4.x

## 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 预览生产版本
npm run preview

# 部署到 Cloudflare Pages
npm run deploy
```

## 部署到 Cloudflare Pages

### 前置准备

1. 注册并登录 [Cloudflare 账号](https://dash.cloudflare.com/)
2. 安装 [Wrangler CLI](https://developers.cloudflare.com/workers/wrangler/install-and-update/)：`npm install -g wrangler`
3. 登录 Wrangler：`wrangler login`

### 部署步骤

#### 1. 创建 D1 数据库

```bash
npx wrangler d1 create junze-anju-db
```

创建成功后，会返回数据库 ID，格式如下：
```
✅ Successfully created DB 'junze-anju-db'
🔌 Connection string: <your-connection-string>
🗄️ Database ID: <your-database-id>
```

#### 2. 配置 wrangler.toml

编辑 `wrangler.toml` 文件，填入以下信息：

```toml
name = "junze-anju"
type = "pages"
account_id = "你的 Cloudflare Account ID"
workers_dev = true

[env.production]
name = "junze-anju"

[build]
command = "npm run build"
directory = "dist"

[d1_databases]
DB = { binding = "DB", database_name = "junze-anju-db", database_id = "你的数据库 ID" }

[vars]
JWT_SECRET = "your-secret-key-here-change-in-production"
ADMIN_PASSWORD = "admin123"
```

**获取 Cloudflare Account ID**：登录 Cloudflare 控制台，在页面右下角找到 Account ID。

#### 3. 初始化数据库

执行数据库初始化脚本，创建表结构并插入初始数据：

```bash
npx wrangler d1 execute junze-anju-db --file=seed/init.sql
```

该脚本会创建以下表：
- `services` - 服务项目表
- `cases` - 案例表
- `faq` - 常见问题表
- `business_info` - 企业信息表
- `admin_users` - 管理员用户表

#### 4. 部署到 Cloudflare Pages

通过 Git 仓库部署（推荐）：

1. 将项目推送到 GitHub/GitLab 仓库
2. 访问 [Cloudflare Pages Dashboard](https://dash.cloudflare.com/?to=/:account/pages)
3. 点击 **Create a project**，连接你的 Git 仓库
4. 配置构建设置：
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
5. 点击 **Save and Deploy**

或者通过 CLI 部署：

```bash
npm run deploy
```

#### 5. 绑定 D1 数据库（重要）

部署成功后，必须将 D1 数据库绑定到 Pages 项目：

1. 在 Cloudflare 控制台进入 Pages 项目
2. 点击 **Settings** -> **Functions**
3. 在 **D1 database bindings** 中点击 **Add binding**
4. 填写：
   - Variable name: `DB`
   - Database: 选择 `junze-anju-db`
5. 点击 **Save**

#### 6. 设置环境变量

在 Pages 项目的 **Settings** -> **Environment variables** 中添加：

| 变量名 | 值 | 说明 |
|--------|-----|------|
| JWT_SECRET | your-secret-key-here-change-in-production | JWT 加密密钥，生产环境请使用随机字符串 |
| ADMIN_PASSWORD | admin123 | 默认管理员密码 |

#### 7. 配置自定义域名（可选）

1. 在 Pages 项目中点击 **Custom domains**
2. 点击 **Add custom domain**
3. 输入你的域名（如：www.junze-anju.com）
4. 按照提示配置 DNS 记录

## 管理后台

### 访问地址

管理后台登录页面：`https://你的域名/admin/login`

### 默认管理员账户

- 用户名：`admin`
- 密码：`admin123`

> **注意**：首次登录后，请立即修改管理员密码！

### 管理页面路径

| 页面 | 路径 | 功能 |
|------|------|------|
| 登录 | `/admin/login` | 管理员登录 |
| 服务管理 | `/admin/services` | 管理服务项目（增删改查） |
| 案例管理 | `/admin/cases` | 管理服务案例（增删改查） |
| FAQ 管理 | `/admin/faq` | 管理常见问题（增删改查） |
| 设置 | `/admin/settings` | 修改管理员密码、企业信息 |

### 修改管理员密码

1. 登录管理后台
2. 点击顶部导航的 **设置**
3. 在密码修改区域输入原密码和新密码
4. 点击 **保存**

## 项目结构

```
├── src/
│   ├── components/       # 组件
│   │   ├── AdminLayout.astro
│   │   ├── Footer.astro
│   │   ├── Header.astro
│   │   ├── JsonLd.astro
│   │   └── ServiceCard.astro
│   ├── layouts/          # 布局
│   │   └── Layout.astro
│   ├── pages/            # 页面
│   │   ├── admin/        # 管理后台页面
│   │   │   ├── cases.astro
│   │   │   ├── faq.astro
│   │   │   ├── login.astro
│   │   │   ├── services.astro
│   │   │   └── settings.astro
│   │   ├── services/     # 服务详情页
│   │   │   └── [slug].astro
│   │   ├── about.astro
│   │   ├── cases.astro
│   │   ├── faq.astro
│   │   └── index.astro
│   └── styles/           # 样式
│       └── global.css
├── functions/            # Cloudflare Functions
│   ├── admin/            # 管理后台 API
│   │   ├── cases.ts
│   │   ├── faq.ts
│   │   ├── login.ts
│   │   ├── services.ts
│   │   └── settings.ts
│   └── api/              # 公共 API
│       ├── business.ts
│       ├── cases.ts
│       ├── faq.ts
│       └── services.ts
├── seed/                 # 数据库初始化脚本
│   └── init.sql
├── public/               # 静态资源
│   ├── robots.txt
│   └── sitemap.xml
├── astro.config.mjs      # Astro 配置
├── wrangler.toml         # Cloudflare 配置
└── package.json          # 项目依赖
```

## 常见问题

### Q: 部署后页面样式不生效？

A: 请检查：
1. 构建是否成功完成
2. 确认 `dist/_astro/` 目录下存在 CSS 文件
3. 清除浏览器缓存后重新加载页面（Ctrl+Shift+R）

### Q: API 请求返回 500 错误？

A: 请检查：
1. D1 数据库是否正确绑定（在 Pages Settings -> Functions 中确认）
2. 环境变量是否正确设置
3. 在 Cloudflare 控制台查看函数日志

### Q: 管理后台登录失败？

A: 请检查：
1. `ADMIN_PASSWORD` 环境变量是否正确设置
2. `JWT_SECRET` 是否已配置
3. 管理员账户是否已通过 `seed/init.sql` 初始化

### Q: 如何更新内容？

A: 有两种方式：
1. 通过管理后台修改（推荐）
2. 在 D1 数据库控制台直接执行 SQL

## 注意事项

1. **生产环境安全**：
   - 修改 `JWT_SECRET` 为随机生成的安全密钥
   - 修改默认管理员密码 `ADMIN_PASSWORD`
   - 启用 Cloudflare 的安全功能（如 WAF、Rate Limiting）

2. **图片资源**：
   - 项目目前使用 SVG 图标，如需添加图片，请将图片文件放入 `public/` 目录
   - 推荐使用 WebP 格式优化图片大小

3. **SEO 优化**：
   - 项目已内置 JSON-LD 结构化数据（LocalBusiness、Service、FAQ）
   - 站点地图（sitemap.xml）已自动生成
   - robots.txt 已配置允许主要搜索引擎爬取