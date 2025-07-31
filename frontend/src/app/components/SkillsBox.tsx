type SkillsBoxProps = {
  color: string;
  text: string;
  size?: 'small' | 'medium' | 'large';
};

export default function SkillsBox({ color, text, size = 'medium' }: SkillsBoxProps) {
  const sizeClasses = {
    small: 'px-2 py-1 text-xs',
    medium: 'px-4 py-2 text-sm',
    large: 'px-6 py-3 text-base'
  };

  return (
    <span className={`bg-gradient-to-r from-${color}-500 to-${color}-800 text-white ${sizeClasses[size]} rounded-lg font-medium`}>
      {text}
    </span>
  );
}