import { createOgImage, OG_CONTENT_TYPE, OG_SIZE } from "@/_lib/og"
import { OG_HOME } from "@/_data/site"

export const alt = OG_HOME.alt
export const size = OG_SIZE
export const contentType = OG_CONTENT_TYPE

export default function Image() {
    return createOgImage(OG_HOME)
}