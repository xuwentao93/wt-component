import * as React from 'react';
import {
  useState,
  useRef,
  useEffect,
  useContext
} from 'react';
import SubMenu from './subMenu';
import { ThemeContext } from '@/component/sidebar/index.tsx';
import { Arrow } from '@/icon/index';
import './index.less';
import {
  createComponentRootClassName,
  BasicProps,
  getClassName,
  spellError,
  typeError,
  getType
} from '../../utils/index';

const MenuStyle = createComponentRootClassName('Menu');
const MenuTitleStlye = `${MenuStyle}-title`;

const light = 'light';
const dark = 'dark';

interface MenuProps extends BasicProps {
  title?: string,
  selected?: boolean,
  canCollapse?: boolean | undefined,
  defalutCollapse?: boolean
}

export default function Menu({
  children,
  className = '',
  title = '',
  selected = false,
  canCollapse = true,
  defalutCollapse = false,
  compRef = useRef(),
  style = {},
  ...rest
}: MenuProps) {
  const MenuClass: Array<string> = [];
  const MenuTitleClass: Array<string> = [];
  const theme = useContext(ThemeContext);
  if (theme === dark) {
    MenuTitleClass.push(dark);
  } else if (theme === light) {
    MenuTitleClass.push(light);
  } else if (getType(theme) !== 'Object') {
    if (getType(theme) === 'String') {
      spellError('theme');
    } else {
      typeError('theme');
    }
  }
  const classNames = getClassName(MenuClass, MenuStyle, [MenuStyle, className]);
  const titleClassNames = getClassName(MenuTitleClass, MenuTitleStlye, [MenuTitleStlye]);

  const [point, setPoint] = useState<string>('bottom');
  const [menuHeight, setMenuHeight] = useState<string>();

  const subMenu: any = useRef();

  const methods = {
    toggleMenuState() {
      if (point === 'bottom') {
        setPoint('top');
      } else setPoint('bottom');
      if (canCollapse) {
        const { offsetHeight } = subMenu.current;
        if (menuHeight === '56px') {
          setMenuHeight(`${56 + offsetHeight}px`);
        } else {
          setMenuHeight('56px');
        }
        // setCollapse(!collapse);
      }
    }
  };

  useEffect(() => {
    if (defalutCollapse) {
      setMenuHeight('56px');
    } else if (subMenu.current) {
      const { offsetHeight } = subMenu.current;
      setMenuHeight(`${56 + offsetHeight}px`);
    }
  }, []);

  return (
    <>
      <div
        className={classNames}
        ref={compRef}
        style={{ ...style, height: menuHeight }}
        {...rest}
      >
        <div className={titleClassNames} onClick={methods.toggleMenuState}>
          <span>{title}</span>
          {canCollapse && <Arrow point={point} className={`${MenuStyle}-title-arrow`} />}
        </div>
        <div ref={subMenu}>
          <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
        </div>
      </div>
    </>
  );
}

Menu.SubMenu = SubMenu;

Menu.defaultProps = {
  title: '',
  selected: false,
  canCollapse: true,
  defalutCollapse: false
};
