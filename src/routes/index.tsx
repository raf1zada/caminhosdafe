import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Lock, Mail, BookOpen, Tablet, Printer, CalendarDays, CircleCheck, MessageSquare,
  Brain, HeartHandshake, ShieldCheck, ChevronDown, Star, ChevronLeft, ChevronRight,
} from "lucide-react";
import heroKit from "@/Coleção Caminhos da Fé em Família.png";
import depoimento1 from "@/depoimento1.png";
import depoimento2 from "@/depoimento2.png";
import depoimento3 from "@/depoimento3.png";
const licoes = "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?auto=format&fit=crop&w=1100&q=85";
import avatares from "@/assets/avatares.jpg";
import bonus1 from "@/assets/bonus1.jpg";
import bonus2 from "@/assets/bonus2.jpg";
import bonus3 from "@/assets/bonus3.jpg";
const planoCompleto = "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=1100&q=85";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Caminhos da Fé — Formação católica para sua família" },
      { name: "description", content: "Uma jornada de 48 semanas de formação católica para crianças e adolescentes de 5 a 15 anos." },
      { property: "og:title", content: "Caminhos da Fé — Formação católica para sua família" },
      { property: "og:description", content: "Ajude seus filhos a compreender a fé católica e construir convicções sólidas." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Cta({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <a href="#planos" className={`inline-flex items-center justify-center gap-3 rounded-xl bg-cta px-8 py-5 text-center text-base font-extrabold uppercase text-primary-foreground shadow-cta transition-transform hover:scale-[1.02] ${className}`}>
      {children}
    </a>
  );
}

function Eyebrow({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <p className={`text-xs font-bold uppercase tracking-[0.3em] text-orange ${className}`}>{children}</p>;
}

const Check = ({ muted }: { muted?: boolean }) => (
  <CircleCheck className={`h-6 w-6 shrink-0 ${muted ? "text-muted-foreground/40" : "text-cta"}`} strokeWidth={2.2} />
);

const faqs = [
  ["O material está de acordo com a doutrina da Igreja Católica?", "O conteúdo deve seguir os fundamentos e ensinamentos oficiais da Igreja Católica, com linguagem adequada à faixa etária."],
  ["É necessário seguir uma ordem ou calendário?", "A coleção foi organizada em uma jornada de 48 semanas, mas você pode adaptar o ritmo conforme a rotina da família."],
  ["Isso substitui a catequese?", "Não. O material é complementar e não substitui a catequese paroquial ou a preparação para os sacramentos."],
  ["Como vou receber o acesso?", "Após a confirmação do pagamento, você receberá as instruções diretamente no e-mail cadastrado."],
  ["O acesso é por quanto tempo?", "As condições e o prazo de acesso serão informados no momento da compra."],
  ["Posso acessar pelo celular?", "Sim! Todo o conteúdo digital pode ser acessado pelo celular, tablet ou computador."],
  ["E se eu não gostar do conteúdo?", "Você conta com 30 dias de garantia para solicitar o reembolso integral."],
];

function Index() {
  const [open, setOpen] = useState<number | null>(null);
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  return (
    <>
      <link rel="preload" as="image" href={depoimento1} />
      <link rel="preload" as="image" href={depoimento2} />
      <link rel="preload" as="image" href={depoimento3} />
    <div className="min-h-screen bg-soft text-ink">
      <div className="bg-gradient-brand py-3 text-center text-sm font-bold uppercase tracking-wide text-primary-foreground">
        OFERTA ESPECIAL DE LANÇAMENTO • 70% DE DESCONTO
      </div>

      {/* HERO */}
      <section className="mx-auto max-w-5xl px-5 pt-14 text-center">
        <div className="flex items-center justify-center gap-2">
          <Lock className="h-5 w-5 text-orange" />
          <Eyebrow className="tracking-[0.12em]">AMBIENTE DE COMPRA 100% SEGURO</Eyebrow>
        </div>
        <h1 className="mx-auto mt-6 max-w-4xl text-4xl font-extrabold leading-[1.08] md:text-[64px]">
          <span className="text-brand">Não espere seu filho se afastar da fé</span> para começar a ensiná-lo a compreender aquilo em que acredita.
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
          Ajude seus filhos a conhecer, compreender e viver a fé católica com uma formação organizada, acolhedora e pensada para a rotina da família.
        </p>
        <img src={heroKit} alt="Mockup da coleção Caminhos da Fé com a caixa principal, os 15 livros digitais e os três bônus" className="mx-auto mt-8 block h-auto w-full max-w-5xl object-contain" decoding="async" fetchPriority="high" />
        <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
          Conheça o <b className="text-ink">Caminhos da Fé</b>: uma jornada de formação católica criada para crianças e adolescentes de <b className="text-brand">5 a 15 anos</b>, com atividades e ensinamentos que ajudam a construir uma fé mais consciente, sólida e fundamentada.
        </p>
        <p className="mt-5 text-xl font-extrabold text-brand">15 livros digitais • 48 semanas de formação • Acesso digital e material imprimível.</p>
        <Cta className="mt-8 max-w-xl">Quero garantir meu acesso com 70% de desconto agora <span>→</span></Cta>
        <p className="mt-5 flex items-center justify-center gap-2 text-sm text-muted-foreground">
          <Mail className="h-4 w-4" /> Acesso imediato após a confirmação da compra.
        </p>
        
        <div className="mt-8 flex flex-col items-center justify-center gap-3">
          <img src={avatares} alt="Famílias" className="h-10 rounded-full" />
          <p className="text-sm font-extrabold text-ink">1000+ famílias transformadas</p>
        </div>
      </section>

      {/* DEPOIMENTOS — CARROSSEL DE IMAGENS */}
      <section className="mx-auto max-w-5xl px-5 py-20 text-center">
        <Eyebrow>Famílias que cultivam a fé</Eyebrow>
        <h2 className="mt-3 text-4xl font-extrabold">Veja o que as famílias estão compartilhando</h2>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
          Veja alguns relatos de famílias que estão vivendo o Caminhos da Fé no dia a dia.
        </p>
        <div className="mx-auto mt-10 max-w-3xl">
          <div className="overflow-hidden rounded-2xl bg-card p-3 shadow-card">
            <img
              src={[depoimento1, depoimento2, depoimento3][testimonialIndex]}
              alt={`Depoimento ${testimonialIndex + 1} de uma família sobre o Caminhos da Fé`}
              className="mx-auto block h-auto max-h-[780px] w-full rounded-xl object-contain"
              loading="eager"
              decoding="sync"
            />
          </div>
          <div className="mt-5 flex items-center justify-center gap-5">
            <button type="button" aria-label="Depoimento anterior"
              onClick={() => setTestimonialIndex((current) => (current + 2) % 3)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-brand/20 bg-card transition hover:bg-brand/10">
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex items-center gap-2" aria-label={"Depoimento " + (testimonialIndex + 1) + " de 3"}>
              {[0, 1, 2].map((index) => (
                <button key={index} type="button" aria-label={"Ir para depoimento " + (index + 1)}
                  onClick={() => setTestimonialIndex(index)}
                  className={"h-2.5 rounded-full transition-all " + (testimonialIndex === index ? "w-7 bg-brand" : "w-2.5 bg-brand/25")} />
              ))}
            </div>
            <button type="button" aria-label="Próximo depoimento"
              onClick={() => setTestimonialIndex((current) => (current + 1) % 3)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-brand/20 bg-card transition hover:bg-brand/10">
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
          <p className="mt-3 text-xs text-muted-foreground">Depoimento {testimonialIndex + 1} de 3</p>
        </div>
      </section>

      {/* FORMAÇÃO */}
      <section className="mx-auto grid max-w-5xl items-center gap-10 px-5 py-24 md:grid-cols-2">
        <div>
          <Eyebrow>Uma formação que faz a diferença</Eyebrow>
          <h2 className="mt-4 text-3xl font-bold leading-tight md:text-[34px]">
            Cada encontro ajuda seu filho a descobrir por que acredita naquilo que a Igreja ensina. Um material que vai além da memorização e incentiva conhecimento, reflexão e diálogo em família.
          </h2>
        </div>
        <img src={licoes} alt="Páginas dos encontros Caminhos da Fé" className="w-full rounded-2xl" />
      </section>

      {/* MATERIAL */}
      <section className="mx-auto max-w-5xl px-5 text-center">
        <Eyebrow>Uma formação completa</Eyebrow>
        <h2 className="mt-4 text-4xl font-extrabold md:text-5xl">
          Uma formação católica completa para acompanhar seu filho durante 48 semanas.
        </h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
          {[
            [BookOpen, "15 Livros Digitais", "Uma jornada estruturada de 48 semanas de formação católica."],
            [Tablet, "Acesso", "Celular, tablet ou computador."],
            [Printer, "Imprimível", "Imprima os materiais se sua família preferir."],
            [CalendarDays, "Ritmo flexível", "Conteúdo organizado para acompanhamento semanal, respeitando o desenvolvimento de cada criança."],
          ].map(([Icon, title, description]: any) => (
            <div key={title} className="rounded-2xl bg-card p-6 text-left shadow-card">
              <Icon className="h-7 w-7 text-brand" strokeWidth={1.8} />
              <h3 className="mt-4 text-lg font-bold">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* OFERTA */}
      <section className="mx-auto max-w-3xl px-5 py-24">
        <div className="rounded-3xl bg-gradient-brand px-8 py-14 text-center text-primary-foreground shadow-cta">
          <Eyebrow className="text-primary-foreground">Aproveite o preço promocional</Eyebrow>
          <h2 className="mb-4 mt-3 text-3xl font-extrabold">Uma condição especial para sua família!</h2>
          <p className="font-display text-5xl font-extrabold text-orange md:text-6xl">70% DE DESCONTO</p>
          <p className="mx-auto mt-8 max-w-xl leading-relaxed">
            Aqui, seus filhos não apenas aprendem conceitos religiosos: desenvolvem conhecimento para compreender os ensinamentos da Igreja, refletir sobre a própria fé e responder com segurança quando surgirem questionamentos.
          </p>
          <Cta className="mt-8">Quero garantir meu acesso <span>→</span></Cta>
        </div>
      </section>

      {/* IDEAL */}
      <section className="mx-auto max-w-4xl px-5 text-center">
        <h2 className="text-4xl font-extrabold">Este material é ideal para você que deseja:</h2>
        <div className="mt-10 grid gap-3 text-left sm:grid-cols-2">
          {[
            "Construir uma base católica sólida desde a infância.",
            "Ensinar seus filhos a compreender os fundamentos da doutrina da Igreja.",
            "Prepará-los para responder a questionamentos sobre a fé.",
            "Transformar ensinamentos decorados em convicções verdadeiras.",
            "Fortalecer a vivência cristã dentro de casa.",
            "Acompanhar o desenvolvimento religioso dos filhos durante a infância e a adolescência.",
          ].map((item) => (
            <div key={item} className="flex gap-3 rounded-2xl bg-card p-5 shadow-card"><Check />{item}</div>
          ))}
        </div>
      </section>

      {/* METODOLOGIA */}
      <section className="mx-auto max-w-6xl px-5 py-28 text-center">
        <Eyebrow>Nossa metodologia</Eyebrow>
        <h2 className="mt-3 text-4xl font-extrabold">Como fortalecer a formação católica dos seus filhos no dia a dia</h2>
        <p className="mt-3 text-muted-foreground">Conhecimento, reflexão, compreensão e vivência: quatro etapas para criar raízes profundas na fé católica.</p>
        <div className="mt-10 grid gap-5 text-left sm:grid-cols-2 lg:grid-cols-4">
          {[
            [BookOpen, "Conhecimento da fé", "Seus filhos conhecem os fundamentos da fé católica por meio de explicações acessíveis e conteúdos organizados."],
            [MessageSquare, "Reflexão e diálogo", "Perguntas e atividades incentivam a criança a pensar, participar e compreender o significado dos ensinamentos cristãos."],
            [Brain, "Compreensão da doutrina", "Aprendem a reconhecer os fundamentos da Igreja Católica e a compreender as razões por trás de suas crenças."],
            [HeartHandshake, "Fé aplicada à realidade", "Os ensinamentos deixam de ser apenas conceitos e passam a fazer parte das atitudes, escolhas e relações do cotidiano."],
          ].map(([Icon, title, description]: any, i: number) => (
            <div key={title} className="relative rounded-2xl bg-card p-6 pt-8 shadow-card">
              <span className="absolute -top-3 left-6 rounded-full bg-orange px-3 py-1 text-xs font-bold text-primary-foreground">PASSO 0{i + 1}</span>
              <Icon className="h-7 w-7 text-brand" strokeWidth={1.8} />
              <h3 className="mt-4 text-lg font-bold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* COLEÇÃO */}
      <section className="mx-auto max-w-3xl px-5">
        <div className="rounded-3xl bg-card px-6 py-12 text-center shadow-card md:px-16">
          <Eyebrow>Condição especial de lançamento: 70% de desconto</Eyebrow>
          <h2 className="mt-3 text-3xl font-extrabold">Coleção <span className="text-brand">"Caminhos da Fé"</span></h2>
          <p className="mt-2 text-muted-foreground">48 semanas de formação católica para crianças e adolescentes de 5 a 15 anos.</p>
          <img src={heroKit} alt="Pacote completo da coleção Caminhos da Fé" className="mx-auto mt-8 w-full" />
          <div className="mt-8 space-y-3 text-left">
            {[
              "Formação católica organizada e progressiva.",
              "Conhecimento dos fundamentos da doutrina.",
              "Compreensão dos ensinamentos bíblicos e da Igreja.",
              "Clareza para explicar a própria fé.",
              "Preparação para os questionamentos da infância e adolescência.",
            ].map((item) => (
              <div key={item} className="flex gap-3 rounded-xl bg-card p-4 shadow-card"><Check />{item}</div>
            ))}
          </div>
          <p className="mt-8 leading-relaxed text-muted-foreground">Uma jornada desenvolvida para ajudar sua família a cultivar uma fé mais consciente e fundamentada.</p>
          <Cta className="mt-8 w-full">Garantir acesso com 70% de desconto →</Cta>
          <p className="mt-4 text-sm text-muted-foreground">Acesso imediato após a confirmação da compra.</p>
        </div>
      </section>

      {/* BÔNUS */}
      <section className="mx-auto max-w-5xl px-5 py-28 text-center">
        <Eyebrow>E não para por aí... tem mais!</Eyebrow>
        <h2 className="mt-3 text-4xl font-extrabold">Você também poderá receber <span className="text-brand">3 bônus exclusivos</span>!</h2>
        <div className="mt-10 grid gap-5 text-left md:grid-cols-3">
          {[
            [bonus1, "Guia para Responder às Dúvidas sobre a Fé", "Um material para ajudar os pais a abordar perguntas difíceis sobre Deus, Jesus, a Igreja e os ensinamentos católicos, transformando dúvidas em oportunidades de aprendizado."],
            [bonus2, "Hábitos Familiares que Fortalecem a Fé", "Descubra maneiras práticas de inserir a oração, a leitura bíblica, a participação na Missa e os valores cristãos na rotina familiar."],
            [bonus3, "Fé Católica na Adolescência: dos 12 aos 18 Anos", "Um guia para acompanhar os filhos em uma fase de grandes transformações, ajudando-os a aprofundar seus conhecimentos religiosos e desenvolver uma fé consciente diante das novas influências e questionamentos."],
          ].map(([img, title, description], i) => (
            <div key={title} className="rounded-2xl bg-card p-8 shadow-card">
              <img src={img} alt={title} className="w-full rounded-xl" />
              <Eyebrow className="mt-6 tracking-[0.15em]">Bônus #{i + 1}</Eyebrow>
              <h3 className="mt-3 text-xl font-bold leading-tight">{title}</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">{description}</p>
              <span className="mt-5 inline-flex flex-wrap gap-3 rounded-full bg-cta/10 px-3 py-1.5 text-sm font-bold text-cta">
                <span>Valor R$47</span><span>GRÁTIS NO PLANO FAMÍLIA</span>
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* PLANOS */}
      <section id="planos" className="mx-auto max-w-5xl scroll-mt-8 px-5 text-center">
        <Eyebrow>Oferta especial de lançamento</Eyebrow>
        <h2 className="mt-2 text-4xl font-extrabold">Escolha o melhor plano para sua família!</h2>
        <div className="mt-10 grid items-stretch gap-6 text-left md:grid-cols-2">
          <Plan
            name="Plano Essencial"
            sub='Coleção completa "Caminhos da Fé"'
            img={heroKit}
            items={[
              ["Coleção 'Caminhos da Fé' – 48 semanas", true],
              ["15 livros digitais de formação católica", true],
              ["Conteúdos organizados para crianças e adolescentes de 5 a 15 anos", true],
              ["Atividades de reflexão e aprendizado", true],
              ["3 bônus exclusivos", false],
            ]}
            de="R$99,97"
            preco="R$29,99"
            parc="Ou em até 12x no cartão."
            eco="R$69,98 — 70% de desconto!"
            cta="Quero o Plano Essencial"
          />
          <Plan
            featured
            name="Plano Família"
            sub="Coleção completa + 3 bônus exclusivos"
            img={planoCompleto}
            items={[
              ["Coleção 'Caminhos da Fé' – 48 semanas", true],
              ["Bônus #1 Guia para Responder às Dúvidas sobre a Fé", true],
              ["Bônus #2 Hábitos Familiares que Fortalecem a Fé", true],
              ["Bônus #3 Fé Católica na Adolescência: dos 12 aos 18 Anos", true],
            ]}
            de="R$166,33"
            preco="R$49,90"
            parc="Ou em até 12x no cartão."
            eco="R$116,43 — 70% de desconto!"
            cta="Quero o Plano Família"
          />
        </div>
      </section>

      {/* GARANTIA */}
      <section className="mx-auto max-w-3xl px-5 py-24">
        <div className="flex flex-col items-center gap-6 rounded-3xl bg-card p-10 text-center shadow-card sm:flex-row sm:text-left">
          <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-cta/10"><ShieldCheck className="h-9 w-9 text-cta" /></div>
          <div>
            <h3 className="text-3xl font-bold">Garantia incondicional de 30 dias</h3>
            <p className="mt-2 text-lg leading-relaxed text-muted-foreground">Você tem 30 dias para conhecer e experimentar a metodologia. Se por algum motivo perceber que o material não atende às expectativas da sua família, poderá solicitar o reembolso integral dentro do prazo de garantia.</p>
          </div>
        </div>
      </section>

      {/* FAMÍLIAS */}
      <section className="mx-auto max-w-4xl px-5 py-8 text-center">
        <Eyebrow>Famílias que cultivam a fé</Eyebrow>
        <h2 className="mt-3 text-4xl font-extrabold">Uma formação que começa dentro de casa.</h2>
        <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-muted-foreground">
          Acompanhar o desenvolvimento religioso dos filhos é uma jornada que exige diálogo, conhecimento e dedicação.
        </p>
        <p className="mx-auto mt-3 max-w-3xl leading-relaxed text-muted-foreground">
          O Caminhos da Fé foi pensado para ajudar os pais nessa missão, oferecendo conteúdos organizados para tornar o aprendizado católico mais acessível e participativo.
        </p>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-5 py-28">
        <h2 className="text-center text-4xl font-extrabold">Perguntas frequentes</h2>
        <p className="mt-3 text-center text-muted-foreground">Tire suas dúvidas antes de começar!</p>
        <div className="mt-8 space-y-3">
          {faqs.map(([question, answer], i) => (
            <div key={question} className="rounded-xl bg-card shadow-card">
              <button onClick={() => setOpen(open === i ? null : i)} className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-bold">
                {question}<ChevronDown className={`h-4 w-4 shrink-0 transition-transform ${open === i ? "rotate-180" : ""}`} />
              </button>
              {open === i && <p className="px-5 pb-4 text-sm leading-relaxed text-muted-foreground">{answer}</p>}
            </div>
          ))}
        </div>
      </section>

      {/* FINAL */}
      <section className="bg-gradient-brand px-5 py-16 text-center text-primary-foreground">
        <Eyebrow className="text-primary-foreground">Não deixe essa oportunidade passar</Eyebrow>
        <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-extrabold">A fé que seu filho aprende hoje pode fazer parte de toda a sua vida.</h2>
        <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed">
          Não espere que as dúvidas apareçam para começar a conversar sobre a fé católica. Ofereça uma formação que estimule seu filho a compreender aquilo em que acredita.
        </p>
        <p className="mx-auto mt-3 max-w-3xl leading-relaxed">
          Ajude-os a compreender aquilo em que acreditam, conhecer os ensinamentos da Igreja e construir uma formação católica que possa acompanhá-los durante toda a vida.
        </p>
        <Cta className="mt-8">Quero garantir minha coleção agora <span>→</span></Cta>
      </section>

      <footer className="bg-footer px-5 py-12 text-center text-primary-foreground/80">
        <p className="text-sm font-bold text-primary-foreground">Caminhos da Fé</p>
        <p className="mt-4 text-sm">© 2026 — Todos os direitos reservados.</p>
        <p className="mt-4 text-xs">Este site não é afiliado ao Facebook, Instagram ou Meta.</p>
        <p className="mx-auto mt-4 max-w-2xl text-xs leading-relaxed">O conteúdo apresentado possui caráter educativo e religioso. Cada família possui uma realidade própria e os resultados podem variar.</p>
      </footer>
    </div>
  );
}

function Plan({ name, sub, img, items, de, preco, parc, eco, cta, featured }: {
  name: string; sub: string; img: string; items: [string, boolean][]; de: string; preco: string; parc: string; eco: string; cta: string; featured?: boolean;
}) {
  return (
    <div className={`relative flex flex-col rounded-3xl bg-card p-8 shadow-card ${featured ? "border-2 border-brand" : ""}`}>
      {featured && <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-orange px-4 py-1 text-xs font-bold uppercase text-primary-foreground">★ Mais vendido</span>}
      {featured && <p className="mb-2 flex items-center gap-2 pt-2 text-xs font-bold uppercase tracking-wider text-muted-foreground"><Star className="h-4 w-4 fill-orange text-orange" /> Coleção completa + 3 bônus exclusivos</p>}
      <h3 className="text-2xl font-bold">{name}</h3>
      <p className="mt-1 text-muted-foreground">{sub}</p>
      <img src={img} alt={name} className="my-8 w-full" />
      <ul className="space-y-3">
        {items.map(([item, included]) => (
          <li key={item} className={`flex gap-3 ${included ? "" : "text-muted-foreground/50 line-through"}`}><Check muted={!included} />{item}</li>
        ))}
      </ul>
      <div className="mt-10 flex-1">
        <p className="text-sm text-muted-foreground">De <span className="line-through">{de}</span> por:</p>
        <p className="font-display text-5xl font-extrabold">{preco}</p>
        <p className="text-sm text-muted-foreground">{parc}</p>
        <span className="mt-2 inline-block rounded-full bg-cta/10 px-3 py-1 text-sm font-semibold">Você economiza {eco}</span>
      </div>
      <Cta className="mt-8 w-full">{cta} →</Cta>
    </div>
    </>
  );
}
