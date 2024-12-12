

# Graph Multi-Agent System

This repository implements a **multi-agent graph-based system** using the following technologies:

- **NestJS**: The backbone of our application, providing modularity, scalability, and dependency injection.
- **Langchain**: A framework for building powerful applications powered by LLMs.
- **Langraph**: Enables workflow-based agent orchestration for complex multi-agent interactions.
- **TypeScript**: For robust and maintainable code.

## Key Features

- **Multi-Agent Workflow**: Manage `CartManager`, `Supervisor`, and `Researcher` agents via Langraph's state-based workflow.
- **Dynamic Tools**: Utilize Langchain tools like `TavilySearchResults` for enhanced functionality.
- **NestJS Architecture**: Implements controllers, modules, and services for clean, maintainable code.

## Highlighted Files and Folders

- `src/agents/`: Contains agent implementations using Langchain and Langraph.
- `src/tools/`: Defines dynamic tools for agents.
- `src/workflow/`: Langraph workflows for agent interaction.
- `src/state/`: Manages the shared state between agents.

## How to Run

1. Install dependencies:
   ```bash
   npm install

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ npm install -g mau
$ mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Deploy your application to AWS with the help of [NestJS Mau](https://mau.nestjs.com) in just a few clicks.
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
# Fullstack Test - Shopping Cart Backend

## Description
A backend application to manage a shopping cart and provide product recommendations using NestJS and OpenAI.

### Features:
1. Manage a shopping cart (add, remove, list products).
2. Search online using OpenAI for product suggestions.
3. Coordinate multiple agents via a single API endpoint.

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo-url.git
   cd your-repo-name

# NestJS Fullstack App

## Setup
1. Clone the repository.
2. Install dependencies:
   ```bash
   npm install

# LangGraph NestJS Application

## Description
Backend application for a shopping cart system with LangGraph multi-agent architecture.

## Installation
1. Clone the repository.
2. Install dependencies:
   ```bash
   npm install

# Fullstack Test - Shopping Cart Application

## Project Overview

This application allows users to manage a shopping cart through natural language queries. It utilizes three agents:

1. **Coordinator Agent**: Orchestrates the actions between other agents based on user queries.
2. **Cart Agent**: Manages cart operations like adding, removing, and listing products.
3. **Tavily Agent**: Simulates web searches to find product information.

## Technologies Used

- **NestJS**: A progressive Node.js framework for building efficient server-side applications.
- **Langgraph**: Facilitates multi-agent collaboration and communication.
- **Langchain**: Provides tools for building language model applications.
- **TypeScript**: For type safety and better code maintainability.

## Installation Instructions

1. **Clone the Repository**

   ```bash
   git clone <repository-url>
=======
# Graph-Multi-Agents
Graph multi-agent LangGraph

# **README - NestJS, LangGraph, TypeScript**
![demo.png](public/demo.png)
---

### **🚀 👉[Application Déployée](https://graph-multi-agent-2.onrender.com)👈**  
Aucune installation nécessaire, testez directement l'application en ligne ! 🎄

---
## **Résumé du Projet**

Ce projet met en avant l'intégration d'outils comme **LangGraph**, **LangChain**, **LangSmith** et **NestJS** pour construire une architecture backend orchestrée par des agents communicants. Il démontre une expertise dans la création de workflows sophistiqués tout en intégrant des pratiques modernes de développement en **TypeScript**.

Le système est centré sur la gestion d'un panier d'achat enrichi par des recherches intelligentes et utilise une orchestration multi-agent avancée. L'application, déployée sur **Render**, propose également une interface engageante avec des fonctionnalités interactives comme un "Easter egg" **Vue.js**.

👉 **[Graph Multi-Agent](https://graph-multi-agent-2.onrender.com)** 👈

---

## **Objectifs Techniques et Approche**

### **Intégration avec NestJS et TypeScript**

Le choix de **NestJS** comme framework backend était stratégique pour ses avantages suivants :
- **Modularité** : Simplifie l'intégration de services complexes, comme les agents définis dans **LangGraph**.
- **Support TypeScript** : Permet une typage strict, réduisant les erreurs et augmentant la maintenabilité.
- **Injecteurs de dépendances** : Utilisés pour brancher outils nécessaires dans les modules correspondants.

### **Principales Innovations**

#### **1. Conception Graphique avec LangGraph**
- Mise en place d'une orchestration des agents à l'aide d'un graphe défini via **LangGraph**.
- Gestion centralisée des états avec des annotations spécifiques, facilitant la communication entre agents.

#### **2. Utilisation de Technologies**
- **NestJS** pour un backend efficace, modulaire, maintenable et moderne. 
- **LangGraph** pour orchestrer les prompts et interactions complexes.
- **Tavily** pour les recherches dynamiques sur Internet.
- **OpenAI API** pour les réponses basées sur des modèles LLM.

---

## **Étapes de Développement**

### **1. Définir l’État**
- Une structure partagée est utilisée pour gérer les messages et états des agents. Cela est réalisé grâce à LangGraph et des annotations spécifiques.
- Exemple TypeScript :
  ```typescript
  const AgentState = Annotation.Root({
    messages: Annotation<BaseMessage[]>({
      reducer: (x, y) => x.concat(y),
      default: () => [],
    }),
    next: Annotation<string>({
      reducer: (x, y) => y ?? x ?? END,
      default: () => END,
    }),
  });
  ```

### **2. Création des Agents**
- **Agent Tavily** : Tavily API pour effectuer des recherches.
- **Cart Manager** : Gestion des produits utilisant des fichiers JSON comme base de données temporaire.
- **Agent Supervisor** : Orchestration des tâches entre les agents.


### **3. Construction du Graphe**
- Un graphe d'exécution des agents est défini via **LangGraph**, reliant les différents agents en fonction de leurs responsabilités.
- Exemple TypeScript :
  ```typescript
  const workflow = new StateGraph(AgentState)
    .addNode("researcher", tavilyNode)
    .addNode("cart_manager", cartManagerNode)
    .addNode("supervisor", supervisorChain)
    .addEdge(START, "supervisor")
    .addConditionalEdges("supervisor", (x) => x.next);
  ```

### **4. Orchestration des Flux avec LangSmith**
- Les interactions entre les agents sont supervisées via LangSmith.

---

## **Fonctionnalités Techniques**

1. **Endpoint Unique : `/invoke?query={user_query}`**
   - Fournit une interface utilisateur simple via une seule route API.

2. **Orchestration Multi-Agent** :
   - Les agents collaborent pour exécuter des tâches basées sur les requêtes des utilisateurs.

3. **Gestion d’État Partagée** :
   - Les messages et états des agents sont centralisés dans une structure commune.

4. **Logs et Visualisation** :
   - Les actions sont affichées en temps réel via une interface HTML/CSS.

---

## **Requêtes Exemples**

### **Ajouter un Produit :**
```bash
GET /invoke?query=Ajoute un sapin de Noël à mon panier
```
**Réponse :**  
```
Le produit "Sapin de Noël" a été ajouté à votre panier.
```

### **Rechercher un Produit et l’Ajouter :**
```bash
GET /invoke?query=Recherche un sapin de Noël chez Ikea et ajoute-le au panier
```
**Réponse :**  
```
Le produit "Sapin IKEA" a été trouvé et ajouté à votre panier.
```

### **Afficher le Panier :**
```bash
GET /invoke?query=Affiche mon panier
```
**Réponse :**  
```
Votre panier contient :
1. Sapin de Noël - [Lien IKEA](https://www.ikea.com)
```

---

## **Structure du Projet**

### **Répertoire Principal : `src/`**
- **`agents/`** : Contient les agents principaux.
  - `cartManager.agent.ts` : Gestion des produits du panier.
  - `tavily.agent.ts` : Recherche de produits via API Tavily.
  - `supervisor.agent.ts` : Coordination entre agents.
- **`state/`** : Gestion centralisée des états.
- **`workflow/`** : Définition du graphe LangGraph.

### **Dossier Public : `public/`**
- Contient l’interface utilisateur avec animations.
  
### **Root**
- **`cart.json`** : Stockage des produits ajoutés au panier.
En cas de problème avec **cart.json**, un stockage temporaire via **Redis** est prévu pour assurer la continuité.
---

## **Installation**

### **Prérequis :**
- **Node.js** (v18 ou supérieur)
- **npm** (v9 ou supérieur)
- Une clé API OpenAI
- Une clé API Tavily
- Une clé API LangChain (Opt.)

### **Étapes :**
1. **Cloner le dépôt** :
   ```bash
   git clone https://github.com/sergueigorbounov/Graph-Multi-Agent-Final.git
   cd Graph-Multi-Agent-Final
   ```

2. **Installer les dépendances** :
   ```bash
   npm install
   ```

3. **Configurer les variables d'environnement** :
   - Créez un fichier `.env` :
     ```env
     OPENAI_API_KEY=your_openai_api_key
     TAVILY_API_KEY=your_tavily_api_key
     ```

4. **Lancer l'application** :
   ```bash
   npm run build
   npm start
   ```

5. **Ou visitez directement :**  
   👉 **[Graph Multi-Agent](https://graph-multi-agent-2.onrender.com)** 👈

---

## **Améliorations Futures**

1. **Base de Données Robuste** :
   - Passage de JSON à PostgreSQL pour une gestion persistante.

2. **Interface Utilisateur Complète** :
   - Création d'un frontend graphique réactif Vue.js.

3. **Optimisation des Performances** :
   - Réduction des temps de réponse dans les workflows.

---

🎄 **Joyeux Noël et Bonne Année !**  
**Sergueï Gorbounov**.  
[**Lien GitHub**](https://github.com/sergueigorbounov/Graph-Multi-Agent-Final) | [**Lien Déployé**](https://graph-multi-agent-2.onrender.com) 🎅

