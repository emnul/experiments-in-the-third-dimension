"use client";

import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import Link from "next/link";
import styles from "./navbar.module.css";
import { useId } from "react";

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
      </NavigationMenu.NavigationMenuList>
      <div className={styles.ViewportPosition}>
        <NavigationMenu.Viewport className={styles.NavigationMenuViewport} />
      </div>
    </NavigationMenu.Root>
  );
}

export default NavBar;
