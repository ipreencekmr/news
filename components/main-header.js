import NavLink from './nav-link';

export default function MainHeader() {
  return (
    <header id="main-header">
      <div id="logo">
        <NavLink href="/" value="NextNews" />
      </div>
      <nav>
        <ul>
          <li>
            <NavLink href="/news" value="News" />
          </li>
          <li>
            <NavLink href="/archive" value="Archive" />
          </li>
        </ul>
      </nav>
    </header>
  );
}
