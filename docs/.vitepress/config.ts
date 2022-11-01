import { defineConfig } from "vitepress";
import miCheckbox from "markdown-it-task-checkbox";
import { version } from "../../package.json";

export default defineConfig({
  lang: "zh-CN",
  base: "/xarr-notify/",
  title: "XArr-Notify",
  description: "XArr-Notify 是一个专注于家庭通知消息的工具。",
  lastUpdated: true,
  themeConfig: {
    outlineTitle: "目录",
    footer: {
      message: "本开源软件受 MIT 协议保护",
      copyright: "Copyright (c) 2022 SalHe Li",
    },

    nav: [
      // { text: '使用向导', link: '/README' },
      // { text: '命令行帮助', link: '/cli/' },
      {
        text: "友情链接",
        items: [
          { text: "XArr官方网站", link: "https://xarr.52nyg.com" },
          { text: "包子的博客", link: "https://blog.52nyg.com" },
        ],
      },
    ],
    sidebar: [
      {
        text: "介绍",
        items: [
          { text: "什么是 XArr-Notify", link: "/README" },
          { text: "安装", link: "/installation" ,items:[
            { text: "Docker", link: "/installation/docker" },
            { text: "Unraid", link: "/installation/unraid" },

          ]},
          // { text: '第一个工程', link: '/first-project' },
          // { text: '鸣谢', link: '/thanks' },
        ],
      },
      {
        text: "常见问题",
        items: [
          {
            text: "企业微信",
            items: [
              { text: "企业ID", link: "/question/wechat/corpid" },
              { text: "应用ID", link: "/question/wechat/agentid" },
              { text: "域名主体校验未通过", link: "/question/wechat/domain" },
            ],
          },
        ],
      },
      // {
      //   text: '工程配置',
      //   items: [
      //     { text: '基本配置', link: '/project/basic' },
      //     { text: '工程脚本 - 重复工作', link: '/project/run' },
      //     { text: 'e2txt配置', link: '/project/e2txt' },
      //     { text: '构建配置', link: '/project/build' },
      //     { text: '环境变量', link: '/project/environ' },
      //     { text: '案例', link: '/project/examples' },
      //   ]
      // },
      // {
      //   text: '命令行帮助',
      //   items: cliItems(
      //     { subCommand: 'init', title: '初始化工程' },
      //     { subCommand: 'info', title: '查看工程' },
      //     { subCommand: 'e2txt', title: '易转文本' },
      //     { subCommand: 'txt2e', title: '文本转易' },
      //     { subCommand: 'build', title: '构建工程' },
      //     { subCommand: 'clean', title: '清理工程' },
      //     { subCommand: 'run', title: '运行脚本' },
      //     { subCommand: 'toolchain', title: '检查工具链' },
      //   )
      // }
    ],
    editLink: {
      pattern: "https://github.com/xiaoyi510/xarr-notify/edit/master/docs/:path",
      text: "在 GitHub 上编辑",
    },
    socialLinks: [{ icon: "github", link: "https://github.com/xiaoyi510/xarr-notify" }],
  },
  markdown: {
    config: (md) => {
      md.use(miCheckbox, { readonly: true });
    },
  },
});

interface SubCommand {
  subCommand: string;
  title?: string;
}

function cliItems(...subCommands: SubCommand[]) {
  return subCommands.map((x) => ({
    text: x.title ? `${x.title} - ${x.subCommand}` : x.subCommand,
    link: `/cli/#ebuild-${x.subCommand}`,
  }));
}
