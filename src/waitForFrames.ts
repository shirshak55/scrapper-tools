import delay from "delay"
import { Page } from "playwright"

export async function waitForFrame(page: Page, frameUrl: string) {
  while (true) {
    let f = page.frames().find((f: any) => f.url().includes(frameUrl))
    if (f) {
      return f
    }
    await delay(100)
  }
}
