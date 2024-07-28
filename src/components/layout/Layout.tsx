import { ReactNode } from "react";
import { FC } from "react";

export const Layout: FC<{
  children: ReactNode;
  header?: ReactNode;
  footer?: ReactNode;
  sidebar?: ReactNode;
}> = ({ children, header, footer, sidebar }) => {
  return (
    <>
      {header && <header>{header}</header>}

      <main className="uk-padding uk-padding-remove-left uk-padding-remove-right">
        {sidebar && <aside>{sidebar}</aside>}

        <div className="uk-container">{children}</div>
      </main>

      {footer && <footer>{footer}</footer>}
    </>
  );
};
