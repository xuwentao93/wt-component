import * as React from 'react';
import { useRef, useContext } from 'react';
import { ThemeContext } from '@/component/sidebar';
import './subMenu.less';
import {
  createComponentRootClassName,
  BasicProps,
  getClassName,
  getType,
  spellError,
  typeError
} from '../../utils';

const light = 'light';
const dark = 'dark';

const SuBMenuStyle = createComponentRootClassName('Sub-menu');

interface SuBMenuProps extends BasicProps {}

export default function SubMenu({
  children,
  className = '',
  compRef = useRef(),
  style = {},
  onClick = () => {},
  ...rest
}: SuBMenuProps) {
  const theme = useContext(ThemeContext);
  const SuBMenuClass: Array<string> = [];
  if (theme === dark) {
    SuBMenuClass.push(dark);
  } else if (theme === light) {
    SuBMenuClass.push(light);
  } else if (getType(theme) !== 'Object') {
    if (getType(theme) === 'String') {
      spellError('theme');
    } else {
      typeError('theme');
    }
  } else {
    SuBMenuClass.push('custom');
  }
  const classNames = getClassName(SuBMenuClass, SuBMenuStyle, [SuBMenuStyle, className]);
  const themeStyle = getType(theme) === 'Object' ? theme : {};

  const methods = {
    changeSelected() {
      const selectedClass = `${SuBMenuStyle}-${theme}-selected`;
      const getSelectedElement = document.getElementsByClassName(selectedClass)[0];
      if (getSelectedElement === compRef.current) {
        onClick();
        // return;
      }
      const clickElementClass = compRef.current.getAttribute('class');
      if (getSelectedElement) {
        const selectedElementClass = (getSelectedElement.getAttribute('class') as string).split(' ');
        console.log(selectedElementClass);
        for (let i = 0; i < selectedElementClass.length; i++) {
          if (selectedElementClass[i] === selectedClass) {
            selectedElementClass.splice(i, 1);
            console.log(selectedElementClass);
            break;
          }
        }
        getSelectedElement.setAttribute('class', selectedElementClass.join(' '));
      }
      compRef.current.setAttribute('class', `${clickElementClass} ${selectedClass}`);
      console.log(compRef.current.getAttribute('class'));
      // compRef.current.setAttribute('class', selectedClass);
      onClick();
    }
  };

  return (
    <div
      className={`${classNames}${className === '' ? '' : ` ${className}`}`}
      ref={compRef}
      style={{ ...style, ...themeStyle }}
      onClick={methods.changeSelected}
      {...rest}
    >
      {children}
    </div>
  );
}

SubMenu.defaultProps = {
  type: 'item'
};
