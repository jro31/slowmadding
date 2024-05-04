import { Container } from '@/components/Container'

const SimpleLayout = ({
  title,
  intro,
  HeaderTag = 'header',
  TitleTag = 'h1',
  titleSize = 'default',
  children,
}) => {
  const titleSizeClasses = () => {
    switch (titleSize) {
      case 'small':
        return 'text-3xl sm:text-4xl'
      default:
        return 'text-4xl sm:text-5xl'
    }
  }

  return (
    <Container className="mt-16 sm:mt-32">
      <HeaderTag className="max-w-2xl">
        <TitleTag
          className={`font-bold tracking-tight text-zinc-800 dark:text-zinc-100 ${titleSizeClasses()}`}
        >
          {title}
        </TitleTag>
        {intro && (
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            {intro}
          </p>
        )}
      </HeaderTag>
      <div className="mt-16 sm:mt-20">{children}</div>
    </Container>
  )
}

export default SimpleLayout
