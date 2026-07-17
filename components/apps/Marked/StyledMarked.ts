import styled from "styled-components";
import Message from "styles/common/Message";
import ScrollBars from "styles/common/ScrollBars";
import { DEFAULT_SCROLLBAR_WIDTH } from "utils/constants";

const portfolioArticleStyles = `
    &.portfolio {
      --pf-ink: #202124;
      --pf-muted: #5f6368;
      --pf-faint: #8a8d91;
      --pf-rule: #dedede;
      --pf-paper: #fafafa;
      --pf-link: #245b8a;
      --font-sans: "Segoe UI", system-ui, sans-serif;

      background: var(--pf-paper);
      color: var(--pf-ink);
      font-family: var(--font-sans);
      font-size: 14px;
      line-height: 1.65;
      padding: 0;

      header.portfolio-masthead {
        display: block;
      }

      .portfolio-page {
        margin: 0 auto;
        max-width: 820px;
        padding: 24px 28px 48px;
      }

      .portfolio-content,
      .portfolio-masthead {
        width: 100%;
      }

      .portfolio-index {
        border-bottom: 1px solid var(--pf-rule);
        display: flex;
        flex-wrap: wrap;
        font-size: 12px;
        gap: 5px 12px;
        line-height: 1.5;
        margin-bottom: 32px;
        padding-bottom: 12px;
      }

      .portfolio-index-sep {
        color: var(--pf-faint);
        display: none;
      }

      .portfolio-index-link {
        color: var(--pf-muted);
        font-weight: 400;
        text-decoration: none;

        &:hover {
          color: var(--pf-ink);
          text-decoration: underline;
        }

        &.is-here {
          color: var(--pf-ink);
          font-weight: 500;
          border-bottom: 2px solid var(--pf-ink);
          text-decoration: none;
        }
      }

      .portfolio-masthead {
        margin-bottom: 38px;
        padding-bottom: 0;

        h1 {
          border-bottom: none;
          font-family: var(--font-sans);
          font-size: 2rem;
          font-weight: 650;
          letter-spacing: -0.035em;
          line-height: 1.2;
          margin: 0 0 0.45em;
          padding: 0;

          img {
            display: inline-block;
            height: 1.08em;
            margin-right: 0.28em;
            object-fit: contain;
            vertical-align: -0.12em;
            width: 1.08em;
          }
        }

        > p:first-of-type {
          color: var(--pf-muted);
          font-size: 12px;
          letter-spacing: 0.02em;
          margin: 0 0 0.75em;
        }

        blockquote {
          background: transparent;
          border-left: 3px solid var(--pf-rule);
          border-radius: 0;
          box-sizing: border-box;
          color: var(--pf-muted);
          font-size: 13.5px;
          font-style: normal;
          margin: 0.75em 0 0;
          padding: 10px 14px;
          width: 100%;

          p {
            margin: 0;
            max-width: none;
          }
        }

        .portfolio-facts {
          margin-top: 14px;
        }
      }

      .portfolio-content {
        > hr {
          display: none;
        }
      }

      .portfolio-block {
        margin-bottom: 0;
        padding: 0;

        & + .portfolio-block {
          border-top: 1px solid var(--pf-rule);
          margin-top: 34px;
          padding-top: 28px;
        }

        h2 {
          font-family: var(--font-sans);
          font-size: 1.2rem;
          font-weight: 650;
          letter-spacing: -0.015em;
          margin: 0 0 16px;
          padding: 0;
          text-transform: none;

          &::before {
            content: none;
          }
        }
      }

      h1 {
        border-bottom: none;
        font-family: var(--font-sans);
        font-size: 1.4rem;
        margin: 0 0 0.5em;
        padding: 0;
      }

      h2 {
        border-bottom: none;
        font-size: 1.2rem;
        font-weight: 650;
        letter-spacing: -0.015em;
        margin: 1.5em 0 0.6em;
        padding: 0;
        text-transform: none;
      }

      h3 {
        font-family: var(--font-sans);
        font-size: 1rem;
        font-weight: 650;
        margin: 1.35em 0 0.35em;
      }

      p {
        margin: 0.5em 0;
        max-width: none;
      }

      ul,
      ol {
        max-width: none;
      }

      strong {
        font-weight: 600;
      }

      a {
        color: var(--pf-link);
        font-weight: 500;
        text-decoration: underline;
        text-decoration-color: rgb(42 79 110 / 30%);
        text-underline-offset: 2px;

        &:hover {
          text-decoration-color: currentcolor;
        }
      }

      blockquote {
        background: transparent;
        border-left: 3px solid var(--pf-rule);
        border-radius: 0;
        box-sizing: border-box;
        color: var(--pf-muted);
        font-size: 13.5px;
        font-style: normal;
        margin: 0.75em 0;
        padding: 10px 14px;
        width: 100%;

        p {
          margin: 0;
          max-width: none;
        }
      }

      hr {
        border: none;
        border-top: 1px solid var(--pf-rule);
        height: 0;
        margin: 18px 0;
      }

      table {
        border: none;
        border-collapse: collapse;
        font-size: 12.5px;
        margin: 0.4em 0 0.6em;
        width: 100%;

        th {
          background: transparent;
          border: none;
          border-bottom: 1px solid var(--pf-rule);
          color: var(--pf-muted);
          font-size: 9.5px;
          font-weight: 500;
          letter-spacing: 0.08em;
          padding: 0 10px 6px 0;
          text-align: left;
          text-transform: uppercase;
          vertical-align: bottom;
        }

        td {
          border: none;
          color: var(--pf-ink);
          padding: 7px 10px 7px 0;
          vertical-align: top;
        }
      }

      .portfolio-facts {
        font-size: 12px;
        margin-top: 2px;

        thead {
          display: none;
        }

        tbody {
          display: flex;
          flex-direction: column;
          gap: 5px;
        }

        tr {
          align-items: baseline;
          display: grid;
          gap: 0 12px;
          grid-template-columns: 7.75rem 1fr;
          padding: 2px 0;
        }

        td {
          border: none;
          padding: 0;
        }

        td:first-child {
          color: var(--pf-muted);
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.06em;
          line-height: 1.4;
          padding-right: 4px;
          text-align: right;
          text-transform: uppercase;

          strong {
            color: inherit;
            font-weight: 500;
          }
        }

        td:last-child {
          font-size: 12.5px;
          line-height: 1.45;
        }
      }

      .portfolio-pillars {
        thead {
          display: none;
        }

        tbody {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        tr {
          display: block;
          padding: 0;
        }

        td {
          border: none;
          display: block;
          padding: 0;
        }

        td:first-child {
          font-family: var(--font-sans);
          font-size: 12.5px;
          font-weight: 700;
          margin-bottom: 3px;
        }

        td:last-child {
          color: var(--pf-muted);
          font-size: 12px;
          line-height: 1.45;
        }
      }

      @media (min-width: 520px) {
        .portfolio-pillars tbody {
          column-gap: 28px;
          display: grid;
          gap: 14px 28px;
          grid-template-columns: 1fr 1fr;
        }

        .portfolio-pillars tr {
          break-inside: avoid;
        }
      }

      .portfolio-catalog {
        td:first-child {
          color: var(--pf-faint);
          font-size: 10px;
          width: 1.5rem;
        }

        td:nth-child(2) {
          font-weight: 500;
        }
      }

      .portfolio-route {
        display: flex;
        flex-direction: column;
        gap: 6px;
        list-style: none;
        margin: 0.2em 0 0;
        padding: 0;
        width: 100%;

        li {
          align-items: baseline;
          display: flex;
          font-size: 12.5px;
          gap: 8px;
          line-height: 1.45;
          margin: 0;
          padding: 0;
          width: 100%;

          &::before {
            color: var(--pf-faint);
            content: "→";
            flex-shrink: 0;
            font-size: 10px;
            position: static;
            width: 1em;
          }
        }
      }

      .portfolio-inline-tags {
        display: flex;
        flex-wrap: wrap;
        gap: 4px 10px;
        list-style: none;
        padding: 0;

        li {
          color: var(--pf-muted);
          font-size: 11px;
          margin: 0;

          &::after {
            content: " ·";
            color: var(--pf-faint);
          }

          &:last-child::after {
            content: "";
          }
        }
      }

      ol,
      ul:not(.portfolio-inline-tags):not(.portfolio-route) {
        font-size: 12.5px;
        padding-left: 1.2em;
      }

      li {
        margin: 0.2em 0;
      }

      li::marker {
        color: var(--pf-faint);
      }

      pre {
        background: #1e1c19;
        border-radius: 2px;
        color: #e8e4dc;
        font-family: "Consolas", "Courier New", monospace;
        font-size: 11px;
        line-height: 1.5;
        margin: 0.8em 0;
        overflow-x: auto;
        padding: 12px 14px;
      }

      code:not([class]) {
        background: rgb(26 24 20 / 6%);
        border-radius: 2px;
        font-family: "Consolas", "Courier New", monospace;
        font-size: 0.92em;
        padding: 0.08em 0.3em;
      }

      em {
        color: var(--pf-muted);
        font-style: italic;
      }
    }
`;

const StyledMarked = styled.div`
  height: 100%;
  width: 100%;

  article {
    ${ScrollBars(DEFAULT_SCROLLBAR_WIDTH, 0, 0, "light")};
    background-color: ${({ theme }) =>
      theme.name === "Dark" ? "#181818" : "#fafafa"};
    color: ${({ theme }) => theme.colors.text};
    box-sizing: border-box;
    font-size: 16px;
    height: 100%;
    line-height: 1.5;
    overflow-wrap: break-word;
    overflow-y: auto;
    padding: 0;
    width: 100%;

    &:not(.portfolio) * {
      all: revert;
      user-select: text;
    }

    &.portfolio {
      user-select: text;
    }

    a {
      color: #0366d6;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }

    header:not(.portfolio-masthead) {
      display: flex;
    }

    h1,
    h2 {
      border-bottom: 1px solid #ccc;
      margin: 10px 0;
    }

    &.portfolio h1,
    &.portfolio h2,
    &.portfolio h3 {
      border-bottom: none;
    }

    h1 {
      font-size: 2em;
      padding: 9px 0;

      header & {
        margin: 0;
      }

      &:first-of-type {
        margin-top: 0;
      }
    }

    h2 {
      font-size: 1.5em;
      padding: 7px 0;
    }

    h3 {
      font-size: 1em;
      padding: 5px 0;
    }

    ul {
      line-height: 1.6;
      padding-inline-start: 30px;
    }

    nav:not(.portfolio-index) {
      background: #fff;
      border: 1px solid #ddd;
      border-radius: 3px;
      margin-right: 10px;

      > ul {
        font-size: 14px;
        list-style-type: none;
        margin: 10px 0;
        padding: 0;
        position: sticky;
        top: 5px;

        > li {
          min-width: 125px;
          padding: 0 15px;

          > ul {
            padding-left: 25px;

            > li {
              font-size: 0.8em;
            }
          }
        }
      }

      .selected {
        color: #111;
        font-weight: 700;

        &:hover {
          text-decoration: none;
        }
      }
    }

    table {
      border: 1px solid #ddd;
      border-collapse: collapse;
      border-spacing: 0;

      td,
      th {
        border: 1px solid #ddd;
        padding: 5px;
      }
    }

    pre {
      background-color: #f6f8fa;
      border-radius: 3px;
      font-family:
        SFMono-Regular, Consolas, "Liberation Mono", Menlo, Courier, monospace;
      font-size: 85%;
      line-height: 1.45;
      overflow: auto;
      padding: 16px;
    }

    code:not([class]) {
      background-color: rgb(27 31 35 / 5%);
      border-radius: 3px;
      font-size: 85%;
      margin: 0;
      padding: 0.2em 0.4em;
    }

    &.drop {
      ${Message("Drop markdown file here", "#000")};
    }

    ${portfolioArticleStyles}

    &.portfolio {
      --pf-ink: ${({ theme }) =>
        theme.name === "Dark" ? "#e8e8e8" : "#202124"};
      --pf-muted: ${({ theme }) =>
        theme.name === "Dark" ? "#b4b4b4" : "#5f6368"};
      --pf-faint: ${({ theme }) =>
        theme.name === "Dark" ? "#858585" : "#8a8d91"};
      --pf-rule: ${({ theme }) =>
        theme.name === "Dark" ? "#383838" : "#dedede"};
      --pf-paper: ${({ theme }) =>
        theme.name === "Dark" ? "#181818" : "#fafafa"};
      --pf-link: ${({ theme }) =>
        theme.name === "Dark" ? "#70b7f0" : "#245b8a"};
    }
  }
`;

export default StyledMarked;
