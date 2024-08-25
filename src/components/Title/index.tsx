export interface TitleProps {
  title: string
  hasLine?: boolean
  align?: 'center' | 'left'
  size?: 'medium' | 'large'
}

export const Title = ({ title, hasLine = true, align = 'center', size = 'large' }: TitleProps) => {
  const titleSize = size === 'large' ? '5xl' : '4xl'

  return (
    <div className={`w-full flex flex-col justify-center items-${align}`}>
        <h1 className={`font-bold text-${titleSize}`}>{title}</h1>
        {hasLine && (
          <div className="w-12 h-1 bg-primary rounded mt-8"/>
        )}
    </div>

  )
}