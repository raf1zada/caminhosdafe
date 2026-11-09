import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { BookOpen, Tablet, Printer, Check, AlertTriangle, ChevronDown, ChevronLeft, ChevronRight, MessageCircle, MessageSquare, Heart, Users } from "lucide-react";
import heroKit from "@/Coleção Caminhos da Fé em Família.png";
import kitBasico from "@/Kit Caminhos da Fé em Família.png";
import depoimento1 from "@/depoimento1.png";
import depoimento2 from "@/depoimento2.png";
import depoimento3 from "@/depoimento3.png";
import licoes from "@/Caminhos da Fé_ Fé em Família.png";
import bonus1 from "@/Guia para Responder às Dúvidas da Fé.png";
import bonus2 from "@/Hábitos Familiares que Fortalecem a Fé.png";
import bonus3 from "@/Fé Católica na Adolescência.png";
import bonus4 from "@/Caça-Palavras da Fé Católica.png";
import bonus5 from "@/Planner Semanal de Fé em Família.png";
import bonus6 from "@/Desafio dos 7 Dias de Fé em Família.png";
import planoPremium from "@/bonus.jpg";
import retratoAlessandro from "@/Retrato profissional sorridente em ambiente acolhedor.png";

const checkout = {
  basico: "https://pay.cakto.com.br/hykqyc7_1288148",
  premium: "https://pay.cakto.com.br/omgucps",
};
const faqs = [
  ["O material está de acordo com a doutrina da Igreja Católica?", "Sim. O conteúdo foi elaborado por um catequista, com base nos ensinamentos da Igreja Católica."],
  ["Preciso saber teologia para usar?", "Não. O material guia você, passo a passo, a conversar com seu filho. Você não precisa ser especialista."],
  ["É necessário seguir uma ordem ou calendário?", "O ideal é seguir a ordem semanal proposta, mas o ritmo é flexível e você adapta à rotina da sua família."],
  ["Serve para filhos de idades diferentes?", "Sim. O material é o mesmo para todos, e você adapta a conversa à idade e ao ritmo de cada filho."],
  ["Isso substitui a catequese?", "Não. Ele complementa a catequese e a vida na Igreja, ajudando você a continuar a formação em casa."],
  ["Como vou receber o acesso?", "Logo após a confirmação do pagamento, você recebe tudo no seu WhatsApp e no seu e-mail."],
  ["O acesso é por quanto tempo?", "As condições e o prazo de acesso serão informados no momento da compra."],
  ["Posso acessar pelo celular?", "Sim. Funciona no celular, no tablet e no computador."],
  ["E se eu não gostar do conteúdo?", "Você tem 30 dias de garantia. Se não for para sua família, devolvemos 100% do valor."],
];
const bonuses = [
  [bonus1, "Guia para Responder às Dúvidas sobre a Fé", "Ajuda os pais a responder perguntas difíceis sobre Deus, Jesus, a Igreja e os ensinamentos católicos.", "R$ 47,00"],
  [bonus2, "Hábitos Familiares que Fortalecem a Fé", "Maneiras práticas de colocar oração, leitura bíblica e Missa na rotina da família.", "R$ 47,00"],
  [bonus3, "Fé Católica na Adolescência", "Um guia para acompanhar os filhos em uma fase de grandes mudanças e novos questionamentos.", "R$ 47,00"],
  [bonus4, "Caça-Palavras da Fé Católica", "Uma atividade divertida para aprender sobre a Bíblia, os santos e os ensinamentos da Igreja.", "R$ 10,00"],
  [bonus5, "Planner Minha Rotina de Fé", "Organize momentos de oração, leitura bíblica e atividades em família durante a semana.", "R$ 10,00"],
  [bonus6, "Desafio dos 7 Dias de Fé em Família", "Sete pequenas atividades diárias para fortalecer a fé e aproximar a família de Deus.", "R$ 10,00"],
] as const;

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Caminhos da Fé — Formação católica para seus filhos" },
    { name: "description", content: "48 semanas de formação católica em casa para crianças e adolescentes de 5 a 15 anos. Ensine seu filho a entender e explicar a fé." },
    { property: "og:title", content: "Caminhos da Fé — Formação católica para seus filhos" },
    { property: "og:description", content: "48 semanas de formação católica em casa para crianças e adolescentes de 5 a 15 anos. Ensine seu filho a entender e explicar a fé." },
    { property: "og:type", content: "website" },
    { property: "og:image", content: "/images/caminhos-da-fe-mockup.webp" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Index,
});

function Index() {
  const [faq, setFaq] = useState<number | null>(null);
  const [testimonial, setTestimonial] = useState(0);
  const [encounterPage, setEncounterPage] = useState(0);
  const [showSticky, setShowSticky] = useState(false);
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll("main > section"));
    if (!("IntersectionObserver" in window)) return;
    elements.forEach((element) => element.classList.add("fade-in-section"));
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    const onScroll = () => setShowSticky(window.scrollY > 420);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const goPlans = () => document.getElementById("planos")?.scrollIntoView({ behavior: "smooth" });
  const testimonials = [depoimento1, depoimento2, depoimento3];
  const dark = "bg-[#0B1F3A] text-white";
  const cream = "bg-[#FAF6EE] text-[#0B1F3A]";
  const cta = "inline-flex min-h-[60px] w-full items-center justify-center rounded-xl bg-[#16A34A] px-6 py-4 text-center text-base font-extrabold uppercase text-white shadow-lg transition hover:brightness-110 active:scale-[.99] animate-[pulse_4s_ease-in-out_infinite]";
  const section = "mx-auto w-full max-w-6xl px-5 py-16 md:px-8 md:py-24";
  return <main className="overflow-hidden bg-[#FAF6EE] font-sans text-lg text-[#0B1F3A]">
    <div className="sticky top-0 z-40 bg-[#0B1F3A] px-3 py-2.5 text-center text-[10px] font-bold uppercase tracking-[.12em] text-[#C9A24B] sm:text-xs">PAIS CATÓLICOS: LEIAM ISTO ANTES QUE SEU FILHO CRESÇA SEM SABER POR QUE ACREDITA</div>

    <section className="bg-white text-[#0B1F3A]">
      <div className={section + " text-center"}>
        <h1 className="mx-auto max-w-4xl font-display text-[34px] font-extrabold leading-[1.12] md:text-6xl">Um dia alguém vai perguntar ao seu filho: 'por que você acredita nisso?' Ele vai ter resposta?</h1>
        <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-[#0B1F3A]/80">Muitos pais só percebem que o filho não sabe explicar a própria fé quando ele já está questionando tudo. O Caminhos da Fé é uma formação de 48 semanas, feita para fazer em casa, que ensina crianças e adolescentes de 5 a 15 anos a entender, explicar e viver o que a Igreja ensina.</p>
        <button onClick={goPlans} className={cta + " mt-8 max-w-xl"}>QUERO PREPARAR MEU FILHO AGORA →</button>
        <p className="mt-3 flex items-center justify-center gap-2 text-sm text-white/65"><MessageCircle size={16}/>Acesso imediato no seu WhatsApp e e-mail</p>
        <p className="mt-7 text-sm font-semibold text-[#C9A24B]">15 livros digitais • 48 semanas de formação • Material imprimível</p>
        <img src={heroKit} alt="Mockup da coleção Caminhos da Fé" className="mx-auto mt-8 w-full max-w-4xl" fetchPriority="high"/>
      </div>
    </section>

    <section className={dark + " border-t border-white/10"}>
      <div className={section}>
        <h2 className="max-w-4xl font-display text-3xl font-bold leading-tight md:text-5xl">Você leva à Missa. Põe na catequese. Faz tudo o que pode. E mesmo assim...</h2>
        <div className="mt-9 space-y-5 text-lg leading-relaxed">
          {["Seu filho já perguntou 'por que eu preciso ir à Missa?' e você respondeu 'porque sim'?","Já ouviu 'como você sabe que Deus existe?' e travou?","Já olhou para ele rezando e pensou: será que ele entende o que está dizendo?","Na escola e na internet ele aprende a questionar tudo, menos a própria fé?"].map(t=><p key={t} className="flex gap-3"><AlertTriangle className="mt-1 shrink-0 text-[#B3261E]"/>{t}</p>)}
        </div>
        <p className="mt-9 max-w-4xl font-display text-2xl font-bold leading-snug text-[#C9A24B] md:text-3xl">O problema não é falta de amor. Nem falta de esforço. É que ninguém ensinou você e seu filho a conversarem sobre a fé com razões.</p>
      </div>
    </section>

    <section className={cream}><div className={section}>
      <h2 className="font-display text-3xl font-bold md:text-5xl">Fé que ninguém explicou é fé que a primeira dúvida derruba.</h2>
      <div className="mt-7 max-w-4xl space-y-4 text-lg leading-relaxed">
        <p>Entre a infância e a adolescência, seu filho vai decidir em quem confiar e no que acreditar.</p><p>Se ele não encontrar razões para a fé dentro de casa, vai encontrar razões para a dúvida fora dela.</p><p>Na escola. Na internet. Nos amigos. Todo mundo vai explicar a ele em que acreditar. A pergunta é: quem vai explicar a fé?</p><p>Cada semana que passa sem essa conversa é uma semana perdida.</p>
      </div><button onClick={goPlans} className={cta + " mt-8 max-w-xl"}>NÃO QUERO ESPERAR →</button><p className="mt-3 text-sm text-gray-500">Acesso imediato no seu WhatsApp e e-mail</p>
    </div></section>

    <section className={dark}><div className={section + " mx-auto max-w-5xl"}>
      <div className="grid items-center gap-8 md:grid-cols-[minmax(220px,0.8fr)_minmax(0,1.5fr)] md:gap-12">
      <img src={retratoAlessandro} alt="Alessandro Freitas, catequista e criador do Caminhos da Fé" className="mx-auto w-full max-w-xs rounded-2xl object-cover shadow-2xl md:max-w-sm" loading="lazy"/>
      <div><h2 className="font-display text-3xl font-bold md:text-4xl">Por que eu, catequista, criei este material</h2>
      <div className="mt-6 space-y-4 text-base leading-relaxed text-white/85">
        <p>Meu nome é Alessandro Freitas e sou catequista.</p><p>Eu amo a catequese. Mas aprendi uma coisa que me incomodou: ensinar uma criança a repetir não é o mesmo que ensinar uma criança a compreender.</p><p>Orações decoradas ajudam. Mas não bastam quando chegam as perguntas difíceis.</p><p>Foi por isso que criei o Caminhos da Fé: um caminho organizado, semana a semana, para o pai e a mãe conversarem com seus filhos sobre o que a Igreja ensina e por que ensina.</p><p>Eu não prometo que seu filho nunca vai duvidar. Dúvida faz parte de crescer. O que eu quero te entregar é a ferramenta para que, quando a dúvida chegar, ele encontre em casa uma resposta e uma conversa, e não o silêncio.</p><p>Fiz este material para que nenhum pai precise dizer: 'eu não soube o que responder'.</p>
      </div><p className="mt-6 font-display text-xl italic text-[#C9A24B]">Alessandro Freitas — Catequista</p></div></div>
    </div></section>

    <section className={cream}><div className={section + " text-center"}>
      <h2 className="font-display text-3xl font-bold md:text-5xl">Conheça o Caminhos da Fé</h2>
      <p className="mx-auto mt-4 max-w-3xl text-lg">Uma formação católica completa, em casa, para crianças e adolescentes de 5 a 15 anos.</p>
      <p className="mx-auto mt-5 max-w-3xl leading-relaxed">Não é mais uma coleção de atividades para ocupar o tempo. É um método para seu filho conhecer, compreender e viver a fé católica, com perguntas, reflexão e conversa em família.</p>
      <img src={heroKit} alt="Mockup da coleção Caminhos da Fé" className="mx-auto mt-8 w-full max-w-4xl"/>
      <div className="mt-8 grid gap-4 text-left md:grid-cols-3">
        {[[BookOpen,"15 livros digitais","Uma jornada organizada de 48 semanas."],[Tablet,"Pelo celular, tablet ou computador","Acesse onde quiser."],[Printer,"Imprimível","Imprima os materiais se sua família preferir."]].map(([Icon,title,desc]:any)=><article className="rounded-2xl border border-[#C9A24B]/30 bg-white p-6"><Icon className="h-8 w-8 text-[#C9A24B]"/><h3 className="mt-4 font-bold">{title}</h3><p className="mt-2">{desc}</p></article>)}
      </div><button onClick={goPlans} className={cta + " mt-8 max-w-xl"}>QUERO COMEÇAR AGORA →</button><p className="mt-3 text-sm text-gray-500">Acesso imediato no seu WhatsApp e e-mail</p>
    </div></section>

    <section className={dark}><div className={section}>
      <h2 className="text-center font-display text-3xl font-bold md:text-5xl">Como o Caminhos da Fé transforma a fé do seu filho</h2><p className="mt-3 text-center text-white/75">Quatro passos. Uma semana de cada vez.</p>
      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {[["01","Conhecimento da fé","Seu filho aprende os fundamentos da fé católica com explicações simples e organizadas."],["02","Reflexão e diálogo","Perguntas e atividades fazem a criança pensar, participar e falar sobre o que acredita."],["03","Compreensão da doutrina","Ele entende as razões por trás do que a Igreja ensina, em vez de só repetir."],["04","Fé aplicada à vida","Os ensinamentos viram atitudes, escolhas e relações do dia a dia."]].map(([n,t,d])=><article className="rounded-2xl border border-white/10 bg-white/5 p-6"><p className="font-display text-3xl font-bold text-[#C9A24B]">{n}</p><h3 className="mt-3 text-xl font-bold">{t}</h3><p className="mt-2 leading-relaxed text-white/75">{d}</p></article>)}
      </div><p className="mt-8 rounded-xl bg-[#C9A24B] p-6 font-semibold leading-relaxed text-[#0B1F3A]">Perguntas como 'por que ir à Missa?', 'como sei que Deus existe?' e 'por que confessar a um padre?' deix    <section className={cream}>
      <div className={section + " text-center"}>
        <h2 className="font-display text-3xl font-bold md:text-5xl">Veja como são os encontros</h2>
        <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-[#0B1F3A]/75 md:text-lg">Uma jornada de fé, aprendizado e união para viver em família, uma semana de cada vez.</p>

        <div className="mx-auto mt-8 max-w-5xl overflow-hidden rounded-2xl shadow-lg">
          <img src="https://ixymyhazbhztpjnlxmbd.supabase.co/storage/v1/object/images/generated/familia-lezendo-biblia-junto-347.webp" alt="Família reunida à mesa, lendo a Bíblia e aprendendo em conjunto" className="h-56 w-full object-cover sm:h-72 md:h-[390px]" loading="lazy"/>
        </div>

        <div className="mt-7 grid gap-4 text-left md:grid-cols-3">
          <article className="rounded-2xl border border-[#0B1F3A]/10 bg-white p-6 shadow-sm">
            <BookOpen className="h-9 w-9 text-[#C9A24B]" strokeWidth={1.7}/>
            <h3 className="mt-4 text-xl font-bold text-[#0B1F3A]">Aprenda</h3>
            <p className="mt-2 text-base leading-relaxed text-[#0B1F3A]/75">Conheça os ensinamentos da Igreja Católica de maneira clara, didática e apropriada para cada idade.</p>
          </article>
          <article className="rounded-2xl border border-[#0B1F3A]/10 bg-white p-6 shadow-sm">
            <MessageSquare className="h-9 w-9 text-[#C9A24B]" strokeWidth={1.7}/>
            <h3 className="mt-4 text-xl font-bold text-[#0B1F3A]">Reflita</h3>
            <p className="mt-2 text-base leading-relaxed text-[#0B1F3A]/75">Responda perguntas, compreenda os motivos da sua fé e desenvolva suas próprias convicções.</p>
          </article>
          <article className="rounded-2xl border border-[#0B1F3A]/10 bg-white p-6 shadow-sm">
            <Heart className="h-9 w-9 text-[#C9A24B]" strokeWidth={1.7}/>
            <h3 className="mt-4 text-xl font-bold text-[#0B1F3A]">Viva</h3>
            <p className="mt-2 text-base leading-relaxed text-[#0B1F3A]/75">Transforme o aprendizado em atitudes, orações e momentos especiais de fé em família.</p>
          </article>
        </div>

        <div className="mt-14">
          <h3 className="font-display text-2xl font-bold md:text-4xl">Conheça um pouco do que seu filho vai aprender</h3>
          <p className="mx-auto mt-3 max-w-3xl text-base text-[#0B1F3A]/70 md:text-lg">Cada encontro foi pensado para ensinar, despertar a curiosidade e fortalecer a fé.</p>
          <div className="mt-7 flex items-center justify-between gap-3">
            <button type="button" aria-label="Encontros anteriores" onClick={() => setEncounterPage((v) => (v + 5) % 6)} className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-[#0B1F3A]/20 bg-white text-[#0B1F3A] shadow-sm transition hover:bg-[#0B1F3A] hover:text-white"><ChevronLeft/></button>
            <div className="grid min-w-0 flex-1 gap-4 text-left md:grid-cols-3">
              {[
                [Cross,"Deus nos ama","Descubra o amor de Deus e como Ele está presente em nossa vida."],
                [BookOpen,"A Bíblia","Conheça a Palavra de Deus e sua importância para a fé."],
                [Church,"A Eucaristia","Entenda por que a Eucaristia é o centro da vida cristã."],
                [Users,"A família","Veja como viver o amor, o respeito e a fé dentro de casa."],
                [HandHeart,"A oração","Aprenda a conversar com Deus em todos os momentos."],
                [Sparkles,"Os mandamentos","Conheça orientações que ajudam a escolher o bem e viver no amor."]
              ].slice(encounterPage, encounterPage + 3).concat(encounterPage > 3 ? [
                [Cross,"Deus nos ama","Descubra o amor de Deus e como Ele está presente em nossa vida."],
                [BookOpen,"A Bíblia","Conheça a Palavra de Deus e sua importância para a fé."],
                [Church,"A Eucaristia","Entenda por que a Eucaristia é o centro da vida cristã."]
              ].slice(0, encounterPage + 3 - 6) : []).map(([Icon,title,desc]:any,i:number)=><article key={String(title)} className="min-w-0 overflow-hidden rounded-2xl border border-[#0B1F3A]/10 bg-white shadow-sm">
                <div className="flex h-32 items-center justify-center bg-[#0B1F3A]/[0.04] sm:h-40"><Icon className="h-14 w-14 text-[#C9A24B]" strokeWidth={1.35}/></div>
                <div className="p-4"><h4 className="font-display text-lg font-bold text-[#0B1F3A]">{title}</h4><p className="mt-2 text-sm leading-relaxed text-[#0B1F3A]/70">{desc}</p></div>
              </article>)}
            </div>
            <button type="button" aria-label="Próximos encontros" onClick={() => setEncounterPage((v) => (v + 1) % 6)} className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-[#0B1F3A]/20 bg-white text-[#0B1F3A] shadow-sm transition hover:bg-[#0B1F3A] hover:text-white"><ChevronRight/></button>
          </div>
          <div className="mt-5 flex justify-center gap-2">{[0,1,2,3,4,5].map((n)=><button key={n} type="button" aria-label={`Mostrar grupo ${n+1}`} onClick={()=>setEncounterPage(n)} className={`h-2.5 rounded-full transition-all ${encounterPage===n?"w-7 bg-[#C9A24B]":"w-2.5 bg-[#0B1F3A]/20"}`}/>)}</div>
        </div>

        <div className="mt-12 rounded-2xl bg-[#0B1F3A] px-6 py-8 text-white shadow-md md:flex md:items-center md:justify-center md:gap-8 md:px-10">
          <span className="font-display text-7xl font-bold leading-none text-[#C9A24B] md:text-8xl">48</span>
          <div className="mt-3 md:mt-0 md:border-l md:border-[#C9A24B]/50 md:pl-8 md:text-left">
            <h3 className="font-display text-2xl font-bold md:text-3xl">48 semanas de formação católica</h3>
            <p className="mx-auto mt-2 max-w-2xl text-base leading-relaxed text-white/80 md:mx-0 md:text-lg">Uma semana de cada vez, ajudando seus filhos a conhecer, compreender e fortalecer sua fé.</p>
          </div>
        </div>
        <p className="mx-auto mt-10 max-w-4xl font-display text-2xl font-bold leading-snug md:text-3xl">Mais do que ensinar orações, queremos ajudar seu filho a compreender por que acredita.</p>
        <button onClick={goPlans} className={cta + " mt-8 max-w-xl"}>QUERO ESSE MATERIAL PARA A MINHA FAMÍLIA →</button>
        <p className="mt-3 text-sm text-gray-500">Acesso imediato no seu WhatsApp e e-mail</p>
      </div>
    </section>mediato no seu WhatsApp e e-mail</p>
    </div></section>

    <section className={dark}><div className={section}>
      <h2 className="font-display text-center text-3xl font-bold md:text-5xl">Um só material, para toda a sua família</h2>
      <p className="mx-auto mt-5 max-w-4xl text-center text-lg leading-relaxed text-white/80">O Caminhos da Fé acompanha crianças e adolescentes de 5 a 15 anos. Os encontros são os mesmos para todos, e você adapta a conversa à idade e ao ritmo de cada filho. Se você tem filhos de idades diferentes, pode fazer o mesmo encontro com todos ao mesmo tempo.</p>
      <div className="mt-8 grid gap-4 md:grid-cols-3">{[["Para começar cedo","Comece a formação de fé desde a infância, em linguagem simples."],["Para crescer junto","O material acompanha seu filho até a adolescência."],["Para fazer em família","Uma semana de cada vez, com perguntas e atividades que envolvem pais e filhos."]].map(([t,d])=><article className="rounded-xl bg-white/5 p-6"><h3 className="font-bold text-[#C9A24B]">{t}</h3><p className="mt-2 text-white/80">{d}</p></article>)}</div>
    </div></section>

    <section className={cream}><div className={section}>
      <h2 className="font-display text-3xl font-bold md:text-5xl">Este material é para você que quer:</h2>
      <ul className="mt-8 grid gap-4 md:grid-cols-2">{["Construir uma base católica sólida desde a infância","Ensinar seus filhos a compreender os fundamentos da fé","Prepará-los para responder quando a fé for questionada","Transformar ensinamentos decorados em convicções verdadeiras","Fortalecer a vivência cristã dentro de casa","Acompanhar a formação religiosa dos filhos, da infância à adolescência"].map(t=><li className="flex gap-3 rounded-xl bg-white p-5"><Check className="shrink-0 text-[#C9A24B]"/>{t}</li>)}</ul>
    </div></section>

    <section className={dark}><div className={section}>
      <h2 className="text-center font-display text-3xl font-bold md:text-5xl">Tudo o que você leva hoje</h2>
      <article className="mt-8 rounded-2xl bg-[#C9A24B] p-7 text-[#0B1F3A]"><h3 className="text-2xl font-bold">Coleção Caminhos da Fé — 15 livros digitais, 48 semanas de formação católica</h3></article>
      <h3 className="mt-10 text-center text-2xl font-bold">E mais 6 bônus no Plano Premium:</h3>
      <div className="mt-7 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{bonuses.map(([img,title,desc,value],i)=><article className="rounded-2xl bg-white p-5 text-[#0B1F3A]"><img src={img} alt={title} loading="lazy" className="h-52 w-full object-contain"/><p className="mt-4 text-xs font-bold uppercase tracking-widest text-[#C9A24B]">Bônus {i+1}</p><h4 className="mt-2 text-lg font-bold">{title}</h4><p className="mt-2 text-sm leading-relaxed">{desc}</p><p className="mt-4 font-bold text-[#16A34A]">Valor {value}</p></article>)}</div>
      <p className="mt-8 text-center text-lg font-semibold text-[#C9A24B]">Só os 6 bônus somam R$ 171,00 em valor individual. No Plano Premium, você leva tudo por R$ 22,90.</p>
    </div></section>

    <section id="planos" className={cream + " scroll-mt-16"}><div className={section}>
      <h2 className="text-center font-display text-3xl font-bold md:text-5xl">Escolha seu plano e comece hoje</h2><p className="mt-3 text-center">Preço promocional atual. Pagamento único, sem mensalidade.</p>
      <div className="mt-10 grid items-stretch gap-6 md:grid-cols-2">
        <Plan name="Plano Premium" line="Coleção completa + 6 bônus" img={planoPremium} price="R$ 22,90" href={checkout.premium} featured items={["Coleção 'Caminhos da Fé' — 15 livros, 48 semanas","Bônus 1: Guia para Responder às Dúvidas sobre a Fé","Bônus 2: Hábitos Familiares que Fortalecem a Fé","Bônus 3: Fé Católica na Adolescência","Bônus 4: Caça-Palavras da Fé Católica","Bônus 5: Planner Minha Rotina de Fé","Bônus 6: Desafio dos 7 Dias de Fé em Família"]} />
        <Plan name="Plano Básico" line="Coleção completa" img={kitBasico} price="R$ 10,00" href={checkout.basico} items={["Coleção 'Caminhos da Fé' — 15 livros, 48 semanas","Acesso pelo celular, tablet ou computador","Material imprimível"]}/>
      </div>
    </div></section>

    <section className={dark}><div className={section + " text-center"}>
      <p className="inline-block rounded-full border border-[#C9A24B] px-6 py-3 font-bold tracking-widest text-[#C9A24B]">30 DIAS DE GARANTIA</p>
      <h2 className="mt-5 font-display text-3xl font-bold md:text-5xl">Risco zero para você</h2>
      <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-white/80">Você tem 30 dias para conhecer o material com sua família. Se por qualquer motivo perceber que ele não é para vocês, basta pedir e devolvemos 100% do valor. Sem burocracia.</p>
      <button onClick={goPlans} className={cta + " mt-8 max-w-xl"}>QUERO COMEÇAR SEM RISCO →</button><p className="mt-3 text-sm text-white/70">Acesso imediato no seu WhatsApp e e-mail</p>
    </div></section>

    {testimonials.length > 0 && <section className={cream}><div className={section + " text-center"}>
      <h2 className="font-display text-3xl font-bold md:text-5xl">O que as famílias estão compartilhando</h2>
      <div className="mx-auto mt-8 flex max-w-3xl items-center gap-3"><button aria-label="Depoimento anterior" onClick={()=>setTestimonial((testimonial+2)%3)}><ChevronLeft/></button><img src={testimonials[testimonial]} alt={"Depoimento real de família "+(testimonial+1)} className="max-h-[680px] min-w-0 flex-1 rounded-xl object-contain" loading="lazy"/><button aria-label="Próximo depoimento" onClick={()=>setTestimonial((testimonial+1)%3)}><ChevronRight/></button></div>
    </div></section>}

    <section className={cream}><div className={section}>
      <h2 className="text-center font-display text-3xl font-bold md:text-5xl">Perguntas frequentes</h2>
      <div className="mx-auto mt-8 max-w-3xl space-y-3">{faqs.map(([q,a],i)=><article className="rounded-xl bg-white"><button className="flex w-full items-center justify-between gap-4 p-5 text-left font-bold" onClick={()=>setFaq(faq===i?null:i)}>{q}<ChevronDown className={"shrink-0 transition "+(faq===i?"rotate-180":"")}/></button>{faq===i&&<p className="px-5 pb-5 leading-relaxed">{a}</p>}</article>)}</div>
    </div></section>

    <section className={dark}><div className={section + " text-center"}>
      <h2 className="mx-auto max-w-4xl font-display text-3xl font-bold leading-tight md:text-5xl">A fé do seu filho está sendo formada agora. Com razões ou sem elas.</h2>
      <div className="mx-auto mt-6 max-w-3xl space-y-3 text-lg leading-relaxed text-white/80"><p>Você pode continuar esperando que a catequese dê conta sozinha.</p><p>Ou pode começar hoje, em casa, uma conversa sobre a fé que vai acompanhar seu filho pela vida toda.</p><p>Quando ele fizer a pergunta difícil, quem vai responder?</p></div>
      <button onClick={goPlans} className={cta + " mt-8 max-w-2xl"}>EU VOU RESPONDER. QUERO COMEÇAR HOJE →</button>
      <p className="mt-3 text-sm text-white/70">Acesso imediato no seu WhatsApp e e-mail • Garantia de 30 dias</p>
    </div></section>
    <footer className="bg-[#07172B] px-5 py-10 text-center text-sm text-white/70"><p className="font-display text-xl font-bold text-white">Caminhos da Fé</p><p className="mt-4">Política de Privacidade • Termos de Uso • Contato</p><p className="mt-3">Alessandro Freitas — Catequista</p><p className="mx-auto mt-4 max-w-3xl text-xs leading-relaxed">Este site não é afiliado ao Facebook, Instagram ou Meta. O conteúdo apresentado possui caráter educativo e religioso. Cada família possui uma realidade própria e os resultados podem variar.</p></footer>
    {showSticky && <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-[#0B1F3A] p-3 shadow-2xl md:hidden"><button onClick={goPlans} className={cta}>QUERO O PLANO PREMIUM — R$ 22,90</button></div>}
  </main>;
}

function Plan({name,line,img,price,href,items,featured=false}:{name:string;line:string;img:string;price:string;href:string;items:string[];featured?:boolean}) {
  const [url,setUrl] = useState(href);
  useEffect(()=>{setUrl(href+window.location.search)},[href]);
  return <article className={"relative flex h-full flex-col rounded-3xl bg-white p-6 shadow-xl md:p-8 "+(featured?"border-2 border-[#C9A24B]":"border border-[#0B1F3A]/10")}>
    {featured&&<span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#C9A24B] px-4 py-1 text-xs font-extrabold text-[#0B1F3A]">MAIS ESCOLHIDO</span>}
    <h3 className="mt-2 font-display text-2xl font-bold">{name}</h3><p className="mt-1">{line}</p><img src={img} alt={"Mockup "+name} className="my-6 h-56 w-full object-contain" loading="lazy"/>
    <ul className="flex-1 space-y-3">{items.map(t=><li key={t} className="flex gap-2 text-sm leading-relaxed"><Check className="h-5 w-5 shrink-0 text-[#16A34A]"/>{t}</li>)}</ul>
    <p className="mt-8 font-display text-5xl font-extrabold">{price}</p>
    {featured&&<p className="mt-2 text-sm">Menos que um lanche em família, para a formação de fé do seu filho por 48 semanas.</p>}
    <a href={url} target="_blank" rel="noopener noreferrer" className={"mt-6 inline-flex min-h-[60px] w-full items-center justify-center rounded-xl px-5 py-4 text-center font-extrabold uppercase "+(featured?"bg-[#16A34A] text-white shadow-lg":"border-2 border-[#16A34A] text-[#16A34A]")}>{featured?"QUERO O PLANO PREMIUM →":"QUERO O PLANO BÁSICO →"}</a>
    <p className="mt-3 flex items-center justify-center gap-2 text-center text-xs text-gray-500"><MessageCircle size={14}/>Acesso imediato no seu WhatsApp e e-mail</p>
  </article>;
}
