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
      words: ""
    };
  }

  componentDidMount() {
    this.ASound = new Audio(A);
    this.BSound = new Audio(B);
    this.CSound = new Audio(C);
    this.DSound = new Audio(D);
    this.ESound = new Audio(E);
    this.FSound = new Audio(F);
    this.GSound = new Audio(G);
    this.HSound = new Audio(H);
    this.ISound = new Audio(I);
    this.JSound = new Audio(J);
    this.KSound = new Audio(K);
    this.LSound = new Audio(L);
    this.MSound = new Audio(M);
    this.NSound = new Audio(N);
    this.OSound = new Audio(O);
    this.PSound = new Audio(P);
    this.QSound = new Audio(Q);
    this.RSound = new Audio(R);
    this.SSound = new Audio(S);
    this.TSound = new Audio(T);
    this.USound = new Audio(U);
    this.VSound = new Audio(V);
    this.WSound = new Audio(W);
    this.XSound = new Audio(X);
    this.YSound = new Audio(Y);
    this.ZSound = new Audio(Z);
  }

  playAudio(evt) {
    evt.preventDefault();
    const words = this.state.words.split("");
    this.setState({ words: "" });

    const interval = 2000; // how much time should the delay between two iterations be (in milliseconds)?
    words.forEach((word, index) => {
      setTimeout(() => {
        if (word !== " ") {
          const upWord = word.toUpperCase();
          const exp = "this." + upWord + "Sound.play()";
          eval(exp);
          console.log(exp);
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
            Please enter word(s)
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
