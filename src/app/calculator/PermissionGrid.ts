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

    updateUsingPermissionOctal(permOctal: string): void {
        let splitOctal: string[];
        
        if (permOctal.length === 2) {
            splitOctal = [permOctal[0], permOctal[1], "0"];
        } else if (permOctal.length === 1) {
            splitOctal = [permOctal, "0", "0"];
        } else if (permOctal.length === 0) {
            splitOctal = ["0", "0", "0"];
        } else {
            splitOctal = permOctal.split('');
        }
        
        let ownerProps: string[] = Object.getOwnPropertyNames(this).filter(p => p.includes("owner"));
        let groupProps: string[] = Object.getOwnPropertyNames(this).filter(p => p.includes("group"));
        let otherProps: string[] = Object.getOwnPropertyNames(this).filter(p => p.includes("other"));

        let propsArr: string[][] = [ownerProps, groupProps, otherProps];

        for (let i = 0; i < splitOctal.length; i++) {
            let octalSentinel: number = 7;
            let read: number = 0;
            let write: number = 1;
            let execute: number = 2;
            octalSentinel -= parseInt(splitOctal[i]);

            if (octalSentinel === 0) {
                this[propsArr[i][read]] = true;
                this[propsArr[i][write]] = true;
                this[propsArr[i][execute]] = true;
            } else if (octalSentinel === 1) {
                this[propsArr[i][read]] = true;
                this[propsArr[i][write]] = true; 
                this[propsArr[i][execute]] = false;               
            } else if (octalSentinel === 2) {
                this[propsArr[i][read]] = true;
                this[propsArr[i][write]] = false;
                this[propsArr[i][execute]] = true;
            } else if (octalSentinel === 3) {
                this[propsArr[i][read]] = true;
                this[propsArr[i][write]] = false;
                this[propsArr[i][execute]] = false;
            } else if (octalSentinel === 4) {
                this[propsArr[i][read]] = false;
                this[propsArr[i][write]] = true;
                this[propsArr[i][execute]] = true;                
            } else if (octalSentinel === 5) {
                this[propsArr[i][read]] = false;
                this[propsArr[i][write]] = true;
                this[propsArr[i][execute]] = false;
            } else if (octalSentinel === 6) {
                this[propsArr[i][read]] = false;
                this[propsArr[i][write]] = false;
                this[propsArr[i][execute]] = true;
            } else {
                this[propsArr[i][read]] = false;
                this[propsArr[i][write]] = false;
                this[propsArr[i][execute]] = false;
            }
        }
    }
}