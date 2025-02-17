export const perguntas = [
  // QUESTÕES FÁCEIS (14 questões)
  {
    pergunta: "Imagine que você é o gerente de uma empresa. Qual seria o objetivo número um ao cuidar do estoque?",
    cenario: "Pense em equilibrar o dinheiro da empresa com a produção contínua dos produtos.",
    opcoes: [
      "Gastar o mínimo possível com estoque, mas sempre ter produtos para produzir.",
      "Acabar com o estoque de vez para não ter dor de cabeça.",
      "Encher o depósito de estoque para nunca faltar nada, mesmo que sobre muito."
    ],
    correta: 0,
    explicacoes: [
      "Correta. Este objetivo equilibra custo e disponibilidade, essencial para a gestão de estoque.",
      "Incorreta. Eliminar o estoque pode parar a produção e perder vendas.",
      "Incorreta. Excesso de estoque gera custos desnecessários de armazenagem e obsolescência."
    ],
    dificuldade: "facil"
  },
  {
    pergunta: "Qual a principal ideia por trás do 'Lean Manufacturing'?",
    cenario: "O Lean Manufacturing busca fazer mais e melhor, mas sem desperdiçar nada.",
    opcoes: [
      "Aumentar a produção ao máximo, sem se importar muito com a qualidade final.",
      "Fazer o máximo de produtos, gastando o mínimo possível e evitando qualquer tipo de desperdício.",
      "Deixar que só os chefes decidam tudo na empresa."
    ],
    correta: 1,
    explicacoes: [
      "Incorreta. Lean Manufacturing prioriza a qualidade e a eficiência, não apenas a quantidade.",
      "Correta. Lean Manufacturing visa a produção eficiente, eliminando desperdícios e otimizando recursos.",
      "Incorreta. Lean Manufacturing valoriza a participação de todos, não apenas decisões centralizadas."
    ],
    dificuldade: "facil"
  },
  {
    pergunta: "No método 5S, 'Seiri' é o primeiro passo. O que ele significa na prática?",
    cenario: "Pense em organizar sua mesa de trabalho. O que você faria primeiro?",
    opcoes: [
      "Tirar tudo o que não precisa e deixar só o essencial.",
      "Fazer uma faxina geral.",
      "Arrumar tudo o que você precisa em seu devido lugar."
    ],
    correta: 0,
    explicacoes: [
      "Correta. 'Seiri' (Utilização) foca em remover o desnecessário para otimizar o espaço e recursos.",
      "Incorreta. Faxina geral é mais abrangente e menos focada no descarte do desnecessário.",
      "Incorreta. Arrumar vem depois de descartar o desnecessário, no 'Seiton' (Organização)."
    ],
    dificuldade: "facil"
  },
  {
    pergunta: "O que realmente significa 'Kaizen' no dia a dia de uma empresa?",
    cenario: "Kaizen é sobre nunca parar de buscar melhorias, não importa quão pequenas.",
    opcoes: [
      "Melhorar um pouquinho a cada dia, com pequenas mudanças constantes.",
      "Fazer grandes mudanças de uma vez só, sem pensar muito.",
      "Reduzir custos demitindo pessoas."
    ],
    correta: 0,
    explicacoes: [
      "Correta. Kaizen é a filosofia de melhoria contínua e incremental, com pequenas mudanças diárias.",
      "Incorreta. Kaizen foca em melhorias graduais, não em grandes mudanças repentinas.",
      "Incorreta. Redução de custos por demissão não reflete o princípio de melhoria do Kaizen."
    ],
    dificuldade: "facil"
  },
  {
    pergunta: "Em Lean Manufacturing, qual palavra usamos para falar de tudo aquilo que não traz valor ao produto ou serviço?",
    cenario: "Imagine que você está limpando sua casa. O que você considera 'lixo' nesse contexto?",
    opcoes: [
      "Poka-yoke",
      "Muda",
      "Kanban"
    ],
    correta: 1,
    explicacoes: [
      "Incorreta. Poka-yoke é um mecanismo à prova de erros.",
      "Correta. 'Muda' é o termo Lean para desperdício, atividades que não agregam valor.",
      "Incorreta. Kanban é um sistema de gestão visual da produção."
    ],
    dificuldade: "facil"
  },
  {
    pergunta: "Qual destes 'S' NÃO faz parte do método 5S?",
    cenario: "Pense nos 5 passos do 5S. Qual nome 'estranho' você identifica?",
    opcoes: [
      "Seiketsu (Padronização)",
      "Seiri (Senso de Utilização)",
      "Seiritsu (Organização Física)"
    ],
    correta: 2,
    explicacoes: [
      "Incorreta. Seiketsu (Padronização) é o 4º S, focado em manter a organização.",
      "Incorreta. Seiri (Senso de Utilização) é o 1º S, sobre descartar o desnecessário.",
      "Correta. 'Seiritsu' não é um dos 5S originais, os 'S' são Seiri, Seiton, Seiso, Seiketsu e Shitsuke."
    ],
    dificuldade: "facil"
  },
  {
    pergunta: "Qual o principal objetivo do método 5S em uma empresa?",
    cenario: "Pense em um escritório bagunçado e um organizado. Qual ambiente é melhor para trabalhar?",
    opcoes: [
      "Incentivar o trabalho individual.",
      "Aumentar a produção, mesmo que a qualidade caia.",
      "Deixar tudo mais organizado e limpo."
    ],
    correta: 2,
    explicacoes: [
      "Incorreta. 5S visa o trabalho em equipe e um ambiente colaborativo.",
      "Incorreta. 5S busca aumentar a produtividade com qualidade, não a qualquer custo.",
      "Correta. O principal objetivo do 5S é criar um ambiente de trabalho organizado, limpo e seguro."
    ],
    dificuldade: "facil"
  },
  {
    pergunta: "Por que a participação de todos os funcionários é tão importante no Kaizen?",
    cenario: "Imagine uma corrente: quanto mais pessoas puxarem juntas, mais forte ela fica.",
    opcoes: [
      "Porque a melhoria contínua só acontece quando todos dão ideias e ajudam.",
      "Porque a mudança vem somente de consultores externos.",
      "Porque apenas os gerentes devem propor melhorias."
    ],
    correta: 0,
    explicacoes: [
      "Correta. Kaizen valoriza a inteligência coletiva e a participação de todos para melhoria contínua.",
      "Incorreta. Kaizen enfatiza soluções internas, com consultores como apoio, não protagonistas.",
      "Incorreta. Kaizen empodera todos os funcionários, não apenas a gestão, na busca por melhorias."
    ],
    dificuldade: "facil"
  },
  {
    pergunta: "O que é 'estoque de segurança' em uma empresa?",
    cenario: "Pense em ter uma reserva extra de comida em casa para emergências.",
    opcoes: [
      "Um estoque adicional para prevenir faltas.",
      "Um estoque que fica lá parado e nunca é usado.",
      "Um estoque extra para promoções e liquidações."
    ],
    correta: 0,
    explicacoes: [
      "Correta. Estoque de segurança é uma reserva para suprir demandas inesperadas ou atrasos.",
      "Incorreta. Estoque de segurança é para uso em contingências, não para ficar inativo.",
      "Incorreta. Estoque para promoções é planejado, diferente do estoque de segurança para imprevistos."
    ],
    dificuldade: "facil"
  },
  {
    pergunta: "O que significa 'Just in Time' no gerenciamento de estoque?",
    cenario: "Pense em receber os ingredientes para cozinhar no momento exato de usar.",
    opcoes: [
      "Reduzir os níveis de estoque e aumentar a eficiência.",
      "Produzir sem se preocupar se alguém vai comprar ou não.",
      "Comprar e produzir o máximo possível para ter sempre muito estoque."
    ],
    correta: 0,
    explicacoes: [
      "Correta. Just in Time visa reduzir estoque ao mínimo, sincronizando oferta e demanda para eficiência.",
      "Incorreta. Just in Time é totalmente focado na demanda, produzindo apenas o necessário.",
      "Incorreta. Just in Time opõe-se ao acúmulo de estoque, buscando o fluxo contínuo e enxuto."
    ],
    dificuldade: "facil"
  },
  {
    pergunta: "O que é 'Kanban' no Lean Manufacturing?",
    cenario: "Imagine um painel de tarefas com cartões coloridos para organizar o trabalho.",
    opcoes: [
      "Um jeito de deixar a fábrica mais limpa.",
      "Uma ferramenta de controle visual para a produção, como um semáforo.",
      "Um sistema de contabilidade de custos."
    ],
    correta: 1,
    explicacoes: [
      "Incorreta. Limpeza (Seiso) é um dos 5S, mas Kanban é um sistema de controle de produção.",
      "Correta. Kanban é um sistema visual que controla o fluxo de produção, indicando o que e quando produzir.",
      "Incorreta. Kanban não é um sistema financeiro, mas sim de gestão da produção e fluxo de materiais."
    ],
    dificuldade: "facil"
  },
  {
    pergunta: "No 5S, qual 'S' significa criar regras e padrões para manter tudo organizado?",
    cenario: "Qual 'S' seria como criar um manual de boas práticas para a organização?",
    opcoes: [
      "Seiri",
      "Seiketsu",
      "Seiton"
    ],
    correta: 1,
    explicacoes: [
      "Incorreta. Seiri (Utilização) é sobre descartar o desnecessário.",
      "Correta. Seiketsu (Padronização) cria normas e procedimentos para manter a organização e limpeza.",
      "Incorreta. Seiton (Organização) é sobre arrumar e ordenar o que restou após o Seiri."
    ],
    dificuldade: "facil"
  },
  {
    pergunta: "Como o 5S ajuda a deixar o trabalho mais seguro?",
    cenario: "Pense em um ambiente de trabalho organizado e limpo vs. um bagunçado e sujo. Qual é mais seguro?",
    opcoes: [
      "Porque deixa a empresa mais bonita para os clientes.",
      "Porque faz as pessoas trabalharem mais e mais rápido.",
      "Porque organiza tudo e deixa o ambiente limpo, diminuindo riscos de acidentes."
    ],
    correta: 2,
    explicacoes: [
      "Incorreta. A estética é um benefício secundário do 5S, não o principal para segurança.",
      "Incorreta. 5S não visa aumentar a velocidade do trabalho, mas a eficiência e segurança.",
      "Correta. A organização e limpeza do 5S reduzem os riscos de acidentes e melhoram a segurança."
    ],
    dificuldade: "facil"
  },
  {
    pergunta: "De que forma o 5S pode aumentar a produtividade de uma empresa?",
    cenario: "Imagine procurar uma ferramenta em uma caixa de ferramentas organizada e em uma bagunçada. Onde é mais rápido?",
    opcoes: [
      "Melhora a eficiência ao reduzir o tempo de busca por ferramentas.",
      "Não tem impacto na produtividade.",
      "Porque deixa as regras tão rígidas que as pessoas são obrigadas a produzir mais."
    ],
    correta: 0,
    explicacoes: [
      "Correta. 5S aumenta a produtividade ao otimizar a organização, economizando tempo e recursos.",
      "Incorreta. 5S tem um impacto direto e positivo na produtividade através da organização.",
      "Incorreta. 5S não se baseia em regras rígidas, mas na organização e disciplina para eficiência."
    ],
    dificuldade: "facil"
  },

  // QUESTÕES MÉDIAS (10 questões)
  {
    pergunta: "Qual técnica é mais indicada para diminuir os gastos com o estoque?",
    cenario: "Sua empresa quer economizar dinheiro com estoque, sem prejudicar a produção.",
    opcoes: [
      "Aumentar a quantidade de produtos em cada pedido.",
      "Just in Time (JIT).",
      "Sistema push."
    ],
    correta: 1,
    explicacoes: [
      "Incorreta. Aumentar pedidos pode elevar os custos de estoque e armazenagem.",
      "Correta. Just in Time (JIT) minimiza custos ao reduzir o estoque ao essencial.",
      "Incorreta. Sistema 'push' pode gerar excesso de estoque, elevando os custos."
    ],
    dificuldade: "medio"
  },
  {
    pergunta: "Qual destes princípios NÃO faz parte do Lean Manufacturing?",
    cenario: "Para ser Lean, alguns princípios são cruciais. Qual destes não se encaixa?",
    opcoes: [
      "Fazer o fluxo de trabalho seguir sempre em frente, sem interrupções.",
      "Produção em massa sem padronização.",
      "Melhoria contínua."
    ],
    correta: 1,
    explicacoes: [
      "Incorreta. Fluxo contínuo é um princípio Lean para evitar interrupções e gargalos.",
      "Correta. Produção em massa sem padrão contradiz o Lean, que busca processos padronizados e eficientes.",
      "Incorreta. Melhoria contínua (Kaizen) é um pilar central do Lean Manufacturing."
    ],
    dificuldade: "medio"
  },
  {
    pergunta: "Qual é a ordem CERTA dos 5S?",
    cenario: "Se você fosse ensinar alguém a usar o 5S, qual seria a sequência dos passos?",
    opcoes: [
      "Shitsuke, Seiri, Seiso, Seiketsu, Seiton.",
      "Seiri, Seiton, Seiso, Seiketsu, Shitsuke.",
      "Seiso, Seiketsu, Shitsuke, Seiri, Seiton."
    ],
    correta: 1,
    explicacoes: [
      "Incorreta. Esta ordem mistura os 'S' e não segue a sequência lógica do 5S.",
      "Correta. A ordem correta é: Seiri (Utilização), Seiton (Organização), Seiso (Limpeza), Seiketsu (Padronização), Shitsuke (Disciplina).",
      "Incorreta. Esta ordem também está incorreta e não otimiza a implementação do 5S."
    ],
    dificuldade: "medio"
  },
  {
    pergunta: "Qual destas opções mostra como aplicar o Kaizen na prática?",
    cenario: "Kaizen funciona melhor com a ajuda de todos. Como colocar isso em ação?",
    opcoes: [
      "Envolvimento de todos para implementar melhorias.",
      "Medidas de curto prazo focadas em resultados financeiros.",
      "Deixar que só os chefes decidam as mudanças na empresa."
    ],
    correta: 0,
    explicacoes: [
      "Correta. Kaizen na prática significa engajar todos os funcionários na busca por melhorias contínuas.",
      "Incorreta. Kaizen foca em melhorias contínuas, não apenas em resultados financeiros de curto prazo.",
      "Incorreta. Kaizen é participativo e horizontal, não centralizado nas decisões da chefia."
    ],
    dificuldade: "medio"
  },
  {
    pergunta: "Qual método de controle de estoque busca operar com níveis mínimos?",
    cenario: "Avalie a alternativa que permite operar com estoques reduzidos.",
    opcoes: [
      "Just in Time (JIT)",
      "Estoque de Segurança",
      "Lote Econômico de Compra"
    ],
    correta: 0,
    explicacoes: [
      "Correta. Just in Time (JIT) é o sistema que visa reduzir o estoque ao mínimo necessário para a produção.",
      "Incorreta. Estoque de Segurança é uma reserva, visando ter mais estoque, não menos.",
      "Incorreta. Lote Econômico de Compra otimiza custos de pedido e estoque, mas não foca no mínimo absoluto."
    ],
    dificuldade: "medio"
  },
  {
    pergunta: "Qual o principal objetivo da implementação do Lean Manufacturing?",
    cenario: "Reflita sobre como o Lean impacta os processos produtivos.",
    opcoes: [
      "Eliminar desperdícios e aumentar a eficiência.",
      "Expandir a produção sem análise dos processos.",
      "Aumentar a burocracia e o controle interno."
    ],
    correta: 0,
    explicacoes: [
      "Correta. O principal objetivo do Lean é otimizar processos, eliminar desperdícios e aumentar a eficiência.",
      "Incorreta. Lean Manufacturing foca na eficiência e qualidade, não apenas em expandir a produção.",
      "Incorreta. Lean visa simplificar processos e reduzir a burocracia, não aumentá-la."
    ],
    dificuldade: "medio"
  },
  {
    pergunta: "Qual é a vantagem de um controle de estoque bem gerenciado?",
    cenario: "Avalie os benefícios de um controle eficiente.",
    opcoes: [
      "Redução de custos operacionais e de armazenagem.",
      "Redução na disponibilidade de produtos.",
      "Aumento dos custos com grandes quantidades de estoque."
    ],
    correta: 0,
    explicacoes: [
      "Correta. Controle de estoque eficiente reduz custos de operação, armazenagem e perdas por obsolescência.",
      "Incorreta. Controle eficiente visa otimizar a disponibilidade, evitando faltas e excessos.",
      "Incorreta. Estoque mal gerenciado leva ao aumento de custos, o oposto de um bom controle."
    ],
    dificuldade: "medio"
  },
  {
    pergunta: "Qual é a relação entre Lean Manufacturing e a melhoria de processos?",
    cenario: "Como o Lean contribui para a evolução dos processos produtivos?",
    opcoes: [
      "Lean busca constantemente aprimorar os processos, eliminando desperdícios.",
      "Lean é incompatível com a melhoria contínua.",
      "Lean foca apenas na mecanização."
    ],
    correta: 0,
    explicacoes: [
      "Correta. Lean Manufacturing e melhoria de processos são intrinsecamente ligados, buscando otimização contínua.",
      "Incorreta. Melhoria contínua é um dos pilares do Lean Manufacturing.",
      "Incorreta. Lean engloba pessoas, processos e tecnologia, não apenas mecanização."
    ],
    dificuldade: "medio"
  },
  {
    pergunta: "Qual é a abordagem do Kaizen em relação aos erros nos processos?",
    cenario: "Como o Kaizen utiliza os erros?",
    opcoes: [
      "Encarar os erros como oportunidades de aprendizado.",
      "Ignorar os erros para manter a rotina.",
      "Punir os responsáveis sem buscar soluções."
    ],
    correta: 0,
    explicacoes: [
      "Correta. Kaizen vê erros como oportunidades valiosas para identificar problemas e promover melhorias.",
      "Incorreta. Ignorar erros impede a melhoria contínua, princípio fundamental do Kaizen.",
      "Incorreta. Kaizen foca na solução de problemas, não na punição, incentivando um ambiente de aprendizado."
    ],
    dificuldade: "medio"
  },
  {
    pergunta: "Como a integração entre gestão de estoque e Lean Manufacturing beneficia a produção?",
    cenario: "Considere os ganhos da sinergia entre essas abordagens.",
    opcoes: [
      "Reduzindo desperdícios e otimizando o fluxo de materiais.",
      "Separando os departamentos de produção e logística.",
      "Aumentando o estoque e prolongando prazos de entrega."
    ],
    correta: 0,
    explicacoes: [
      "Correta. A integração otimiza o fluxo de materiais, reduzindo desperdícios e melhorando a eficiência da produção.",
      "Incorreta. A integração visa otimizar, não separar departamentos, que devem trabalhar em conjunto.",
      "Incorreta. A integração busca reduzir o estoque e otimizar prazos, o oposto do que essa opção sugere."
    ],
    dificuldade: "medio"
  },

  // QUESTÕES DIFÍCEIS (10 questões)
  {
    pergunta: "Qual é a importância do giro de estoque para a gestão de uma empresa?",
    cenario: "Avalie como o giro impacta custos e reposição.",
    opcoes: [
      "Indica a eficiência na renovação dos estoques, ajudando a reduzir custos.",
      "É um indicador secundário, sem impacto direto.",
      "Serve apenas para medir a quantidade armazenada."
    ],
    correta: 0,
    explicacoes: [
      "Correta. Giro de estoque alto indica rápida renovação, menor custo de armazenagem e maior eficiência.",
      "Incorreta. Giro de estoque é um indicador chave de desempenho, com impacto direto nas finanças.",
      "Incorreta. Medir quantidade é um aspecto, mas o giro avalia a dinâmica e a saúde do estoque."
    ],
    dificuldade: "dificil"
  },
  {
    pergunta: "Como a previsão de demanda contribui para uma gestão de estoque eficiente?",
    cenario: "Planejar os níveis com base em previsões evita excessos e faltas.",
    opcoes: [
      "Permite ajustar os estoques conforme variações do mercado.",
      "É aplicável somente em empresas de grande porte.",
      "Serve apenas para registrar dados históricos."
    ],
    correta: 0,
    explicacoes: [
      "Correta. Previsão de demanda permite ajustar o estoque proativamente, otimizando níveis e custos.",
      "Incorreta. Previsão de demanda é valiosa para empresas de todos os tamanhos, adaptando-se à escala.",
      "Incorreta. Histórico é base para previsão, mas o objetivo é orientar ações futuras, não só registrar o passado."
    ],
    dificuldade: "dificil"
  },
  {
    pergunta: "Qual a importância da utilização de métodos quantitativos em ambientes voláteis?",
    cenario: "Métodos estatísticos avançados podem ajustar os níveis em mercados voláteis.",
    opcoes: [
      "Permite ajustar dinamicamente os estoques com base em modelos estatísticos.",
      "Só é aplicável em mercados estáveis.",
      "Não é relevante, pois a intuição do gestor é suficiente."
    ],
    correta: 0,
    explicacoes: [
      "Correta. Métodos quantitativos oferecem precisão e adaptabilidade para gerir estoque em mercados incertos.",
      "Incorreta. Mercados voláteis se beneficiam ainda mais de métodos quantitativos para decisões assertivas.",
      "Incorreta. Intuição é limitada em cenários complexos; métodos quantitativos oferecem base analítica."
    ],
    dificuldade: "dificil"
  },
  {
    pergunta: "Como a integração de um sistema ERP pode contribuir para a eficiência na gestão de estoque?",
    cenario: "Sistemas integrados melhoram a comunicação e o controle dos estoques.",
    opcoes: [
      "Fornecendo dados em tempo real para decisões precisas.",
      "Limitando a flexibilidade do processo de reposição.",
      "Aumentando a burocracia e os custos operacionais sem agregar valor."
    ],
    correta: 0,
    explicacoes: [
      "Correta. ERP integra dados de estoque em tempo real, facilitando decisões rápidas e eficientes.",
      "Incorreta. ERP, quando bem implementado, aumenta a flexibilidade e a capacidade de resposta do estoque.",
      "Incorreta. ERP visa reduzir burocracia e otimizar custos, integrando informações e automatizando processos."
    ],
    dificuldade: "dificil"
  },
  {
    pergunta: "Em um ambiente de Lean Manufacturing, como a gestão de riscos na cadeia de suprimentos impacta a performance operacional?",
    cenario: "Mitigar riscos é crucial para manter o fluxo produtivo.",
    opcoes: [
      "Reduzindo interrupções na produção e melhorando a eficiência.",
      "Aumentando o custo total devido a contingências caras.",
      "Tornando os processos mais lentos por excesso de monitoramento."
    ],
    correta: 0,
    explicacoes: [
      "Correta. Gestão de riscos Lean garante fluxo contínuo, evitando paradas e otimizando a performance.",
      "Incorreta. Gestão de riscos proativa é mais econômica que lidar com crises reativamente.",
      "Incorreta. Monitoramento de riscos, se eficiente, agiliza processos, em vez de torná-los lentos."
    ],
    dificuldade: "dificil"
  },
  {
    pergunta: "Qual é o trade-off essencial na gestão de estoques em mercados dinâmicos?",
    cenario: "Analise o equilíbrio entre manter estoque suficiente e os custos de armazenagem.",
    opcoes: [
      "Entre reduzir o estoque ao máximo e perder a capacidade de atender à demanda.",
      "Entre manter níveis altos e reduzir o risco de rupturas, considerando os custos.",
      "Entre investir em tecnologia e manter métodos tradicionais de gestão."
    ],
    correta: 1,
    explicacoes: [
      "Incorreta. Reduzir estoque ao extremo pode ser arriscado, mas o trade-off principal envolve custos.",
      "Correta. O trade-off central é balancear custos de estoque (armazenagem) e o risco de falta de produtos.",
      "Incorreta. Tecnologia é um meio para otimizar a gestão, não o trade-off principal em si."
    ],
    dificuldade: "dificil"
  },
  {
    pergunta: "Em um cenário de alta incerteza, qual abordagem quantitativa avançada pode melhorar a previsão de demanda?",
    cenario: "Mercados voláteis exigem métodos que capturem variações rápidas na demanda.",
    opcoes: [
      "Benchmarking",
      "Modelos ARIMA",
      "Análise SWOT"
    ],
    correta: 1,
    explicacoes: [
      "Incorreta. Benchmarking compara práticas, mas não prevê demanda quantitativamente.",
      "Correta. Modelos ARIMA (AutoRegressive Integrated Moving Average) são eficazes para prever demanda em séries temporais voláteis.",
      "Incorreta. Análise SWOT avalia cenários, mas não é um método quantitativo de previsão de demanda."
    ],
    dificuldade: "dificil"
  },
  {
    pergunta: "Como a implementação de metodologias Six Sigma pode complementar o Lean na redução de defeitos?",
    cenario: "Six Sigma utiliza ferramentas estatísticas para identificar causas raízes e melhorar a qualidade.",
    opcoes: [
      "Ao utilizar ferramentas estatísticas para identificar causas raízes.",
      "Ao reduzir o tempo de setup sem análise de qualidade.",
      "Ao eliminar todas as variações no processo."
    ],
    correta: 0,
    explicacoes: [
      "Correta. Six Sigma complementa o Lean com ferramentas estatísticas para identificar e eliminar as causas de defeitos.",
      "Incorreta. Reduzir setup é Lean, mas Six Sigma foca na análise estatística para qualidade.",
      "Incorreta. Eliminar *todas* as variações é um objetivo idealizado, Six Sigma busca reduzir variações significativas."
    ],
    dificuldade: "dificil"
  },
  {
    pergunta: "De que forma a integração de tecnologias IoT pode impactar a gestão de estoque?",
    cenario: "A IoT permite monitoramento em tempo real e automação que otimizam a reposição.",
    opcoes: [
      "Fornecendo monitoramento em tempo real e automação de reposição.",
      "Limitando a comunicação entre setores.",
      "Aumentando os custos operacionais sem ganhos de eficiência."
    ],
    correta: 0,
    explicacoes: [
      "Correta. IoT na gestão de estoque oferece visibilidade em tempo real e automatiza processos, otimizando a operação.",
      "Incorreta. IoT melhora a comunicação e integração de dados, não limita a comunicação setorial.",
      "Incorreta. IoT, se bem implementada, traz eficiência e redução de custos a longo prazo."
    ],
    dificuldade: "dificil"
  },
  {
    pergunta: "Qual é o papel da análise preditiva na melhoria contínua dentro da filosofia Kaizen?",
    cenario: "A análise preditiva pode identificar antecipadamente falhas e oportunidades de melhoria.",
    opcoes: [
      "Permitir a identificação antecipada de falhas e oportunidades de melhoria.",
      "Substituir a necessidade de feedback dos colaboradores.",
      "Garantir a estabilidade dos processos sem mudanças."
    ],
    correta: 0,
    explicacoes: [
      "Correta. Análise preditiva potencializa o Kaizen ao antecipar problemas e oportunidades, guiando a melhoria contínua.",
      "Incorreta. Análise preditiva complementa, mas não substitui o feedback humano, essencial no Kaizen.",
      "Incorreta. Kaizen e análise preditiva visam a melhoria contínua, não a estabilidade estática."
    ],
    dificuldade: "dificil"
  }

];
