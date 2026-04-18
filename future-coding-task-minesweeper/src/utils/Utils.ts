// - - - - - Number - - - - - //

/*
 * A little more readable...
 */
export const isNumber = (n: any): n is number => (
    typeof n === 'number'
)

// - - - - - String - - - - - //

export const isString = (s: any): s is string => (
    typeof s === 'string'
)

/*
 * If a string it is returned, otherwise null.
 */
export const getString = (s: any): string | null => (
    isString(s) ? s : null
)

/* - - - - - Object - - - - - //

/*
 * If an object and not null.
 */
export const isObject = <T extends object>(o: any): o is T => (
    typeof o === 'object' && o !== null
)

// - - - - - Array - - - - - //

export const isArray = (a: any): boolean => (
    Array.isArray(a)
)
