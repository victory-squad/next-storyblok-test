import React from "react";
import { Link } from "../routes";

export default class extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { settings } = this.props;
    return (
      <header className="top-header util__flex util__container">
        <nav className="top-header__col">
          <ul className="top-header__nav">
            {settings &&
              settings.content.main_navi.map((navitem, index) => (
                <li key={index}>
                  <Link route={navitem.link.cached_url}>
                    <a className="top-header__link">{navitem.name}</a>
                  </Link>
                </li>
              ))}
          </ul>
        </nav>
        <a href="/" className="top-header__col top-header__logo">
          <img src="//a.storyblok.com/f/66375/683x683/5a4ded97b1/iconfinder_pizza_3883347.svg" />
        </a>
        <nav className="top-header__col top-header__second-navi">
          <ul className="top-header__nav top-header__nav--right">
            <li>
              <Link>
                <a
                  href="https://postmates.com/"
                  target="_blank"
                  className="top-header__link-img"
                >
                  <img src="//a.storyblok.com/f/66375/330x124/347bb7f177/1_kxekjxklp6v1s77mm1g1xa.png" />
                </a>
              </Link>
            </li>
            <li>
              <Link>
                <a
                  href="https://www.grubhub.com/"
                  target="_blank"
                  className="top-header__link-img"
                >
                  <img src="//a.storyblok.com/f/66375/330x124/af8c72cb4f/41_kxekjxklp6v1s77mm1g1xa.png" />
                </a>
              </Link>
            </li>
          </ul>
        </nav>

        <style jsx>{`
          .top-header {
            justify-content: space-between;
            padding-top: 30px;
            padding-bottom: 30px;
          }

          .top-header__logo {
            text-align: center;
            position: absolute;
            left: 50%;
          }

          .top-header__logo img {
            position: relative;
            max-height: 60px;
            left: -50%;
            top: -15px;
          }

          .top-header__second-navi {
            text-align: right;
          }

          .top-header__nav {
            display: flex;
            list-style: none;
            margin: 0;
            padding: 0;
          }

          .top-header__nav li {
            padding: 0 20px 0 0;
          }

          .top-header__nav--right li {
            padding-right: 0;
            padding-left: 20px;
          }

          .top-header__link-img {
            max-width: 63px;
            max-height: 30px;
            border-radius: 5%;
          }

          .top-header__link {
            text-decoration: none;
            color: white;
            background: black;
            padding: 0% 10%;
          }
        `}</style>
      </header>
    );
  }
}
