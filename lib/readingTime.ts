export function getReadingTime(content: string): string {
  const plainText = content.replace(/<[^>]*>/g, '').replace(/\s+/g, '')
  const charCount = plainText.length
  // Japanese: ~500 chars/min, English: ~200 words/min (~1000 chars/min)
  const minutes = Math.max(1, Math.round(charCount / 600))
  return `${minutes} min read`
}
