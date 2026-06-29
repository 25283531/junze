# 钧泽安居 - Cloudflare 部署指南

## 环境要求

- Node.js >= 18.0.0
- npm >= 9.0.0
- Cloudflare 账号

## 部署步骤

### 1. 安装依赖

```bash
npm install
```

### 2. 构建项目

```bash
npm run build
```

构建成功后，静态文件会生成在 `dist/` 目录。

### 3. 创建 Cloudflare D1 数据库

1. 登录 [Cloudflare 控制台](https://dash.cloudflare.com/)
2. 进入 **Workers & Pages** -> **D1**
3. 点击 **Create database**
4. 数据库名称填写：`junze-anju-db`
5. 点击 **Create** 创建数据库

### 4. 获取数据库 ID

1. 创建成功后，进入数据库详情页
2. 在 **Settings** 标签页中找到 **Database ID**
3. 复制该 ID，后续会用到

### 5. 初始化数据库

在 Cloudflare 控制台的 D1 数据库页面中：

1. 点击 **Console** 标签页
2. 执行以下 SQL 语句（从 `seed/init.sql` 文件复制）：

```sql
CREATE TABLE IF NOT EXISTS services (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  description TEXT,
  content TEXT,
  price_range TEXT,
  process TEXT,
  icon TEXT,
  sort_order INTEGER DEFAULT 0,
  created_at TEXT DEFAULT CURRENT_TIMESTAMP,
  updated_at TEXT DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS cases (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT NOT NULL,
  description TEXT,
  area TEXT,
  community TEXT,
  service_content TEXT,
  completion_date TEXT,
  review TEXT,
  created_at TEXT DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS faq (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  question TEXT NOT NULL,
  answer TEXT,
  category TEXT,
  sort_order INTEGER DEFAULT 0,
  created_at TEXT DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS business_info (
  id INTEGER PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT,
  telephone TEXT,
  address TEXT,
  service_areas TEXT,
  license TEXT,
  wechat TEXT,
  created_at TEXT DEFAULT CURRENT_TIMESTAMP,
  updated_at TEXT DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS admin_users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  username TEXT NOT NULL UNIQUE,
  password_hash TEXT NOT NULL,
  created_at TEXT DEFAULT CURRENT_TIMESTAMP
);

INSERT OR IGNORE INTO services (title, slug, description, content, price_range, process, icon, sort_order) VALUES
('家政服务', 'jia-zheng-fu-wu', '专业家政保洁服务，让您的家焕然一新', '我们提供全方位的家政保洁服务，包括日常保洁、深度保洁、新居开荒等。专业团队，用心服务，让您的家始终保持整洁舒适。\n\n服务内容：\n- 日常保洁：客厅、卧室、厨房、卫生间全面清洁\n- 深度保洁：家电清洗、窗帘清洗、地毯清洗\n- 新居开荒：新房装修后彻底清洁\n- 玻璃清洗：内外窗玻璃专业擦拭\n- 除螨服务：床品、沙发深度除螨', '根据服务面积和内容定价，一般家庭日常保洁 100-300 元/次', '["预约咨询", "上门评估", "制定方案", "专业服务", "验收反馈"]', 'Home', 1),
('水电维修', 'shui-dian-wei-xiu', '专业水电维修安装服务，安全可靠', '我们拥有专业的水电维修团队，提供快速响应的水电维修服务。无论是水管漏水、电路故障还是新装改造，我们都能高效解决。\n\n服务内容：\n- 水管维修：漏水检测、管道更换、水龙头维修\n- 电路维修：短路排查、开关插座更换、线路改造\n- 热水器维修：燃气热水器、电热水器故障处理\n- 浴霸安装：集成吊顶浴霸安装调试\n- 智能开关：智能照明系统安装', '上门服务费 50-100 元，材料费用另计', '["电话报修", "快速响应", "现场诊断", "维修施工", "质量保证"]', 'Wrench', 2),
('局部改造', 'ju-bu-gai-zao', '房屋局部空间改造，提升居住品质', '针对房屋局部空间进行改造升级，包括厨房翻新、卫生间改造、阳台利用等，让您的居住空间更舒适实用。\n\n服务内容：\n- 厨房翻新：橱柜更换、台面更新、防水处理\n- 卫生间改造：干湿分离、马桶更换、淋浴区改造\n- 阳台改造：阳台封窗、储物空间打造、休闲区设计\n- 墙面翻新：墙面修补、乳胶漆刷新、壁纸更换\n- 地面翻新：地砖更换、木地板安装', '根据改造面积和材料定价，一般局部改造 3000-10000 元', '["需求沟通", "方案设计", "报价确认", "施工改造", "竣工验收"]', 'Hammer', 3),
('适老化改造', 'shi-lao-hua-gai-zao', '专业适老化改造，关爱老人生活', '为高龄老人家庭提供专业的适老化改造服务，安装防滑设施、安全扶手、智能监测设备，让老人生活更安全、更便捷。\n\n服务内容：\n- 地面防滑：防滑地砖更换、地面防滑处理\n- 安全扶手：卫生间扶手、走廊扶手、床边扶手\n- 无障碍通道：门槛消除、坡道改造\n- 智能监测：毫米波雷达跌倒检测系统\n- 智能照明：感应灯光、夜间照明\n- 紧急呼叫：一键呼叫系统安装', '根据改造项目和面积定价，一般适老化改造 5000-20000 元', '["上门勘测", "方案设计", "专业施工", "设备调试", "售后培训"]', 'Heart', 4),
('智能家居', 'smart-home', '智能家居系统安装，享受智慧生活', '提供全屋智能家居系统设计与安装服务，让您的家更智能、更便捷、更安全。\n\n服务内容：\n- 智能照明：语音控制、定时开关、场景模式\n- 智能安防：监控摄像头、智能门锁、门窗传感器\n- 智能空调：远程控制、温度调节\n- 智能窗帘：定时开合、语音控制\n- 智能影音：全屋音响、家庭影院', '根据系统配置定价，一般智能家居 8000-30000 元', '["需求分析", "方案设计", "设备采购", "安装调试", "使用培训"]', 'Cpu', 5),
('房屋检测', 'fang-wu-jian-ce', '专业房屋检测，保障居住安全', '提供专业的房屋检测服务，包括水电安全检测、结构检测、空气质量检测等，让您安心居住。\n\n服务内容：\n- 水电安全检测：线路老化检测、水管渗漏检测\n- 房屋结构检测：墙体裂缝检测、承重结构检测\n- 空气质量检测：甲醛检测、TVOC检测\n- 防水检测：卫生间防水、屋顶防水检测\n- 白蚁防治：白蚁检测与防治', '根据检测项目定价，一般房屋检测 500-2000 元', '["预约检测", "现场检测", "数据采集", "报告出具", "建议方案"]', 'Search', 6),
('保洁清洗', 'bao-jie-qing-xi', '专业保洁清洗服务，洁净每一天', '提供各类保洁清洗服务，包括开荒保洁、外墙清洗、空调清洗等，让您的环境始终保持洁净。\n\n服务内容：\n- 开荒保洁：新房、写字楼装修后清洁\n- 外墙清洗：玻璃幕墙清洗、外墙翻新\n- 空调清洗：中央空调、家用空调深度清洗\n- 油烟管道清洗：厨房油烟管道清理\n- 石材养护：大理石抛光、结晶处理', '根据服务类型和面积定价', '["预约服务", "现场评估", "专业清洗", "质量验收", "售后保障"]', 'Sparkles', 7);

INSERT OR IGNORE INTO cases (title, description, area, community, service_content, completion_date, review) VALUES
('湛河区适老化改造案例', '为高龄老人家庭完成全屋适老化改造', '湛河区', '阳光花园小区', '安装防滑地砖、卫生间安全扶手、走廊扶手，部署毫米波雷达跌倒检测系统，安装智能感应灯光和紧急呼叫按钮', '2026-05-15', '服务非常专业，老人现在生活更安全了，子女也更放心。感谢钧泽安居！'),
('卫东区水电改造案例', '老房水电线路全面改造升级', '卫东区', '建设路街道办事处家属院', '更换全部老化电线，重新布置电路走向，更换水管和水龙头，安装智能开关', '2026-04-28', '施工规范，师傅技术好，改造后家里用电用水都安全多了。'),
('新华区厨房翻新案例', '老旧厨房全面翻新改造', '新华区', '中兴路小区', '更换橱柜和台面，重做防水，更换地砖墙砖，安装新油烟机', '2026-04-10', '厨房焕然一新，现在做饭心情都好了。'),
('汝州市智能家居案例', '全屋智能家居系统安装', '汝州市', '绿城小区', '安装智能照明、智能安防、智能窗帘、智能空调控制系统', '2026-03-25', '智能家居太方便了，语音控制各种设备，生活品质提升很多。');

INSERT OR IGNORE INTO faq (question, answer, category, sort_order) VALUES
('平顶山钧泽安居的适老化改造包含哪些项目？', '包含地面防滑处理、卫生间安全扶手安装、走廊扶手安装、床边扶手安装、无障碍通道改造、毫米波雷达跌倒检测系统部署、智能感应灯光安装、紧急呼叫系统安装等项目。我们会根据老人的具体情况制定个性化改造方案。', '适老化改造', 1),
('平顶山老房水电改造怎么收费？', '水电改造收费包括上门服务费和材料费用。上门服务费一般 50-100 元，材料费用根据实际使用的管材、电线、开关插座等计算。我们会在施工前提供详细的报价单，确保透明收费。', '水电维修', 2),
('家政保洁服务包含哪些内容？', '我们的家政保洁服务包含日常保洁、深度保洁、新居开荒等。日常保洁包括客厅、卧室、厨房、卫生间的全面清洁；深度保洁增加家电清洗、窗帘清洗、地毯清洗等项目；新居开荒针对新房装修后的彻底清洁。', '家政服务', 3),
('适老化改造需要多长时间？', '适老化改造的时间取决于改造项目的多少和复杂程度。一般简单的适老化改造（如安装扶手、防滑处理）1-2 天即可完成；较复杂的改造（如智能设备安装、无障碍通道改造）可能需要 3-5 天。', '适老化改造', 4),
('智能家居系统可以远程控制吗？', '可以的。我们安装的智能家居系统支持手机 APP 远程控制，您可以随时随地控制家里的灯光、空调、窗帘等设备。同时支持语音控制，让操作更便捷。', '智能家居', 5),
('服务区域覆盖哪些地方？', '我们的服务区域覆盖平顶山全市，包括湛河区、卫东区、新华区、石龙区、舞钢市、汝州市、郏县、宝丰县、鲁山县。无论您在哪个区县，我们都能提供专业的服务。', '服务范围', 6),
('如何预约服务？', '您可以通过以下方式预约服务：1. 拨打服务热线：0375-8888888；2. 添加微信：junze-anju；3. 填写网站预约表单。我们会在24小时内与您联系，确认服务时间。', '预约方式', 7),
('服务后有质量保证吗？', '有的。我们对所有服务提供质量保证。水电维修提供3个月质保，改造工程提供1年质保，保洁服务提供7天内不满意免费返工。如有任何问题，请及时联系我们。', '售后服务', 8);

INSERT OR IGNORE INTO business_info (id, name, description, telephone, address, service_areas, license, wechat) VALUES
(1, '钧泽安居', '河南平顶山本地专业的家政、水电维修、适老化与智能家居改造服务商，致力于为平顶山市民提供优质、专业、便捷的家居服务。', '0375-8888888', '平顶山市湛河区建设路东段', '["湛河区", "卫东区", "新华区", "石龙区", "舞钢市", "汝州市", "郏县", "宝丰县", "鲁山县"]', '营业执照号：XXXXXX', 'junze-anju');

INSERT OR IGNORE INTO admin_users (username, password_hash) VALUES
('admin', '$2b$10$EixZaYbB.rK4fl8x2q7Meu6Q6D2V5fF5Q5Q5Q5Q5Q5Q5Q5Q5Q');
```

### 6. 配置 wrangler.toml

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

**获取 Cloudflare Account ID**：
- 登录 Cloudflare 控制台
- 在页面右下角找到 **Account ID**

### 7. 部署到 Cloudflare Pages

#### 方式一：通过 Cloudflare 控制台部署

1. 登录 [Cloudflare 控制台](https://dash.cloudflare.com/)
2. 进入 **Workers & Pages** -> **Pages**
3. 点击 **Create a project**
4. 选择 **Connect to Git**
5. 选择你的 GitHub/GitLab 仓库
6. 配置构建设置：
   - Build command: `npm run build`
   - Build output directory: `dist`
7. 点击 **Save and Deploy**

#### 方式二：通过 wrangler CLI 部署

```bash
# 登录 Cloudflare
npx wrangler login

# 部署
npx wrangler pages deploy dist --project-name junze-anju
```

### 8. 绑定 D1 数据库

部署成功后，需要将 D1 数据库绑定到 Pages 项目：

1. 在 Cloudflare 控制台进入 Pages 项目
2. 点击 **Settings** -> **Functions**
3. 在 **D1 database bindings** 中点击 **Add binding**
4. 填写：
   - Variable name: `DB`
   - Database: 选择 `junze-anju-db`
5. 点击 **Save**

### 9. 设置环境变量

在 Pages 项目的 **Settings** -> **Environment variables** 中添加：

| 变量名 | 值 | 说明 |
|--------|-----|------|
| JWT_SECRET | your-secret-key-here-change-in-production | JWT 加密密钥 |
| ADMIN_PASSWORD | admin123 | 默认管理员密码 |

### 10. 配置自定义域名（可选）

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

### 管理页面路径

| 页面 | 路径 |
|------|------|
| 登录 | `/admin/login` |
| 服务管理 | `/admin/services` |
| 案例管理 | `/admin/cases` |
| FAQ 管理 | `/admin/faq` |
| 设置 | `/admin/settings` |

### 修改管理员密码

登录管理后台后，可以在 **设置** 页面修改管理员密码。

## 常见问题

### Q: 部署后页面样式不生效？

A: 请检查：
1. 构建是否成功完成
2. 确认 `dist/_astro/` 目录下存在 CSS 文件
3. 清除浏览器缓存后重新加载页面

### Q: API 请求返回 500 错误？

A: 请检查：
1. D1 数据库是否正确绑定
2. 环境变量是否正确设置
3. 在 Cloudflare 控制台查看函数日志

### Q: 如何更新内容？

A: 有两种方式：
1. 通过管理后台修改（推荐）
2. 在 D1 数据库控制台直接执行 SQL

## 项目结构

```
junze-anju/
├── src/
│   ├── components/          # 组件
│   ├── layouts/             # 布局
│   ├── pages/              # 页面
│   │   ├── admin/          # 管理后台
│   │   └── services/       # 服务详情页
│   └── styles/             # 样式
├── functions/              # Cloudflare Functions
│   ├── api/                # 公开 API
│   └── admin/              # 管理 API
├── seed/                   # 数据库初始化脚本
├── public/                 # 静态资源
├── wrangler.toml           # Cloudflare 配置
├── astro.config.mjs       # Astro 配置
└── package.json           # 项目配置
```