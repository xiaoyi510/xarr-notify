# Xarr-Notify
Sonarr Radarr   WebHook API 通知信息插件

家庭影院扩展插件 影片更新通知

Docker地址:https://hub.docker.com/r/xiaoyi510/xarr-notify

Github地址:https://github.com/xiaoyi510/Xarr-Notify/

### 准备工作

1. 微信公众号
    1. 申请 企业公众号(免费)
    2. 创建 企业应用
    3. 获取 企业公众号ID 应用ID 应用secret
2. radarr
    1. 获取 Radarr API KEY
    2. 获取 Radarr host

#### 有外网

1. 开放 notify 8085 映射端口到公网

#### 无外网

1. 申请 SM.MS 图床API Token

### 开始配置

```yaml
# 服务配置
service:
  # 推送类型 目前只支持 wecom
  pushType: "wecom"
  # 监听端口 服务对外开放的端口
  httpPort: "8085"
  # 如果是公网IP 且 radarr.image 配置为self 则是图片分享地址 (外网可以访问本机的地址 包括端口)
  httpAddr: "https://" # 分享到外部的地址
# radarr 配置
radarr:
  # radarr 网址 可以是内网地址
  host: "https://"
  # radarr API KEY
  apikey: ""
  # radarr 推送图片类型
  image: "self"
  # radarr 推送图片类型可选项
  image-optional: "self,local,remote" # self 当前images 路径 local 本地文件 remote 远程图片
  # local时 radarr 缩略图绝对路径
  MediaCoverPath: "/app/images/radarr/MediaCover"# 映射路径到这里
# 推送配置
pushs:
  # 微信企业配置
  wecom:
    # 企业微信id
    cropid: ""
    # 企业微信应用ID
    agentid: ""
    # 企业微信应用Secret
    cropsecret: ""
# 图床
imgur:
  # 选择推送类型 wecom 或者 smms图床 推荐wecom
  select: "wecom"
  wecom:
    type: "image"
    optional: "temp,image"
  smms:
    token: ""
```


### 配置选择
1. radarr.image
   1. self
      1. radarr.MediaCoverPath  不生效 默认 images/radarr
         1. images/radarr 映射自 radarr 中的 MediaCover 目录
      2. 图床不生效
      3. 直接使用公网IP/域名进行分享图片
   2. local-一般用于无公网IP
      1. radarr.MediaCoverPath 需要填写绝对路径信息
         1. images/radarr 映射自 radarr 中的 MediaCover 目录
      2. 图床推荐选择wecom
   3. remote 一般用于非一台服务器
      1. 通过API获取远程图片 imdb 中的图片 进行下载到本地 然后上传到图床
      2. 如果不需要上传到图床  图床填空

2. imgur.select
      图床选择那些

3. imgur.wecom.type
   1. 可选项 temp,image
   2. 企业微信应用上传临时素材还是图片 推荐image 如果量大则推荐temp (一般家庭image较好)


#### 建议
如果有公网IP 则推荐使用 
radarr.image = self
