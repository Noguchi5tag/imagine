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

export const scrollToSectionSP = (sectionId) => {
    const element = document.getElementById(sectionId);
    const offset = 50;
    if (element) {
        const top = element.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({
        top: top,
        behavior: 'smooth'
        });
    }
};