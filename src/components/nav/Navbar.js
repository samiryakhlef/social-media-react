

export default function Navbar() {

    return (
        <nav class="navbar navbar-expand-lg bg-primary">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Social Truth</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-center " id="navbarNavDropdown">
                    <ul class="navbar-nav fs-4">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#"><i className="bi bi-house"></i></a>
                        </li>
                        <li class="nav-item">
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <a class="nav-link" href="#"><i className="bi bi-people"></i></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#"><i className="bi bi-bell"></i></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"><i className="bi bi-shop-window"></i></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"><i className="bi bi-tv"></i></a>
                        </li>
                    </ul>

                </div>
                <div className=" justify-content-end">
                    <ul className="nav navbar-nav navbar-right">
                    <li className="nav-item dropdown justify-content-end">
                        <a className="nav-link dropdown-toggle justify-content-end" href="#" role="button"
                           data-bs-toggle="dropdown" aria-expanded="false">
                            <i className="bi bi-list"></i> Menu
                        </a>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Connexion</a></li>
                            <li><a className="dropdown-item" href="#">Inscription</a></li>
                        </ul>
                    </li>
                        </ul>
                </div>
            </div>
        </nav>



        )
        }