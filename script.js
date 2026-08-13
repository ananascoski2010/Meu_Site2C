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
            quote: "O programa transformou completamente a convivência entre os alunos. Os casos de intimidação verbal reduziram drasticamente no primeiro trimestre.",
            author: "Dra. Luciana Mendes",
            role: "Diretora Pedagógica - Colégio Horizonte"
        },
        {
            quote: "Excelente suporte para professores. Agora a equipe sabe exatamente como intervir antes que um desentendimento vire bullying.",
            author: "Prof. Roberto Silva",
            role: "Coordenador de Ensino Fundamental"
        },
        {
            quote: "A conformidade com a lei foi simples e a comunidade escolar (pais e alunos) sentiu a diferença imediata na segurança socioemocional.",
            author: "Mariana Costa",
            role: "Gestora Escolar"
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
            question: "Como o programa auxilia na adequação à Lei do Bullying (Lei 13.185/2015)?",
            answer: "Fornecemos diagnósticos institucionais, relatórios periódicos, capacitação de equipe e planos de ação pedagógicos exigidos pela legislação."
        },
        {
            question: "O programa se aplica a quais faixas etárias?",
            answer: "Nossa metodologia possui módulos adaptados para o Ensino Infantil, Fundamental I e II, além do Ensino Médio."
        },
        {
            question: "Quanto tempo leva a implementação completa?",
            answer: "A fase inicial de diagnóstico e capacitação leva cerca de 15 dias. As atividades preventivas operam ao longo de todo o ano letivo."
        },
        {
            question: "Os pais e responsáveis participam do processo?",
            answer: "Sim! Incluímos workshops para famílias, promovendo uma aliança efetiva entre a comunidade escolar e o lar."
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
                
                // Fecha todos os itens
                document.querySelectorAll('.accordion-item').forEach(el => {
                    el.classList.remove('active');
                    el.querySelector('.icon-toggle').textContent = '+';
                });

                // Se o clicado não estava ativo, abre ele
                if (!active) {
                    item.classList.add('active');
                    item.querySelector('.icon-toggle').textContent = '−';
                }
            });
        });
    }

    renderAccordion();
});
