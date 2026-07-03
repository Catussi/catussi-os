import styled from "styled-components";
import ScrollBars from "styles/common/ScrollBars";
import { DEFAULT_SCROLLBAR_WIDTH } from "utils/constants";

const StyledGitHub = styled.div`
  ${ScrollBars(DEFAULT_SCROLLBAR_WIDTH, 0, 0, "light")};
  background: #fff;
  color: #1f2328;
  display: flex;
  flex-direction: column;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui,
    sans-serif;
  font-size: 14px;
  height: 100%;
  line-height: 1.5;
  width: 100%;

  header {
    align-items: center;
    background: #f6f8fa;
    border-bottom: 1px solid #d0d7de;
    display: flex;
    flex-shrink: 0;
    gap: 8px;
    min-height: 44px;
    padding: 8px 14px;
    word-break: break-word;
  }

  header .crumb {
    color: #656d76;
    font-size: 13px;
  }

  header button {
    background: none;
    border: none;
    color: #0969da;
    cursor: pointer;
    font: inherit;
    padding: 0;
    text-align: left;
  }

  header button:hover {
    text-decoration: underline;
  }

  header .sep {
    color: #656d76;
  }

  main {
    flex: 1;
    overflow-y: auto;
    padding: 20px;
  }

  .profile {
    display: flex;
    gap: 24px;
  }

  .profile aside {
    flex-shrink: 0;
    width: 280px;
  }

  .profile .avatar {
    border: 1px solid #d0d7de;
    border-radius: 50%;
    height: 260px;
    object-fit: cover;
    width: 260px;
  }

  .profile h1 {
    font-size: 1.5rem;
    margin: 0 0 4px;
  }

  .profile .login {
    color: #656d76;
    font-size: 1.1rem;
    margin: 0 0 12px;
  }

  .profile .bio {
    margin: 0 0 16px;
  }

  .profile .meta {
    color: #656d76;
    display: grid;
    gap: 6px;
    font-size: 13px;
    margin-bottom: 16px;
  }

  .profile .stats {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    margin-bottom: 20px;
  }

  .profile .stats span strong {
    color: #1f2328;
  }

  .repos {
    flex: 1;
    min-width: 0;
  }

  .repos h2 {
    border-bottom: 1px solid #d0d7de;
    font-size: 1rem;
    margin: 0 0 16px;
    padding-bottom: 8px;
  }

  .repo-list {
    display: grid;
    gap: 12px;
  }

  .repo-card {
    border: 1px solid #d0d7de;
    border-radius: 6px;
    padding: 14px 16px;
  }

  .repo-card:hover {
    border-color: #0969da;
  }

  .repo-card button.name {
    background: none;
    border: none;
    color: #0969da;
    cursor: pointer;
    font-size: 15px;
    font-weight: 600;
    padding: 0;
  }

  .repo-card button.name:hover {
    text-decoration: underline;
  }

  .repo-card .desc {
    color: #656d76;
    font-size: 13px;
    margin: 6px 0 10px;
  }

  .repo-card .stats {
    color: #656d76;
    display: flex;
    flex-wrap: wrap;
    gap: 14px;
    font-size: 12px;
  }

  .repo-header h1 {
    align-items: center;
    display: flex;
    font-size: 1.25rem;
    gap: 8px;
    margin: 0 0 8px;
  }

  .repo-header .desc {
    color: #656d76;
    margin: 0 0 16px;
  }

  .tabs {
    border-bottom: 1px solid #d0d7de;
    display: flex;
    gap: 4px;
    margin-bottom: 20px;
  }

  .tabs button {
    background: none;
    border: none;
    border-bottom: 2px solid transparent;
    color: #656d76;
    cursor: pointer;
    font: inherit;
    margin-bottom: -1px;
    padding: 8px 12px;
  }

  .tabs button.active {
    border-bottom-color: #fd8c73;
    color: #1f2328;
    font-weight: 600;
  }

  .readme {
    border: 1px solid #d0d7de;
    border-radius: 6px;
    padding: 24px 32px;
  }

  .readme h1,
  .readme h2,
  .readme h3 {
    border-bottom: 1px solid #d0d7de;
    margin-top: 1.2em;
    padding-bottom: 0.3em;
  }

  .readme h1:first-child {
    margin-top: 0;
  }

  .readme pre {
    background: #f6f8fa;
    border-radius: 6px;
    overflow-x: auto;
    padding: 12px;
  }

  .readme code {
    background: #f6f8fa;
    border-radius: 4px;
    font-family: ui-monospace, monospace;
    font-size: 0.9em;
    padding: 0.15em 0.35em;
  }

  .readme pre code {
    background: none;
    padding: 0;
  }

  .file-list {
    border: 1px solid #d0d7de;
    border-radius: 6px;
    overflow: hidden;
  }

  .file-row {
    align-items: center;
    background: #fff;
    border: none;
    border-top: 1px solid #d0d7de;
    color: #0969da;
    cursor: pointer;
    display: flex;
    font: inherit;
    gap: 10px;
    padding: 8px 14px;
    text-align: left;
    width: 100%;
  }

  .file-row:first-child {
    border-top: none;
  }

  .file-row:hover {
    background: #f6f8fa;
  }

  .file-row .icon {
    color: #656d76;
    flex-shrink: 0;
    width: 16px;
  }

  .file-row .size {
    color: #656d76;
    font-size: 12px;
    margin-left: auto;
  }

  .file-view pre {
    background: #f6f8fa;
    border: 1px solid #d0d7de;
    border-radius: 6px;
    font-family: ui-monospace, monospace;
    font-size: 12px;
    line-height: 1.45;
    margin: 0;
    overflow: auto;
    padding: 16px;
    white-space: pre-wrap;
    word-break: break-word;
  }

  .file-view .path {
    color: #656d76;
    font-size: 13px;
    margin-bottom: 12px;
  }

  .error,
  .loading {
    color: #656d76;
    padding: 40px 20px;
    text-align: center;
  }

  .error {
    color: #cf222e;
  }

  .demo-link {
    color: #0969da;
    font-size: 13px;
    text-decoration: none;
  }

  .demo-link:hover {
    text-decoration: underline;
  }
`;

export default StyledGitHub;
