/**
 * Conteúdo editorial da home. Tudo aqui é ficção inspirada na série *Suits*.
 * Mantenha os textos neste arquivo para que os componentes fiquem só com a apresentação.
 */

export const SITE = {
    name: "Pearson Hardman",
    url: "https://pearsonhardman.com",
    domain: "pearsonhardman.com.br",
    description:
        "Firma de advocacia corporativa de Manhattan: fusões e aquisições, contencioso empresarial e direito societário. Site fictício inspirado na série Suits.",
}

/** Conteúdo das Open Graph images geradas em `src/app/opengraph-image.tsx`. */
export const OG_HOME = {
    alt: "Pearson Hardman: firma de advocacia corporativa de Manhattan",
    eyebrow: "Advocacia corporativa",
    title: "Nós não jogamos com as probabilidades.",
    description: "Fusões e aquisições, contencioso empresarial e direito societário.",
}

export const NAV_LINKS = [
    { href: "/#firma", label: "Firma" },
    { href: "/#atuacao", label: "Atuação" },
    { href: "/#socios", label: "Sócios" },
    { href: "/#carreiras", label: "Carreiras" },
    { href: "/#contato", label: "Contato" },
] as const

export const ADDRESS = {
    street: "601 East 54th Street",
    city: "New York, NY 10000",
    phone: "(212) 555-0188",
    fax: "(212) 555-0189",
    phoneHref: "tel:+12125550188",
}

export const STATS = [
    { value: "1", label: "Sócia-gerente, uma única palavra final" },
    { value: "99,9%", label: "Dos associados formados em Harvard" },
    { value: "0", label: "Acordos que fechamos por menos do que valiam" },
]

export const PRACTICE_AREAS = [
    {
        title: "Fusões e Aquisições",
        description:
            "Estruturamos, negociamos e fechamos operações que redesenham setores inteiros, do primeiro term sheet à assinatura.",
    },
    {
        title: "Contencioso Empresarial",
        description:
            "Quando o acordo não basta, vamos ao tribunal. E entramos sabendo exatamente como vamos sair.",
    },
    {
        title: "Defesa contra Aquisições Hostis",
        description:
            "Protegemos conselhos e acionistas contra ofertas não solicitadas, com estratégia antes que a primeira carta chegue.",
    },
    {
        title: "Direito Societário e Financeiro",
        description:
            "Governança, mercado de capitais e conformidade regulatória para empresas que não podem errar uma vírgula.",
    },
    {
        title: "Propriedade Intelectual",
        description:
            "Patentes, marcas e segredos industriais defendidos com a mesma agressividade com que foram criados.",
    },
    {
        title: "Contratos e Negociações",
        description:
            "Redigimos cada cláusula como se ela fosse ser lida pelo adversário mais preparado da cidade. Porque será.",
    },
]

export const PARTNERS = [
    {
        name: "Jessica Pearson",
        initials: "JP",
        image: "/images/partners/jessica-pearson.jpg",
        role: "Sócia-fundadora e sócia-gerente",
        bio: "Fundou a firma e conduz cada decisão que importa. Quem senta à mesa com ela entende rápido por que o nome dela vem primeiro na parede.",
    },
    {
        name: "Daniel Hardman",
        initials: "DH",
        image: "/images/partners/daniel-hardman.jpg",
        role: "Sócio-fundador e sócio de sênior",
        bio: "Formado em Direito por Harvard, é especialista em contencioso empresarial e fusões e aquisições. Tem um histórico de vitórias que poucos podem igualar.",
    },
    {
        name: "Harvey Specter",
        initials: "HS",
        image: "/images/partners/harvey-specter.jpg",
        role: "Sócio sênior",
        bio: "Ex-promotor assistente de Manhattan e o melhor negociador da cidade. Especialista em fusões, aquisições e em fechar o que ninguém mais consegue.",
    },
    {
        name: "Louis Litt",
        initials: "LL",
        image: "/images/partners/louis-litt.jpg",
        role: "Sócio e chefe dos associados",
        bio: "Formado em Direito por Harvard e referência em direito financeiro e societário. Ninguém conhece os números de um caso como ele.",
    },
]

export const CAREER_REQUIREMENTS = [
    "Diploma de Direito pela Harvard Law School. Sem exceções.",
    "Aprovação no exame da Ordem do Estado de Nova York.",
    "Disposição para longas noites e prazos impossíveis.",
    "Um terno impecável. Este último, pelo menos, é negociável.",
]

export const CONTACT_SUBJECTS = [
    "Fusões e Aquisições",
    "Contencioso Empresarial",
    "Defesa contra Aquisições Hostis",
    "Direito Societário e Financeiro",
    "Propriedade Intelectual",
    "Contratos e Negociações",
    "Outro assunto",
]