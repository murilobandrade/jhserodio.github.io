import { LTDA } from '../../constants/ltda';

const jobs_enUS = {
  title: 'Work experience',
  [LTDA.VNATOR]: {
    company: 'VNATOR',
    employ: 'Arquitetura, Analise e Desenvolvimento de Software',
    date: 'Início em Novembro de 2018 ate hoje',
    description:
      'Desenvolvimento de uma plataforma de ecommerce para comercialização de arquivos digitais, utilizando a nuvem da AWS, com serviço lambda em node, expondo um API Graphql utilizando Apollo, Aurora RDS PostgreSQL, CloudFormation para gestão e controle dos serviços bem como seus devidos parâmetros, Cognito e IAM para controle de acesso a plataforma, AWS S3 para armazenamento de forma dinâmica dos conteúdos subidos para a plataforma, disponibilização do SPA escrito em React no CDN da AWS, AWS EventBridge para controle de algumas ações através de eventos, lambda layer com binários relevantes para algumas funções lambda. Prestação de serviço em desenvolvimento de software e manutenção de sistemas.',
  },
  [LTDA.AGROTIS]: {
    company: 'Agrotis',
    employ: 'Webmaster, Arquiteto de Software.',
    date: 'Entre Abril de 2016 e Dezembro de 2018',
    description:
      'Cuidar do funcionamento do site institucional e finalizar alguns projetos inacabados, como por exemplo: "e-commerce" e "sistema de agricultura". Correção de bug do portal interno, usado pelos clientes. Otimização para mecanismos de busca. Segurança das aplicações, proteção contra ataques. Manutenção de aplicações escritas na linguagem de programação Python com framework Django, biblioteca Bootstrap e PostgreSQL para persistência de dados. Melhorias no ambiente para executar as aplicações, criando os requisitos do pacote, o ambiente de homologação / produção. Utilização do serviço HTTP Apache para aplicação WSGI. Uso do NGINX para gerenciar multi-domínios e reconfiguração Apache atrás do proxy reverso. Desenvolvimento da nova plataforma utilizada para as aplicações cloud da agrotis baseado em microserviços, utilizando JavaEE Jboss, hibernate com suporte a multi-tenancy, MSSQL, openresty como API-gateway integrado com o consul service discovery, ELK para gestão dos logs/métricas, Responsavel por manter a biblioteca Java usado como base para todos as aplicações, bem como manter a aplicação inicial de autenticação autorização da plataforma, Manutenção dos códigos em Lua do API-gateway, responsáveis por restringir/liberar o acesso ao backend/frontend e demais rotas de forma segura e controlada, Utilização do redis para armazenar a sessão dos usuários logados na plataforma, bem como dados persistentes utilizados pelo serviço EMQx. Utilização do serviço Apache Kafka para comunicação entre microserviços.',
  },
  [LTDA.TOTVS]: {
    company: 'TOTVS',
    employ: 'Consultor de Desenvolvimento',
    date: 'Início em Janeiro de 2015 ate Abril de 2016',
    description:
      'Compreensão das funcionalidades básicas e avançadas do software Fluig, bem como sua constante atualização.  Instalação e atualização do produto Fluig. Treinamento e capacitação dos usuários.  Analise de requisitos e preenchimento de documentação conforme padrão TOTVS. Desenvolvimento de processo usando o padrão BPMN, formulário e integração de sistema, fazendo uso das tecnologias Jboss, Java, Javascript, Biblioteca JQuery e Bootstrap, Protocolo REST e SOAP.',
  },
  [LTDA.INFOCONT]: {
    company: 'InfoCont Sistemas Integrados',
    employ: 'Coordenador Técnico e Desenvolvimento',
    date: 'Entre Fevereiro de 2011 e Julho de 2014',
    description:
      'Coordenação de equipe no desenvolvimento de software e suporte ao cliente. Desenvolver projetos e fazer reuniões com a equipe para solução de eventuais dúvidas. Controlar e verificar o andamento de projeto. Utilização de ferramentas e metodologias para auxiliar o desenvolvimento e gerenciamento de projeto, tais como: Kanban e Scrum.  Analise e levantamento de requisitos em clientes. Desenvolver ferramentas utilizando linguagem TCL/TK, PHP, Java e na plataforma Android. Desenvolver software utilizando a linguagem TCL/TK e manutenção do sistema na linguagem COBOL. Instalação/Manutenção de sistema em servidores Linux/Windows. Instalação/Manutenção de banco de dados PostgreSQL. Construção de relatórios com IReport/JasperSoft. Suporte a clientes.',
  },
};

export { jobs_enUS };
