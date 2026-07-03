import styled from "styled-components";
import ScrollBars from "styles/common/ScrollBars";
import { DEFAULT_SCROLLBAR_WIDTH } from "utils/constants";

const StyledLinkedIn = styled.div`
  ${ScrollBars(DEFAULT_SCROLLBAR_WIDTH, 0, 0, "light")};
  background: #f3f2ef;
  color: #191919;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui,
    sans-serif;
  font-size: 14px;
  height: 100%;
  line-height: 1.5;
  width: 100%;

  .content {
    margin: 0 auto;
    max-width: 560px;
    padding: 16px 16px 32px;
  }

  .card {
    background: #fff;
    border: 1px solid #e0dfdc;
    border-radius: 8px;
    margin-bottom: 12px;
    overflow: hidden;
  }

  .banner {
    background: linear-gradient(135deg, #dce4ea 0%, #b8c5d0 100%);
    height: 80px;
  }

  .profile-top {
    margin-top: -36px;
    padding: 0 20px 20px;
  }

  .avatar {
    align-items: center;
    background: #3d4f5f;
    border: 3px solid #fff;
    border-radius: 50%;
    color: #fff;
    display: flex;
    font-size: 1.6rem;
    font-weight: 600;
    height: 72px;
    justify-content: center;
    width: 72px;
  }

  h1 {
    font-size: 1.35rem;
    margin: 12px 0 4px;
  }

  .headline {
    margin: 0 0 6px;
  }

  .location {
    color: #666;
    font-size: 13px;
    margin: 0 0 12px;
  }

  .section {
    padding: 16px 20px 20px;
  }

  .section h2 {
    font-size: 1rem;
    margin: 0 0 14px;
  }

  .section p {
    margin: 0;
  }

  .role {
    margin-bottom: 18px;
  }

  .role:last-child {
    margin-bottom: 0;
  }

  .role h3 {
    font-size: 14px;
    margin: 0 0 2px;
  }

  .role .company {
    color: #191919;
    font-weight: 600;
    margin: 0 0 2px;
  }

  .role .period {
    color: #666;
    font-size: 12px;
    margin: 0 0 8px;
  }

  .role ul {
    margin: 0;
    padding-left: 18px;
  }

  .role li {
    margin-bottom: 4px;
  }

  .project {
    margin-bottom: 16px;
  }

  .project:last-child {
    margin-bottom: 0;
  }

  .project h3 {
    font-size: 14px;
    margin: 0 0 4px;
  }

  .project p {
    color: #444;
    font-size: 13px;
    margin: 0 0 6px;
  }

  .project .links {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }

  .project a,
  .contact a {
    color: #0a66c2;
    font-size: 13px;
    font-weight: 600;
    text-decoration: none;
  }

  .project a:hover,
  .contact a:hover {
    text-decoration: underline;
  }

  .skills {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }

  .skill {
    background: #f3f2ef;
    border-radius: 16px;
    color: #444;
    font-size: 13px;
    padding: 6px 12px;
  }

  .contact p {
    margin: 0 0 8px;
  }

  .contact p:last-child {
    margin-bottom: 0;
  }
`;

export default StyledLinkedIn;
