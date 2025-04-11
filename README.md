# 🛠️ Aiko Frontend

Desafio técnico Frontend de um sistema de monitoramento de equipamentos com visualização geográfica, estatísticas de produtividade e histórico de estados.

![Vite](https://img.shields.io/badge/Vite-6.x-blue?logo=vite)
![React](https://img.shields.io/badge/React-19.x-blue?logo=react)
![Tailwind](https://img.shields.io/badge/TailwindCSS-4.x-blue?logo=tailwindcss)
![Vitest](https://img.shields.io/badge/Tested%20with-Vitest-6E9ECF?logo=vitest)

## [Link para a aplicação rodando online](https://frontend-equipment-map.vercel.app/)

## Entregues

- [x] **Posições dos equipamentos**
- [x] **Estado atual do equipamento**
- [x] **Histórico de estados do equipamento**
- [x] **Filtros**
- [x] **Pesquisa**
- [x] **Percentual de Produtividade do equipamento**
- [x] **Diferenciar os equipamentos**
- [x] **Testes**
- [x] **Documentação**

## 📁 Estrutura de Pastas

```
├── public/                 # Arquivos públicos (favicon, etc)
├── src/
│   ├── assets/             # Imagens e ícones
│   ├── components/         # Componentes reutilizáveis
│   ├── context/            # React Contexts
│   ├── data/               # Dados mockados ou carregados estaticamente
│   ├── hooks/              # Hooks personalizados
│   ├── pages/              # Páginas da aplicação
│   ├── styles/             # Estilos globais e utilitários
│   ├── types/              # Tipagens TypeScript globais
│   ├── utils/              # Funções utilitárias
│   └── main.tsx            # Entry point
├── test/                   # Testes unitários
├── .eslintrc / .prettierrc # Configs de lint e formatação
├── vite.config.ts          # Configuração do Vite
├── vitest.config.ts        # Configuração do Vitest
```

---

## 🚀 Tecnologias Utilizadas

- **[React 19](https://react.dev/)**
- **[Vite 6](https://vitejs.dev/)**
- **[TypeScript](https://www.typescriptlang.org/)**
- **[Tailwind CSS 4](https://tailwindcss.com/)**
- **[React Leaflet](https://react-leaflet.js.org/)**
- **[Lucide Icons](https://lucide.dev/)**
- **[Vitest + Testing Library](https://vitest.dev/)** para testes unitários
- **ESLint + Prettier** para padronização de código

---

## 📦 Instalação

```bash
npm install
```

---

## 🧪 Testes

```bash
npm run test
```

- Framework: `Vitest`
- Biblioteca: `@testing-library/react`
- Mock de DOM: `jsdom`

---

## 🔄 Scripts

| Comando           | Descrição                            |
| ----------------- | ------------------------------------ |
| `npm run dev`     | Inicia o servidor de desenvolvimento |
| `npm run build`   | Compila o projeto para produção      |
| `npm run preview` | Visualiza build localmente           |
| `npm run lint`    | Formata código com Prettier          |
| `npm run test`    | Executa os testes unitários          |

---

## 📐 Padrões e Convenções

- Componentes em PascalCase.
- Hooks devem começar com `use`.
- Diretórios são organizados por função (não por tipo).
- Tipagens globais em `src/types`.

---

## 📌 Decisões de Arquitetura

- **React Context** é usado para compartilhar estado global entre componentes (ex: estados dos equipamentos).
- **Hooks personalizados** encapsulam lógica reutilizável como: cálculo de produtividade, status atual, etc.
- **React Leaflet** permite visualização geográfica dos equipamentos com interatividade.
- **Tailwind** agiliza a criação de interfaces responsivas e padronizadas.

---

## 📖 Como Contribuir

1. Fork o repositório
2. Crie uma branch: `feat/nome-da-sua-feature`
3. Commit suas alterações: `git commit -m "feat: minha feature"`
4. Push: `git push origin feat/nome-da-sua-feature`
5. Abra um PR 🚀
