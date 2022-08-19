import { Component } from '@angular/core';
import { SettingsProvider } from '../services/settings.service';
import { SumGenerationProvider } from '../services/generate.service';
import { Isettings, IsumOut, IlogSum } from '../utils/interfaces';
import * as _ from 'lodash';
import { EventsService } from '../services/events.service';
import { LoggerProvider } from '../services/logger.service ';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  // Main
  mSum: IsumOut;
  sum: string = '';

  // Buttons
  spoofs = [-1, -1, -1, -1];
  ans_btn_idx = -1;
  mSettingsCfg: Isettings;

  // Score
  mCorrects: number = 0;
  mDone: number = 0;

  constructor(
    private _sp: SettingsProvider,
    private _gen: SumGenerationProvider,
    private _events: EventsService,
    private _logger:LoggerProvider
  ) {
    this.mCorrects = 0;
    this.mDone = 0;

  }

  ionViewWillEnter() {
    this.mSettingsCfg = this._sp.load();
    console.log(`${JSON.stringify(this.mSettingsCfg)}`);
    if (this.mSettingsCfg) {
      this.mCorrects = this.mSettingsCfg.numCorrect;
      this.mDone = this.mSettingsCfg.numAttempted;
    }
  }

  ionViewDidEnter() {
    if (this.mSettingsCfg && this.mSettingsCfg.isSessionActive)
      this.generate();
  }

  // 1. Check if answer is correct and do the book-keeping
  // 2. If not completed the sums, generate another sum
  //
  onAnsClick(btn_number) {
    this.mDone += 1;
    this.mSettingsCfg.numAttempted = this.mDone;
    if (_.isEqual(this.ans_btn_idx, btn_number)) {
      this.mCorrects += 1;
    } else {
      this.logSum(this.spoofs[btn_number]);
    }

    this.mSettingsCfg.numCorrect = this.mCorrects;
    this._sp.save(this.mSettingsCfg);

    if (this.mDone < this.mSettingsCfg.numSums)
      this.generate();
    else {
      this.mSettingsCfg.isSessionActive = false;
      this._sp.save(this.mSettingsCfg);
    }

  }

  generate() {
    this.mSum = this._gen.generate(this.mSettingsCfg);
    this.sum = this.mSum.sum;
    this.ans_btn_idx = _.random(0, 3);
    this.mSum.spoofs[this.ans_btn_idx] = this.mSum.ans;
    this.spoofs = this.mSum.spoofs;
    console.log(`ans = ${this.mSum.ans}`);
  }

  isDisabled() {
    let isDone = false;
    if (this.mSettingsCfg) {
      isDone = this.mDone == this.mSettingsCfg.numSums;
    }
    return !_.get(this.mSettingsCfg, 'isSessionActive', false) || isDone;
  }

  calcScore(): string {
    let score = '';
    if (this.mSettingsCfg) {
      let total = this.mSettingsCfg.numSums;
      let perCorr = _.round(100 * this.mCorrects / total, 0)
      score = `Score = ${this.mCorrects}/${total},Correct = ${perCorr}%`
    }
    return score;
  }

  calcDone(): string {
    let done = '';
    if (this.mSettingsCfg) {
      let total = this.mSettingsCfg.numSums;
      let perDone = _.round(100 * this.mDone / total, 0)
      done = `Done = ${perDone}%`
    }
    return done;
  }

  // Log incorrects
  logSum(incorrect) {
    let o: IlogSum = {
      sum: this.mSum.sum,
      ans: this.mSum.ans,
      pressed: incorrect
    }
    this._logger.log(o);
  }
}
