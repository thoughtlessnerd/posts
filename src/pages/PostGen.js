import "./PostGen.css";

const PostGen = () => {
  return (
    <main>
      <h1>Post Generator</h1>

      <p>Craft Linkedin posts that answer your specific needs.</p>

      <div className="postGen">
        <header>
          <h2>What is the post about</h2>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="22"
              viewBox="0 0 18 22"
              fill="none"
            >
              <path
                d="M14.6839 2.60303C15.2049 1.94403 14.7139 1.00003 13.8479 1.00003H7.13193C6.95008 0.9987 6.77094 1.04418 6.61175 1.1321C6.45256 1.22001 6.31866 1.34741 6.22293 1.50203L1.14093 9.95803C0.739932 10.624 1.24393 11.455 2.04893 11.455H5.47793L2.24793 19.52C1.78093 20.54 3.04293 21.473 3.89093 20.735L16.9999 8.33103H10.1509L14.6839 2.60303Z"
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            Suggest Topics
          </button>
        </header>
        <textarea placeholder="Provide a general idea for your post"></textarea>
        <div className="variantGen">
          <h2>How many variants do you want to generate ?</h2>
          <select>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <p>You will consume 1 GPT-4 credit per variant</p>
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="22"
            viewBox="0 0 18 22"
            fill="none"
          >
            <path
              d="M14.6839 2.60303C15.2049 1.94403 14.7139 1.00003 13.8479 1.00003H7.13193C6.95008 0.9987 6.77094 1.04418 6.61175 1.1321C6.45256 1.22001 6.31866 1.34741 6.22293 1.50203L1.14093 9.95803C0.739932 10.624 1.24393 11.455 2.04893 11.455H5.47793L2.24793 19.52C1.78093 20.54 3.04293 21.473 3.89093 20.735L16.9999 8.33103H10.1509L14.6839 2.60303Z"
              stroke-width="1"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          Generate
        </button>
      </div>
    </main>
  );
};

export default PostGen;
