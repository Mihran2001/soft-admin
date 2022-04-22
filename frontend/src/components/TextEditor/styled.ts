import styled from "styled-components";

export const Root = styled.div`
  border: 1px solid #d9d9d9;
  border-radius: 2px;
  .material-icons {
    font-size: 90%;
  }
  a:link,
  a:visited {
    /* color: linear-gradient(to bottom, #6a11cb 0%, #2575fc 100%); */
    color: radial-gradient(#16d9e3 0%, #30c7ec 47%, #46aef7 100%);
  }
  .underline,
  .bold,
  .italic,
  .highlight {
    font-size: 12px;
    text-align: center;
  }
  .h100 {
    height: calc(100vh);
  }
  .DraftEditor-root {
    background-color: white;
    border: 1px transparent solid;
    padding: 1.5em 2em 2.75em 2em;
    margin-top: 0.25em;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI";
    font-size: 100%;
    letter-spacing: 1.2px;
    border-radius: 2px;
    text-align: left;
    line-height: 1.5em;
    color: black;
  }
`;

export const SButton = styled.button`
  border-radius: 2px;
  cursor: pointer;
  margin: 0.25em;
  width: 2.3em;
  font-family: "Times";
  line-height: 200%;
  border-radius: 3px;
  background-image: linear-gradient(-225deg, #fffeff 0%, white 100%);
  border: none;
  color: #263135;
  #link_url,
  .RichEditor-styleButton {
    padding: 0.25em;
    background: #f9fbfc;
    border: none;
    color: #3b465d;
    margin: 0.35em;
    border-radius: 6px;
    width: 2.5em;
    font-family: "Lato";
    font-size: 90%;
    box-shadow: 2px 2px edf3f9;
    height: 2.25em;
  }
  styleButton#bold {
    font-weight: 800;
  }

  .styleButton#italic {
    font-style: italic;
    font-family: "PT Serif";
  }

  .styleButton#underline {
    text-decoration: underline;
  }

  .strikethrough {
    text-decoration: line-through;
  }
`;
