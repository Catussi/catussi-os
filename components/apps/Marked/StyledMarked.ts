import styled from "styled-components";
import Message from "styles/common/Message";
import ScrollBars from "styles/common/ScrollBars";
import { DEFAULT_SCROLLBAR_WIDTH } from "utils/constants";

const portfolioArticleStyles = `
    &.portfolio {
      background: #f3f3f1;
      color: #1c1c1c;
      font-family: "Segoe UI", system-ui, -apple-system, sans-serif;
      font-size: 16px;
      line-height: 1.65;
      padding: 0;

      .portfolio-page {
        background: #fff;
        border: 1px solid #e3e3e1;
        box-shadow: 0 1px 0 rgb(255 255 255 / 80%);
        margin: 20px auto 28px;
        max-width: 680px;
        padding: 32px 40px 44px;
      }

      .portfolio-byline {
        border-bottom: 1px solid #e8e8e6;
        color: #5c5c5c;
        font-size: 0.78rem;
        font-variant: small-caps;
        letter-spacing: 0.08em;
        margin: 0 0 24px;
        padding-bottom: 10px;
      }

      h1 {
        border-bottom: none;
        color: #111;
        font-size: 1.7rem;
        font-weight: 600;
        letter-spacing: -0.015em;
        line-height: 1.22;
        margin: 0 0 0.7em;
        padding: 0;
      }

      h1 + p {
        color: #444;
        font-size: 0.98rem;
        margin-top: 0;
      }

      h2 {
        border-bottom: 1px solid #e0e0de;
        color: #1a1a1a;
        font-size: 1.1rem;
        font-weight: 600;
        margin-top: 1.85em;
        padding-bottom: 0.35em;
      }

      h3 {
        color: #222;
        font-size: 1rem;
        font-weight: 600;
        margin-top: 1.2em;
      }

      p {
        margin: 0.6em 0;
      }

      strong {
        color: #111;
        font-weight: 600;
      }

      a {
        color: #2c4a67;
        font-weight: 500;
        text-decoration: underline;
        text-decoration-color: rgb(44 74 103 / 35%);
        text-underline-offset: 2px;

        &:hover {
          color: #1f3549;
          text-decoration-color: currentcolor;
        }
      }

      blockquote {
        background: #f7f7f5;
        border-left: 3px solid #3d4f5f;
        border-radius: 0;
        color: #333;
        margin: 1.15em 0;
        padding: 11px 15px;

        p {
          margin: 0;
        }
      }

      hr {
        background: #ddd;
        border: none;
        height: 1px;
        margin: 1.75em 0;
      }

      table {
        background: #fff;
        border: 1px solid #d4d4d2;
        border-collapse: collapse;
        border-radius: 0;
        border-spacing: 0;
        box-shadow: none;
        font-size: 0.94rem;
        margin: 1em 0 1.35em;
        width: 100%;

        th {
          background: #f0f0ee;
          border: 1px solid #d4d4d2;
          color: #1a1a1a;
          font-size: 0.78rem;
          font-weight: 600;
          letter-spacing: 0.02em;
          padding: 8px 12px;
          text-align: left;
          text-transform: none;
        }

        td {
          border: 1px solid #e0e0de;
          color: #333;
          padding: 8px 12px;
        }

        td:first-child {
          color: #1a1a1a;
          font-weight: 500;
        }

        tr:nth-child(even) td {
          background: #fafaf9;
        }
      }

      ol,
      ul {
        padding-left: 1.4em;
      }

      li {
        margin: 0.35em 0;
      }

      li::marker {
        color: #666;
      }

      code:not([class]) {
        background: #eee;
        border-radius: 2px;
        color: #333;
        font-size: 0.9em;
        padding: 0.1em 0.35em;
      }

      em {
        color: #555;
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
    padding: 0;
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
