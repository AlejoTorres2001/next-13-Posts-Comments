type NextOptions ={
  revalidate?: number

}
export type cacheOptions = {
  cache?: 'no-store' | 'reload' | 'no-cache' | 'force-cache' | 'only-if-cached'
  next?: NextOptions
}
