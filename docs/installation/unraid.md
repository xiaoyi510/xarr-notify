# Unraid 安装教程


## 安装一键模板
```
wget https://xarr.52nyg.com/unraid-template/XArr-Notify.sh

sh ./XArr-Notify.sh
```

## 配置需要以下变量
| 容器路径 | 主机路径 | 说明 |
|--------------|--------------|--------|
| /app/conf | /mnt/user/appdata/xarr-notify | 配置文件夹 |
| /app/images/sonarr | /mnt/user/appdata/sonarr/MediaCover/ | Sonarr 缩略图 |
| /app/images/radarr | /mnt/user/appdata/radarr/MediaCover/ | Radarr 缩略图 |

## 配置端口号
| 容器路径 | 主机路径 | 说明 |
|--------------|--------------|--------|
| 8085 | 8085 | 映射端口 |