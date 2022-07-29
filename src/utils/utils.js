// 外部链接在新窗口打开
export const NewWindowForLink = () => {
    const externalLinks = document.querySelectorAll('a');

    externalLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href.indexOf('https') !== -1) {
            link.setAttribute('target', '_blank');
        }
    });
};
