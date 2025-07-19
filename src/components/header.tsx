"use client";
import { useState } from 'react';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from '@/components/ui/navigation-menu';

const CannabisLogo = () => (
  <svg width="40" height="40" viewBox="0 0 200 200" className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12">
    {/* Shield outline */}
    <path
      d="M100 20 L160 40 L160 100 L160 140 L100 180 L40 140 L40 100 L40 40 Z"
      fill="none"
      stroke="#B91C5C"
      strokeWidth="6"
      className="stroke-rose-700"
    />
    
    {/* Cannabis leaf */}
    <g transform="translate(100, 100)">
      {/* Center stem */}
      <line x1="0" y1="0" x2="0" y2="40" stroke="#059669" strokeWidth="3" className="stroke-emerald-600" />
      
      {/* Leaf segments */}
      <path d="M0,0 L-8,-25 L-12,-35 L-8,-40 L0,-35 L8,-40 L12,-35 L8,-25 Z" fill="#059669" className="fill-emerald-600" />
      <path d="M0,0 L-15,-20 L-20,-25 L-15,-30 L0,-25 L15,-30 L20,-25 L15,-20 Z" fill="#059669" className="fill-emerald-600" />
      <path d="M0,0 L-20,-15 L-25,-18 L-20,-23 L0,-18 L20,-23 L25,-18 L20,-15 Z" fill="#059669" className="fill-emerald-600" />
      <path d="M0,0 L-18,-8 L-22,-10 L-18,-15 L0,-10 L18,-15 L22,-10 L18,-8 Z" fill="#059669" className="fill-emerald-600" />
      <path d="M0,0 L-12,-3 L-15,-5 L-12,-8 L0,-5 L12,-8 L15,-5 L12,-3 Z" fill="#059669" className="fill-emerald-600" />
      
      {/* Serrated edges */}
      <path d="M-8,-25 L-10,-28 L-9,-30 L-11,-32 L-8,-35" fill="none" stroke="#047857" strokeWidth="1" className="stroke-emerald-700" />
      <path d="M8,-25 L10,-28 L9,-30 L11,-32 L8,-35" fill="none" stroke="#047857" strokeWidth="1" className="stroke-emerald-700" />
      <path d="M-15,-20 L-17,-22 L-16,-24 L-18,-26 L-15,-30" fill="none" stroke="#047857" strokeWidth="1" className="stroke-emerald-700" />
      <path d="M15,-20 L17,-22 L16,-24 L18,-26 L15,-30" fill="none" stroke="#047857" strokeWidth="1" className="stroke-emerald-700" />
    </g>
  </svg>
);

const NavigationBar = () => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

const menuItems = [
  { name: 'Accueil', href: '/home' },
  { name: 'À propos de nous', href: '/about-us' },
  { name: 'Nos productions', href: '/productions' },
  { name: 'Contact', href: '/contact' },
  { name: 'Blog', href: '/blog' },
];

  const handleLinkClick = () => {
    setIsSheetOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 sm:h-16 md:h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            <CannabisLogo />
            <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-emerald-700">
              CANNABIS
            </span>
          </div>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList className="space-x-2 lg:space-x-4">
              {menuItems.map((item) => (
                <NavigationMenuItem key={item.name}>
                  <NavigationMenuLink
                    href={item.href}
                    className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-3 lg:px-4 py-2 text-sm lg:text-base font-medium transition-colors hover:bg-emerald-50 hover:text-emerald-700 focus:bg-emerald-50 focus:text-emerald-700 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-emerald-50 data-[state=open]:bg-emerald-50"
                  >
                    {item.name}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Mobile Menu */}
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                className="h-9 w-9 hover:bg-emerald-50 hover:text-emerald-700"
              >
                <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col space-y-4">
                <div className="flex items-center space-x-2 pb-4 border-b">
                  <CannabisLogo />
                  <span className="text-xl font-bold text-emerald-700">CANNABIS</span>
                </div>
                
                {menuItems.map((item) => (
                  <Button
                    key={item.name}
                    variant="ghost"
                    asChild
                    className="justify-start text-base h-12 hover:bg-emerald-50 hover:text-emerald-700"
                    onClick={handleLinkClick}
                  >
                    <a href={item.href}>{item.name}</a>
                  </Button>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;