import { defineComponent } from "vue";
import "../styles/Landing.css";

export default defineComponent({
  name: "Landing",
  setup() {
    // Composition API logic goes here
    return () => (
      <div id="login-container">
        <div id="login-wrapper">
          <div id="login-header-container">
            <h1 id="login-header">Welcome to the Login Page</h1>
          </div>
          <div id="login-form">
            <form id="form">
              <input type="text" id="username-input" placeholder="Username" />
              <input type="password" id="password-input" placeholder="Password" />
            </form>
          </div>

          <div id="button-div">
            <button type="submit" id="login-button">Login</button>
          </div>
        </div>
      </div>
    );
  },
});
