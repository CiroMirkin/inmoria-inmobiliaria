const OPERATION_STYLES: Record<string, string> = {
  Venta: 'text-emerald-700 bg-emerald-50 border border-emerald-200',
  Alquiler: 'text-blue-700 bg-blue-50 border border-blue-200',
  Temporario: 'text-orange-700 bg-orange-50 border border-orange-200',
}

export default function OperationBadge({ operation }: { operation: string }) {
  const style = OPERATION_STYLES[operation] ?? 'text-acento bg-acl'
  return (
    <span className={`text-xs font-medium px-2 py-1 rounded leading-none inline-flex items-center ${style}`}>
        {operation}
    </span>
  )
}