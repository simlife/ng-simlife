/*
 Copyright 2013-Present the original author or authors from the Simlife project.

 This file is part of the Simlife project, see https://simlife.github.io/
 for more information.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */
import { Directive, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NG_VALIDATORS } from '@angular/forms';
import { forwardRef } from '@angular/core';

@Directive({
    selector: '[simMax][ngModel]',
    providers: [
        { provide: NG_VALIDATORS, useExisting: forwardRef(() => SimMaxValidatorDirective), multi: true }
    ]
})
export class SimMaxValidatorDirective {
    @Input() simMax: number;

    constructor() {}

    validate(c: FormControl) {
        return (c.value === undefined || c.value === null || c.value <= this.simMax) ? null : {
            max: {
                valid: false
            }
        };
    }
}