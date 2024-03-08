import Nav from "../../components/Nav/Nav";
import "./Home.css";

const Home = () => {
  return (
    <div className="padding">
      <section className="header">
        <Nav />
        <div className="top">
          <div className="top-left">
            <h1>PROJECT</h1>
            <h2>Lorum</h2>
          </div>
          <div className="top-right">
            <img src="../../../public/Rectangle 6.jpg" alt="" />
            <button>
              VIEW PROJECT
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M3 11.5C3 11.2239 3.22386 11 3.5 11L19.5 11C19.7761 11 20 11.2239 20 11.5C20 11.7761 19.7761 12 19.5 12L3.5 12C3.22386 12 3 11.7761 3 11.5Z"
                  fill="#333333"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M15.6464 7.64645C15.8417 7.45118 16.1583 7.45118 16.3536 7.64645L20.2071 11.5L16.3536 15.3536C16.1583 15.5488 15.8417 15.5488 15.6464 15.3536C15.4512 15.1583 15.4512 14.8417 15.6464 14.6464L18.7929 11.5L15.6464 8.35355C15.4512 8.15829 15.4512 7.84171 15.6464 7.64645Z"
                  fill="#333333"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>

      <section className="about">
        <div className="about-1">
          <img src="../../../public/Rectangle 8.jpg" alt="" />
          <img src="../../../public/Rectangle 10.jpg" alt="" />
        </div>
        <div className="about-2">
          <img src="../../../public/Rectangle 9.jpg" alt="" />
        </div>
        <div className="about-3">
          <div>
            <h2>About</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
              and scrambled it to make a type specimen book. It has survived not only five centuries, but also the
              leap into electronic typesetting, remaining essentially unchanged.
            </p>
          </div>
          <div>
            <button>
              READ MORE{" "}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M3 11.5C3 11.2239 3.22386 11 3.5 11L19.5 11C19.7761 11 20 11.2239 20 11.5C20 11.7761 19.7761 12 19.5 12L3.5 12C3.22386 12 3 11.7761 3 11.5Z"
                  fill="#333333"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M15.6464 7.64645C15.8417 7.45118 16.1583 7.45118 16.3536 7.64645L20.2071 11.5L16.3536 15.3536C16.1583 15.5488 15.8417 15.5488 15.6464 15.3536C15.4512 15.1583 15.4512 14.8417 15.6464 14.6464L18.7929 11.5L15.6464 8.35355C15.4512 8.15829 15.4512 7.84171 15.6464 7.64645Z"
                  fill="#333333"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>

      <section className="mfms">
        <h2> Main Focus / Mission Statement</h2>
        <article>
          <div>
            <h3>1</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur, lectus et facilisis placerat.
            </p>
          </div>
          <div>
            <h3>2</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur, lectus et facilisis placerat,
              magna mauris porttitor tortor, a auctor est felis ut nisl.
            </p>
          </div>
        </article>
      </section>
    </div>
  );
};

export default Home;
