import { CommonModule } from "@angular/common"
import { Component, HostListener } from "@angular/core"
import { FormsModule } from "@angular/forms"

type Page =
  | "inicio"
  | "conteudo"
  | "contato"
  | "loja"
  | "cadastro"
  | "fisioterapeuta"
  | "tratamentos"
  | "rpa"
  | "produto"
  | "carrinho"
  | "cadastro-compra"
  | "pagamento"
  | "pagamento-pix"
  | "pagamento-credito"
  | "pagamento-concluido"

type NavigablePage = Exclude<Page, "produto">

type Interest = {
  source: "Loja" | "Mentoria" | "Tratamentos"
  items: string[]
}

type Icon = "location" | "online" | "home" | "mobility" | "prevention"
type ProductCategory = "Esportivo" | "Fisioterapêutico" | "Tratamentos"
type PaymentMethod = "pix" | "credit"

interface StoreProduct {
  id: string
  title: string
  category: ProductCategory
  description: string
  details: string[]
  price: number
  icon: Icon
  imageUrl?: string
}

interface CartItem {
  productId: string
  quantity: number
}

interface RouteState {
  page: Page
  productId: string | null
}

interface PurchaseOrder {
  reference: string
  customerName: string
  items: { product: StoreProduct; quantity: number }[]
  paymentMethod: PaymentMethod
  subtotal: number
  total: number
}

interface NavigationItem {
  id: NavigablePage
  label: string
}

interface TreatmentProduct {
  id: string
  title: string
  summary: string
  price: number
}

@Component({
  selector: "app-root",
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: "./app.component.html",
})
export class AppComponent {
  readonly brandIcon = "imports/icone-thalisson.png"
  readonly instituteEmblem = "imports/instituto-thalisson-emblema.png"
  readonly thalissonPhoto = "imports/Thalisson-Rodrigues.png"
  readonly instituteInstagramLink = "https://www.instagram.com/"
  readonly physiotherapistInstagramLink = "https://www.instagram.com/"
  readonly pixDemoCode = "PIX-DEMO-NAO-PAGAR-00000000"

  readonly pages: NavigablePage[] = [
    "inicio",
    "conteudo",
    "contato",
    "loja",
    "cadastro",
    "fisioterapeuta",
    "tratamentos",
    "rpa",
    "carrinho",
    "cadastro-compra",
    "pagamento",
    "pagamento-pix",
    "pagamento-credito",
    "pagamento-concluido",
  ]

  readonly bottomNavigation: NavigationItem[] = [
    { id: "inicio", label: "Início" },
    { id: "fisioterapeuta", label: "Fisioterapeuta" },
    { id: "loja", label: "Loja" },
    { id: "tratamentos", label: "Tratamento" },
    { id: "contato", label: "Mentoria" },
  ]

  readonly rpaPillars = [
    {
      number: "01",
      title: "Recuperação",
      description:
        "A fisioterapia ajuda a aliviar dores, recuperar movimentos e reconstruir força após lesões, cirurgias ou períodos de limitação.",
    },
    {
      number: "02",
      title: "Prevenção",
      description:
        "A avaliação do movimento identifica riscos e orienta exercícios para reduzir a chance de novas lesões.",
    },
    {
      number: "03",
      title: "Autonomia",
      description:
        "O cuidado prepara o corpo para retomar atividades diárias, trabalho e esporte com mais confiança e segurança.",
    },
  ]

  readonly careSteps = [
    {
      number: "01",
      title: "Entender",
      description:
        "O cuidado começa com uma avaliação atenta da sua história, rotina, movimentos e objetivos.",
    },
    {
      number: "02",
      title: "Planejar",
      description:
        "A partir da avaliação, organizamos um plano individual com prioridades e orientações claras.",
    },
    {
      number: "03",
      title: "Acompanhar",
      description:
        "A evolução é acompanhada de perto para adaptar exercícios e respeitar cada etapa da recuperação.",
    },
  ]

  readonly contentSteps = [
    {
      number: "01",
      title: "Avaliação",
      description:
        "Identificamos limitações, hábitos e objetivos para compreender a origem do problema.",
    },
    {
      number: "02",
      title: "Tratamento",
      description:
        "Combinamos exercícios terapêuticos e técnicas específicas para recuperar mobilidade e força.",
    },
    {
      number: "03",
      title: "Prevenção",
      description:
        "Orientamos o movimento para reduzir o risco de novas lesões e melhorar o desempenho.",
    },
  ]

  readonly mentorshipSteps = [
    {
      number: "01",
      title: "Conversa inicial",
      description:
        "Começamos entendendo seu momento, suas necessidades e o que você deseja alcançar.",
    },
    {
      number: "02",
      title: "Direcionamento",
      description:
        "Organizamos prioridades e definimos ações possíveis para a sua realidade.",
    },
    {
      number: "03",
      title: "Acompanhamento",
      description:
        "Nos encontros, avaliamos a evolução, ajustamos o plano e esclarecemos novas dúvidas.",
    },
  ]

  readonly products: StoreProduct[] = [
    {
      id: "faixa-elastica-pro",
      title: "Faixa Elástica Pro",
      category: "Esportivo",
      description:
        "Faixa de resistência versátil para aquecimento, fortalecimento e mobilidade em treinos dentro ou fora de casa.",
      details: [
        "Resistência média para exercícios de membros superiores e inferiores.",
        "Material leve e compacto para levar na bolsa de treino.",
        "Produto fictício para demonstração da Loja.",
      ],
      price: 49.9,
      icon: "mobility",
    },
    {
      id: "rolo-massagem",
      title: "Rolo de Massagem Active",
      category: "Esportivo",
      description:
        "Rolo texturizado para automassagem e relaxamento após atividades físicas.",
      details: [
        "Superfície texturizada para diferentes grupos musculares.",
        "Indicado para aquecimento e relaxamento muscular.",
        "Produto fictício para demonstração da Loja.",
      ],
      price: 89.9,
      icon: "prevention",
    },
    {
      id: "garrafa-esportiva",
      title: "Garrafa Esportiva 750 ml",
      category: "Esportivo",
      description:
        "Garrafa reutilizável para acompanhar os treinos e manter a hidratação ao longo do dia.",
      details: [
        "Capacidade de 750 ml.",
        "Tampa com vedação para transporte na mochila.",
        "Produto fictício para demonstração da Loja.",
      ],
      price: 59.9,
      icon: "online",
    },
    {
      id: "kit-mini-bands",
      title: "Kit Mini Bands de Reabilitação",
      category: "Fisioterapêutico",
      description:
        "Conjunto de faixas elásticas curtas para exercícios de ativação, fortalecimento e controle do movimento.",
      details: [
        "Três faixas com níveis de resistência diferentes.",
        "Pode ser usado em exercícios orientados por profissional.",
        "Produto fictício para demonstração da Loja.",
      ],
      price: 74.9,
      icon: "mobility",
    },
    {
      id: "bola-liberacao",
      title: "Bola de Liberação Miofascial",
      category: "Fisioterapêutico",
      description:
        "Bola compacta para automassagem localizada e exercícios de mobilidade orientados.",
      details: [
        "Formato compacto para uso em diferentes regiões do corpo.",
        "Superfície firme para massagem localizada.",
        "Produto fictício para demonstração da Loja.",
      ],
      price: 29.9,
      icon: "prevention",
    },
    {
      id: "kit-bandagem",
      title: "Kit de Bandagem Elástica",
      category: "Fisioterapêutico",
      description:
        "Kit demonstrativo com bandagem elástica para suporte em atividades e práticas de fisioterapia.",
      details: [
        "Duas unidades de bandagem elástica.",
        "Uso conforme orientação de profissional de saúde.",
        "Produto fictício para demonstração da Loja.",
      ],
      price: 39.9,
      icon: "online",
    },
  ]

  readonly productCategories: Exclude<ProductCategory, "Tratamentos">[] = [
    "Esportivo",
    "Fisioterapêutico",
  ]

  readonly treatments: {
    title: string
    description: string
    icon: Icon
    maxSelections: number
    products: TreatmentProduct[]
  }[] = [
    {
      title: "Presencial",
      description:
        "Atendimento individual no consultório, com avaliação próxima e acompanhamento da evolução em cada encontro.",
      icon: "location",
      maxSelections: 2,
      products: [
        {
          id: "trat-presencial-reabilitacao",
          title: "Programa de Reabilitação",
          summary:
            "Plano individual para recuperar movimentos, força e função com segurança.",
          price: 180,
        },
        {
          id: "trat-presencial-prevencao",
          title: "Prevenção de Lesão",
          summary:
            "Exercícios e orientações para reduzir riscos e preparar o corpo para a rotina.",
          price: 130,
        },
      ],
    },
    {
      title: "Online",
      description:
        "Acompanhamento por videochamada com orientações e exercícios adaptados para serem realizados à distância.",
      icon: "online",
      maxSelections: 1,
      products: [
        {
          id: "trat-online-programa",
          title: "Programa Online",
          summary:
            "Acompanhamento remoto com exercícios orientados e evolução acompanhada à distância.",
          price: 110,
        },
      ],
    },
    {
      title: "Home Care",
      description:
        "Atendimento realizado no domicílio para quem precisa de cuidado próximo, conforto ou possui dificuldade de deslocamento.",
      icon: "home",
      maxSelections: 2,
      products: [
        {
          id: "trat-home-reabilitacao",
          title: "Programa de Reabilitação",
          summary:
            "Cuidado no domicílio para recuperar mobilidade, força e independência.",
          price: 240,
        },
        {
          id: "trat-home-prevencao",
          title: "Prevenção de Lesão",
          summary:
            "Orientações adaptadas ao ambiente de casa para evitar limitações e novas lesões.",
          price: 170,
        },
      ],
    },
  ]

  readonly treatmentProducts: StoreProduct[] = this.treatments.flatMap(
    (treatment) =>
      treatment.products.map((product) => ({
        id: product.id,
        title: product.title,
        category: "Tratamentos",
        description: `${treatment.title} · ${product.summary}`,
        details: [
          product.summary,
          "Preço fictício para demonstração; valor real a confirmar com o Instituto.",
        ],
        price: product.price,
        icon: treatment.icon,
      })),
  )

  cartItems: CartItem[] = this.savedCart()
  treatmentCheckoutItems: CartItem[] | null = null
  checkoutCustomer = { name: "", email: "", phone: "" }
  private readonly initialRoute = this.routeFromHash()
  page: Page = this.initialRoute.page
  selectedProductId: string | null = this.initialRoute.productId
  interest: Interest | null = this.savedInterest()
  selectedByTreatment: Record<string, string[]> = {}
  submitted = false
  cartMessage = ""
  paymentMethod: PaymentMethod = "pix"
  pixCopyMessage = ""
  lastOrder: PurchaseOrder | null = null

  @HostListener("window:popstate")
  onHistoryChange(): void {
    const route = this.routeFromHash()
    this.page = route.page
    this.selectedProductId = route.productId
    window.scrollTo({ top: 0, behavior: "auto" })
  }

  get selectedProduct(): StoreProduct | null {
    return this.products.find((product) => product.id === this.selectedProductId) ?? null
  }

  get cartLines(): { product: StoreProduct; quantity: number }[] {
    return this.linesFor(this.cartItems)
  }

  get checkoutLines(): { product: StoreProduct; quantity: number }[] {
    return this.linesFor(this.treatmentCheckoutItems ?? this.cartItems)
  }

  private linesFor(
    items: CartItem[],
  ): { product: StoreProduct; quantity: number }[] {
    return items.flatMap((item) => {
      const product = this.findProduct(item.productId)
      return product ? [{ product, quantity: item.quantity }] : []
    })
  }

  get checkoutSubtotal(): number {
    return this.checkoutLines.reduce(
      (total, line) => total + line.product.price * line.quantity,
      0,
    )
  }

  get cartCount(): number {
    return this.cartItems.reduce((total, item) => total + item.quantity, 0)
  }

  get cartSubtotal(): number {
    return this.cartLines.reduce(
      (total, line) => total + line.product.price * line.quantity,
      0,
    )
  }

  get whatsappCheckoutUrl(): string {
    const items = this.checkoutLines
      .map((line) => `${line.quantity}x ${line.product.title}`)
      .join(", ")
    const message = `Olá! Quero finalizar a compra demonstrativa via crédito: ${items}.`
    return `https://wa.me/?text=${encodeURIComponent(message)}`
  }

  get isCheckoutPage(): boolean {
    return (
      this.page === "cadastro-compra" ||
      this.page === "pagamento" ||
      this.page === "pagamento-pix" ||
      this.page === "pagamento-credito" ||
      this.page === "pagamento-concluido"
    )
  }

  goTo(destination: NavigablePage): void {
    const nextHash = `#/${destination}`
    if (window.location.hash !== nextHash) {
      window.history.pushState({ page: destination }, "", nextHash)
    }
    this.page = destination
    this.selectedProductId = null
    this.submitted = false
    if (destination !== "loja") this.cartMessage = ""
    window.scrollTo({ top: 0, behavior: "auto" })
  }

  openProduct(product: StoreProduct): void {
    this.cartMessage = ""
    const nextHash = `#/produto/${product.id}`
    if (window.location.hash !== nextHash) {
      window.history.pushState({ page: "produto", productId: product.id }, "", nextHash)
    }
    this.page = "produto"
    this.selectedProductId = product.id
    window.scrollTo({ top: 0, behavior: "auto" })
  }

  productsInCategory(category: ProductCategory): StoreProduct[] {
    return this.products.filter((product) => product.category === category)
  }

  formatPrice(value: number): string {
    return value.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    })
  }

  addToCart(product: StoreProduct, navigateToCart = true): void {
    this.addCartProduct(product)
    this.cartMessage = `${product.title} adicionado ao carrinho.`
    if (navigateToCart) this.goTo("carrinho")
  }

  private addCartProduct(product: StoreProduct): void {
    const existing = this.cartItems.find((item) => item.productId === product.id)
    this.cartItems = existing
      ? this.cartItems.map((item) =>
          item.productId === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        )
      : [...this.cartItems, { productId: product.id, quantity: 1 }]
    this.saveCart()
  }

  updateCartQuantity(productId: string, change: number): void {
    this.cartItems = this.cartItems.map((item) =>
      item.productId === productId
        ? { ...item, quantity: Math.max(1, item.quantity + change) }
        : item,
    )
    this.saveCart()
  }

  removeFromCart(productId: string): void {
    this.cartItems = this.cartItems.filter((item) => item.productId !== productId)
    this.saveCart()
  }

  beginCheckout(): void {
    if (this.cartItems.length === 0) return

    this.treatmentCheckoutItems = null
    this.checkoutCustomer = { name: "", email: "", phone: "" }
    this.paymentMethod = "pix"
    this.pixCopyMessage = ""
    this.lastOrder = null
    this.goTo("cadastro-compra")
  }

  continueToPayment(): void {
    if (this.checkoutLines.length === 0) {
      this.goTo("carrinho")
      return
    }

    if (
      !this.checkoutCustomer.name.trim() ||
      !this.checkoutCustomer.email.trim() ||
      !this.checkoutCustomer.phone.trim()
    ) {
      this.goTo("cadastro-compra")
      return
    }

    this.goTo("pagamento")
  }

  continueWithSelectedPayment(): void {
    if (this.checkoutLines.length === 0) {
      this.goTo("carrinho")
      return
    }

    this.goTo(
      this.paymentMethod === "pix" ? "pagamento-pix" : "pagamento-credito",
    )
  }

  async copyPixCode(): Promise<void> {
    if (!navigator.clipboard?.writeText) {
      this.pixCopyMessage =
        "Cópia automática indisponível. Selecione e copie o código manualmente."
      return
    }

    try {
      await navigator.clipboard.writeText(this.pixDemoCode)
      this.pixCopyMessage = "Código fictício copiado."
    } catch {
      this.pixCopyMessage =
        "Não foi possível copiar. Selecione e copie o código manualmente."
    }
  }

  completeDemoPayment(): void {
    if (this.checkoutLines.length === 0) {
      this.goTo("carrinho")
      return
    }

    if (
      !this.checkoutCustomer.name.trim() ||
      !this.checkoutCustomer.email.trim() ||
      !this.checkoutCustomer.phone.trim()
    ) {
      this.goTo("cadastro-compra")
      return
    }

    this.lastOrder = {
      reference: `DEMO-${Date.now().toString().slice(-6)}`,
      customerName: this.checkoutCustomer.name,
      items: this.checkoutLines.map((line) => ({
        product: line.product,
        quantity: line.quantity,
      })),
      paymentMethod: this.paymentMethod,
      subtotal: this.checkoutSubtotal,
      total: this.checkoutSubtotal,
    }
    if (this.treatmentCheckoutItems !== null) {
      this.treatmentCheckoutItems = null
    } else {
      this.cartItems = []
      window.sessionStorage.removeItem("store-cart")
    }
    this.goTo("pagamento-concluido")
  }

  goToPhysiotherapistMenu(): void {
    this.goTo("fisioterapeuta")
    requestAnimationFrame(() => {
      document
        .getElementById("physiotherapist-menu")
        ?.scrollIntoView({ behavior: "smooth", block: "start" })
    })
  }

  startRegistration(source: Interest["source"], items: string[]): void {
    this.interest = { source, items }
    window.sessionStorage.setItem(
      "registration-interest",
      JSON.stringify(this.interest),
    )
    this.goTo("cadastro")
  }

  toggleProduct(treatmentTitle: string, productTitle: string): void {
    const selected = this.selectedByTreatment[treatmentTitle] ?? []
    const maxSelections =
      this.treatments.find((treatment) => treatment.title === treatmentTitle)
        ?.maxSelections ?? 2
    if (selected.includes(productTitle)) {
      this.selectedByTreatment = {
        ...this.selectedByTreatment,
        [treatmentTitle]: selected.filter((item) => item !== productTitle),
      }
      return
    }
    if (selected.length < maxSelections) {
      this.selectedByTreatment = {
        ...this.selectedByTreatment,
        [treatmentTitle]: [...selected, productTitle],
      }
    }
  }

  selectedFor(treatmentTitle: string): string[] {
    return this.selectedByTreatment[treatmentTitle] ?? []
  }

  isSelected(treatmentTitle: string, productTitle: string): boolean {
    return this.selectedFor(treatmentTitle).includes(productTitle)
  }

  canRegisterTreatment(treatmentTitle: string): boolean {
    return this.selectedFor(treatmentTitle).length > 0
  }

  registerTreatmentInterest(treatmentTitle: string): void {
    const selected = this.selectedFor(treatmentTitle)
    if (selected.length === 0) return

    const treatment = this.treatments.find(
      (item) => item.title === treatmentTitle,
    )
    if (!treatment) return

    this.treatmentCheckoutItems = treatment.products
      .filter((product) => selected.includes(product.title))
      .map((product) => ({ productId: product.id, quantity: 1 }))
    this.checkoutCustomer = { name: "", email: "", phone: "" }
    this.paymentMethod = "pix"
    this.pixCopyMessage = ""
    this.lastOrder = null
    this.goTo("cadastro-compra")
  }

  formatPhone(event: Event): void {
    const input = event.target as HTMLInputElement
    const digits = input.value.replace(/\D/g, "").slice(0, 11)
    if (digits.length <= 2) {
      input.value = digits ? `(${digits}` : ""
      return
    }
    const ddd = digits.slice(0, 2)
    const firstPart = digits.slice(2, 7)
    const lastPart = digits.slice(7)
    input.value = `(${ddd}) ${firstPart}${lastPart ? `-${lastPart}` : ""}`
  }

  submitRegistration(): void {
    this.submitted = true
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  private routeFromHash(): RouteState {
    const [path, productId] = window.location.hash.replace(/^#\/?/, "").split("/")
    if (path === "produto") {
      const product = this.products.find((item) => item.id === productId)
      return product
        ? { page: "produto", productId: product.id }
        : { page: "loja", productId: null }
    }
    if (path === "pagamento" && !this.checkoutCustomer.name.trim()) {
      return { page: "cadastro-compra", productId: null }
    }

    const page = path as NavigablePage
    return this.pages.includes(page)
      ? { page, productId: null }
      : { page: "inicio", productId: null }
  }

  private findProduct(productId: string): StoreProduct | null {
    return (
      this.products.find((product) => product.id === productId) ??
      this.treatmentProducts.find((product) => product.id === productId) ??
      null
    )
  }

  private savedCart(): CartItem[] {
    try {
      const value = window.sessionStorage.getItem("store-cart")
      if (!value) return []
      const parsed: unknown = JSON.parse(value)
      if (!Array.isArray(parsed)) return []

      return parsed.flatMap((item: unknown) => {
        if (typeof item !== "object" || item === null) return []
        if (!("productId" in item) || !("quantity" in item)) return []
        const { productId, quantity } = item
        return typeof productId === "string" &&
          this.findProduct(productId) &&
          typeof quantity === "number" &&
          Number.isInteger(quantity) &&
          quantity > 0
          ? [{ productId, quantity }]
          : []
      })
    } catch {
      return []
    }
  }

  private saveCart(): void {
    window.sessionStorage.setItem("store-cart", JSON.stringify(this.cartItems))
  }

  private savedInterest(): Interest | null {
    try {
      const value = window.sessionStorage.getItem("registration-interest")
      if (!value) return null
      const parsed = JSON.parse(value) as Partial<Interest>
      const validSource = [
        "Loja",
        "Mentoria",
        "Tratamentos",
      ].includes(parsed.source ?? "")
      const validItems =
        Array.isArray(parsed.items) &&
        parsed.items.every((item) => typeof item === "string")
      return validSource && validItems ? parsed as Interest : null
    } catch {
      return null
    }
  }
}
