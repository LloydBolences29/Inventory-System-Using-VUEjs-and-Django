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
                        <input type="text" placeholder="Username" />
                        <input type="password" placeholder="Password" />
                        <button type="submit">Login</button>
                    </form>

                </div>
            </div>
        </div>
    );
  },
});