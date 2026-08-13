document.addEventListener('DOMContentLoaded', () => {

    /* --- 1. ACESSIBILIDADE E MODO CONTRASTE --- */
    let fontSizeAtual = 16;
    const btnIncrease = document.getElementById('btn-font-increase');
    const btnDecrease = document.getElementById('btn-font-decrease');
    const btnContrast = document.getElementById('btn-contrast');

    btnIncrease.addEventListener('click', () => {
        if (fontSizeAtual < 24) {
            fontSizeAtual += 2;
            document.documentElement.style.fontSize = `${fontSizeAtual}px`;
        }
    });

    btnDecrease.addEventListener('click', () => {
        if (fontSizeAtual > 12) {
            fontSizeAtual -= 2;
            document.documentElement.style.fontSize = `${fontSizeAtual}px`;
        }
    });

    btnContrast.addEventListener('click', () => {
        document.body.classList.toggle('high-contrast');
    });

    /* --- 2. DADOS E RENDERIZAÇÃO DO CARROSSEL DE TRATAMENTOS --- */
    const tratamentosData = [
        {
            titulo: "Bioestimulação de Colágeno",
            descricao: "Restauração da firmeza da pele com compostos biocompatíveis de alta definição.",
            imagem: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=600&q=80"
        },
        {
            titulo: "Harmonização Facial Alta Precisão",
            descricao: "Preenchimento estratégico para valorização de traços naturais com ácido hialurônico puro.",
            imagem: "https://images.unsplash.com/photo-1512290900673-7002012111d9?auto=format&fit=crop&w=600&q=80"
        },
        {
            titulo: "Lifting Facial Sem Cortes",
            descricao: "Tecnologia de ultrassom microfocado para firmeza profunda em camada muscular.",
            imagem: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80"
        },
        {
            titulo: "Remodelagem Corporal Exclusiva",
            descricao: "Protocolo associado para quebra de gordura localizada e tonificação muscular acelerada.",
            imagem: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=600&q=80"
        }
    ];

    const carouselTrack = document.getElementById('carousel-track');
    
    tratamentosData.forEach(item => {
        const card = document.createElement('div');
        card.className = 'carousel-card';
        card.innerHTML = `
            <img src="${item.imagem}" alt="${item.titulo}">
            <div class="carousel-card-body">
                <h3>${item.titulo}</h3>
                <p>${item.descricao}</p>
            </div>
        `;
        carouselTrack.appendChild(card);
    });

    // Navegação Carrossel
    const prevBtn = document.getElementById('carousel-prev');
    const nextBtn = document.getElementById('carousel-next');

    nextBtn.addEventListener('click', () => {
        carouselTrack.scrollBy({ left: 320, behavior: 'smooth' });
    });

    prevBtn.addEventListener('click', () => {
        carouselTrack.scrollBy({ left: -320, behavior: 'smooth' });
    });

    /* --- 3. DADOS E RENDERIZAÇÃO DO ACCORDION (FAQ) --- */
    const faqData = [
        {
            pergunta: "Como funciona a primeira consulta de avaliação?",
            resposta: "Nossa avaliação inclui um mapeamento completo da pele e análise de simetria. O diagnóstico é 100% individualizado para estruturar o plano ideal de tratamento."
        },
        {
            pergunta: "Os procedimentos exigem afastamento das atividades cotidianas?",
            resposta: "A maioria dos nossos tratamentos utiliza tecnologia de ponta minimamente invasiva, permitindo o retorno imediato à sua rotina diária."
        },
        {
            pergunta: "Quais são as formas de pagamento aceitas?",
            resposta: "Aceitamos os principais cartões de crédito em até 12x, PIX e transferências bancárias com condições exclusivas para planos anuais."
        },
        {
            pergunta: "É necessário agendamento prévio?",
            resposta: "Sim. Para garantir a total privacidade e a experiência VIP de nossos clientes, atendemos estritamente com hora marcada."
        }
    ];

    const faqAccordion = document.getElementById('faq-accordion');

    faqData.forEach((item, index) => {
        const accordionItem = document.createElement('div');
        accordionItem.className = 'accordion-item';
        
        accordionItem.innerHTML = `
            <button class="accordion-header" id="faq-btn-${index}" aria-expanded="false">
                <span>${item.pergunta}</span>
                <span class="icon">+</span>
            </button>
            <div class="accordion-content">
                <p>${item.resposta}</p>
            </div>
        `;

        const headerBtn = accordionItem.querySelector('.accordion-header');
        headerBtn.addEventListener('click', () => {
            const isActive = accordionItem.classList.contains('active');
            
            // Fecha todos os itens
            document.querySelectorAll('.accordion-item').forEach(el => {
                el.classList.remove('active');
                el.querySelector('.accordion-header').setAttribute('aria-expanded', 'false');
                el.querySelector('.icon').textContent = '+';
            });

            // Se não estava ativo, abre
            if (!isActive) {
                accordionItem.classList.add('active');
                headerBtn.setAttribute('aria-expanded', 'true');
                accordionItem.querySelector('.icon').textContent = '−';
            }
        });

        faqAccordion.appendChild(accordionItem);
    });
});
