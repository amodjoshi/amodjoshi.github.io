import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { Isettings, IsumOut } from '../utils/interfaces';

// Beginning with Angular 6.0, the preferred 
// way to create a singleton service is to 
// set providedIn to root on the service's 
// @Injectable() decorator. This tells Angular 
// to provide the service in the application root.

@Injectable({
    providedIn: 'root',
})
export class SumGenerationProvider {
    dist_units = ['mm', 'cm', 'm', 'km'];
    time_units = ['sec', 'min', 'hr', 'day', 'weeks'];
    time_mul = [60, 60, 24, 7];
    time_units_mr = ['सेकंद', 'मिनिटात', 'तासात', 'दिवसात', 'आठवड्यात'];

    constructor() { }

    generate(o: Isettings): IsumOut {
        return this.simple();
    }

    simple(): IsumOut {
        // Inclusive of 1 and 10
        const speed = _.random(1, 10);
        const d_unit = this.dist_units[_.random(0, _.size(this.dist_units) - 1)];
        const t_idx = _.random(0, _.size(this.time_units) - 2);
        const t_unit = this.time_units[t_idx];
        const q_mul = _.random(1, 100);
        const q_idx = _.random(t_idx + 1, _.size(this.time_units) - 1)
        const q_unit = this.time_units[q_idx];
        const q_unit_mr = this.time_units_mr[q_idx];
        const scaler = _.reduce(_.slice(this.time_mul, t_idx, q_idx), (prod, n) => {
            return prod * n;
        }, 1)
        const ans = speed * q_mul * scaler;
        const sum = `An ant's speed is ${speed} ${d_unit}/${t_unit}. \
        How much distance will it cover in ${q_mul} ${q_unit}?`

        const sum_mr = `एका मुंगीचा वेग ${speed} ${d_unit}/${t_unit} आहे. \
        ${q_mul} ${q_unit_mr} मध्ये  तीने किती अंतर पार पाडले असेल?`;
        return {
            sum:sum_mr,
            ans:ans,
            spoofs:_.shuffle([ans+10, ans+100, ans-10, ans-100])
        }
    }

}