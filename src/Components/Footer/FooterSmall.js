import React from "react";

const FooterSmall = () => {
  return (
    <footer className="relative bottom-0 w-full bg-background-sec py-1 text-sm text-center">
      &copy; {new Date().getFullYear()} Luxe Vogue. All rights reserved.
    </footer>
  );
};

export default FooterSmall;
