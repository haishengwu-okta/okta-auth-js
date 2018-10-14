
declare module "tiny-emitter" {
    declare class Emitter {
		emitter: (name: string, ...rest: Array<any>) => void;
        on: (name: string, fn: (...rest: Array<any>) => void) => void;
        off: (name: string, fn: (...rest: Array<any>) => void) => void;
	}

    declare module.exports: typeof Emitter;

}
