"use client";

import * as S from "./styles";
import Logo from "@/components/Logo";
import { ChartPie, GridFour, SignOut } from "@phosphor-icons/react";
import { usePathname } from "next/navigation";

const LINKS = [
  {
    href: "/",
    label: "Dashboard",
    icon: <ChartPie size={22} />,
  },
  {
    href: "/kanban",
    label: "Kanban",
    icon: <GridFour size={22} />,
  },
];

const Sidebar = () => {
  const path = usePathname();

  function linkHighlight(active: boolean) {
    return {
      animate: {
        backgroundColor: active
          ? "hsl(240, 7%, 23%, 1)"
          : "hsl(240, 7%, 23%, 0)",
        color: active ? "hsl(0, 0%, 100%)" : "hsl(0, 0%, 60%)",
      },
    };
  }

  return (
    <S.Container>
      <S.LogoContainer>
        <Logo />
      </S.LogoContainer>
      {LINKS.map(({ icon, label, href }) => (
        <S.Link key={label} href={href} {...linkHighlight(href === path)}>
          {icon}
          <S.LinkText>{label}</S.LinkText>
        </S.Link>
      ))}
      <S.Link
        href={"/login"}
        style={{
          marginTop: "auto",
          color: "hsl(0, 0%, 60%)",
        }}
      >
        <SignOut
          size={22}
          style={{
            transform: "rotate(180deg)",
          }}
        />
        <S.LinkText>Sair</S.LinkText>
      </S.Link>
    </S.Container>
  );
};

export default Sidebar;
