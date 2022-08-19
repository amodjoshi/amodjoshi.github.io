import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { IlogSum } from '../utils/interfaces';

// Beginning with Angular 6.0, the preferred 
// way to create a singleton service is to 
// set providedIn to root on the service's 
// @Injectable() decorator. This tells Angular 
// to provide the service in the application root.

@Injectable({
    providedIn: 'root',
})
export class LoggerProvider {

    incorrectLogs: IlogSum[] = [];

    constructor() { }

    log(o: IlogSum) {
        this.incorrectLogs.push(o);
    }

    read(): IlogSum[] {
        return this.incorrectLogs;
    }

    clear() {
        this.incorrectLogs = [];
    }



}