document.addEventListener('DOMContentLoaded', function() {
    // 等待页面加载完成后延迟执行淡入效果
    setTimeout(() => {
        const fadeElements = document.querySelectorAll('.fade-in');
        fadeElements.forEach(element => {
            element.classList.add('active');
        });
    }, 500); // 500ms 延迟后开始动画
});

// 如果你想要在滚动时触发动画，可以使用这段代码
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, {
    threshold: 0.1 // 当元素出现 10% 时触发
});

document.querySelectorAll('.fade-in').forEach(element => {
    observer.observe(element);
});
