// スムーススクロール
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// フォーム送信処理
document.getElementById('applicationForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // フォームデータ取得
    const formData = {
        company: document.getElementById('company').value,
        name: document.getElementById('name').value,
        position: document.getElementById('position').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        employees: document.getElementById('employees').value,
        date: document.querySelector('input[name="date"]:checked')?.value,
        message: document.getElementById('message').value,
        submittedAt: new Date().toISOString()
    };
    
    // 確認メッセージ
    alert(`お申込みありがとうございます！\n\n【申込内容】\n会社名: ${formData.company}\nお名前: ${formData.name}\n希望日程: ${formData.date}\n\n確認メールをお送りいたしますので、しばらくお待ちください。`);
    
    // コンソールにデータ表示（実際の実装ではAPIに送信）
    console.log('申込データ:', formData);
    
    // フォームリセット
    this.reset();
    
    // ページトップにスクロール
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// スクロールアニメーション
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// アニメーション対象要素
document.addEventListener('DOMContentLoaded', function() {
    const animateElements = document.querySelectorAll('.employee-card, .loss-item, .content-item, .target-item, .timeline-item');
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// CTAボタンのクリック追跡（分析用）
document.querySelectorAll('.cta-button').forEach(button => {
    button.addEventListener('click', function() {
        const buttonText = this.textContent;
        console.log('CTAクリック:', buttonText);
        // Google Analyticsなどのトラッキングコードをここに追加可能
    });
});
