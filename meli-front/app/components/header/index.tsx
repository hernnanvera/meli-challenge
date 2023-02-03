import NavSearch from "../nav-search";

interface HeaderProps {
    logo?: string
    logoAlt?: string
    logoTitle?: string
}

export default function Header({ logo, logoAlt, logoTitle }: HeaderProps): JSX.Element {
    const showLogo = !!logo;
    return (
        <header>
            <div className="header-container">
                <div className="header-container__logo">
                    <a href="/" title={logoTitle}>
                        < img src={logo} alt={logoAlt} width={60} height={40} />
                    </a>
                </div>
                <div className="header-container__nav-search-wrapper">
                    <NavSearch></NavSearch>
                </div>
            </div>
        </header>
    )
}