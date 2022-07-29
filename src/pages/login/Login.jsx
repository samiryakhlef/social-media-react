import "./login.css";

export default function Login() {
    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">Social Truth</h3>
                    <span className="loginDesc">
           Connectez-vous avec vos amis et le monde qui vous entoure sur Social Truth.
          </span>
                </div>
                <div className="loginRight">
                    <div className="loginBox">
                        <input placeholder="E-mail" className="loginInput" />
                        <input placeholder="Mot de passe" className="loginInput" />
                        <button className="loginButton">Se connecter</button>
                        <span className="loginForgot">Mot de passe ?</span>
                        <button className="loginRegisterButton">
                            Créer un compte
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}