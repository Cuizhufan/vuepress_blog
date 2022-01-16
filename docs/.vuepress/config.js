module.exports = {
    title: '我的博客',
    description: '被偏爱的都有恃无恐',
    //dest: './dist', //默认在./vurpress
    port: '7777',
    head: [
        ['link', {rel: 'icon', href: '/image/logo.jpg'}],
        ["script", { charset: "utf-8", src: "/js/main.js" }],//新加入
    ],
    markdown: {
        lineNumbers: true
    },
    themeConfig: {
        nav: require("./nav"),
        sidebar: require("./sidebar"),
        sidebarDepth: 2,
        lastUpdated: 'Last Updated',
        searchMaxSuggestoins: 10,
        serviceWorker: {
            updatePopup: {
                message: "有新的内容.",
                buttonText: '更新'
            }
        },
        editLinks: true,
        editLinkText: '在 GitHub 上编辑此页 ！'
    }
}
