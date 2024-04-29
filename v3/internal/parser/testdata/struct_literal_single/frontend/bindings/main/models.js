// @ts-check
// Cynhyrchwyd y ffeil hon yn awtomatig. PEIDIWCH Â MODIWL
// This file is automatically generated. DO NOT EDIT

export const Person = class {
    /**
     * Creates a new Person instance.
     * @constructor
     * @param {Object} source - The source object to create the Person.
     * @param {string} source.Name
     * @param {Person} source.Parent
     * @param {anon1} source.Details
     */
    constructor(source = {}) {
        const { name = "", parent = null, details = null } = source;        
        this.name = name;
        this.parent = parent;
        this.details = details;
    }

    /**
     * Creates a new Person instance from a string or object.
     * @param {string|object} source - The source data to create a Person instance from.
     * @returns {Person} A new Person instance.
     */
    static createFrom(source) {
        let parsedSource = typeof source === 'string' ? JSON.parse(source) : source;
        return new Person(parsedSource);
    }
};

export const anon1 = class {
    /**
     * Creates a new anon1 instance.
     * @constructor
     * @param {Object} source - The source object to create the anon1.
     * @param {number} source.Age
     * @param {anon2} source.Address
     */
    constructor(source = {}) {
        const { age = 0, address = null } = source;        
        this.age = age;
        this.address = address;
    }

    /**
     * Creates a new anon1 instance from a string or object.
     * @param {string|object} source - The source data to create a anon1 instance from.
     * @returns {anon1} A new anon1 instance.
     */
    static createFrom(source) {
        let parsedSource = typeof source === 'string' ? JSON.parse(source) : source;
        return new anon1(parsedSource);
    }
};

export const anon2 = class {
    /**
     * Creates a new anon2 instance.
     * @constructor
     * @param {Object} source - The source object to create the anon2.
     * @param {string} source.Street
     */
    constructor(source = {}) {
        const { street = "" } = source;        
        this.street = street;
    }

    /**
     * Creates a new anon2 instance from a string or object.
     * @param {string|object} source - The source data to create a anon2 instance from.
     * @returns {anon2} A new anon2 instance.
     */
    static createFrom(source) {
        let parsedSource = typeof source === 'string' ? JSON.parse(source) : source;
        return new anon2(parsedSource);
    }
};
