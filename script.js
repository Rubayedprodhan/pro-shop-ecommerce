document.addEventListener('DOMContentLoaded', () => {
    // Scroll Animation
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    // Form Submission Handling
    const orderForm = document.getElementById('orderForm');
    orderForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('ধন্যবাদ! আপনার অর্ডারটি গ্রহণ করা হয়েছে। আমরা শীঘ্রই যোগাযোগ করবো।');
        orderForm.reset();
    });
});