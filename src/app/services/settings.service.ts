import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { Isettings } from '../utils/interfaces';

// Beginning with Angular 6.0, the preferred 
// way to create a singleton service is to 
// set providedIn to root on the service's 
// @Injectable() decorator. This tells Angular 
// to provide the service in the application root.

@Injectable({
    providedIn: 'root',
})
export class SettingsProvider {
    mSettings:Isettings;

    constructor() { }

    save(o: Isettings) {
        // this.mSettings = o && _.assign(this.mSettings, o);
        this.mSettings = o;
    }

    load(): Isettings {
        return this.mSettings;
    }
}