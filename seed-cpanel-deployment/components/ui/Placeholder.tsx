import { cn } from '@/lib/utils';

export function Placeholder({
  label = 'IMAGE',
  className,
  aspect = '16/9',
}: {
  label?: string;
  className?: string;
  aspect?: '16/9' | '4/3' | '1/1' | '3/4';
}) {
  const aspectMap: Record<string, string> = {
    '16/9': 'aspect-[16/9]',
    '4/3': 'aspect-[4/3]',
    '1/1': 'aspect-square',
    '3/4': 'aspect-[3/4]',
  };
  return (
    <div
      className={cn(
        'placeholder-block bordered transition-colors duration-300 w-full',
        aspectMap[aspect],
        className,
      )}
    >
      <span>[{label}]</span>
    </div>
  );
}
