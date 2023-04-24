export interface Ipiack<T> {
  key: T
  isShow: boolean
  columns: Record<string, any>[]
  onShow: (key?: Ipiack.key) => void
  onConfirm: (value: Record<string, any>[]) => void
}
