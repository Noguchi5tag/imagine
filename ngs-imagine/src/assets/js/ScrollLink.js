export const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    const offset = 100;
    if (element) {
        const top = element.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({
        top: top,
        behavior: 'smooth'
        });
    }
};