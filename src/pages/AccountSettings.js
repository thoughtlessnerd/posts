import React from "react";
import "./AccountSettings.css";

const AccountSettings = () => {
  const [section, setSection] = React.useState(0);

  return (
    <main>
      <h1>Account Settings</h1>
      <div className="action-btns">
        <nav>
          <button
            className={section == 0 ? "active" : ""}
            onClick={() => setSection(0)}
          >
            General
          </button>
          <button
            className={section == 1 ? "active" : ""}
            onClick={() => setSection(1)}
          >
            Billing
          </button>
          {/* <button
            className={section == 2 ? "active" : ""}
            onClick={() => setSection(2)}
          >
            Team & permissions
          </button> */}
        </nav>
        <div className="btns">
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M1.80172 8.74414L1.40878 9.14005C1.51331 9.24367 1.65454 9.3018 1.80172 9.3018C1.9489 9.3018 2.09013 9.24367 2.19465 9.14005L1.80172 8.74414ZM3.4449 7.90022C3.5501 7.79581 3.60952 7.65388 3.61008 7.50567C3.61063 7.35745 3.55229 7.21508 3.44788 7.10988C3.39618 7.05779 3.33473 7.0164 3.26703 6.98806C3.19933 6.95972 3.12672 6.94499 3.05333 6.94471C2.90511 6.94415 2.76274 7.0025 2.65754 7.10691L3.44416 7.89947L3.4449 7.90022ZM0.944404 7.10691C0.838722 7.00559 0.697465 6.94986 0.551076 6.95171C0.404687 6.95357 0.264887 7.01286 0.161806 7.11682C0.0587257 7.22078 0.000617326 7.36108 4.89034e-06 7.50748C-0.000607545 7.65388 0.0563249 7.79466 0.158532 7.89947L0.944404 7.10691ZM12.917 4.57068C12.9544 4.63511 13.0044 4.69139 13.0639 4.73621C13.1234 4.78103 13.1913 4.81349 13.2635 4.83167C13.3358 4.84984 13.4109 4.85337 13.4846 4.84204C13.5582 4.83072 13.6288 4.80476 13.6923 4.76571C13.7557 4.72666 13.8107 4.6753 13.854 4.61467C13.8973 4.55403 13.928 4.48534 13.9443 4.41265C13.9606 4.33996 13.9622 4.26474 13.949 4.19142C13.9358 4.1181 13.908 4.04817 13.8674 3.98575L12.917 4.57068ZM8.05222 0.744026C4.29627 0.744026 1.24283 3.76621 1.24283 7.50356H2.35912C2.35912 4.39133 4.90427 1.86032 8.05222 1.86032V0.744026ZM1.24283 7.50356V8.74414H2.35912V7.50356H1.24283ZM2.1954 9.14079L3.4449 7.90022L2.65754 7.10691L1.40729 8.34748L2.19391 9.13931L2.1954 9.14079ZM2.1954 8.34823L0.944404 7.10691L0.157788 7.89947L1.40804 9.13931L2.19391 8.34748L2.1954 8.34823ZM13.8674 3.98723C13.2564 2.99455 12.4011 2.17514 11.3831 1.60733C10.3652 1.03952 9.21784 0.742282 8.05222 0.744026V1.86032C9.02731 1.8583 9.98734 2.10649 10.8391 2.58116C11.6908 3.05583 12.4066 3.7411 12.9178 4.57143L13.8681 3.98649L13.8674 3.98723ZM14.1807 7.25574L14.5729 6.85909C14.4684 6.75592 14.3275 6.69807 14.1807 6.69807C14.0339 6.69807 13.893 6.75592 13.7885 6.85909L14.1807 7.25574ZM12.533 8.09892C12.4809 8.15047 12.4394 8.21179 12.411 8.27937C12.3825 8.34695 12.3677 8.41947 12.3673 8.49279C12.3664 8.64087 12.4244 8.78321 12.5286 8.88851C12.6327 8.99381 12.7744 9.05344 12.9224 9.05427C13.0705 9.05511 13.2129 8.99709 13.3182 8.89298L12.533 8.09892ZM15.0432 8.89298C15.095 8.94587 15.1569 8.98793 15.2251 9.01668C15.2934 9.04544 15.3667 9.06032 15.4407 9.06047C15.5148 9.06062 15.5881 9.04603 15.6565 9.01755C15.7249 8.98906 15.7869 8.94726 15.8389 8.89457C15.891 8.84188 15.932 8.77936 15.9597 8.71065C15.9873 8.64194 16.001 8.56842 15.9999 8.49437C15.9989 8.42031 15.9831 8.34721 15.9535 8.27932C15.9239 8.21143 15.8811 8.1501 15.8276 8.09892L15.0432 8.89298ZM3.02071 11.4277C2.94295 11.3017 2.8183 11.2117 2.6742 11.1776C2.5301 11.1435 2.37835 11.168 2.25233 11.2458C2.12631 11.3235 2.03634 11.4482 2.00221 11.5923C1.96809 11.7364 1.99261 11.8881 2.07037 12.0141L3.02071 11.4277ZM7.90636 15.2559C11.6735 15.2559 14.7381 12.2359 14.7381 8.49632H13.6218C13.6218 11.6071 11.0692 14.1396 7.90636 14.1396V15.2559ZM14.7381 8.49632V7.25574H13.6218V8.49632H14.7381ZM13.7885 6.85909L12.533 8.09892L13.3182 8.89298L14.5729 7.6524L13.7885 6.85909ZM13.7885 7.6524L15.0432 8.89298L15.8276 8.09892L14.5729 6.85909L13.7885 7.6524ZM2.06963 12.0134C2.68465 13.0071 3.54388 13.8269 4.56546 14.3945C5.58705 14.962 6.73695 15.2586 7.90562 15.2559V14.1396C6.92747 14.1423 5.96492 13.8945 5.10969 13.4198C4.25445 12.9451 3.53577 12.2593 3.02071 11.4277L2.07037 12.0141L2.06963 12.0134Z"
                fill="#136FA0"
              />
            </svg>
            Refresh
          </button>
        </div>
      </div>

      {section == 0 && <General />}
      {section == 1 && <Billing />}
      {/* {section == 2 && <Team />} */}
    </main>
  );
};

const Billing = () => {
  return (
    <div className="billing">
      <h3>Email to send invoices</h3>
      <p>All invoices will be send to email address specified below</p>

      <div className="billing-email">
        <input type="text" placeholder="Email" />
        <button>Save</button>
      </div>

      <div className="btns">
        <button className="accent-outline">Update your plan</button>
        <button className="red-outline">Cancel subscription</button>
      </div>
    </div>
  );
};

const Team = () => {
  return (
    <div>
      <h3>Team</h3>
    </div>
  );
};

const General = () => {
  return (
    <div className="general">
      <section>
        <h3>Personal Information</h3>
        <p>Your main account information</p>

        <h4> Email address </h4>
        <div className="input-field">
          <input type="text" placeholder="Email" />
          <button className="accent">Save</button>
        </div>

        <h4> Time zone </h4>
        <div className="input-field">
          <select name="timezone" id="timezone">
            <option value="1">UTC +5:30</option>
          </select>
          <button className="accent">Save</button>
        </div>

        <div className="theme-select">
          <span>Dark Mode</span>
          <label class="toggle-container">
            <input type="checkbox" class="toggle-checkbox" />
            <span class="toggle-slider"></span>
          </label>
          <span>Light Mode</span>
        </div>
      </section>
      <section>
        <h3>Linkedin</h3>
        <p>
          Connected as <span>Mudit Jain</span>
        </p>
        <div className="btns">
          <button className="accent">Refresh</button>
          <button className="red-outline">Disconnect</button>
        </div>
      </section>
      <section>
        <h3>Your account settings </h3>
        <div className="details">
          <div className="search-words">
            <h4>Search Keywords</h4>
            <div className="search-words-list">
              <Keyword text="Marketiasdasdasdng" />
              <Keyword text="Markeasdasdting" />
              <Keyword text="Markeasdasdting" />
              <Keyword text="Marketasdasdasding" />
              <Keyword text="Markasdeting" />
              <Keyword text="Marketing" />
              <Keyword text="Marketiasdasdasng" />
              <Keyword text="Markeasdasdting" />
            </div>
          </div>
          <div className="desc">
            <h4>Personal Description</h4>
            <textarea placeholder="Write a short description about yourself"></textarea>
          </div>
        </div>
        <div className="filters">
          <div>
            <h4>Filter search results</h4>
            <div className="filter-btns">
              <button>Twitter only</button>
              <button>All</button>
              <button className="active">LinkedIn only</button>
            </div>
          </div>
          <div>
            <h4>HashTags in Posts</h4>
            <div className="filter-btns">
              <button className="active">Yes</button>
              <button>No</button>
            </div>
          </div>
        </div>
      </section>
      <section>
        <h3>Danger zone</h3>
        <p>Careful, these actions are permanent</p>

        <div className="btns">
          <button className="red-outline">Delete account</button>
        </div>
      </section>
    </div>
  );
};

const Keyword = ({ text }) => {
  return (
    <span>
      {text}{" "}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="8"
        height="10"
        viewBox="0 0 8 10"
        fill="none"
      >
        <path
          d="M7.69542 9.12067C7.50417 9.3119 7.2448 9.41933 6.97435 9.41933C6.7039 9.41933 6.44453 9.3119 6.25328 9.12067L4.00043 6.54573L1.74757 9.11982C1.65316 9.21578 1.54068 9.2921 1.41663 9.34438C1.29257 9.39665 1.1594 9.42385 1.02478 9.4244C0.890163 9.42494 0.75677 9.39883 0.632294 9.34757C0.507819 9.29631 0.394725 9.22091 0.299536 9.12572C0.204346 9.03053 0.128946 8.91744 0.0776832 8.79296C0.0264205 8.66848 0.000310061 8.53509 0.000858208 8.40048C0.00140635 8.26586 0.0286021 8.13268 0.0808768 8.00863C0.133152 7.88457 0.209471 7.7721 0.305432 7.67769L2.64922 5.00077L0.304582 2.32216C0.208621 2.22775 0.132302 2.11527 0.080027 1.99122C0.0277523 1.86716 0.000556601 1.73399 8.45476e-06 1.59937C-0.000539692 1.46475 0.0255708 1.33136 0.0768335 1.20688C0.128096 1.08241 0.203497 0.969315 0.298686 0.874125C0.393875 0.778936 0.506969 0.703536 0.631445 0.652273C0.75592 0.60101 0.889313 0.5749 1.02393 0.575448C1.15855 0.575996 1.29172 0.603192 1.41578 0.655466C1.53983 0.707741 1.65231 0.78406 1.74672 0.880022L4.00043 3.45581L6.25328 0.880022C6.34769 0.78406 6.46017 0.707741 6.58422 0.655466C6.70828 0.603192 6.84145 0.575996 6.97607 0.575448C7.11069 0.5749 7.24408 0.60101 7.36856 0.652273C7.49303 0.703536 7.60612 0.778936 7.70131 0.874125C7.7965 0.969315 7.8719 1.08241 7.92317 1.20688C7.97443 1.33136 8.00054 1.46475 7.99999 1.59937C7.99944 1.73399 7.97225 1.86716 7.91997 1.99122C7.8677 2.11527 7.79138 2.22775 7.69542 2.32216L5.35163 5.00077L7.69542 7.67769C7.79023 7.7724 7.86545 7.88487 7.91677 8.00867C7.96809 8.13247 7.9945 8.26517 7.9945 8.39918C7.9945 8.53319 7.96809 8.66589 7.91677 8.78969C7.86545 8.91349 7.79023 9.02596 7.69542 9.12067Z"
          fill="white"
        />
      </svg>
    </span>
  );
};

export default AccountSettings;
