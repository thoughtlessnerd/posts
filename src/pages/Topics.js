import "./Topics.css";

const Topics = () => {
  return (
    <div className="topics notMain">
      <main>
        <header>
          <h1>Define Your Topics</h1>
          <p>What do you want to post about</p>
        </header>
        <div className="topics-list">
          <p>Type in or select your topics from suggestions</p>
          <select></select>
          <div className="suggestions">
            <Suggestion content="StartUp" />
            <Suggestion content="StarasdasdsatUp" />
            <Suggestion content="StaasdasrtUp" />
            <Suggestion content="StaasdasrtUp" />
            <Suggestion content="Marketing" />
            <Suggestion content="Audience building" />
            <Suggestion content="Seo" />
          </div>
        </div>
      </main>
    </div>
  );
};

const Suggestion = (props) => {
  return (
    <button>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
      >
        <path
          d="M1 8H8M8 8H15M8 8V1M8 8V15"
          stroke="#A5A5A5"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      {props.content}
    </button>
  );
};

export default Topics;
