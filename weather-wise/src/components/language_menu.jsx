import * as React from "react";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEarthAmericas } from '@fortawesome/free-solid-svg-icons';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

function language_menu () {
  return (
  <NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger><FontAwesomeIcon icon={faEarthAmericas}></FontAwesomeIcon></NavigationMenuTrigger>
      <NavigationMenuContent>
        <Link className={navigationMenuTriggerStyle()} >EN</Link> 
        <Link className={navigationMenuTriggerStyle()} >PT</Link>
        <Link className={navigationMenuTriggerStyle()} >FR</Link>
        <Link className={navigationMenuTriggerStyle()} >ES</Link>
      </NavigationMenuContent>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>

  );
}   

export default language_menu;

