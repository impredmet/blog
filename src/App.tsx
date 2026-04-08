import { useState } from "react";

const PGP_KEY = `-----BEGIN PGP PUBLIC KEY BLOCK-----

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
=ns6A
-----END PGP PUBLIC KEY BLOCK-----`;

function App() {
  const [showPgp, setShowPgp] = useState(false);

  return (
    <section>
      <img src="/pfp.jpg" alt="Predmet" className="pfp" />
      <h1>Predmet</h1>

      <p>Software developer.</p>

      <h2>Contact</h2>
      <ul>
        <li>
          email:{" "}
          <a href="mailto:predmet@onionmail.org">predmet@onionmail.org</a>
        </li>
        <li>
          session:{" "}
          <code>
            0568783f7c84b804efc2e14ac4e94c9b1239b383866ffa28ded237fd88a902cf52
          </code>
        </li>
        <li>
          twitter:{" "}
          <a href="https://x.com/impredmet" target="_blank" rel="noreferrer">
            @impredmet
          </a>
        </li>
        <li>
          telegram:{" "}
          <a href="https://t.me/predmet" target="_blank" rel="noreferrer">
            @predmet
          </a>
        </li>
      </ul>

      <h2>PGP</h2>
      <p>
        Fingerprint:{" "}
        <code>44B8 9329 C243 ECD6 A8A5 5E87 B314 99AB AD4E 468A</code>
      </p>
      <button className="pgp-toggle" onClick={() => setShowPgp(!showPgp)}>
        {showPgp ? "[hide public key]" : "[show public key]"}
      </button>
      {showPgp && <pre>{PGP_KEY}</pre>}

      <h2>Projects</h2>
      <ul>
        <li>
          <a href="https://opnet.org" target="_blank" rel="noreferrer">
            OP_NET
          </a>{" "}
          — A decentralized smart contract platform built on top of Bitcoin
          using the OP_NET metaprotocol. Enables developers to deploy and
          interact with smart contracts directly on the Bitcoin blockchain.
          Worked on the project until January 2026; mainnet launched March 2026.
        </li>
      </ul>

      <h2>Setup</h2>
      <ul>
        <li>OS: Kali Linux (4+ years)</li>
      </ul>

      <hr />
      <p>
        <small>last updated 2026</small>
      </p>
    </section>
  );
}

export default App;
