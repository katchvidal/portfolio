import { initScrollReveal } from "./scrollReveal.js";
import { typeWrite } from "./typeWrite.js";
import { hoverChangeDescription } from "./hoverChangeDescription.js";
import { menu } from "./menu.js";

menu();
initScrollReveal();
typeWrite(document.querySelector(".typewriter"));

hoverChangeDescription(
  ".html",
  "HTML (Lenguaje de Marcas de Hipertexto, del inglés HyperText Markup Language) es el componente más básico de la Web"
);
hoverChangeDescription(
  ".css",
  "CSS son hojas de estilo en cascada. CSS es un lenguaje que complementa y formatea HTML"
);
hoverChangeDescription(
  ".js",
  "JavaScript es un lenguaje de programación o de secuencias de comandos que te permite implementar funciones complejas en páginas web"
);
hoverChangeDescription(
  ".sass",
  "Sass Un preprocesador CSS es una herramienta que nos permite generar, de manera automática, hojas de estilo, añadiéndoles características que no tiene CSS"
);
hoverChangeDescription(
  ".react",
  "React es Una biblioteca de JavaScript para construir interfaces de usuario."
);
hoverChangeDescription(
  ".next",
  "NextJS, según su definición, es un pequeño framework que hace server-rendering de aplicaciones basadas en JavaScript."
);
hoverChangeDescription(
  ".styled",
  "Styled Components es una alternativa de mejorar CSS para diseñar componentes en React."
);
hoverChangeDescription(
  ".tailwind",
  "Tailwind es un framework CSS que da prioridad a la utilidad sobre el propio estilo"
);
hoverChangeDescription(
  ".typescript",
  "Typescript superset de javascript"
);
hoverChangeDescription(
  ".redux",
  "Redux superset de javascript"
);
hoverChangeDescription(
  ".angular",
  "Angular superset de javascript"
);
hoverChangeDescription(
  ".apollo",
  "Apollo-Graphql superset de javascript"
);
hoverChangeDescription(
  ".nodejs",
  "NodeJs superset de javascript"
);

