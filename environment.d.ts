declare global {
  namespace NodeJS {
    interface ProcessEnv {
      readonly NEXT_PUBLIC_MODE: "development" | "production"
      readonly NEXT_PUBLIC_API: string
    }
  }
}
export {}
