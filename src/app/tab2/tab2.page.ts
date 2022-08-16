import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SettingsProvider } from '../services/settings.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  t_val = false;
  constructor(
    private router: Router,
    private _sp: SettingsProvider
  ) { }

  onChange($event) {
    console.log(`Toggled - ${JSON.stringify($event.target.checked)}`);
    console.log(`${this.t_val}`);

    if (this.t_val) {
      this.router.navigate(['../tabs/tab1']);

    }
  }

  onSeverityChange($event) {
    const val = parseInt($event.target.value);
    console.log(`Knobbed - ${val}}`);

    this._sp.save({ sev: val });
  }

}
