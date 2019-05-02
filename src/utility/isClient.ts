const isClient = (): Boolean => !!(typeof window !== "undefined" && window !== null)

export default isClient
