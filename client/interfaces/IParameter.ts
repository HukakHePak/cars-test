interface IParameter<T> {
    name: String
    short: String | null
    type: T
    field: String

}

export default IParameter