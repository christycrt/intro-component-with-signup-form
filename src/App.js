import "./App.css";

const App = () => {
  return (
    <div className="App">
      <main>
        <div className="content">
          <h1>
            Learn to code by <br />
            watching others
          </h1>
          <p>
            See how experienced developers solve problems in real-time. Watching
            scripted tutorials is great, but understanding how developers think
            is invaluable.
          </p>
        </div>
        <div className="right-content">
          <div className="free-box">
            <p>
              <span className="free-day">Try it free 7 days</span> then $20/mo.
              thereafter
            </p>
          </div>
          <div className="form-box">
            <form className="free-trial-form">
              <input type="text" placeholder="First Name" />
              <input type="text" placeholder="Last Name" />
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
            </form>
            <button type="submit" className="claim-btn">
              CLAIM YOUR FREE TRIAL
            </button>
            <p className="term">
              By clicking the button, you are agreeing to our
              <a href="/"> Terms and Services</a>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
