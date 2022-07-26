import "./register.css";

export default function Register() {
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
                        <input placeholder="Pseudo" className="loginInput" />
                        <input placeholder="E-mail" className="loginInput" />
                        <input placeholder="Mot de passe" className="loginInput" />
                        <input placeholder="Mot de passe" className="loginInput" />
                        <button className="loginButton">S'inscrire</button>
                        <button className="loginRegisterButton">
                            Déjà un compte ?
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}