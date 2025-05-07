function Button({ className, text }: { className: string; text?: any }) {
  return <button className={className}>{text}</button>;
}

export default Button;
