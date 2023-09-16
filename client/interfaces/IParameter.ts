interface IP<T> {
    name: String
    short?: String
    type: T
    field: String
    description?: String
}

export interface IParameter extends IP<StringConstructor | NumberConstructor | DateConstructor> { }
export default IParameter