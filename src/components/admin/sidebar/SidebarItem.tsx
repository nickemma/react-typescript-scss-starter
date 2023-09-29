import { useEffect, useState } from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { NavLink } from 'react-router-dom';

interface ChildItem {
  path: string;
  title: string;
  icon?: JSX.Element;
}

interface SidebarItemProps {
  item: {
    children?: ChildItem[];
    path: string;
    title: string;
    icon?: JSX.Element;
  };
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const SidebarItem = ({ item, isOpen, setIsOpen }: SidebarItemProps) => {
  const [expandMenu, setExpandMenu] = useState(false);
  useEffect(() => {
    if (!isOpen) {
      setExpandMenu(false);
    }
  }, [isOpen, setExpandMenu]);

  const hideSidebar = () => {
    setExpandMenu(false);
    setIsOpen(false);
  };

  const activeLink = ({ isActive }: { isActive: boolean }) =>
    isActive ? 'active' : 'link';

  const activeSubLink = ({ isActive }: { isActive: boolean | undefined }) =>
    isActive ? 'active' : 'link';

  if (item.children) {
    return (
      <div
        className={
          expandMenu ? 'sidebar-item s-parent open' : 'sidebar-item s-parent'
        }
      >
        <div
          className="sidebar-title"
          onClick={() => setExpandMenu(!expandMenu)}
        >
          <span>
            {item.icon && <div className="icon">{item.icon}</div>}
            {isOpen && <div>{item.title}</div>}
          </span>
          <MdKeyboardArrowRight size={25} className="arrow-icon" />
        </div>

        <div className="sidebar-content">
          {item.children.map((child: ChildItem, index: number) => {
            return (
              <div key={index} className="s-child">
                <NavLink to={child.path} className={activeSubLink}>
                  <div className="sidebar-item" onClick={hideSidebar}>
                    <div className="sidebar-title">
                      <span>
                        {child.icon && <div className="icon">{child.icon}</div>}
                        {isOpen && <div>{child.title}</div>}
                      </span>
                    </div>
                  </div>
                </NavLink>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return (
      <NavLink to={item.path} className={activeLink}>
        <div className="sidebar-item s-parent" onClick={hideSidebar}>
          <div className="sidebar-title">
            <span>
              {item.icon && <div className="icon">{item.icon}</div>}
              {isOpen && <div>{item.title}</div>}
            </span>
          </div>
        </div>
      </NavLink>
    );
  }
};

export default SidebarItem;
