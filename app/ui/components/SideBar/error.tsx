'use client'

export default function Error({error}: {error: Error}) {
  return (
    <div>error is - {JSON.stringify(error)}</div>
  )
}
