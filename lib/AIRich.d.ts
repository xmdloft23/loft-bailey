// lib/AIRich.d.ts
// Minimal type stub for the built-in AIRich toolkit (the implementation is plain JS; this file only
// keeps TypeScript consumers from erroring on the import. See README.md for usage.)
export declare const VERSION: string;
export declare function richSupported(): boolean;
export declare class Toolkit {
    static extractIE(text: string, options?: any): any;
    static resize(buffer: any, x: number, y: number, fit?: string): Promise<any>;
    static waitAllPromises(input: any): Promise<any>;
    static fetchBuffer(url: string, options?: any, flags?: any): Promise<any>;
    static resolveMedia(client: any, media: any, mediaType?: string, options?: any): Promise<any>;
    static tokenizer(code: string, lang?: string): any;
    static stringifyEscaped(obj: any): string;
}
export declare class BaseBuilder {
    [key: string]: any;
}
export declare class Button extends BaseBuilder {
    [key: string]: any;
}
export declare class ButtonV2 extends BaseBuilder {
    [key: string]: any;
}
export declare class Carousel extends BaseBuilder {
    [key: string]: any;
}
export declare class AIRich extends BaseBuilder {
    constructor(client: any);
    [key: string]: any;
}
