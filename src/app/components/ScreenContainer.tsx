import { CSSProperties, ReactNode, ElementType } from 'react';

interface Props {
  children: ReactNode;
  style?: CSSProperties;
  className?: string;
  element?: 'div' | 'section' | 'article' | 'main' | 'header' | 'footer' | 'nav' | 'aside';
}

const ScreenContainer = ({ 
  children, 
  style, 
  className = '', 
  element: Element = 'div' 
}: Props) => {
  return (
    <Element 
      className={`mx-auto w-full h-full max-w-[1304px] ${className} xl:px-[12px] lg:px-[15px] md:px-[40px] px-[24px]`} 
      style={style}
    >
      {children}
    </Element>
  );
};

export default ScreenContainer;