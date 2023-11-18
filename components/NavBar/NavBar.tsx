"use client";

import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import Link from "next/link";
import styles from "./navbar.module.css";
import { forwardRef, useId } from "react";
import { CaretDownIcon } from "@radix-ui/react-icons";
import classNames from "classnames";

const NavLinks = [
  {
    btnText: "Hello FragCoord",
    urlPath: "/experiments/HelloFragCoord",
  },
];

function NavBar() {
  const id = useId();
  return (
    <NavigationMenu.Root className={styles.NavigationMenuRoot}>
      <NavigationMenu.NavigationMenuList className={styles.NavigationMenuList}>
        {NavLinks.map((linkEntry) => {
          return (
            <NavigationMenu.Item
              aria-hidden
              key={id + "-item" + linkEntry.urlPath}
            >
              <NavigationMenu.Link asChild>
                <Link
                  className={styles.NavigationMenuLink}
                  href={linkEntry.urlPath}
                >
                  {linkEntry.btnText}
                </Link>
              </NavigationMenu.Link>
            </NavigationMenu.Item>
          );
        })}
        <NavigationMenu.Item aria-hidden>
          <NavigationMenu.Trigger className="NavigationMenuTrigger">
            Shaping Functions
            <CaretDownIcon className="CaretDown" aria-hidden />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="NavigationMenuContent">
            <ul className="List one">
              <ListItem href="/experiments/ShapingFunctions/Line" title="y = x">
                Visualization the function y = x
              </ListItem>
              <ListItem
                href="/experiments/ShapingFunctions/Cubic"
                title="y = x^3"
              >
                Visualization the function y = x^3
              </ListItem>
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Indicator className="NavigationMenuIndicator">
          <div className="Arrow" />
        </NavigationMenu.Indicator>
      </NavigationMenu.NavigationMenuList>

      <div className={styles.ViewportPosition}>
        <NavigationMenu.Viewport className={styles.NavigationMenuViewport} />
      </div>
    </NavigationMenu.Root>
  );
}

const ListItem = forwardRef<
  HTMLAnchorElement,
  React.ComponentPropsWithRef<typeof Link>
>(({ className, children, title, href }, forwardedRef) => (
  <li>
    <NavigationMenu.Link asChild>
      <Link
        className={classNames("ListItemLink", className)}
        href={href}
        ref={forwardedRef}
      >
        <div className="ListItemHeading">{title}</div>
        <p className="ListItemText">{children}</p>
      </Link>
    </NavigationMenu.Link>
  </li>
));

ListItem.displayName = "ListItem";

export default NavBar;
