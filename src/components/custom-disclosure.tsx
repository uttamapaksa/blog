'use client';

import { ReactNode, useState } from 'react';

type DisclosureProps = {
  children: (props: { open: boolean; setOpen: React.Dispatch<React.SetStateAction<boolean>>; }) => ReactNode;
  className?: string;
};

type DisclosureButtonProps = {
  children: ReactNode;
  className?: string;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

type DisclosurePanelProps = {
  children: ReactNode;
  className?: string;
  open: boolean;
};

const Disclosure = ({ children, className }: DisclosureProps) => {
  const [open, setOpen] = useState(false);
  
  return (
    <div className={className}>{children({ open, setOpen })}</div>
  );
};

const DisclosureButton = ({ children, className, setOpen }: DisclosureButtonProps) => (
  <button onClick={()=>setOpen((prev)=>!prev)} className={className}>{children}</button>
);

const DisclosurePanel = ({ children, className, open }: DisclosurePanelProps) => (
  open ? <div className={className}>{children}</div> : null
);

export { Disclosure, DisclosureButton, DisclosurePanel };
