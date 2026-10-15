
import React from "react";

export default function Pagina() {
  return (
    <main>
      <img src="../public/imagem.png" alt="Foto de perfil" width="128" />

      <div>
        <b>Pedro Setti</b> | Desenvolvedor Web em formação
      </div>

      <div>
        <b>Perfil:</b>
        <p>
          Olá! Sou Pedro Setti e tenho interesse em desenvolvimento web
          e tecnologia. Gosto de criar sites e aplicações utilizando
          React e JavaScript, buscando sempre melhorar minhas habilidades
          e aprender novas tecnologias. Também tenho interesse em
          desenvolver projetos funcionais, com interfaces intuitivas
          e integração entre diferentes dispositivos.
        </p>
      </div>

      <div>
        <b>Experiências:</b>
        <p>
          Tenho experiência prática no desenvolvimento de projetos
          pessoais utilizando React e JavaScript. Já trabalhei na criação
          de interfaces, componentes reutilizáveis, páginas de produtos,
          carrinhos de compras e funcionalidades de sites. Também explorei
          a integração de aplicações com Firebase e a comunicação entre
          front-end e back-end.
        </p>
      </div>

      <div>
        <b>Competências:</b>
        <ul>
          <li>Lógica de programação</li>
          <li>Raciocínio computacional</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Componentes e Hooks do React</li>
          <li>Node.js</li>
          <li>Integração com Firebase</li>
          <li>Consumo de APIs e requisições HTTP</li>
          <li>Git e GitHub</li>
          <li>Resolução de problemas e depuração de código</li>
        </ul>
      </div>

      <div>
        <a href="mailto:pedro.miguel.setti.jesus@gmail.com">
          E-mail
        </a>

        {" | "}

        <a href="tel:+554798031701">
          Celular
        </a>

        {" | "}

        <a
          href="https://github.com/pg7top"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
      </div>
    </main>
  );
}
