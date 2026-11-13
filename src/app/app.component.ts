import { CommonModule } from "@angular/common"
import { Component, HostListener } from "@angular/core"
import { FormsModule } from "@angular/forms"

type Page =
  | "inicio"
  | "conteudo"
  | "servicos"
  | "contato"
  | "atendimento"
  | "cadastro"
  | "fisioterapeuta"
  | "tratamentos"
  | "rpa"

type Interest = {
  source: "Produtos" | "Mentoria" | "Tratamentos" | "Atendimento"
  items: string[]
}

type Icon = "location" | "online" | "home" | "mobility" | "prevention"

interface NavigationItem {
  id: Page
  label: string
}

interface TreatmentProduct {
  title: string
  summary: string
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
  readonly appointmentAddressLink =
    "https://www.google.com/maps/search/?api=1&query=DF+Plaza+Shopping+Brasilia"
  readonly instituteInstagramLink = "https://www.instagram.com/"
  readonly physiotherapistInstagramLink = "https://www.instagram.com/"

  readonly pages: Page[] = [
    "inicio",
    "conteudo",
    "servicos",
    "contato",
    "atendimento",
    "cadastro",
    "fisioterapeuta",
    "tratamentos",
    "rpa",
  ]

  readonly bottomNavigation: NavigationItem[] = [
    { id: "inicio", label: "Início" },
    { id: "fisioterapeuta", label: "Fisioterapeuta" },
    { id: "tratamentos", label: "Tratamento" },
    { id: "contato", label: "Mentoria" },
    { id: "atendimento", label: "Atendimento" },
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

  readonly products: {
    title: string
    description: string
    icon: Icon
  }[] = [
    {
      title: "Programa Online",
      description:
        "Acompanhamento à distância com exercícios orientados e progressivos para cuidar do corpo com flexibilidade, segurança e constância.",
      icon: "online",
    },
    {
      title: "Programa de Reabilitação",
      description:
        "Plano individualizado para reduzir dores, recuperar movimentos e reconstruir força com segurança durante cada etapa da recuperação.",
      icon: "mobility",
    },
    {
      title: "Prevenção de Imobilidade",
      description:
        "Exercícios e orientações para preservar a mobilidade das articulações, manter a força e proteger a autonomia no dia a dia.",
      icon: "prevention",
    },
  ]

  readonly attendanceTypes: {
    title: string
    description: string
    detail: string
    notice?: string
    icon: Icon
  }[] = [
    {
      title: "Atendimento Presencial",
      description:
        "Avaliação e acompanhamento individual no consultório, com um plano de cuidado construído de acordo com suas necessidades e objetivos.",
      detail: "DF Plaza Shopping · Torre B · Sala 709",
      notice:
        "Pacientes menores de idade devem comparecer acompanhados por um responsável.",
      icon: "location",
    },
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
          title: "Programa de Reabilitação",
          summary:
            "Plano individual para recuperar movimentos, força e função com segurança.",
        },
        {
          title: "Prevenção de Lesão",
          summary:
            "Exercícios e orientações para reduzir riscos e preparar o corpo para a rotina.",
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
          title: "Programa Online",
          summary:
            "Acompanhamento remoto com exercícios orientados e evolução acompanhada à distância.",
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
          title: "Programa de Reabilitação",
          summary:
            "Cuidado no domicílio para recuperar mobilidade, força e independência.",
        },
        {
          title: "Prevenção de Lesão",
          summary:
            "Orientações adaptadas ao ambiente de casa para evitar limitações e novas lesões.",
        },
      ],
    },
  ]

  page: Page = this.pageFromHash()
  interest: Interest | null = this.savedInterest()
  selectedByTreatment: Record<string, string[]> = {}
  submitted = false

  @HostListener("window:popstate")
  onHistoryChange(): void {
    this.page = this.pageFromHash()
    window.scrollTo({ top: 0, behavior: "auto" })
  }

  goTo(destination: Page): void {
    const nextHash = `#/${destination}`
    if (window.location.hash !== nextHash) {
      window.history.pushState({ page: destination }, "", nextHash)
    }
    this.page = destination
    this.submitted = false
    window.scrollTo({ top: 0, behavior: "auto" })
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

    this.startRegistration(
      "Tratamentos",
      selected.map((product) => `${treatmentTitle}: ${product}`),
    )
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

  private pageFromHash(): Page {
    const page = window.location.hash.replace("#/", "") as Page
    return this.pages.includes(page) ? page : "inicio"
  }

  private savedInterest(): Interest | null {
    try {
      const value = window.sessionStorage.getItem("registration-interest")
      if (!value) return null
      const parsed = JSON.parse(value) as Partial<Interest>
      const validSource = [
        "Produtos",
        "Mentoria",
        "Tratamentos",
        "Atendimento",
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
