import { Component } from '@angular/core';
import { SettingsProvider } from '../services/settings.service';
import { SumGenerationProvider } from '../services/generate.service';
import { Iseverity, IsumOut } from '../utils/interfaces';
import * as _ from 'lodash';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  mSum: IsumOut;
  sum: string = '';
  spoofs = [-1, -1, -1, -1];
  ans_btn_idx = -1;

  constructor(
    private _sp: SettingsProvider,
    private _gen: SumGenerationProvider
  ) {

  }

  ionViewDidEnter() {
    this.generate();
  }

  onAnsClick(btn_number) {
    console.log(`Is correct click ${_.isEqual(this.ans_btn_idx,btn_number)}`);
    this.generate();
  }

  generate() {
    const o = this._sp.load();
    //console.log(`View entered ${JSON.stringify(o)}`);

    this.mSum = this._gen.generate(o);
    this.sum = this.mSum.sum;
    this.ans_btn_idx = _.random(0, 3);
    this.mSum.spoofs[this.ans_btn_idx] = this.mSum.ans;
    this.spoofs = this.mSum.spoofs;
    console.log(`ans = ${this.mSum.ans}`);

  }

}
