import "../styles/App.css";
import { ReactSVG } from "react-svg";

import logo from "../svg/Icon.svg";
import discordOrange from "../svg/discord-orange.svg";
import twitter from "../svg/twitter-orange.svg";
import globe from "../svg/globe.svg";
import globeWhite from "../svg/globe-white.svg";
import twitterWhite from "../svg/twitter-white.svg";
import discordWhite from "../svg/discord-white.svg";
import airdrop1 from "../svg/airdrop-icon-centered.svg";
import airdrop2 from "../svg/airdrop-icon-upper.svg";

import twitterLogo from "../images/Logo_Twitter.png";
import amazon from "../images/Amazon.png";
import university from "../images/University.png";
import berkeley from "../images/Berkeley.png";
import rocket from "../images/rocket.png";
import fire from "../images/fire.png";
import cug from "../images/cug.png";

import Button from "./Button";
import Feature from "./Feature";

function App() {
  return (
    <div className="App">
      <div className="header">
        <div className="airdrop">
          <ReactSVG src={airdrop1} className="airdrop-first-logo" />
          <ReactSVG src={airdrop2} className="airdrop-second-logo" />

          <h2 className="airdrop-title">Don’t miss Firefly <span className="discount">65% airdrop</span></h2>
          <h3 className="airdrop-text">Join the DEX community for more</h3>
        </div>

        <div className="container">
          <ReactSVG src={logo} className="logo" />
          <h1 className="title">
            Introducing <span className="fireFly">Firefly</span>
          </h1>
          <p className="text">
            Full-featured DEX on one of the hottest L2's- Zk Fair.
            <br />
            Concentrated Liquidity for LP's.
            <br />
            Lowest fees.
          </p>
          <Button />

          <div className="icons">
            <a href="https://fireflydex.io/" target="_blank">
              <ReactSVG src={globe} />
            </a>
            <a href="https://twitter.com/FireFlydexZK" target="_blank">
              <ReactSVG src={twitter} />
            </a>
            <a href="https://discord.gg/fireflydex" target="_blank">
              <ReactSVG src={discordOrange} />
            </a>
          </div>
        </div>
      </div>

      <div className="content">
        <div className="content-container">
          <div className="backgrounds">
            <h2 className="backgrounds-title">Our backgrounds</h2>
            <p className="backgrounds-text">
              We are a group of product managers and developers from companies
              such as Amazon.com and Twitter. We have been working together for
              a while.
            </p>
          </div>

          <div className="companies">
            <img src={twitterLogo} alt="Twitter" />
            <img src={amazon} alt="Amazon" />
            <img src={university} alt="University of Portsmouth" />
            <img src={berkeley} alt="Berkeley" />
          </div>
        </div>
      </div>

      <div className="main">
        <div className="main-container">
          <div className="main-project-highlights">
            <div className="main-titles">
              <h3 className="upper-title">Unique focus.</h3>
              <h3 className="lower-title">Community.</h3>
            </div>

            <div className="project-highlights">
              <p className="project-highlights-text">
                Most of all, we're committed to the community.
              </p>
              <div className="features">
                <Feature file={rocket} text="100% fair launch" />

                <Feature file={fire} text="Modern dex technology" />

                <Feature file={cug} text="24-7 support" />
              </div>

              <Button />
            </div>
          </div>

          <div className="rectangle">
            <p className="rectangle-text">
              Join our coming Airdrop starting soon by diving into our Discord.
              The best place to learn about us and our community.
            </p>
            <Button />
          </div>

          <div className="main-icons">
            <a href="https://fireflydex.io/" target="_blank">
              <ReactSVG src={globeWhite} />
            </a>
            <a href="https://twitter.com/FireFlydexZK" target="_blank">
              <ReactSVG src={twitterWhite} />
            </a>
            <a href="https://discord.gg/fireflydex" target="_blank">
              <ReactSVG src={discordWhite} />
            </a>
          </div>

          <h4 className="copyrightNotice">© Firefly Decentralized Exchange</h4>
        </div>
      </div>
    </div>
  );
}

export default App;
