import React, { Component } from "react";
import "./MorsePlayer.css";

import A from "./Assets/sound/A.wav";
import B from "./Assets/sound/B.wav";
import C from "./Assets/sound/C.wav";
import D from "./Assets/sound/D.wav";
import E from "./Assets/sound/E.wav";
import F from "./Assets/sound/F.wav";
import G from "./Assets/sound/G.wav";
import H from "./Assets/sound/H.wav";
import I from "./Assets/sound/I.wav";
import J from "./Assets/sound/J.wav";
import K from "./Assets/sound/K.wav";
import L from "./Assets/sound/L.wav";
import M from "./Assets/sound/M.wav";
import N from "./Assets/sound/N.wav";
import O from "./Assets/sound/O.wav";
import P from "./Assets/sound/P.wav";
import Q from "./Assets/sound/Q.wav";
import R from "./Assets/sound/R.wav";
import S from "./Assets/sound/S.wav";
import T from "./Assets/sound/T.wav";
import U from "./Assets/sound/U.wav";
import V from "./Assets/sound/V.wav";
import W from "./Assets/sound/W.wav";
import X from "./Assets/sound/X.wav";
import Y from "./Assets/sound/Y.wav";
import Z from "./Assets/sound/Z.wav";

export default class MorsePlayer extends Component {
  constructor(props) {
    super(props);
    this.playAudio = this.playAudio.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      words: "",
      sounds: {
        A: new Audio(A),
        B: new Audio(B),
        C: new Audio(C),
        D: new Audio(D),
        E: new Audio(E),
        F: new Audio(F),
        G: new Audio(G),
        H: new Audio(H),
        I: new Audio(I),
        J: new Audio(J),
        K: new Audio(K),
        L: new Audio(L),
        M: new Audio(M),
        N: new Audio(N),
        O: new Audio(O),
        P: new Audio(P),
        Q: new Audio(Q),
        R: new Audio(R),
        S: new Audio(S),
        T: new Audio(T),
        U: new Audio(U),
        V: new Audio(V),
        W: new Audio(W),
        X: new Audio(X),
        Y: new Audio(Y),
        Z: new Audio(Z)
      }
    };
  }

  playAudio(evt) {
    evt.preventDefault();
    const words = this.state.words.split("");
    this.setState({ words: "" });

    const interval = 2000; // how much time should the delay between two iterations be (in milliseconds)?
    words.forEach((word, index) => {
      setTimeout(() => {
        if (word.match(/[a-z]/i)) {
          const upWord = word.toUpperCase();
          let playThis = this.state.sounds[upWord];
          playThis.play();
        }
      }, index * interval);
    });
    console.log(words);
  }

  handleChange(evt) {
    //  if (evt.target.value.length < 2)
    this.setState({ words: evt.target.value });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.playAudio} className="MorsePlayer">
          <label htmlFor="words" className="MorsePlayer-label">
            Please enter word(s), special characters are not supported.
          </label>
          <input
            type="text"
            id="words"
            value={this.state.words}
            onChange={this.handleChange}
            className="MorsePlayer-input"
          ></input>
          <button className="MorsePlayer-btn">Play</button>
        </form>
      </div>
    );
  }
}
