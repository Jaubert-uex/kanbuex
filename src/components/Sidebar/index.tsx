import * as S from "./styles";
import Link from "next/link";

const Sidebar = () => {
  return (
    <S.Container>
      <Link href={""}>Dashboard</Link>
      <Link href={""}>Graficos</Link>
    </S.Container>
  );
};

export default Sidebar;
