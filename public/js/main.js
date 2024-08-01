
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry); // Check if entry is visible
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = $('section.hidden');

hiddenElements.each((index, el) => observer.observe(el));
