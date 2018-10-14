
declare module "q" {
    declare class Deferred {
		promise: PromiseClass<any>;
		resolve(value?: any): void;
		reject(reason?: any): void;
		notify(value: any): void;
	}

    declare class PromiseClass<T> {
        then<T>(onSuccess: (arg: T) => any): this;
        done<T>(onSuccess: (arg: T) => any): this;
        catch<T>(onReject: (err: T) => any): this;
        fail<T>(onReject: (err: T) => any): this;
        finally<T>(finallyCallback: () => void): this;
        fin<T>(finallyCallback: () => void): this;
        timeout(ms: number, message: string): this;

        constructor<T>(a: T): this;

        static resolve: <T> (a: T) => this;
        static reject: <T>(a: T) => this;
        static defer: <T>() => Deferred;
        static delay(ms: number): this;
        static Promise(fn: any): this;

    }

    declare module.exports: typeof PromiseClass

}
