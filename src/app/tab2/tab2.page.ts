import { Component, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { SettingsProvider } from '../services/settings.service';
import { Isettings } from '../utils/interfaces';
import * as _ from 'lodash';
import { EventsService } from '../services/events.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  t_val = false; // toggle validity
  countSums = 10;// number of sums selected
  mSettingsCfg: Isettings = {
    sev: 0,
    numSums: this.countSums,
    isSessionActive: false,
    numCorrect: 0,
    numAttempted: 0
  }

  constructor(
    private router: Router,
    private _sp: SettingsProvider,
    private _events: EventsService,
    private _ngZone: NgZone
  ) {
    
  }


  ionViewDidEnter() {
    let o = this._sp.load();
    if (o)
      this.mSettingsCfg = o;
    if (this.mSettingsCfg
      && this.mSettingsCfg.numAttempted > 0
      && _.isEqual(this.mSettingsCfg.numAttempted,
        this.mSettingsCfg.numSums)) {
      console.log('Boom');
      this.t_val = false;
    }
  }

  isDisableStart(): boolean {
    return this.countSums === 0;
  }

  onToggleChange($event) {

    if ($event.target.checked) {
      _.set(this.mSettingsCfg, 'numCorrect', 0);
      _.set(this.mSettingsCfg, 'numAttempted', 0);
      _.set(this.mSettingsCfg, 'isSessionActive', true);
      this._sp.save(this.mSettingsCfg);
      this.router.navigate(['../tabs/tab1']);
    } else {
      _.set(this.mSettingsCfg, 'isSessionActive', false);
    }
  }

  onSeverityChange($event) {
    const val = parseInt($event.target.value);
    console.log(`Sev - ${val}`);
    _.set(this.mSettingsCfg, 'sev', val);
  }

  onCountChange($event) {
    this.countSums = parseInt($event.target.value);
    console.log(`Count - ${this.countSums}`);
    _.set(this.mSettingsCfg, 'numSums', this.countSums);
  }
}
