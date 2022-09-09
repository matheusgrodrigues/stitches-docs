# stitches-docs

Leitura da documentação da biblioteca Stitches CSS-in-JS with near-zero runtime

- [Introdução](#introducao)
- [Instalação](#instalacao)
  - [Importe-o](#importar)
  - [Use-o](#use-o)
  - [Renderizar](#renderizar)

## Introducao

- Stitches é uma biblioteca de estilo leve e de alto desempenho com foco na arquitetura de componentes e na experiência do desenvolvedor.
- Stitches evita interpolações de prop desnecessárias em tempo de execução, tornando-o mais eficiente do que outras bibliotecas de estilo.
- Repleto de recursos úteis como temas, tokens inteligentes, css suport, as prop, utils e uma API totalmente tipada.
- Possui uma API totalmente tipada, para minimizar a curva de aprendizado e fornecer a melhor experiência possível ao desenvolvedor.
- Stitches funciona com qualquer framework incluindo (react, vue, svelte) até mesmo HTML vanilla.
- Suporte a renderização do lado do servidor entre navegadores, mesmo para estilos e variantes responsivos.
- O Stiches apenas injeta os estilos que são realmente usados, para que seus usuários não baixem CSS desnecessário.

## Instalacao

- Instale Stitches do seu terminal via npm ou yarn
- > npm install @stitches/react
- > yarn add @stitches/react

### Importar

- Importe `styled` a partir de `@stitches/react`.
- > import {styled} from "@stitches/react;

### Use-o

- Use o `styled` para criar um componente e adicionar estilos a ele.

`import { styled } from '@stitches/react';`

`const Button = styled('button', { backgroundColor: 'gainsboro', borderRadius: '9999px', fontSize: '13px', padding: '10px 15px', '&:hover': { backgroundColor: 'lightgray', }, });`

### Renderizar

- Por fim, renderize o component

`() => <Button>Button</Button>;`
