import styled from "styled-components";
import Message from "styles/common/Message";
import ScrollBars from "styles/common/ScrollBars";
import { DEFAULT_SCROLLBAR_WIDTH } from "utils/constants";

const portfolioArticleStyles = `
    &.portfolio {
      background: linear-gradient(165deg, #f8fbff 0%, #f4f7fa 38%, #eef3f8 100%);
      color: #1a2332;
      font-family: "Segoe UI", system-ui, -apple-system, sans-serif;
      padding: 28px 40px 40px;

      &::before {
        background: linear-gradient(
          90deg,
          #0d9488 0%,
          #14b8a6 35%,
          #38bdf8 70%,
          #818cf8 100%
        );
        content: "";
        display: block;
        height: 4px;
        left: 0;
        position: sticky;
        top: 0;
        width: 100%;
        z-index: 2;
      }

      > :first-child {
        margin-top: 8px;
      }

      h1 {
        border-bottom: none;
        color: #0f172a;
        font-size: 2.1em;
        font-weight: 700;
        letter-spacing: -0.02em;
        line-height: 1.15;
        margin-bottom: 0.35em;
        padding-bottom: 0;
      }

      h1 + p strong,
      h1 + p {
        color: #475569;
        font-size: 1.05em;
      }

      h2 {
        border-bottom: 2px solid #e2e8f0;
        color: #0f766e;
        font-size: 1.35em;
        font-weight: 650;
        margin-top: 2em;
        padding-bottom: 0.35em;
      }

      h3 {
        color: #334155;
        font-size: 1.1em;
        font-weight: 600;
        margin-top: 1.25em;
      }

      p {
        margin: 0.65em 0;
      }

      strong {
        color: #0f172a;
      }

      a {
        color: #0d9488;
        font-weight: 500;

        &:hover {
          color: #0f766e;
        }
      }

      blockquote {
        background: linear-gradient(135deg, #ecfdf5 0%, #f0f9ff 100%);
        border-left: 4px solid #14b8a6;
        border-radius: 0 12px 12px 0;
        box-shadow: 0 1px 3px rgb(15 23 42 / 6%);
        color: #334155;
        margin: 1.25em 0;
        padding: 14px 18px;
      }

      hr {
        background: linear-gradient(
          90deg,
          transparent,
          #cbd5e1 20%,
          #cbd5e1 80%,
          transparent
        );
        border: none;
        height: 1px;
        margin: 2em 0;
      }

      table {
        background: #fff;
        border: 1px solid #e2e8f0;
        border-collapse: separate;
        border-radius: 10px;
        border-spacing: 0;
        box-shadow: 0 1px 4px rgb(15 23 42 / 5%);
        margin: 1em 0 1.5em;
        overflow: hidden;
        width: 100%;

        th {
          background: linear-gradient(180deg, #f1f5f9 0%, #e8eef4 100%);
          color: #0f172a;
          font-size: 0.85em;
          font-weight: 600;
          letter-spacing: 0.02em;
          text-transform: uppercase;
        }

        tr:nth-child(even) td {
          background: #f8fafc;
        }

        td,
        th {
          border: none;
          border-bottom: 1px solid #e2e8f0;
          padding: 10px 14px;
        }

        tr:last-child td {
          border-bottom: none;
        }
      }

      ul {
        padding-left: 1.4em;
      }

      li {
        margin: 0.35em 0;
      }

      li::marker {
        color: #14b8a6;
      }

      code:not([class]) {
        background: #e0f2fe;
        border-radius: 4px;
        color: #0369a1;
        font-size: 0.88em;
        padding: 0.15em 0.45em;
      }

      em {
        color: #64748b;
      }
    }
`;

const StyledMarked = styled.div`
  article {
    ${ScrollBars(DEFAULT_SCROLLBAR_WIDTH, 0, 0, "light")};
    background-color: #f9f9f9;
    box-sizing: border-box;
    font-size: 16px;
    height: 100%;
    line-height: 1.5;
    overflow-wrap: break-word;
    overflow-y: auto;
    padding: 16px 32px;
    width: 100%;

    * {
      all: revert;
      user-select: text;
    }

    a {
      color: #0366d6;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }

    header {
      display: flex;
    }

    h1,
    h2 {
      border-bottom: 1px solid #ccc;
      margin: 10px 0;
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

    nav {
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
  }
`;

export default StyledMarked;
