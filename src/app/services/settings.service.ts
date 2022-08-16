import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { Iseverity } from '../utils/interfaces';

// Beginning with Angular 6.0, the preferred 
// way to create a singleton service is to 
// set providedIn to root on the service's 
// @Injectable() decorator. This tells Angular 
// to provide the service in the application root.

@Injectable({
    providedIn: 'root',
})
export class SettingsProvider {
    mSettings:Iseverity;

    constructor() { }

    save(o: Iseverity) {
        this.mSettings = o && _.assign(this.mSettings, o);

    }

    load(): Iseverity {
        return this.mSettings;
    }
}