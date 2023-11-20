"use client";

import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import Link, { LinkProps } from "next/link";
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
          <NavigationMenu.Trigger className={styles.NavigationMenuTrigger}>
            Shaping Functions
            <CaretDownIcon className={styles.CaretDownIcon} aria-hidden />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className={styles.NavigationMenuContent}>
            <ul className={`${styles.List} ${styles.one}`}>
              <ListItem href="/experiments/ShapingFunctions/Line" title="Line">
                Visualization of y = x
              </ListItem>
              <ListItem href="/experiments/ShapingFunctions/Cubic" title="Pow">
                Visualization of y = x^3
              </ListItem>
              <ListItem href="/experiments/ShapingFunctions/Step" title="Step">
                Visualization of the step function
              </ListItem>
              <ListItem
                href="/experiments/ShapingFunctions/SmoothStep"
                title="SmoothStep"
              >
                Visualization of the smoothstep function
              </ListItem>
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Indicator className={styles.NavigationMenuIndicator}>
          <div className={styles.Arrow} />
        </NavigationMenu.Indicator>
      </NavigationMenu.NavigationMenuList>

      <div className={styles.ViewportPosition}>
        <NavigationMenu.Viewport className={styles.NavigationMenuViewport} />
      </div>
    </NavigationMenu.Root>
  );
}

interface ExtendedLink extends LinkProps {
  className?: string;
  title?: string;
  children?: string;
}

const ListItem = forwardRef<HTMLAnchorElement, ExtendedLink>(
  ({ className, children, title, href }, forwardedRef) => (
    <li>
      <NavigationMenu.Link asChild>
        <Link
          className={classNames(styles.ListItemLink, className)}
          href={href}
          ref={forwardedRef}
        >
          <div className={styles.ListItemHeader}>{title}</div>
          <p className={styles.ListItemText}>{children}</p>
        </Link>
      </NavigationMenu.Link>
    </li>
  )
);

ListItem.displayName = "ListItem";

export default NavBar;
