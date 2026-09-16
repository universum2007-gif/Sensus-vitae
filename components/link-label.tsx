/** Only actual external destinations opt into this indicator. */
export function LinkLabel({ label, external = false }: { label: string; external?: boolean }) {
  return <>{label}{external && <span aria-hidden="true"> ↗</span>}</>;
}
