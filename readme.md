# Drag-And-Drop Kanban with SortableJS

### Optimizing Micro Frontends with Stencil

- derived from the pattern of **microservices**
  - Microservices are separated aspects of an application’s backend that provide a singular service function.
  - simplifies a monolithic backend by slicing it into its core parts
- separate verticals, where each micro frontend encompasses a feature or page of the larger application
- a mini application itself: Each micro frontend consists of a UI as well as all of the business logic and data fetching necessary for it to operate on its own
- easier to manage at scale
  - can be dropped into any part of the application without needing to know the overall context

### Drag-And-Drop Kanban with SortableJS is a perfect candidate

- In a large-scale environment, it is not uncommon for our application to use several different frameworks.
  - For our architecture to be highly composable, our micro frontends need to support multiple frameworks.
- web components: modular and reusable
  - a set of web platform APIs
  - encapsulated HTML tags
  - framework agnostic implementation
    - because it’s based on web standards, package it to be used with any frontend framework
  - vanilla web components are cumbersome, hence the **Stencil web component compiler**
  - publish and version our web component micro frontend to a CDN
    - include a script tag that links to that CDN
- drastically reduce the amount of duplicate development work needed

## Getting Started

To start building a new web component using Stencil, clone this repo to a new directory:

```bash
git clone https://github.com/Elijbet/Drag-And-Drop-Kanban-with-SortableJS.git
git remote rm origin
```

and run:

```bash
npm install
npm start
```

To build the component for production, run:

```bash
npm run build
```

To run the unit tests for the components, run:

```bash
npm test
```
