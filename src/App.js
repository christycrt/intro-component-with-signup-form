import "./App.css";

import { useForm } from "react-hook-form";

const InputList = [
  {
    name: "firstname",
    rule: {
      required: "First name can not be empty",
    },
    placeholder: "First Name",
  },
  {
    name: "lastname",
    rule: {
      required: "Last name can not be empty",
    },
    placeholder: "Last Name",
  },
  {
    name: "email",
    rule: {
      required: "Email can not be empty",
      pattern: {
        value: /\S+@\S+\.\S+/,
        message: "Looks like this is not an email",
      },
    },
    placeholder: "Email",
  },
  {
    name: "password",
    rule: {
      required: "Password can not be empty",
    },
    placeholder: "Password",
  },
];

const App = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => console.log(data);

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
            <form className="free-trial-form" onSubmit={handleSubmit(onSubmit)}>
              {InputList.map((item, key) => {
                return (
                  <div className="input-form" key={key}>
                    <input
                      {...register(item.name, { ...item.rule })}
                      placeholder={item.placeholder}
                    />
                    {errors[item.name] && (
                      <>
                        <p className="error">{errors[item.name].message}</p>
                        <img
                          className="error-icon"
                          src="/images/icon-error.svg"
                          alt="error-icon"
                        />
                      </>
                    )}
                  </div>
                );
              })}
              <button type="submit" className="claim-btn">
                CLAIM YOUR FREE TRIAL
              </button>
            </form>
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
