import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import {
  Lock, Mail, BookOpen, Tablet, Printer, CalendarDays, CircleCheck, MessageSquare,
  Brain, HeartHandshake, Crown, ShieldCheck, Star, ChevronDown,
} from "lucide-react";
import heroKit from "@/assets/hero-kit.jpg";
import licoes from "@/assets/licoes.jpg";
import avatares from "@/assets/avatares.jpg";
import bonus1 from "@/assets/bonus1.jpg";
import bonus2 from "@/assets/bonus2.jpg";
import bonus3 from "@/assets/bonus3.jpg";
import planoCompleto from "@/assets/plano-completo.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Raízes da Fé — Fé católica inabalável para seus filhos" },
      { name: "description", content: "Série digital de 52 semanas para ensinar crianças de 8 a 14 anos a compreender a fé católica." },
      { property: "og:title", content: "Raízes da Fé — Série católica de 52 semanas" },
      { property: "og:description", content: "Construa uma fé católica inabalável nos seus filhos antes que seja tarde demais." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function useCountdown(start: number) {
  const [t, setT] = useState(start);
  useEffect(() => {
    const id = setInterval(() => setT((v) => (v > 0 ? v - 1 : start)), 1000);
    return () => clearInterval(id);
  }, [start]);
  return [String(Math.floor(t / 60)).padStart(2, "0"), String(t % 60).padStart(2, "0")];
}

function Cta({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <a href="#planos" className={`inline-flex items-center justify-center gap-3 rounded-xl bg-cta px-10 py-5 text-center text-lg font-extrabold uppercase text-primary-foreground shadow-cta transition-transform hover:scale-[1.02] ${className}`}>
      {children}
    </a>
  );
}

function Eyebrow({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <p className={`text-xs font-bold uppercase tracking-[0.3em] text-orange ${className}`}>{children}</p>;
}

function Timer({ start, size = "lg" }: { start: number; size?: "lg" | "md" }) {
  const [m, s] = useCountdown(start);
  const box = size === "lg" ? "h-20 w-28 text-5xl" : "h-[72px] w-24 text-5xl";
  return (
    <div className="flex items-start justify-center gap-3">
      {[[m, "Minutos"], [s, "Segundos"]].map(([v, l], i) => (
        <div key={l} className="flex items-start gap-3">
          {i === 1 && <span className="mt-6 text-2xl font-bold text-primary-foreground/60">:</span>}
          <div className="flex flex-col items-center">
            <div className={`flex items-center justify-center rounded-xl bg-orange font-display font-extrabold text-primary-foreground ${box}`}>{v}</div>
            <span className="mt-2 text-xs font-bold uppercase tracking-wider text-primary-foreground/85">{l}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

const Check = ({ muted }: { muted?: boolean }) => (
  <CircleCheck className={`h-6 w-6 shrink-0 ${muted ? "text-muted-foreground/40" : "text-cta"}`} strokeWidth={2.2} />
);

const faqs = [
  ["Isso é um curso de teologia?", "Não. É um material prático para pais conduzirem encontros simples e profundos com os filhos em casa."],
  ["É necessário seguir uma ordem ou calendário?", "Recomendamos a ordem sugerida, mas você pode adaptar ao ritmo da sua família."],
  ["Isso substitui a catequese?", "Não substitui. Complementa e aprofunda o que é vivido na catequese e na paróquia."],
  ["Como vou receber o acesso?", "Logo após a confirmação do pagamento, você recebe tudo no seu e-mail."],
  ["O acesso é por quanto tempo?", "O acesso é vitalício. Você pode baixar e usar quantas vezes quiser."],
  ["Posso acessar pelo celular?", "Sim. O material funciona no celular, tablet ou computador, e também pode ser impresso."],
  ["E se eu não gostar do conteúdo?", "Você tem 30 dias de garantia incondicional para pedir o reembolso integral."],
];

function Index() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="min-h-screen bg-soft text-ink">
      <div className="bg-gradient-brand py-3 text-center text-sm font-bold uppercase tracking-wide text-primary-foreground">
        Oferta de lançamento: 52% de desconto
      </div>

      {/* HERO */}
      <section className="mx-auto max-w-5xl px-5 pt-16 text-center">
        <div className="flex items-center justify-center gap-2">
          <Lock className="h-5 w-5 text-orange" />
          <Eyebrow className="tracking-[0.2em]">Compra 100% segura</Eyebrow>
        </div>
        <h1 className="mx-auto mt-6 max-w-4xl text-5xl font-extrabold leading-[1.02] md:text-[84px]">
          Construa uma fé católica <span className="text-brand">inabalável</span> nos seus filhos antes que seja tarde demais.
        </h1>
        <img src={heroKit} alt="Kit Raízes da Fé Católica" className="mx-auto mt-10 w-full max-w-2xl" />
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          A série digital de <b className="text-ink">52 semanas</b> para ensinar crianças de <b className="text-brand">8 a 14 anos</b> a{" "}
          <b className="text-ink">compreender a fé católica</b> — não apenas aceitar e repetir respostas prontas.
        </p>
        <Cta className="mt-8 max-w-md">Quero garantir o acesso com desconto <span>→</span></Cta>
        <p className="mt-5 flex items-center justify-center gap-2 text-sm text-muted-foreground">
          <Mail className="h-4 w-4" /> Você recebe tudo na hora, direto no seu e-mail
        </p>
        <img src={avatares} alt="Famílias" className="mx-auto mt-8 h-9 rounded-full" />
        <p className="mt-3 text-sm font-semibold text-ink">+1000 famílias transformadas</p>
      </section>

      {/* LIÇÕES */}
      <section className="mx-auto grid max-w-5xl items-center gap-10 px-5 py-28 md:grid-cols-2">
        <h2 className="text-3xl font-bold leading-tight md:text-[34px]">
          Cada lição faz a criança <span className="text-brand">descobrir a verdade sozinha</span>, criando raízes profundas e duradouras na fé.
        </h2>
        <img src={licoes} alt="Páginas das lições" className="w-full rounded-2xl" />
      </section>

      {/* MATERIAL */}
      <section className="mx-auto max-w-5xl px-5 text-center">
        <p className="font-display text-4xl font-extrabold uppercase tracking-[0.12em] text-orange">Um material único</p>
        <h2 className="mt-4 text-4xl font-extrabold md:text-5xl">
          Você receberá um material que vai <span className="text-brand">muito além dos encontros de catequese</span>.
        </h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
          {[
            [BookOpen, "13 Livros Digitais", "Jornada completa de 52 semanas"],
            [Tablet, "Acesso", "Celular, tablet ou computador"],
            [Printer, "Imprimível", "Imprima se sua família preferir"],
            [CalendarDays, "Ritmo flexível", "Pensado para uso semanal"],
          ].map(([Icon, t, d]: any) => (
            <div key={t} className="rounded-2xl bg-card p-6 text-left shadow-card">
              <Icon className="h-7 w-7 text-brand" strokeWidth={1.8} />
              <h3 className="mt-4 text-lg font-bold">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* OFERTA TEMPO */}
      <section className="mx-auto max-w-3xl px-5 py-24">
        <div className="rounded-3xl bg-gradient-brand px-8 py-14 text-center text-primary-foreground shadow-cta">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary-foreground/90">Aproveite o preço promocional</p>
          <h2 className="mb-6 mt-2 text-3xl font-extrabold">Por tempo limitado</h2>
          <Timer start={7 * 60 + 16} />
          <p className="mx-auto mt-8 max-w-lg">
            Aqui, seu filho não apenas decora conceitos e respostas: aprende a <b>defender sua fé</b>.
          </p>
          <Cta className="mt-8">Quero garantir o acesso <span>→</span></Cta>
        </div>
      </section>

      {/* IDEAL */}
      <section className="mx-auto max-w-3xl px-5 text-center">
        <h2 className="text-4xl font-extrabold">Este material é ideal para você que deseja:</h2>
        <div className="mt-10 grid gap-3 text-left sm:grid-cols-2">
          {["Prevenir o abandono da fé no futuro", "Preparar seu filho para responder quando sua fé for questionada", "Transformar respostas decoradas em convicções profundas", "Ir além dos encontros de catequese", "Construir uma fé inabalável antes da adolescência"].map((t) => (
            <div key={t} className="flex gap-3 rounded-2xl bg-card p-5 shadow-card"><Check />{t}</div>
          ))}
        </div>
      </section>

      {/* MÉTODO */}
      <section className="mx-auto max-w-6xl px-5 py-28 text-center">
        <Eyebrow>Método de aplicação</Eyebrow>
        <h2 className="mt-3 text-4xl font-extrabold">Como fortalecer a fé <span className="text-brand">no dia a dia</span> do seu filho</h2>
        <p className="mt-3 text-muted-foreground">Simples, prático e direto ao ponto.</p>
        <div className="mt-10 grid gap-5 text-left sm:grid-cols-2 lg:grid-cols-4">
          {[
            [BookOpen, "Estudo guiado", "Seu filho aprende no ritmo dele, com lições curtas e objetivas."],
            [MessageSquare, "Conversas naturais", "As perguntas do material levam seu filho a pensar, participar e falar sobre o que acredita."],
            [Brain, "Pensamento crítico católico", "Ele aprende a avaliar ideias, dúvidas e questionamentos."],
            [HeartHandshake, "Fé aplicada à vida real", "A doutrina católica deixa de ser abstrata e passa a fazer sentido."],
          ].map(([Icon, t, d]: any, i) => (
            <div key={t} className="relative rounded-2xl bg-card p-6 pt-8 shadow-card">
              <span className="absolute -top-3 left-6 rounded-full bg-orange px-3 py-1 text-xs font-bold text-primary-foreground">PASSO 0{i + 1}</span>
              <Icon className="h-7 w-7 text-brand" strokeWidth={1.8} />
              <h3 className="mt-4 text-lg font-bold">{t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SÉRIE */}
      <section className="mx-auto max-w-3xl px-5">
        <div className="rounded-3xl bg-card px-6 py-12 text-center shadow-card md:px-40">
          <Eyebrow>Oferta de lançamento: 52% de desconto</Eyebrow>
          <h2 className="mt-3 text-3xl font-extrabold">Série <span className="text-brand">"Raízes da Fé"</span></h2>
          <p className="mt-2 text-muted-foreground">52 semanas de formação católica para crianças.</p>
          <img src={heroKit} alt="Série Raízes da Fé" className="mx-auto mt-8 w-full" />
          <div className="mt-8 space-y-3 text-left">
            {["Base católica sólida, 100% de acordo com a doutrina da Igreja", "Clareza para explicar a fé", "Segurança diante dos questionamentos", "Fundamento para a adolescência"].map((t) => (
              <div key={t} className="flex gap-3 rounded-xl bg-card p-4 shadow-card"><Check />{t}</div>
            ))}
          </div>
          <div className="mt-8 rounded-xl border-l-4 border-orange bg-orange/10 p-4 text-sm">
            Essa oferta está disponível para as primeiras <b>1000 famílias</b>. Depois disso, o preço será ajustado.
          </div>
          <Cta className="mt-8 w-full">Garantir acesso com desconto →</Cta>
        </div>
      </section>

      {/* BÔNUS */}
      <section className="mx-auto max-w-5xl px-5 py-28 text-center">
        <Eyebrow>E não para por aí... tem mais!</Eyebrow>
        <h2 className="mt-3 text-4xl font-extrabold">Você também vai receber <span className="text-brand">3 bônus exclusivos</span></h2>
        <div className="mt-10 grid gap-5 text-left md:grid-cols-3">
          {[
            [bonus1, "Guia dos Pais para Conversas Difíceis sobre a Fé", "Como acolher dúvidas, responder com segurança e transformar perguntas difíceis em conversas que aproximam seu filho da fé — mesmo quando você não sabe o que dizer."],
            [bonus2, "Os Erros que Enfraquecem a Fé Católica dos Filhos", "Os 12 erros que muitos pais cometem sem perceber — e como corrigi-los antes que enfraqueçam a fé dos filhos."],
            [bonus3, "Raízes na Adolescência: dos 14 aos 18 Anos", "Como acompanhar seu filho quando as dúvidas aumentam, os amigos ganham influência e a fé precisa deixar de ser apenas dos pais para se tornar dele."],
          ].map(([img, t, d], i) => (
            <div key={t} className="rounded-2xl bg-card p-8 shadow-card">
              <img src={img} alt={t} className="w-full rounded-xl" />
              <Eyebrow className="mt-6 tracking-[0.15em]">Bônus #{i + 1}</Eyebrow>
              <h3 className="mt-3 text-2xl font-bold leading-tight">{t}</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">{d}</p>
              <span className="mt-5 inline-flex gap-5 rounded-full bg-cta/10 px-3 py-1.5 font-bold text-cta">
                <span>Valor R$47</span><span>GRÁTIS</span>
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* PLANOS */}
      <section id="planos" className="mx-auto max-w-5xl px-5 text-center">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-destructive">Última chance — oferta termina hoje</p>
        <h2 className="mt-2 text-4xl font-extrabold">Escolha o melhor plano para você!</h2>
        <div className="mt-10 grid gap-5 text-left md:grid-cols-2">
          <Plan name="Plano Básico" sub={`Série completa "Raízes da Fé"`} img={heroKit} items={[["Série 'Raízes da Fé' – 52 semanas", true], ["Guia dos Pais para Conversas Difíceis sobre a Fé", false], ["Os Erros que Enfraquecem a Fé Católica dos Filhos", false], ["Raízes na Adolescência: dos 14 aos 18 Anos", false]]} de="R$74,00" preco="R$49,90" parc="ou 11x de R$5,12 no cartão" eco="R$26,10" cta="Quero o plano básico" />
          <Plan featured name="Plano Completo" img={planoCompleto} items={[["Série 'Raízes da Fé' – 52 semanas", true], ["Bônus #1 Guia dos Pais para Conversas Difíceis sobre a Fé", true], ["Bônus #2 Os Erros que Enfraquecem a Fé Católica dos Filhos", true], ["Bônus #3 Raízes na Adolescência: dos 14 aos 18 Anos", true]]} de="R$147,00" preco="R$69,90" parc="ou 12x de R$6,69 no cartão" eco="R$79,10" cta="Quero o plano completo" />
        </div>
      </section>

      {/* GARANTIA */}
      <section className="mx-auto max-w-3xl px-5 py-24">
        <div className="flex flex-col items-center gap-6 rounded-3xl bg-card p-10 shadow-card sm:flex-row">
          <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-cta/10"><ShieldCheck className="h-9 w-9 text-cta" /></div>
          <div>
            <h3 className="text-3xl font-bold">Garantia incondicional de 30 dias</h3>
            <p className="mt-2 text-lg leading-relaxed text-muted-foreground">Você tem 30 dias para testar a metodologia. Se por algum motivo perceber que não é para você, devolvemos integralmente o seu investimento, sem questionamentos.</p>
          </div>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section className="mx-auto max-w-5xl px-5 text-center">
        <Eyebrow>Famílias que já transformaram</Eyebrow>
        <h2 className="mt-3 text-4xl font-extrabold">Veja o que nossos clientes <span className="text-brand">estão dizendo</span></h2>
        <p className="mt-3 text-muted-foreground">Leia os depoimentos de quem já tomou a decisão certa.</p>
        <div className="mt-10 grid gap-5 text-left md:grid-cols-3">
          {[
            ["\"Fiz o encontro sobre a existência de Deus ontem com meu filho de 9 anos e ele começou a fazer perguntas que nunca tinha feito. A conversa rendeu muito mais do que eu esperava\"", "Ana Paula R.", "Mãe de um menino de 9 anos"],
            ["\"Começamos essa semana e minha filha já pediu para fazer o próximo. Sinceramente, achei que ela não teria paciência, mas gostou muito.\"", "Ricardo M.", "Pai de um menino de 11 anos"],
            ["\"Meu filho perguntou por que a gente precisa ir à Missa e, pela primeira vez, consegui conversar sem responder só “porque sim”. Já valeu por isso.\"", "Juliana S.", "Mãe solo"],
          ].map(([q, n, r]) => (
            <div key={n} className="self-start rounded-2xl bg-card p-6 shadow-card">
              <div className="flex gap-0.5">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-orange text-orange" />)}</div>
              <p className="mt-3 border-b pb-5 text-sm leading-relaxed">{q}</p>
              <p className="mt-4 text-sm font-bold">{n}</p>
              <p className="text-xs text-muted-foreground">{r}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-5 py-28">
        <h2 className="text-center text-4xl font-extrabold">Perguntas frequentes</h2>
        <div className="mt-8 space-y-3">
          {faqs.map(([q, a], i) => (
            <div key={q} className="rounded-xl bg-card shadow-card">
              <button onClick={() => setOpen(open === i ? null : i)} className="flex w-full items-center justify-between px-5 py-4 text-left text-sm font-bold">
                {q}<ChevronDown className={`h-4 w-4 transition-transform ${open === i ? "rotate-180" : ""}`} />
              </button>
              {open === i && <p className="px-5 pb-4 text-sm text-muted-foreground">{a}</p>}
            </div>
          ))}
        </div>
      </section>

      {/* FINAL */}
      <section className="bg-gradient-brand px-5 py-16 text-center text-primary-foreground">
        <span className="inline-block rounded-full bg-primary-foreground/20 px-4 py-1.5 text-xs font-bold uppercase">★ Esta oferta sai do ar em</span>
        <div className="mt-8"><Timer start={5 * 60 + 29} size="md" /></div>
        <h2 className="mt-6 text-4xl font-extrabold">Ensinar a fé em casa é o começo.</h2>
        <p className="mt-3 text-lg">O que muda tudo é prepará-lo para <i>o que acontece fora dela.</i></p>
        <Cta className="mt-8 px-16">Quero minha vaga agora →</Cta>
      </section>

      <footer className="bg-footer px-5 py-12 text-center text-primary-foreground/80">
        <p className="text-sm font-bold text-primary-foreground">Raízes da Fé</p>
        <p className="mt-4 text-sm">© 2026 — Todos os direitos reservados.</p>
        <p className="mt-4 text-xs">Este site não é afiliado ao Facebook, Instagram ou Meta.</p>
        <p className="mx-auto mt-4 max-w-2xl text-xs leading-relaxed">Cada família vive uma realidade diferente, por isso os resultados podem variar. O conteúdo apresentado tem caráter educativo e não garante resultados específicos.</p>
      </footer>
    </div>
  );
}

function Plan({ name, sub, img, items, de, preco, parc, eco, cta, featured }: {
  name: string; sub?: string; img: string; items: [string, boolean][]; de: string; preco: string; parc: string; eco: string; cta: string; featured?: boolean;
}) {
  return (
    <div className={`relative flex flex-col rounded-3xl bg-card p-8 shadow-card ${featured ? "border border-brand" : ""}`}>
      {featured && <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-orange px-4 py-1 text-xs font-bold uppercase text-primary-foreground">★ Mais vendido</span>}
      {featured && <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-muted-foreground"><Crown className="h-4 w-4 text-orange" /> Todos os bônus inclusos · 2x mais conteúdo</p>}
      <h3 className={`text-2xl font-bold ${featured ? "mt-2 text-3xl" : ""}`}>{name}</h3>
      {sub && <p className="mt-1 text-muted-foreground">{sub}</p>}
      <img src={img} alt={name} className="my-8 w-full" />
      <ul className="space-y-3">
        {items.map(([t, ok]) => (
          <li key={t} className={`flex gap-3 ${ok ? "" : "text-muted-foreground/50 line-through"}`}><Check muted={!ok} />{t}</li>
        ))}
      </ul>
      <div className="mt-10 flex-1">
        <p className="text-sm text-muted-foreground line-through">de {de} por:</p>
        <p className="font-display text-5xl font-extrabold">{preco}</p>
        <p className="text-sm text-muted-foreground">{parc}</p>
        <span className="mt-1 inline-block rounded-full bg-cta/10 px-3 py-1 text-sm font-semibold">Você economiza {eco}</span>
      </div>
      <Cta className="mt-8 w-full">{cta} →</Cta>
    </div>
  );
}
