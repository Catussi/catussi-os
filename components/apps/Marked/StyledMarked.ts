import styled from "styled-components";
import Message from "styles/common/Message";
import ScrollBars from "styles/common/ScrollBars";
import { DEFAULT_SCROLLBAR_WIDTH } from "utils/constants";

const portfolioArticleStyles = `
    &.portfolio {
      background: #e8eef4;
      color: #1e293b;
      font-family: "DM Sans", "Segoe UI", system-ui, sans-serif;
      font-size: 16.5px;
      line-height: 1.72;
      padding: 0;
      position: relative;

      .portfolio-shell {
        display: grid;
        grid-template-columns: minmax(148px, 188px) minmax(0, 1fr);
        min-height: 100%;
      }

      .portfolio-rail {
        background:
          radial-gradient(circle at 0% 0%, rgb(56 189 248 / 22%), transparent 55%),
          linear-gradient(180deg, #0f766e 0%, #115e59 52%, #134e4a 100%);
        color: #ecfdf5;
        display: flex;
        flex-direction: column;
        gap: 10px;
        padding: 28px 18px 24px;
        position: relative;

        &::after {
          background: linear-gradient(
            180deg,
            rgb(255 255 255 / 18%),
            transparent 35%,
            rgb(0 0 0 / 12%)
          );
          content: "";
          inset: 0;
          pointer-events: none;
          position: absolute;
        }

        > * {
          position: relative;
          z-index: 1;
        }
      }

      .portfolio-mark {
        font-family: Fraunces, Georgia, serif;
        font-size: 1.45rem;
        font-weight: 700;
        letter-spacing: -0.02em;
        line-height: 1.1;
      }

      .portfolio-role {
        color: rgb(204 251 241 / 92%);
        font-size: 0.72rem;
        font-weight: 600;
        letter-spacing: 0.06em;
        line-height: 1.35;
        text-transform: uppercase;
      }

      .portfolio-doc {
        background: rgb(255 255 255 / 14%);
        border: 1px solid rgb(255 255 255 / 22%);
        border-radius: 999px;
        color: #fff;
        font-size: 0.78rem;
        font-weight: 600;
        margin-top: 8px;
        padding: 6px 12px;
        width: fit-content;
      }

      .portfolio-location {
        color: rgb(204 251 241 / 78%);
        font-size: 0.8rem;
        margin-top: auto;
        padding-top: 18px;
      }

      .portfolio-body {
        background:
          radial-gradient(circle at 88% 4%, rgb(56 189 248 / 9%), transparent 28%),
          radial-gradient(circle at 8% 96%, rgb(20 184 166 / 8%), transparent 32%),
          linear-gradient(180deg, #f8fafc 0%, #f1f5f9 100%);
        box-sizing: border-box;
        max-width: none;
        padding: 34px clamp(24px, 4vw, 52px) 52px;
      }

      .portfolio-body > h1:first-child {
        background: linear-gradient(135deg, #fff 0%, #f8fafc 100%);
        border: 1px solid #e2e8f0;
        border-radius: 16px;
        box-shadow: 0 10px 30px rgb(15 23 42 / 6%);
        color: #0f172a;
        font-family: Fraunces, Georgia, serif;
        font-size: clamp(1.85rem, 3vw, 2.35rem);
        font-weight: 700;
        letter-spacing: -0.03em;
        line-height: 1.12;
        margin: 0 0 1.1em;
        padding: 22px 24px 20px;
        position: relative;

        &::after {
          background: linear-gradient(90deg, #0d9488, #14b8a6, #38bdf8);
          border-radius: 16px 16px 0 0;
          content: "";
          height: 4px;
          left: 0;
          position: absolute;
          top: 0;
          width: 100%;
        }
      }

      .portfolio-body > p:first-of-type {
        color: #475569;
        font-size: 1.02em;
        margin-top: -0.35em;
      }

      h2 {
        align-items: center;
        border-bottom: none;
        color: #0f766e;
        display: flex;
        font-family: Fraunces, Georgia, serif;
        font-size: 1.28rem;
        font-weight: 700;
        gap: 10px;
        letter-spacing: -0.01em;
        margin-top: 2.2em;
        padding-bottom: 0;

        &::before {
          background: linear-gradient(180deg, #14b8a6, #0d9488);
          border-radius: 3px;
          content: "";
          flex-shrink: 0;
          height: 1.1em;
          width: 4px;
        }
      }

      h3 {
        color: #334155;
        font-size: 1.05rem;
        font-weight: 600;
        margin-top: 1.35em;
      }

      p {
        margin: 0.7em 0;
      }

      strong {
        color: #0f172a;
      }

      a {
        color: #0d9488;
        font-weight: 600;
        text-decoration: underline;
        text-decoration-color: rgb(13 148 136 / 35%);
        text-underline-offset: 3px;

        &:hover {
          color: #0f766e;
          text-decoration-color: currentcolor;
        }
      }

      blockquote {
        background: linear-gradient(135deg, #ecfdf5 0%, #f0f9ff 100%);
        border: 1px solid #99f6e4;
        border-left: 5px solid #14b8a6;
        border-radius: 14px;
        box-shadow: 0 8px 24px rgb(13 148 136 / 8%);
        color: #334155;
        font-size: 1.02em;
        margin: 1.35em 0;
        padding: 16px 20px;

        p {
          margin: 0;
        }

        strong {
          color: #0f766e;
        }
      }

      hr {
        background: linear-gradient(
          90deg,
          transparent,
          #cbd5e1 15%,
          #94a3b8 50%,
          #cbd5e1 85%,
          transparent
        );
        border: none;
        height: 1px;
        margin: 2.2em 0;
      }

      table {
        background: #fff;
        border: 1px solid #dbe4ee;
        border-collapse: separate;
        border-radius: 14px;
        border-spacing: 0;
        box-shadow: 0 12px 28px rgb(15 23 42 / 7%);
        margin: 1.15em 0 1.65em;
        overflow: hidden;
        width: 100%;

        th {
          background: linear-gradient(180deg, #0f766e 0%, #0d9488 100%);
          border: none;
          color: #f8fafc;
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.07em;
          padding: 12px 16px;
          text-transform: uppercase;
        }

        td {
          border: none;
          border-bottom: 1px solid #e8eef4;
          color: #334155;
          padding: 12px 16px;
        }

        td:first-child {
          color: #0f172a;
          font-weight: 600;
        }

        tr:nth-child(even) td {
          background: #f8fafc;
        }

        tr:last-child td {
          border-bottom: none;
        }

        a {
          text-decoration: none;

          &:hover {
            text-decoration: underline;
          }
        }
      }

      ol {
        padding-left: 1.45em;
      }

      ol > li {
        margin: 0.55em 0;
      }

      ul {
        padding-left: 1.35em;
      }

      li {
        margin: 0.42em 0;
      }

      li::marker {
        color: #14b8a6;
        font-weight: 700;
      }

      code:not([class]) {
        background: #e0f2fe;
        border: 1px solid #bae6fd;
        border-radius: 6px;
        color: #0369a1;
        font-size: 0.86em;
        padding: 0.12em 0.45em;
      }

      em {
        color: #64748b;
      }
    }
`;

const StyledMarked = styled.div`
  height: 100%;
  width: 100%;

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
