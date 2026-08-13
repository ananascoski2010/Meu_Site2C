document.addEventListener('DOMContentLoaded', () => {

    // --- 1. ACESSIBILIDADE: Tamanho da Fonte ---
    let currentFontSize = 16;
    const btnIncreaseFont = document.getElementById('btn-increase-font');
    const btnDecreaseFont = document.getElementById('btn-decrease-font');

    btnIncreaseFont.addEventListener('click', () => {
        let novaFonte = currentFontSize + 2;
        if (novaFonte >= 12 && novaFonte <= 24) {
            currentFontSize = novaFonte;
            document.documentElement.style.setProperty('--font-size-base', `${currentFontSize}px`);
        }
    });

    btnDecreaseFont.addEventListener('click', () => {
        let novaFonte = currentFontSize - 2;
        if (novaFonte >= 12 && novaFonte <= 24) {
            currentFontSize = novaFonte;
            document.documentElement.style.setProperty('--font-size-base', `${currentFontSize}px`);
        }
    });

    // --- 2. ACESSIBILIDADE: Modo Alto Contraste ---
    const btnContrast = document.getElementById('btn-contrast');
    btnContrast.addEventListener('click', () => {
        document.body.classList.toggle('high-contrast');
    });

    // --- 3. COMPONENTE: Carrossel de Depoimentos (Array de Objetos) ---
    const testimonialsData = [
        {
            quote: "Conseguimos criar um canal seguro de denúncias e acolhimento. A mudança no clima escolar foi perceptível em poucos meses.",
            author: "Profa. Renata Alencar",
            role: "Coordenadora Pedagógica"
        },
        {
            quote: "Os workshops socioemocionais trouxeram um impacto profundo na relação entre os próprios alunos. Recomendo fortemente.",
            author: "Carlos Eduardo Rocha",
            role: "Diretor Escolar"
        },
        {
            quote: "Adequar a escola à legislação antibullying com o suporte dessa metodologia foi simples, estruturado e altamente eficiente.",
            author: "Beatriz Nogueira",
            role: "Orientadora Educacional"
        }
    ];

    let currentTestimonialIndex = 0;
    const carouselContainer = document.getElementById('carousel-container');
    const btnPrev = document.getElementById('prev-testimonial');
    const btnNext = document.getElementById('next-testimonial');

    function renderTestimonial(index) {
        const item = testimonialsData[index];
        carouselContainer.innerHTML = `
            <div class="testimonial-card">
                <blockquote>"${item.quote}"</blockquote>
                <div class="testimonial-author">${item.author}</div>
                <div class="testimonial-role">${item.role}</div>
            </div>
        `;
    }

    btnPrev.addEventListener('click', () => {
        currentTestimonialIndex = (currentTestimonialIndex - 1 + testimonialsData.length) % testimonialsData.length;
        renderTestimonial(currentTestimonialIndex);
    });

    btnNext.addEventListener('click', () => {
        currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonialsData.length;
        renderTestimonial(currentTestimonialIndex);
    });

    renderTestimonial(currentTestimonialIndex);

    // --- 4. COMPONENTE: Acordeão FAQ (Array de Objetos) ---
    const faqData = [
        {
            question: "O que diz a Lei 13.185/2015 sobre a prevenção ao bullying?",
            answer: "A lei estabelece o Programa de Combate à Intimidação Sistemática em todo o território nacional, determinando que escolas promovam medidas de conscientização, prevenção e diagnóstico sem o uso de punições meramente destrutivas."
        },
        {
            question: "Como o programa atua nos casos de Cyberbullying?",
            answer: "Oferecemos módulos educativos sobre cidadania digital, segurança online, empoderamento das vítimas e orientação para os pais acompanharem a vida digital dos filhos."
        },
        {
            question: "Qual o público-alvo dos treinamentos?",
            answer: "Atendemos toda a comunidade escolar: estudantes (do ensino infantil ao médio), corpo docente, equipe de apoio e famílias."
        },
        {
            question: "Como solicitar uma proposta para a minha escola?",
            answer: "Basta preencher o formulário no final desta página para agendarmos uma apresentação personalizada com nossa equipe pedagógica."
        }
    ];

    const accordionContainer = document.getElementById('accordion-container');

    function renderAccordion() {
        accordionContainer.innerHTML = faqData.map((item, index) => `
            <div class="accordion-item" data-index="${index}">
                <button class="accordion-header">
                    <span>${item.question}</span>
                    <span class="icon-toggle">+</span>
                </button>
                <div class="accordion-content">
                    <p>${item.answer}</p>
                </div>
            </div>
        `).join('');

        const headers = accordionContainer.querySelectorAll('.accordion-header');
        headers.forEach(header => {
            header.addEventListener('click', () => {
                const item = header.parentElement;
                const active = item.classList.contains('active');
                
                document.querySelectorAll('.accordion-item').forEach(el => {
                    el.classList.remove('active');
                    el.querySelector('.icon-toggle').textContent = '+';
                });

                if (!active) {
                    item.classList.add('active');
                    item.querySelector('.icon-toggle').textContent = '−';
                }
            });
        });
    }

    renderAccordion();
});
