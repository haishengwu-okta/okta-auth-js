
declare type CryptoAlgo = {
    name: string;
    hash: {
        name: string;
    }
}
declare type SubtleCrypto = {
 importKey: (format: string, key: string, algo: CryptoAlgo, extractable: boolean, usage: Array<string>) => Promise<any>;
 verify: (algo: CryptoAlgo, key: string, signature: Uint8Array, payload: Uint8Array) => Promise<any>;
}

declare var crypto: {
    subtle: SubtleCrypto
};
