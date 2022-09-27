const about = document.querySelector('.about');
const btnSelect = document.querySelectorAll('.tab-btn');
const articles = document.querySelectorAll('.content');


about.addEventListener('click', function (e) {
    let id = e.target.dataset.id;
    if (id) {
        // remove active from other btns
        btnSelect.forEach(function (btn) {
            btn.classList.remove('active');
            e.target.classList.add('active');
        });
        // hide other articles
        articles.forEach(function (article) {
            article.classList.remove('active');
        })
        const element = document.getElementById(id);
        element.classList.add('active');
    }
});
