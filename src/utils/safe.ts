export default function safe<T>(defaultValue: T, value?: T, ): T {
    if (value === undefined || value === null) {
        return defaultValue
    }
    else {
        return value
    }
}