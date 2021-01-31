export default class PermissionGrid {
    ownerRead: boolean;
    ownerWrite: boolean;
    ownerExecute: boolean;
    groupRead: boolean;
    groupWrite: boolean;
    groupExecute: boolean;
    otherRead: boolean;
    otherWrite: boolean;
    otherExecute: boolean;

    constructor(init?: Partial<PermissionGrid>) {
        Object.assign(this, init);
    }

    generatePermissionOctal(): string {

        let resultOctal: string = "";
        let props: string[] = Object.getOwnPropertyNames(this);

        for (let i = 0; i < props.length; i += 3) {
            let read: string = props[i];
            let write: string = props[i + 1];
            let execute: string = props[i + 2];
            let currentDigit: number = 0;

            if (this[read]) {
                currentDigit += 4;
            }

            if (this[write]) {
                currentDigit += 2;
            }

            if (this[execute]) {
                currentDigit += 1;
            }

            resultOctal += currentDigit;
        }

        return resultOctal;
    }
}